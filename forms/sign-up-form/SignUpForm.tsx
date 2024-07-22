"use client";

import styles from "../../app/styles/auth.module.scss";
import { IMG_GoogleSvg } from "@/assets/images/index";
import TextInput from "@/components/inputs/text-input/TextInput";
import LinkButton from "@/components/buttons/link-button/LinkButton";
import BaseButton from "@/components/buttons/base-button/BaseButton";
// import CountryList from "react-select-country-list";
import Image from "@/node_modules/next/image";
import SelectInput from "@/components/inputs/select-input/SelectInput";
import useSignUpForm from "./useSignUpForm";
import Form1 from "./Form1";
import Form2 from "./Form2";
import { useRouter } from "@/node_modules/next/navigation";

export default function SignUpForm() {
  const windowRef = typeof window !== 'undefined' ? window : null;
  const router = useRouter();
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    step,
    nextStep,
    prevStep,
  } = useSignUpForm(windowRef);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 2) {
      handleSubmit(e)
      // router.push('/company-profile');
    } else if (step < 3) {
      nextStep();
    }
  };


  return (
    <main className={styles.signup_container}>
      <section className={styles.container_intro}>
        <h2 className="text-[28px] font-bold text-[#1D1D1D]">
          Getting Started
        </h2>
        <p className="text-base font-normal text-[#ACACAC] mt-2">
          Create an account to continue
        </p>

        <div className={styles.google}>
          <Image
            src={IMG_GoogleSvg}
            alt="google logo"
            width={28}
            height={28}
            priority
          />
          <p className="text-sm font-normal text-[#334155]  py-2">
            Sign up with Google
          </p>
        </div>
      </section>

      <div className={styles.divider}>
        <p>OR</p>
      </div>

      <form onSubmit={handleFormSubmit}>
        {step === 1 && <Form1 onNextStep={nextStep} />}
        {step === 2 && <Form2 onNextStep={nextStep} onPreviousStep={prevStep} />}

        <div>
          {step > 1 && (
            <BaseButton type="button" fit onClick={prevStep}>
              Previous
            </BaseButton>
          )}

          <BaseButton
            type="submit"
            fit
          >
            {step === 3 ? "Submit" : "Next"}
          </BaseButton>
        </div>
      </form>

      <LinkButton href={"/auth/sign-in"}>
        <p className={styles.new_user}>Already have an account? Sign In</p>
      </LinkButton>
    </main>
  );
}
