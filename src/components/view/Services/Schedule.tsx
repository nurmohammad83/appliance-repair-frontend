import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Alert, DatePicker, Space } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

dayjs.extend(customParseFormat);
// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const Schedule = ({ setSelectedValue, selectedValue }: any) => {
  const currentDate = new Date();

  // Format the current date as "YYYY-MM-DD"
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

  const [value, setValue] = useState(() => dayjs(formattedDate));
  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(dayjs(newValue));
  };
  const onPanelChange = (newValue: Dayjs) => {
    setValue(dayjs(newValue));
  };
  return (
    <Space size={24}>
      <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <DatePicker
        picker="date"
        size="large"
        disabledDate={disabledDate}
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </Space>
  );
};

export default Schedule;
