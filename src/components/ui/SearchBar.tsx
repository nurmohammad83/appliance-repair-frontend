
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { AutoComplete, Input } from "antd";

interface AutocompleteInputProps {
  data: { name: string; link: string }[];
  placeholder: string;
  onSelect: (value: string, link: string) => void;
}

const SearchBar = ({
  data,
  placeholder,
  onSelect,
}: AutocompleteInputProps) => {
  const [value, setValue] = useState<string>("");

  const handleSearch = (searchText: string) => {
    setValue(searchText);
  };
  const handleSelect = (value: string, link: string) => {
    setValue(value);
    onSelect(value, link);
  };

  const filterOptions = (
    inputValue: string,
    option: { name: string; link: string }
  ) => {
    return option.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
  };

  const filterSort = (a: string, b: string) => {
    return a.localeCompare(b);
  };

  return (
    <AutoComplete
      value={value}
      options={data
        .filter((option) => filterOptions(value, option))
        .sort((a, b) => filterSort(a.name, b.name))
        .map((option) => ({
          value: option.name,
          link: option.link,
        }))}
      style={{ width: "100%" }}
      onSelect={(value, option) => handleSelect(value, option.link)}
      onSearch={handleSearch}
    >
      <Input
        className="bg-white border-none text-lg font-poppins placeholder:text-black rounded-lg"
        placeholder={placeholder}
        suffix={
          <SearchOutlined className="bg-primary flex justify-center items-center rounded-lg text-white text-2xl font-bold font-poppins h-10 w-14" />
        }
        size="large"
        bordered={false}
      />
    </AutoComplete>
  );
};

export default SearchBar;
