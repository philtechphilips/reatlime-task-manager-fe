import { toast } from "react-toastify";
import { SetupHttpClient } from "..";
import { UserAPI } from "./auth.types";

export function SignInExistingUser(dto: UserAPI.SignInExistingUserDTO) {
  return SetupHttpClient.SendRequest({
    method: "post",
    path: "/auth/login",
    body: dto,
  }).then((response) => {
    if (response && isUser(response.data)) {
      return response.data; // Ensure the returned type matches UserAPI.User
    }
    throw new Error(response?.error?.message);
  });
}

export function ResetPassword(dto: UserAPI.ResetPasswordDTO) {
  return SetupHttpClient.SendRequest({
    method: "post",
    path: "/users/reset-password",
    body: dto,
  });
}

export function ForgotPassword(dto: UserAPI.ForgotPasswordDTO) {
  return SetupHttpClient.SendRequest({
    method: "post",
    path: "/users/forgot-password",
    body: dto,
  });
}

function isUser(data: any): data is UserAPI.User {
  return (
    data && typeof data.fullName === "string" && typeof data.email === "string"
  );
}

export function SignUpUser(dto: UserAPI.SignUpUserDTO): Promise<UserAPI.User> {
  return SetupHttpClient.SendRequest<UserAPI.User>({
    method: "post",
    path: "/auth/create-account",
    body: dto,
  }).then((response) => {
    if (response && isUser(response.data)) {
      return response.data; // Ensure the returned type matches UserAPI.User
    }
    throw new Error(response?.error?.message);
  });
}
