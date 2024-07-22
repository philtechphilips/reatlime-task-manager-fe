// In FormStep1.tsx
import BaseButton from "@/components/buttons/base-button/BaseButton";
import TextInput from "@/components/inputs/text-input/TextInput";
import { useState, ChangeEvent, FormEvent } from "react";
import useSignUpForm from "./useSignUpForm";

interface Form2Props {
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const Form2: React.FC<Form2Props> = ({ onNextStep, onPreviousStep }) => {
  const windowRef = typeof window !== 'undefined' ? window : null;
  const { formData, handleChange } = useSignUpForm(windowRef);
  return (
    <form>
      <TextInput
        id="new_password"
        label="Password"
        name="password"
        type="password"
        labelColor
        value={formData.password}
        onChange={handleChange}
        // validationTrigger={validationError}
        // validation={validationSchema?.fields.new_password}
      />

      {/* <TextInput
        id="new_password"
        label="Confirm Password"
        name="cpassword"
        type="password"
        labelColor
        value={formData.cpassword}
        onChange={handleChange}
        // validationTrigger={validationError}
        // validation={validationSchema?.fields.new_password}
      /> */}
    </form>
  );
};

export default Form2;
