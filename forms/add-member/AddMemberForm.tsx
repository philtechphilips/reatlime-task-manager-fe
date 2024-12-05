import TextInput from "@/components/inputs/text-input/TextInput";
import React from "react";
import useAddMemberForm from "./useAddMemberForm";
import BaseButton from "@/components/buttons/base-button/BaseButton";

interface Props {
  formHandler: () => void;
  user: any;
}

const AddMemberForm = ({ formHandler, user }: Props) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useAddMemberForm(user);

  return (
    <div className="bg-white relative w-96 py-8 px-5 rounded-lg flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <TextInput
          id="email"
          label="Email Address"
          name="email"
          labelColor
          value={formData.email}
          onChange={handleChange}
          validationTrigger={validationError}
          validation={validationSchema?.fields.email}
        />

        <BaseButton type="submit" fit disabled={isLoading}>
          {isLoading ? "Submitting..." : "Add member"}
        </BaseButton>
      </form>
      <div
        onClick={formHandler}
        className="absolute cursor-pointer top-2 right-5 bg-neutral-200 rounded-full w-7 h-7 flex items-center justify-center"
      >
        <i className="ri-close-line text-lg text-neutral-800"></i>
      </div>
    </div>
  );
};

export default AddMemberForm;
