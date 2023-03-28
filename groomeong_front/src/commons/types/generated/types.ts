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

export type IAutocompleteShopsOutput = {
  __typename?: 'AutocompleteShopsOutput';
  address: Scalars['String'];
  averagestar: Scalars['Int'];
  closehour: Scalars['String'];
  id: Scalars['String'];
  imageurl: Scalars['String'];
  isthumbnail: Scalars['Int'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  name: Scalars['String'];
  openhour: Scalars['String'];
  phone: Scalars['String'];
  shopid: Scalars['String'];
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
  reservationId: Scalars['String'];
  shopId: Scalars['String'];
  star: Scalars['Float'];
};

export type ICreateShopInput = {
  address: Scalars['String'];
  averageStar?: InputMaybe<Scalars['Float']>;
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
  reservation: Array<IReservation>;
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
  /** Return : 신규 가게 데이터 */
  createShop: IShop;
  /** Return: 신규 생성된 가게이미지 데이터 */
  createShopImage: IShopImage;
  /**  Return: 유저 회원가입  */
  createUser: IUser;
  /**  Return: id로 강아지 데이터 삭제 후 삭제 여부 반환  */
  deleteDog: Scalars['Boolean'];
  /**  Return: 예약 삭제하기 */
  deleteReservation: Scalars['Boolean'];
  /** Return: 가게 이미지 삭제 완료 시, true */
  deleteShopImage: Scalars['Boolean'];
  /**  Return: 유저 정보 삭제하기  */
  deleteUser: Scalars['Boolean'];
  /**  이메일 인증번호 전송  */
  getTokenEmail: Scalars['String'];
  /**  Return: 유저 로그인  */
  login: Scalars['String'];
  /**  return: 유저 로그아웃  */
  logout: Scalars['String'];
  /**  Return: accessToken 복원  */
  restoreAccessToken: Scalars['String'];
  /**  Return: 업데이트한 강아지 데이터  */
  updateDog: IDog;
  /** Return : 수정 후 가게 데이터 */
  updateShop: IShop;
  /** Return: 업데이트된 가게이미지 데이터 */
  updateShopImage: IShopImage;
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


export type IMutationCreateShopImageArgs = {
  imageUrl: Scalars['String'];
  isThumbnail: Scalars['Boolean'];
  shopId: Scalars['String'];
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


export type IMutationDeleteReservationArgs = {
  reservationId: Scalars['String'];
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


export type IMutationUpdateDogArgs = {
  id: Scalars['String'];
  updateDogInput: IUpdateDogInput;
};


export type IMutationUpdateShopArgs = {
  shopId: Scalars['String'];
  updateShopInput: IUpdateShopInput;
};


export type IMutationUpdateShopImageArgs = {
  updateShopImageInput: IUpdateShopImageInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
  userId: Scalars['String'];
};


export type IMutationUploadDogImageArgs = {
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
  /** Return : 검색값(주소: 구, 동 검색 가능)을 포함한 데이터 배열(리뷰 점수 높은 순 정렬). 주소를 포함하는 데이터가 없는 경우 null. */
  autocompleteShops?: Maybe<Array<IAutocompleteShopsOutput>>;
  /**  Return: 중복 계정 확인하기  */
  duplicateEmail: Scalars['Boolean'];
  /**  Return: id로 조회된 강아지 데이터  */
  fetchDog: IDog;
  /**  Return : 로그인한 유저, 유저 댕댕이 프로필 */
  fetchLoginUser: IUser;
  /** Return : 예약 정보 */
  fetchReservation: IReservation;
  /** Return : 한 가게의 예약 정보 */
  fetchReservationsByShop: Array<IReservation>;
  /** Return : 한 회원의 예약 정보 */
  fetchReservationsByUser: Array<IReservation>;
  /** Return: 리뷰ID 기준으로 1개 불러오기 */
  fetchReview: IReview;
  /** Return: 가게ID 기준으로 모든 리뷰 불러오기 */
  fetchReviewsByShopId: Array<IReview>;
  /** Return : 입력한 shopId와 일치하는 가게 데이터. 리뷰 작성 권한 확인 안 해줌  */
  fetchShop: IShop;
  /** Return: 입력한 가게의 모든 가게이미지 */
  fetchShopImagesByShop: Array<IShopImage>;
  /** Return : 가게 데이터 및 리뷰 작성 권한 여부. (리뷰 작성 가능하면 true, 불가하면 error) */
  fetchShopWithReviewAuth: IShopWithAuthOutput;
  /** Return : DB에 등록된 가게 중 검색값을 포함한 데이터(검색값이 Null인 경우 모든 가게). 이미지는 썸네일만 불러오며, 등록된 이미지가 있더라도 썸네일로 지정한 이미지가 없는 경우 Null(빈 배열) */
  fetchShops: Array<IShop>;
  /** Return: 입력한 가게의 썸네일 가게이미지(1개) */
  fetchThumbnailByShop: IShopImage;
  /**  Return:  유저 정보  */
  fetchUser: IUser;
  /**  Return: 유저가 등록한 모든 강아지 데이터  */
  fetchUserDogs: Array<IDog>;
  fetchUserWithDeleted: Array<IUser>;
  /**  Return: 전체 유저 정보  */
  fetchUsers: Array<IUser>;
};


export type IQueryAutocompleteShopsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryDuplicateEmailArgs = {
  email: Scalars['String'];
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
  page?: InputMaybe<Scalars['Float']>;
  shopId: Scalars['String'];
};


export type IQueryFetchShopArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchShopImagesByShopArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchShopWithReviewAuthArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchShopsArgs = {
  count: Scalars['Float'];
  page: Scalars['Float'];
};


export type IQueryFetchThumbnailByShopArgs = {
  shopId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  userId: Scalars['String'];
};

export type IReservation = {
  __typename?: 'Reservation';
  date: Scalars['DateTime'];
  dog: IDog;
  id: Scalars['String'];
  review?: Maybe<IReview>;
  shop: IShop;
  time: Scalars['String'];
  user: IUser;
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
  averageStar: Scalars['Float'];
  closeHour: Scalars['String'];
  code: Scalars['Int'];
  id: Scalars['String'];
  image: Array<IShopImage>;
  lat: Scalars['String'];
  lng: Scalars['String'];
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

export type IShopWithAuthOutput = {
  __typename?: 'ShopWithAuthOutput';
  address: Scalars['String'];
  averageStar: Scalars['Float'];
  closeHour: Scalars['String'];
  code: Scalars['Int'];
  hasReviewAuth: Scalars['Boolean'];
  id: Scalars['String'];
  image: Array<IShopImage>;
  lat: Scalars['String'];
  lng: Scalars['String'];
  name: Scalars['String'];
  openHour: Scalars['String'];
  phone: Scalars['String'];
  reservation: Array<IReservation>;
  review: Array<IReview>;
};

export type IUpdateDogInput = {
  age?: InputMaybe<Scalars['Int']>;
  breed?: InputMaybe<IDog_Type>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  specifics?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type IUpdateShopImageInput = {
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  isThumbnail: Scalars['Boolean'];
  shopId?: InputMaybe<Scalars['String']>;
};

export type IUpdateShopInput = {
  address?: InputMaybe<Scalars['String']>;
  averageStar?: InputMaybe<Scalars['Float']>;
  closeHour?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  openHour?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
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
  phone: Scalars['String'];
  reservation: Array<IReservation>;
};
