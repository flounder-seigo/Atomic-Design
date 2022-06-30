import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atom/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  // 更新関数のみ呼び出す場合は、再レンダリングされない
  const setUserInfo =useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users", state: { isAdmin: false } });
  };
  return (
    <SCountainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </SCountainer>
  );
};

const SCountainer = styled.div`
  text-align: center;
`;
