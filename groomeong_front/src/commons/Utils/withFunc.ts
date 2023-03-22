type TypePromiseFunc = (data?: any) => Promise<void>;
type TypeSubmitFunc = (data?: any) => void;

export const withPromiseVoidFunc =
  (promiseFunc: TypePromiseFunc) => (data: any) => {
    void promiseFunc(data);
  };
