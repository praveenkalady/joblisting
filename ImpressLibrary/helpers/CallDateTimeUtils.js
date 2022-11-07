import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);

export default function CallDateTimeUtils() { }

export const convertUtcZeroToLocalDateTime = (dateTimeStrUtcZero, displayFormat="MMM DD h:mm a") => {
    const dateTimeObj = dayjs(dateTimeStrUtcZero);
    const localDateTime = dateTimeObj.tz(dayjs.tz.guess());
    return localDateTime.format(displayFormat);
};

CallDateTimeUtils.convertUtcZeroToLocalDateTime = convertUtcZeroToLocalDateTime;
