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
    company?: string;
    password: string;
  };

  export type User = {
    fullName: string;
    email: string;
    token: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    id: string;
    isVerified: boolean;
    organizations: any;
  };

  export interface SignUpUserResponse {
    user: {
      id: string;
      fullName: string;
      email: string;
      // add other user properties here
    };
    message: string;
  }
}
