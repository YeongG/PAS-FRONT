import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as authApi from "../../api/auth";
import * as S from "./styles";

const withLogin = <T extends object>(Component: React.FC<T>) => (props: T) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    authApi
      .reqCheckAuth()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        alert("로그인후 이용 가능한 페이지 입니다");
        history.goBack();
      });
  }, []);

  return isLoading ? (
    <S.LoadingContainer>
      <S.Loading />
    </S.LoadingContainer>
  ) : (
    <Component {...props} />
  );
};

export default withLogin;
