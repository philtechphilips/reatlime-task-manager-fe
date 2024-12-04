"use client";

import { IMG_GoogleSvg } from "@/assets/images/index";
import TextInput from "@/components/inputs/text-input/TextInput";
import styles from "../../app/styles/auth.module.scss";
import LinkButton from "@/components/buttons/link-button/LinkButton";
import BaseButton from "@/components/buttons/base-button/BaseButton";
import Image from "@/node_modules/next/image";
import useSignInForm from "./useSignInForm";

export default function SignInForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
    isLoading,
  } = useSignInForm();

  return (
    <div className={styles.signin_container}>
      <section>
        <h2 className="text-[28px] font-bold text-[#1D1D1D]">
          Log in to continue
        </h2>
        <p className="text-base font-normal text-[#ACACAC] mt-2">
          Enjoy your credentials to access your account.
        </p>

        <div className={styles.google}>
          <Image
            src={IMG_GoogleSvg}
            alt="Next.js Logo"
            width={28}
            height={28}
            priority
          />
          <p className="text-sm font-normal text-[#334155]  py-2">
            Login with Google
          </p>
        </div>
      </section>

      <div className={styles.divider}>
        <p>OR</p>
      </div>

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

        <TextInput
          id="password"
          label="Password"
          name="password"
          type="password"
          labelColor
          value={formData.password}
          onChange={handleChange}
          validationTrigger={validationError}
          validation={validationSchema?.fields.password}
        />

        <LinkButton href={"/auth/forgot-password"}>
          <p className={styles.forgot_password}>Forgot password?</p>
        </LinkButton>

        <BaseButton type="submit" fit disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </BaseButton>

        <LinkButton href={"/auth/sign-up"}>
          <p className={styles.new_user}>
            Don’t have an account?{" "}
            <span style={{ color: "#4253f0" }}>Sign Up</span>
          </p>
        </LinkButton>
      </form>
    </div>
  );
}
