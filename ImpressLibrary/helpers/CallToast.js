import React from "react";
import {notification} from "antd";
import ProtoTypes from "prop-types";
import ImIcons from "../icons";

export const CallToast = (type, options) => {
  const getIcon = (type) => {
    switch (type) {
      case "open":
      case "info":
        return (<ImIcons name="infoIconShaded" />);
      case "success":
        return (<ImIcons name="successIcon" />);
      case "error":
        return (<ImIcons name="errorIcon" />);
      case "warn":
        return (<ImIcons name="warnIcon" />);
      default:
        return;
    }
  };
  const toastOptions = {...options};
  toastOptions.className = options.className ? `${toastOptions.className} im-toast` : "im-toast";
  toastOptions.icon = options.icon ? options.icon : getIcon(type);
  const iconType = type === "info" ? "open" : type;
  notification[iconType](toastOptions);
};

CallToast.protoTypes = {
  type: ProtoTypes.string,
  options: ProtoTypes.object,
};
