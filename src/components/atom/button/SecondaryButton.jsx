import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  // そのアトムがどのような役割を果たすのかを考えること
  // ボタンは色々な場面で使用するので、
  // 変数を受け取ってその内容をボタンに表記する
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
  color: #fff;
  }
`;
