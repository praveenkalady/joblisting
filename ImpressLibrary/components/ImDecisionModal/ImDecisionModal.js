import React from "react";
import PropTypes from "prop-types";

import * as constants from "./constants";

import ImIcons from "../../icons";

// import "./ImDecisionModal.css";
import ImButton from "../ImButton/ImButton";
import ImModal from "../ImModal/ImModal";

const ImDecisionModal = ({
  type,
  isModalVisible,
  title,
  content,
  onCancel,
  cancelText = "Cancel",
  onOk,
  okText = "OK",
  disableOkButton = false,
  wrapClassName = "",
  width = 416,
}) => {
  let iconComponent = <></>;
  if (type === constants.INFO_TYPE) {
    iconComponent = <ImIcons name="decisionModalInfoIcon" />;
  } else if (type === constants.DELETE_TYPE) {
    iconComponent = <ImIcons name="decisionModalDeleteIcon" />;
  } else if (type === constants.SINGLE_TYPE) {
    iconComponent = <ImIcons name="decisionModalSingleIcon" />;
  }

  const wrapClass = wrapClassName ? `${wrapClassName} im-decision-modal` : "im-decision-modal";

  return (
    <ImModal
      visible={isModalVisible}
      centered={true}
      maskClosable={false}
      keyboard={false}
      closable={false}
      width={width}
      className={wrapClass}
      footer={null}
      component={
        <>
          <div className="body-div">
            <div className="icon-div">
              {iconComponent}
            </div>
            <div className="content-div">
              <div className="font-div">
                <p className="title-font">{title}</p>
              </div>
              <div className="font-div">
                <p>{content}</p>
              </div>
            </div>
          </div>
          <div className="footer-div">
            {[constants.INFO_TYPE, constants.DELETE_TYPE].includes(type) && (
              <ImButton
                type="default"
                child={cancelText}
                onClick={onCancel}
              />
            )}
            <ImButton
              type="primary"
              child={okText}
              onClick={onOk}
              danger={type === constants.DELETE_TYPE}
              disabled={disableOkButton}
            />
          </div>
        </>
      }
    />
  );
};

ImDecisionModal.propTypes = {
  type: PropTypes.oneOf(constants.ACCEPTED_TYPES).isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
  onCancel: PropTypes.func,
  cancelText: PropTypes.string,
  onOk: PropTypes.func.isRequired,
  okText: PropTypes.string,
  disableOkButton: PropTypes.bool,
  wrapClassName: PropTypes.string,
  width: PropTypes.number,
};

export default ImDecisionModal;
