export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  username: string; // Add this line
  email: string;
  password: string;
  confirm_password: string;
}
