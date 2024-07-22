// In FormStep1.tsx
import BaseButton from "@/components/buttons/base-button/BaseButton";
import TextInput from "@/components/inputs/text-input/TextInput";
import { useState, ChangeEvent, FormEvent } from "react";
import useSignUpForm from "./useSignUpForm";

interface Form1Props {
  onNextStep: () => void;
}

const Form1: React.FC<Form1Props> = ({ onNextStep }) => {
  const windowRef = typeof window !== 'undefined' ? window : null;
  const { formData, handleChange } = useSignUpForm(windowRef);
  return (
    <form>
      <TextInput
        id="email"
        name="email"
        type="text"
        label="Company Email"
        labelColor
        value={formData.email}
        placeholder="xyz@gmail.com"
        onChange={handleChange}
      />

      <TextInput
        id="fullName"
        name="fullName"
        type="text"
        label="Full Name"
        labelColor
        value={formData.fullName}
        placeholder="Type something"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form1;
