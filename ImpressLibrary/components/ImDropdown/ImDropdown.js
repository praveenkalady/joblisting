import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
// import "./ImDropdown.css";
import {Dropdown, Menu} from "antd";
import ImCheckbox from "../ImCheckbox/ImCheckbox";
import ImInput from "../ImInput/ImInput";

const ImDropdown = ({
  title,
  keyval,
  dataval,
  onClickfn,
  onSelectall,
  onClearall,
  checkBoxval,
  label = "label",
  value = "value",
  trigger,
  disabled = false,
  isLinks,
  overlayClassName,
  enableSelectAll = true,
  enableUnselectAll = true,
  placement = "bottomRight",
  closeOnAction = false,
  isSearchable = false,
  getPopupContainer,
}) => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState(dataval ?? []);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!isSearchable) {
      setOptions(dataval ?? []);
      return;
    }

    setOptions(
      dataval.filter((val) =>
        val[label].toLowerCase().includes(searchText.trim().toLowerCase()),
      ),
    );
  }, [dataval]);

  const scrollToTopInDropdowns = () => {
    const dropdownMenuArray =
      document.getElementsByClassName("ant-dropdown-menu");
    for (const dropdownMenu of dropdownMenuArray) {
      dropdownMenu.scrollTop = 0;
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);

    if (!flag) scrollToTopInDropdowns();
  };
  const handleMenuClick = () => {
    setVisible(true);
  };
  const withCheckbox = (
    <Menu onClick={handleMenuClick}>
      {options && (
        <>
          {isSearchable && (
            <Menu.Item>
              <ImInput
                className="ant-dropdown-search"
                size="small"
                type="input"
                value={searchText}
                disabled={disabled}
                onChange={({target}) => {
                  const text = target?.value ?? "";
                  setSearchText(text);
                  setOptions(
                    dataval.filter((option) => option[label]
                        .toLowerCase()
                        .includes(text.trim().toLowerCase()),
                    ),
                  );
                }}
                placeholder="Search"
                suffix={<ImIcons name="searchIcon" />}
              />
            </Menu.Item>
          )}
          {options.length === 0 ? (
            <div className="ant-no-results">
              {searchText ? "No results" : "No options"}
            </div>
          ) : (
            options.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  <ImCheckbox
                    onChangefn={(e) => onClickfn(keyval, e, item)}
                    text={item[label]}
                    checked={checkBoxval
                      .map((labelItem) =>labelItem == item[value])
                      .includes(true)}
                  />
                </Menu.Item>
              );
            })
          )}
        </>
      )}
      {(!!enableSelectAll || !!enableUnselectAll) && options.length > 0 && (
        <div className="selection-dropdown">
          {!!enableSelectAll && (
            <span onClick={() => onSelectall(keyval, options)}>Select all</span>
          )}
          {!!enableUnselectAll && (
            <span onClick={() => onClearall(keyval)}>Clear all</span>
          )}
        </div>
      )}
    </Menu>
  );
  const withoutCheckbox = (
    <Menu onClick={handleMenuClick}>
      {isLinks &&
        isLinks.map((item, index) => {
          return (
            <Menu.Item key={index}>
              {item.action ? (
                <div onClick={item.action}>{item.options}</div>
              ) : (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.options}
                </a>
              )}
            </Menu.Item>
          );
        })}
    </Menu>
  );
  return (
    <div className="ImDropdown">
      {!!closeOnAction ? (
        <Dropdown
          overlay={isLinks ? withoutCheckbox : withCheckbox}
          disabled={disabled}
          placement={placement}
          onVisibleChange={handleVisibleChange}
          trigger={trigger}
          overlayClassName={overlayClassName}
          getPopupContainer={getPopupContainer}
        >
          {title}
        </Dropdown>
      ) : (
        <Dropdown
          overlay={isLinks ? withoutCheckbox : withCheckbox}
          visible={visible}
          disabled={disabled}
          placement={placement}
          onVisibleChange={handleVisibleChange}
          trigger={trigger}
          overlayClassName={overlayClassName}
          getPopupContainer={getPopupContainer}
        >
          {title}
        </Dropdown>
      )}
    </div>
  );
};

ImDropdown.propTypes = {
  title: PropTypes.any,
  dataval: PropTypes.any,
  keyval: PropTypes.any,
  onClickfn: PropTypes.func,
  onSelectall: PropTypes.func,
  onClearall: PropTypes.func,
  checkBoxval: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  trigger: PropTypes.string,
  isLinks: PropTypes.any,
  overlayClassName: PropTypes.string,
  enableSelectAll: PropTypes.bool,
  enableUnselectAll: PropTypes.bool,
  placement: PropTypes.string,
  closeOnAction: PropTypes.bool,
  isSearchable: PropTypes.bool,
  getPopupContainer: PropTypes.any,
};

export default ImDropdown;
