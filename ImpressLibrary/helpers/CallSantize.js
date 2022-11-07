const ESC_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;",
  ";": "&semi;",
  "!": "&excl;",
  "=": "&equals;",
  "{": "&lcub;",
  "}": "&rcub;",
  "(": "&lpar;",
  ")": "&rpar;",
};


export const santize = (text) => {
  return text.replace(true ? /[&<>'";!={}()]/g : /[&<>]/g, function(c) {
    return ESC_MAP[c];
  });
};


export const desantize = (text) => {
  if (text) {
    let string = text;
    Object.keys(ESC_MAP).map((key) => {
      string = string.replace(new RegExp(ESC_MAP[key], "g"), key);
    });
    return string;
  }
  return text;
};

