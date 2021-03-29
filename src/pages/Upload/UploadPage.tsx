import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cameraIcon, loadingIcon } from "../../assets";
import { isAllowedFile } from "../../lib/utils";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./style";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setSliderStep } from "../../modules/action/slider";
import { getAnalysis } from "../../modules/action/analysis";

const IndexPage: FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>();
  const [isUploadImg, setIsUploadImg] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setSliderStep("upload"));
  }, []);

  const imageClickHandler = useCallback(() => {
    if (isUploadImg) return;
    inputRef.current.click();
  }, [isUploadImg]);

  const changeFileHandler = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const fileUrl: string = e.currentTarget.value;
      const splitUrl: string[] = fileUrl.split(".");
      const extension: string = splitUrl[splitUrl.length - 1];

      if (!isAllowedFile(extension)) {
        e.preventDefault();
        toast.error("지원되지 않는 확장자 입니다");
        return;
      }

      try {
        setIsUploadImg(true);
        dispatch(getAnalysis(e.target.files[0]));
      } catch (err) {
        setIsUploadImg(false);
      }
    },
    []
  );
  return (
    <S.Container>
      <S.BackgroundImg
        isLoading={isUploadImg}
        imgSrc={isUploadImg ? loadingIcon : cameraIcon}
        onClick={imageClickHandler}
      />
      <S.Title>
        {isUploadImg ? "사진을 분석 중입니다." : "이미지를 업로드해 보세요"}
      </S.Title>
      <S.HiddenInput type="file" onChange={changeFileHandler} ref={inputRef} />
    </S.Container>
  );
};

export default IndexPage;
