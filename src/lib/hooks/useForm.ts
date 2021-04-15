import React, { ChangeEvent, useCallback, useState } from "react";

const useForm = <T>(
  initialState: T
): [
  T,
  React.Dispatch<React.SetStateAction<T>>,
  (e: ChangeEvent<HTMLInputElement>) => void
] => {
  const [state, setState] = useState<T>(initialState);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  return [state, setState, changeHandler];
};

export default useForm;
