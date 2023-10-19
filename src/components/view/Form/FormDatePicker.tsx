'use client'
import { DatePicker, DatePickerProps, Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs,{Dayjs} from 'dayjs';
interface UMDatePickerProps {
    onChange?:(valOne:Dayjs | null,valTwo:string)=>void;
  name: string;
  value?: Dayjs;
  label?: string;
  size?:"small" | "middle" | "large"
}

const FormDatePicker = ({
  name,
  value,
  onChange,
  label,
  size
}: UMDatePickerProps) => {
  const { control,setValue } = useFormContext();

  const handelOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    onChange ? onChange(date,dateString) : null
    setValue(name,date)
  };
  return (
    <div >
    {label ? label : null}
    <br />
    <Controller
      control={control}
      name={name}
      
      render={({ field }) => (
        <DatePicker 
        style={{width:'100%'}}
        size={size} 
        defaultValue={dayjs(field.value) || ""} 
        onChange={handelOnChange} />
      )}
    />
    </div>
  );
};

export default FormDatePicker;
