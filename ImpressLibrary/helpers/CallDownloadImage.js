import Axios from "axios";
import CallHelper from ".";

export const CallDownloadImage = async (imageUrl = "", filename = "") => {
  const response = await Axios({
    url: imageUrl,
    method: "GET",
    responseType: "blob",
  });
  try {
    if (!!response?.data) {
      const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
      const hyperlink = document.createElement("a");
      hyperlink.href = blobUrl;
      hyperlink.setAttribute("download", filename);
      document.body.appendChild(hyperlink);
      hyperlink.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      );
      hyperlink.remove();
    } else {
      throw new Error("Got failed response!");
    }
  } catch (error) {
    CallHelper.CallToast({
      message: "Error",
      description: "Something went wrong!",
    });
    console.error(error);
  }
};
