type TypePromiseFunc = (data?: any, ...rest: any[]) => Promise<void>;

export const withPromiseVoidFunc =
  (promiseFunc: TypePromiseFunc) => (data: any) => {
    void promiseFunc(data);
  };
