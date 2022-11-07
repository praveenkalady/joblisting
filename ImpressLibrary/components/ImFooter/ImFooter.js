import React from "react";
import PropTypes from "prop-types";

// import "./ImFooter.css";

// This component is to be placed on the page level. If this has to be done in the modal, then this is not supported.

const ImFooter = ({
  selectedRowText,
  onClear,
  onSelectAll,
  bulkActions,
}) => {
  return (
    <div id="im-footer" className="footer-div">
      <div>
        <div>{selectedRowText}</div>
        <span
          className="selection-text"
          onClick={onClear}
        >
          Clear selection
        </span>
        {!!onSelectAll && (
          <span
            className="selection-text"
            onClick={onSelectAll}
          >
            Select all
          </span>
        )}
      </div>
      <div className="action-buttons">
        {bulkActions.map((action, index) => {
          const buttonComponent = <ImComponents
            componentName="ImButton"
            child={action.text}
            onClick={action.onClick}
            disabled={!!action.disabled}
            danger={!!action.danger}
          />;
          return (
            <div key={index}>
            {action?.isTooltip ?
              <ImComponents
                componentName="ImTooltip"
                child={buttonComponent}
                text={action?.tooltipText}
              /> :
              buttonComponent
            }
            </div>
          );
        })}
      </div>
    </div>
  );
};

ImFooter.propTypes = {
  selectedRowText: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  bulkActions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    danger: PropTypes.bool,
    isTooltip: PropTypes.bool,
    tooltipText: PropTypes.string,
  })),
  onSelectAll: PropTypes.func,
};

export default ImFooter;
