import {CallApi} from "./CallApi";
import {CallWebSocket} from "./CallWebSocket";
import {CallToast} from "./CallToast";
import {groupBy} from "./dataManipulator";
import {desantize, santize} from "./CallSantize";
import {GetBaseUrl} from "./GetBaseUrl";
import {CallDownloadImage} from "./CallDownloadImage";
import CallDateTimeUtils from "./CallDateTimeUtils";
// import {regex} from "./regex";

function CallHelper() { }

CallHelper.CallApi = CallApi;
CallHelper.CallWebSocket = CallWebSocket;
CallHelper.CallToast = CallToast;
CallHelper.groupBy = groupBy;
CallHelper.CallSantize = santize;
CallHelper.CallDesantize = desantize;
CallHelper.GetBaseUrl = GetBaseUrl;
CallHelper.CallDownloadImage = CallDownloadImage;
CallHelper.CallDateTimeUtils = CallDateTimeUtils;
// CallHelper.regex= regex;

export default CallHelper;
