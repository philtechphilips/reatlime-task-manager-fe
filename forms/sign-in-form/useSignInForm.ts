import { useForm } from "../../utils/hooks/useForm";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { UserAPI } from "@/http/api/auth/auth.types";
import { SignInExistingUser } from "@/http/api/auth/auth.index";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useUserStore from "@/store/userStore";

export default function useSignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();
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
        const data = await SignInExistingUser(formData);
        if (data) {
          setUser(data);
          toast.success(data.message || "Login Successfully!");
          router.push("/dashboard/home");
        }
      } catch (error) {
        toast.error((error as Error).message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return {
    ...form,
    isLoading,
  };
}
