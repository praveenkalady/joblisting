import Axios from "axios";
import {isEmpty} from "lodash";

export const CallApi = (
    type,
    url,
    data,
    contentType = "application/json",
    params = {},
    headers = {},
) => {
  // other possible contentType application/x-www-form-urlencoded, multipart/form-data, text/plain

  let token;
  if (document.querySelector("[name=csrfmiddlewaretoken]")) {
    token = document.querySelector("[name=csrfmiddlewaretoken]").value;
  } else if (document.querySelector("[name=csrf-token]")) {
    token = document.querySelector("[name=csrf-token]").content;
  } else {
    null;
  }

  const options = {
    method: type,
    url: url,
    headers: {
      "content-type": contentType,
      "X-CSRFToken": token,
    },
    xsrfHeaderName: "X-CSRFToken",
    xsrfCookieName: "csrftoken",
  };
  if (data) {
    options.data = data;
  }
  if (!isEmpty(params)) {
    options.params = params;
  }
  if (headers) {
    options.headers = {...options.headers, ...headers};
  }
  return Axios(options)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }

        return response;
      })
      .catch((error) => {
        return error.response;
      });
};
