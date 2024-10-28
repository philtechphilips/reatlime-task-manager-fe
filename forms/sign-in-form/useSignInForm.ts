import { useForm } from "../../utils/hooks/useForm";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { UserAPI } from "@/http/api/auth/auth.types";
import { SignInExistingUser } from "@/http/api/auth/auth.index";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<UserAPI.SignInExistingUserDTO>({
    initialFormData: {
      email: "",
      password: "",
    },

    validationSchema: object().shape({
      email: string()
        .email("Provide a valid email address")
        .required("Email is required"),
      password: string().required("Password is required"),
    }),

    async onSubmit(formData) {
      try {
        setIsLoading(true);
        const { data, error } = await SignInExistingUser(formData);
        if (data) {
          toast.success(data.message || "Login Successfully!");
          router.push("/dashboard/home");
        } else if (error) {
          toast.error(error.message || "An error occurred");
          setIsLoading(false);
        }
      } catch (error) {
        toast.error("An unexpected error occurred");
      }
    },
  });

  return {
    ...form,
    isLoading,
  };
}
