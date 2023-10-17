import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Alert, DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';

dayjs.extend(customParseFormat);
// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};

const Schedule = ({setSelectedValue,selectedValue}:any) =>{
    const [value, setValue] = useState(() => dayjs('2023-10-18'));
    const onSelect = (newValue: Dayjs) => {
        setValue(newValue);
        setSelectedValue(newValue);
      };
      const onPanelChange = (newValue: Dayjs) => {
        setValue(newValue);
      };
    return  (
    
        <Space size={24}>
            <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
          <DatePicker
          picker='date'
          size='large'
            format="YYYY-MM-DD"
            disabledDate={disabledDate}
            value={value} onSelect={onSelect}
            onPanelChange={onPanelChange}
          />
        </Space>
      )
};

export default Schedule;