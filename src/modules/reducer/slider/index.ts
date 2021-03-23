import SliderAction, { SET_SLIDER_STEP } from "../../action/slider";

interface SliderReducerState {
  step: string;
}

const initialState: SliderReducerState = {
  step: "",
};

const sliderReducer = (
  state: SliderReducerState = initialState,
  action: SliderAction
): SliderReducerState => {
  switch (action.type) {
    case SET_SLIDER_STEP: {
      return {
        step: action.payload.step,
      };
    }
    default: {
      return state;
    }
  }
};

export default sliderReducer;
