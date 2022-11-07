// import "./animations.css";
import "antd/lib/style/components.less";

import ImModal from "./ImModal/ImModal";
import ImSearchBar from "./ImSearchBar/ImSearchBar";
import ImButton from "./ImButton/ImButton";
import ImInput from "./ImInput/ImInput";
import ImTextArea from "./ImTextArea/ImTextArea";
import ImStep from "./ImStep/ImStep";
import ImUploader from "./ImUploader/ImUploader";
import ImSpinner from "./ImSpinner/ImSpinner";
import ImSelect from "./ImSelect/ImSelect";
import ImRangePicker from "./ImRangePicker/ImRangePicker";
import ImPopover from "./ImPopover/ImPopover";
import ImCheckbox from "./ImCheckbox/ImCheckbox";
import ImDivider from "./ImDivider/ImDivider";
import ImTag from "./ImTag/ImTag";
import ImTooltip from "./ImTooltip/ImTooltip";
import ImCollapse from "./ImCollapse/ImCollapse";
import ImRadioGroup from "./ImRadioGroup/ImRadioGroup";
import ImSwitch from "./ImSwitch/ImSwitch";
import ImDatePicker from "./ImDatePicker/ImDatePicker";
import ImTimePicker from "./ImTimePicker/ImTimePicker";
import ImTab from "./ImTab/ImTab";
import ImDropdown from "./ImDropdown/ImDropdown";
import ImInputNumber from "./ImInputNumber/ImInputNumber";
import ImAccordion from "./ImAccordion/ImAccordion";
import ImVerticalTimeline from "./ImVerticalTimeline/ImVerticalTimeline";
import ImNotificationCard from "./ImNotificationCard/ImNotificationCard";
import ImCard from "./ImCard/ImCard";
import ImTable from "./ImTable/ImTable";
import ImResult from "./ImResult/ImResult";
import ImPagination from "./ImPagination/ImPagination";
import ImProgress from "./ImProgress/ImProgress";
import ImDrawer from "./ImDrawer/ImDrawer";
import ImAvatar from "./ImAvatar/ImAvatar";
import ImSpin from "./ImSpin/ImSpin";
import ImRate from "./ImRate/ImRate";
import ImBadge from "./ImBadge/ImBadge";
import ImList from "./ImList/ImList";
import ImEmpty from "./ImEmpty/ImEmpty";
import ImAlert from "./ImAlert/ImAlert";
import ImPopupConfirm from "./ImPopupConfirm/ImPopupConfirm";
import ImAutocomplete from "./ImAutocomplete/ImAutocomplete";
import ImSkeleton from "./ImSkeleton/ImSkeleton";
import ImCopyTextInput from "./ImCopyTextInput/ImCopyTextInput";
import ImImage from "./ImImage/ImImage";
import ImDecisionModal from "./ImDecisionModal/ImDecisionModal";
import ImFooter from "./ImFooter/ImFooter";

import {
  ConfigProvider,
} from "antd";
import React from "react";
import PropTypes from "prop-types";
function CallImComponents() {}

// define your new Components
CallImComponents.ImModal = ImModal;
CallImComponents.ImSearchBar = ImSearchBar;
CallImComponents.ImButton = ImButton;
CallImComponents.ImInput = ImInput;
CallImComponents.ImTextArea = ImTextArea;
CallImComponents.ImStep = ImStep;
CallImComponents.ImUploader = ImUploader;
CallImComponents.ImSpinner = ImSpinner;
CallImComponents.ImSelect = ImSelect;
CallImComponents.ImRangePicker = ImRangePicker;
CallImComponents.ImPopover = ImPopover;
CallImComponents.ImCheckbox = ImCheckbox;
CallImComponents.ImTag = ImTag;
CallImComponents.ImDivider = ImDivider;
CallImComponents.ImTooltip = ImTooltip;
CallImComponents.ImCollapse = ImCollapse;
CallImComponents.ImRadioGroup = ImRadioGroup;
CallImComponents.ImSwitch = ImSwitch;
CallImComponents.ImDatePicker = ImDatePicker;
CallImComponents.ImTimePicker=ImTimePicker;
CallImComponents.ImTab = ImTab;
CallImComponents.ImDropdown = ImDropdown;
CallImComponents.ImInputNumber = ImInputNumber;
CallImComponents.ImAccordion = ImAccordion;
CallImComponents.ImVerticalTimeline = ImVerticalTimeline;
CallImComponents.ImNotificationCard = ImNotificationCard;
CallImComponents.ImCard = ImCard;
CallImComponents.ImTable = ImTable;
CallImComponents.ImResult = ImResult;
CallImComponents.ImPagination = ImPagination;
CallImComponents.ImProgress = ImProgress;
CallImComponents.ImDrawer = ImDrawer;
CallImComponents.ImAvatar = ImAvatar;
CallImComponents.ImSpin = ImSpin;
CallImComponents.ImRate = ImRate;
CallImComponents.ImBadge = ImBadge;
CallImComponents.ImList = ImList;
CallImComponents.ImEmpty = ImEmpty;
CallImComponents.ImAlert = ImAlert;
CallImComponents.ImPopupConfirm = ImPopupConfirm;
CallImComponents.ImAutocomplete = ImAutocomplete;
CallImComponents.ImSkeleton = ImSkeleton;
CallImComponents.ImCopyTextInput = ImCopyTextInput;
CallImComponents.ImImage = ImImage;
CallImComponents.ImDecisionModal = ImDecisionModal;
CallImComponents.ImFooter = ImFooter;


function ImComponents(props) {
  return <ConfigProvider renderEmpty={()=><span>No data</span>}>
    {CallImComponents[props.componentName](props)}
  </ConfigProvider>;
}

ImComponents.propTypes = {
  componentName: PropTypes.any,
};

export default ImComponents;
