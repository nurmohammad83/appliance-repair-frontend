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

export type IUser = {
  id: string;
  email: string;
  password: string;
  fullName: string;
  role: string;
  profileImage: null | string;
  contactNo: string;
  gender: string | null;
  dob: null | string;
  isPasswordReset: boolean;
  createdAt: string;
  updatedAt: string;
  bookings: IBooking[];
  reviewAndRatings: IReviewAndRating[];
};

export type IBooking = {
  id: string;
  userId: string;
  serviceId: string;
  slotId: string;
  date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type IReviewAndRating = {
  id: string;
  review: string;
  rating: number;
  userId: string;
  serviceId: string;
  createdAt: string;
  updatedAt: string;
};

export type IService = {
  id: string;
  name: string;
  subTitle: string[];
  price: number;
  image: string;
  rating: number;
  categoryId: string;
  trending: null | any;
  createdAt: string;
  updatedAt: string;
  category: ICategory[];
  description: ServiceDescription[];
  bookings: IBooking[];
  reviewAndRatings: IReviewAndRating[];
};

export type ServiceDescription = {
  id: string;
  title: string;
  subTitle: string[];
  serviceId: string;
};
export type ISlot = {
  id: string;
  slotTime: string;
  createdAt: string;
  updatedAt: string;
};

export type ICategory = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  services: IService[];
};
