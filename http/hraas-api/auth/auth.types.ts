export namespace UserAPI {
  export type SignInExistingUserDTO = {
    email: string;
    password: string;
  };

  export type ResetPasswordDTO = {
    token: string;
    new_password: string;
  };

  export type ForgotPasswordDTO = {
    email: string;
  };

  export type SignUpUserDTO = {
    fullName: string;
    email: string;
    password: string;
  };
}
