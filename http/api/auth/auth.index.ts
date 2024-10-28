import { SetupHttpClient } from "..";
import { UserAPI } from "./auth.types";

export function SignInExistingUser (dto: UserAPI.SignInExistingUserDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/users/login',
    body: dto
  })
}

export function ResetPassword (dto: UserAPI.ResetPasswordDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/users/reset-password',
    body: dto
  })
}

export function ForgotPassword (dto: UserAPI.ForgotPasswordDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/users/forgot-password',
    body: dto
  })
}


export function SignUpUser (dto: UserAPI.SignUpUserDTO) {
  return SetupHttpClient.SendRequest({
    method: 'post',
    path: '/v1/auth/create-account',
    body: dto
  })
}

