import { object, string } from "yup";
import { useState } from "react";
import { TasksAPI } from "@/http/api/tasks/task.types";
import { CreateMember } from "@/http/api/tasks/task.index";
import { useForm } from "../../utils/hooks/useForm";
import { toast } from "react-toastify";

export default function useAddMemberForm(user: any) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TasksAPI.AddNewMemberDTO>({
    initialFormData: {
      email: "",
      organizationId: user.organizations?.[0]?.id || "",
    },

    validationSchema: object().shape({
      email: string()
        .email("Provide a valid email address")
        .required("Email is required"),
      organizationId: string().required("Organization is required"),
    }),

    async onSubmit(formData) {
      try {
        setIsLoading(true);
        const data = await CreateMember(formData, user?.token);
        if (data) {
          toast.success("Member added successfully!");
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
