import { useReducer } from "react";
import { FormInputPayload } from "../types/global.types";

export default function useFormData<T>(initialState: T) {
  function reducer(state: T, payload: FormInputPayload) {
    return {
      ...state,
      [payload.field]: payload.value,
    } as T;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return { formData: state, handleChange: dispatch };
}
