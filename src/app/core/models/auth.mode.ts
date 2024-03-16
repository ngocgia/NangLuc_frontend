export interface IUser {
  numberPhone: string;
  fullName: string;
  address: string;
  role: number;
}

export interface ILogin {
  numberPhone: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  token: string;
  user: IUser;
}
