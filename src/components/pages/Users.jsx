import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import {SecondaryButton} from "../atom/button/SecondaryButton"
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ひらめ${val}`,
    image: "https://source.unsplash.com/4GL53Okjaic",
    email: "12345@asd.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "http://geogle.com"
  };
});

export const Users = () => {
 const [userInfo, setUserInfo] = useRecoilState(userState);
  
  const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin});
  return (
    <SCountainer>      
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SCountainer>
  );
};

const SCountainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
