export interface IMeta {
  size: number;
  page: number;
  total: number;
}

export interface ResponseSuccessData {
  data: any;
  meta?: IMeta;
}

export interface IGenericErrorResponse {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
}

export interface IGenericErrorMessage {
  path: string | number;
  message: string;
}

export type ILogin = {
  email: string;
  password: string;
};

export type IReview = {
  review: string;
  rating: number;
  userId: string;
  serviceId: string;
};
