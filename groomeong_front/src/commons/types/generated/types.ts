export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type ICreateDogInput = {
  age: Scalars['Int'];
  breed: IDog_Type;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  specifics?: InputMaybe<Scalars['String']>;
  weight: Scalars['Float'];
};

export type ICreateReservationInput = {
  date: Scalars['DateTime'];
  dogId: Scalars['String'];
  shopId: Scalars['String'];
  time: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateReviewInput = {
  contents: Scalars['String'];
  shopId: Scalars['String'];
  star: Scalars['Float'];
  userId: Scalars['String'];
};

export type ICreateShopInput = {
  address: Scalars['String'];
  closeHour: Scalars['String'];
  name: Scalars['String'];
  openHour: Scalars['String'];
  phone: Scalars['String'];
};

export enum IDog_Type {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL',
  Special = 'SPECIAL'
}

export type IDog = {
  __typename?: 'Dog';
  age: Scalars['Int'];
  breed: IDog_Type;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  specifics?: Maybe<Scalars['String']>;
  user: IUser;
  weight: Scalars['Float'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** 인증번호 검증 */
  checkValidToken: Scalars['Boolean'];
  /**  Return: DB에 저장된 강아지 데이터  */
  createDog: IDog;
  /** Return: 생성된 신규 예약 정보 */
  createReservation: IReservation;
  /** Return: 신규 생성된 리뷰 데이터 */
  createReview: IReview;
  /** Return : 새로 생성되어 DB에 저장된 신규 가게(Shop) 데이터 */
  createShop: IShop;
  /**  Return: 유저 회원가입  */
  createUser: IUser;
  /**  Return: id로 강아지 데이터 삭제 후 삭제 여부 반환  */
  deleteDog: Scalars['Boolean'];
  /** Return: 가게 이미지 삭제 완료 시, true */
  deleteShopImage: IShopImage;
  /**  Return: 유저 정보 삭제하기  */
  deleteUser: Scalars['Boolean'];
  /** 회원가입 시 이메일 인증번호 전송 */
  getTokenEmail: Scalars['String'];
  /**  Return: 유저 로그인  */
  login: Scalars['String'];
  /**  return: 유저 로그아웃  */
  logout: Scalars['String'];
  /**  Return: accessToken 복원  */
  restoreAccessToken: Scalars['String'];
  /** Return: 신규 생성된 가게이미지 데이터 */
  saveShopImage: IShopImage;
  /**  Return: 업데이트한 강아지 데이터  */
  updateDog: IDog;
  /** Return : 입력된 데이터로 수정되어 DB에 저장된 가게(Shop) 데이터 */
  updateShop: IShop;
  /**  Return: 회원정보 업데이트  */
  updateUser: IUser;
  /**  Return: 강아지 이미지 주소 배열  */
  uploadDogImage: Array<Scalars['String']>;
  /**  Return: 프로필 이미지 주소 배열  */
  uploadProfileImage: Array<Scalars['String']>;
  /**  Return: 미용샵 이미지 주소 배열  */
  uploadShopImages: Array<Scalars['String']>;
};


export type IMutationCheckValidTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateDogArgs = {
  createDogInput: ICreateDogInput;
};


export type IMutationCreateReservationArgs = {
  createReservationInput: ICreateReservationInput;
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
};


export type IMutationCreateShopArgs = {
  createShopInput: ICreateShopInput;
};


export type IMutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type IMutationDeleteDogArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteShopImageArgs = {
  shopImageId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationGetTokenEmailArgs = {
  email: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSaveShopImageArgs = {
  imageUrl: Scalars['String'];
  isThumbnail: Scalars['Boolean'];
  shopId: Scalars['String'];
};


export type IMutationUpdateDogArgs = {
  id: Scalars['String'];
  updateDogInput: IUpdateDogInput;
};


export type IMutationUpdateShopArgs = {
  shopId: Scalars['String'];
  updateShopInput: IUpdateShopInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
  userId: Scalars['String'];
};


export type IMutationUploadDogImageArgs = {
  dogId: Scalars['String'];
  file: Scalars['Upload'];
};


export type IMutationUploadProfileImageArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadShopImagesArgs = {
  files: Array<Scalars['Upload']>;
  shopId: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  /** Return : 가게의 별점 (평균값, 소수점 숫자) */
  fetchAverageStar: Scalars['Float'];
  /**  Return: id로 조회된 강아지 데이터  */
  fetchDog: IDog;
  /**  Return : 로그인한 유저, 유저 댕댕이 프로필 */
  fetchLoginUser: IUser;
  /** Return : 예약 정보(가게, 회원, 강아지 정보 포함) */
  fetchReservation: IReservation;
  /** Return: 리뷰ID 기준으로 1개 불러오기 */
  fetchReview: IReview;
  /** Return: 가게ID 기준으로 모든 리뷰 불러오기 */
  fetchReviewsByShopId: IReview;
  /** Return : 입력한 shopId와 일치하는 가게(Shop) 데이터 */
  fetchShop: IShop;
  /** Return: 가게이미지ID를 기준으로 1개의 가게이미지 가져오기 */
  fetchShopImagesById: IShopImage;
  /** Return: 가게ID를 기준으로 모든 가게이미지 배열 데이터 */
  fetchShopImagesByShopId: IShopImage;
  /** Return : DB에 등록된 모든 가게(Shop) 데이터 */
  fetchShops: Array<IShop>;
  /**  Return:  유저 정보  */
  fetchUser: IUser;
  /**  Return: 유저가 등록한 모든 강아지 데이터  */
  fetchUserDogs: Array<IDog>;
  fetchUserWithDeleted: Array<IUser>;
  /**  Return: 전체 유저 정보  */
  fetchUsers: Array<IUser>;
};


export type IQueryFetchAverageStarArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchDogArgs = {
  id: Scalars['String'];
};


export type IQueryFetchReservationArgs = {
  reservationId: Scalars['String'];
};


export type IQueryFetchReviewArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchReviewsByShopIdArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchShopArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchShopImagesByIdArgs = {
  shopImageId: Scalars['String'];
};


export type IQueryFetchShopImagesByShopIdArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchShopsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchUserArgs = {
  userId: Scalars['String'];
};

export type IReservation = {
  __typename?: 'Reservation';
  createAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  shop: IShop;
  time: Scalars['String'];
};

export type IReview = {
  __typename?: 'Review';
  contents: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  shop: IShop;
  star: Scalars['Float'];
};

export type IShop = {
  __typename?: 'Shop';
  address: Scalars['String'];
  closeHour: Scalars['String'];
  id: Scalars['String'];
  image: Array<IShopImage>;
  name: Scalars['String'];
  openHour: Scalars['String'];
  phone: Scalars['String'];
  reservation: Array<IReservation>;
  review: Array<IReview>;
};

export type IShopImage = {
  __typename?: 'ShopImage';
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  isThumbnail: Scalars['Boolean'];
  shop: IShop;
};

export type IUpdateDogInput = {
  age?: InputMaybe<Scalars['Int']>;
  breed?: InputMaybe<IDog_Type>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  specifics?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type IUpdateShopInput = {
  address?: InputMaybe<Scalars['String']>;
  closeHour?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  openHour?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  dogs: Array<IDog>;
  email: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};
