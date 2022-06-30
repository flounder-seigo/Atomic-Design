import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  // そのアトムがどのような役割を果たすのかを考えること
  // ボタンは色々な場面で使用するので、
  // 変数を受け取ってその内容をボタンに表記する
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// 既存のCSSを上書きする場合には
// styled.ではなくstyled()とする
const SButton = styled(BaseButton)`
  background-color: #40514e;
  color: #fff;
  }
`;
