export const SET_SLIDER_STEP = "slider/SET_SLIDER_STEP" as const;

export const setSliderStep = (payload: string) => ({
  type: SET_SLIDER_STEP,
  payload: { step: payload },
});

type SliderAction = ReturnType<typeof setSliderStep>;

export default SliderAction;
