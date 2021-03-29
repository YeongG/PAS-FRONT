import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSliderStep } from "../../modules/action/slider";

const AnalysisPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSliderStep("analysis"));
  }, []);
  return <div></div>;
};

export default AnalysisPage;
