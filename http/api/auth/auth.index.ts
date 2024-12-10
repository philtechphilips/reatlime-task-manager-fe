import { toast } from "react-toastify";
import { UserAPI } from "./auth.types";
import makeNetworkCall from "@/http/http.service";

export function SignInExistingUser(dto: UserAPI.SignInExistingUserDTO) {
  return makeNetworkCall({
    method: "post",
    url: "/auth/login",
    body: dto,
  }).then((response) => {
    if (response && isUser(response.data)) {
      return response.data; // Ensure the returned type matches UserAPI.User
    }
    throw new Error(response?.error?.message);
  });
}

export function ResetPassword(dto: UserAPI.ResetPasswordDTO) {
  return makeNetworkCall({
    method: "post",
    url: "/auth/reset-password",
    body: dto,
  });
}

export function ForgotPassword(dto: UserAPI.ForgotPasswordDTO) {
  return makeNetworkCall({
    method: "post",
    url: "/auth/forgot-password",
    body: dto,
  });
}

function isUser(data: any): data is UserAPI.User {
  return (
    data && typeof data.fullName === "string" && typeof data.email === "string"
  );
}

export function SignUpUser(dto: UserAPI.SignUpUserDTO): Promise<UserAPI.User> {
  return makeNetworkCall({
    method: "post",
    url: "/auth/create-account",
    body: dto,
  }).then((response) => {
    if (response && isUser(response.data)) {
      return response.data; // Ensure the returned type matches UserAPI.User
    }
    throw new Error(response?.error?.message);
  });
}
