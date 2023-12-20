type TState = {
  isSubmit: boolean;
};

type TAction = { type: "TOGGLE_LOADING"; payload: boolean };

export const initialState = {
  isSubmit: false,
};

export const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, isSubmit: action.payload };
    default:
      return state;
  }
};
