import { useReducer } from "react";
const useInput = (initialValue?: string) => {
  const reducer = (state: any, action: any): any => {
    switch (action.type) {
      case "setError":
        return {
          value: state.value,
          error: action.error,
        };
      case "reset":
        return initialState;
      case "setValue":
        return {
          value: action.value,
          error: "",
        };
    }
  };

  const initialState = {
    value: (initialValue ? initialValue : ""),
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useInput;
