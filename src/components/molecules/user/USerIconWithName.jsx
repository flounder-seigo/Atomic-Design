import React, { memo } from "react";
import {  useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;
  const userInfo = useRecoilValue(userState)
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SCountainer>
      <SImage height={160} alt="プロフィール" src={image} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SCountainer>
  );
});

const SCountainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;