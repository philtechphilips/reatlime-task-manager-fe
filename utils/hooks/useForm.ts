import type { FormEvent } from "react";
import { useState } from "react";
import useFormData from "./useFormData";
import type { ObjectSchema } from "yup";
import { YupObjectShapeOf } from "../types/global.types";

export interface UseFormParams<T> {
  initialFormData: T;
  validationSchema?: ObjectSchema<YupObjectShapeOf<T>>;
  onSubmit?: (formData: T) => Promise<void>;
}

export type HandleSubmitOptions = {
  exitAtValidation?: boolean;
};

export function useForm<T>(params: UseFormParams<T>) {
  const form = useFormData(params.initialFormData);
  const [validationError, setValidationError] = useState<string | null>(null);

  async function handleSubmit(e?: FormEvent, options?: HandleSubmitOptions) {
    try {
      if (e != null) e.preventDefault();
      if (params.validationSchema != null) {
        setValidationError(null);
        await params.validationSchema.validate(form.formData);
      }
      if (options?.exitAtValidation) return;
      if (params.onSubmit != null) {
        await params.onSubmit(form.formData);
      }
    } catch (error: unknown) {
      if (options?.exitAtValidation) {
        throw error;
      }
      setValidationError((error as Error).message);
    }
  }

  return {
    ...form,
    handleSubmit,
    validationError,
    validationSchema: params.validationSchema,
  };
}
