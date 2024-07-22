import { useEffect, useState } from "react";
import type { AnySchema } from "yup";

export type TUseFormFieldValidationParams = {
  value: string;
  validation?: AnySchema;
  validationTrigger?: string | null;
};

export default function useFormFieldValidation(
  params: TUseFormFieldValidationParams
) {
  const [validationError, setValidationError] = useState<string | null>(null);
  function validateTextField() {
    try {
      if (params.validation) {
        setValidationError(null);
        params.validation.validateSync(params.value);
      }
    } catch (error: any) {
      setValidationError(error.message as string);
    }
  }

  useEffect(() => {
    if (validationError) {
      validateTextField();
    }
  }, [params.value]);

  useEffect(() => {
    if (!params.validationTrigger) {
      setValidationError(null);
      return;
    }
    validateTextField();
  }, [params.validationTrigger]);

  return { validationError };
}
