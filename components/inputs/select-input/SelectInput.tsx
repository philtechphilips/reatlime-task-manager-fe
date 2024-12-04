import React, { useState } from "react";
import { SelectInputProps } from "./SelectInput.types";
import styles from "../text-input/style.module.scss";

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  labelColor,
  onChange = () => {},
  ...rest
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(e);
  };

  return (
    <div className={styles.text_input_container}>
      <label
        className={styles.text_input_container_label}
        style={{ color: labelColor ? "#239fac" : "000" }}
      >
        {label}
      </label>
      <select
        value={selectedOption}
        onChange={handleChange}
        className={styles.text_input_container_select}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
