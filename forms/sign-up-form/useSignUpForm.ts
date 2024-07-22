import { useForm } from "../../utils/hooks/useForm";
import { StringSchema, object, string } from "yup";
import { UserAPI } from "@/http/hraas-api/auth/auth.types";
import { SignUpUser } from "@/http/hraas-api/auth/auth.index";
import { useState } from "react";

export default function useSignUpForm(window: Window | null) {
  const signUpSelectionsRaw = window
    ? window.localStorage.getItem("signUpSelections")
    : null;

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((currentStep) => currentStep + 1);
  const prevStep = () => setStep((currentStep) => Math.max(currentStep - 1, 1));

  const form = useForm<UserAPI.SignUpUserDTO>({
    initialFormData: {
      fullName: "",
      email: "",
      password: "",
    },

    // validationSchema: object().shape({
    //   email: string().required(
    //     "Provide a valid email address"
    //   ) as StringSchema<string>,
    //   password: string().required(
    //     "This field is required"
    //   ) as StringSchema<string>,
    // }),

    async onSubmit(formData) {
      const signUpSelections = signUpSelectionsRaw
        ? JSON.parse(signUpSelectionsRaw)
        : {};
      const { data, error } = await SignUpUser({
        ...formData,
      });
      if (data) {
        console.log("successful");
        // navigate(routePaths.DASHBOARD.HOME);
      }
      if (error) {
      }
    },
  });

  return {
    ...form,
    step,
    nextStep,
    prevStep,
  };
}
