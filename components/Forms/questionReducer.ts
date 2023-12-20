type TState = {
  isSubmitting: boolean;
};

type TAction = { type: "TOGGLE_LOADING"; payload: boolean };

export const initialState = {
  isSubmitting: false,
};

export const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, isSubmitting: action.payload };
    default:
      return state;
  }
};
