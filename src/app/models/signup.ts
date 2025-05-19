export interface SignupResponse {
  success: boolean;
  message: string;
  userId?: number;
}

export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
