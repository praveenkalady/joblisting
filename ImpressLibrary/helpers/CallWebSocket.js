let ws = null;
let isExit = false;
let isnew = true;

export const CallWebSocket = (
    url,
    initialMessage,
    onMessage,
    isAutoConnect = true,
    timer = 5000,
) => {
  const closeWebsocket = (isNew) => {
    isExit = true;
    if (isNew) {
      ws.close();
    } else {
      isnew = false;
      ws.close();
    }
  };

  if (ws) {
    closeWebsocket(1000);
  } else {
    ws = new WebSocket(url);
  }

  ws.onopen = () => {
    ws.send(initialMessage);
  };

  ws.onmessage = (response) => {
    onMessage(response, closeWebsocket, ws);
  };

  ws.onclose = () => {
    ws = null;
    if (isAutoConnect && !isExit) {
      setTimeout(
          () =>
            CallWebSocket(
                url,
                initialMessage,
                onMessage,
                (isAutoConnect = true),
                (timer = 5000),
            ),
          timer,
      );
    }
    if (isnew) {
      CallWebSocket(
          url,
          initialMessage,
          onMessage,
          (isAutoConnect = true),
          (timer = 5000),
      ),
      timer;
    }
  };
};
