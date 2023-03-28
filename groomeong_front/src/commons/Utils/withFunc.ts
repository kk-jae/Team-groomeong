type TypePromiseFunc = (data?: any) => Promise<void>;

export const withPromiseVoidFunc =
  (promiseFunc: TypePromiseFunc) => (data: any): void => {
    void promiseFunc(data);
  };
