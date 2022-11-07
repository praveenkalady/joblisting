export const GetBaseUrl = () => {
  let SITE_ROOT = "";
  let SUB_PATH = "";
  try {
    SITE_ROOT = window.SITE_URL;
    if (!!window.SUB_PATH) {
      SUB_PATH = window.SUB_PATH;
      SITE_ROOT = !!window.SITE_URL_JSX ?
        window.SITE_URL_JSX :
        `${SITE_ROOT}/${SUB_PATH}`;
    }
  } catch (e) {
    const body = document.querySelector("body");
    SITE_ROOT = body.dataset["site"];
    if (body.hasAttribute("data-sub-path")) {
      SUB_PATH = body.dataset["subPath"];
      SITE_ROOT = `${SITE_ROOT}/${SUB_PATH}`;
    }
  }
  if (!SITE_ROOT) {
    SITE_ROOT = "";
  }
  if (SITE_ROOT.substr(-1) === "/") {
    SITE_ROOT = SITE_ROOT.substring(0, SITE_ROOT.length - 1);
  }
  return SITE_ROOT;
};
