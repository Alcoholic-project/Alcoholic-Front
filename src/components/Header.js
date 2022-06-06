import styled from 'styled-components';
import {
  AiOutlineHeart,
  AiOutlineLogin,
  AiOutlineLogout,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Logo = styled.p`
  color: black;
`;

const HeartIcon = styled(AiOutlineHeart)``;

const LoginIcon = styled(AiOutlineLogin)``;

const LogoutIcon = styled(AiOutlineLogout)``;

const MyInfo = styled.button``;

// 찜, 내정보, 로그아웃
const Header = () => {
  const navigate = useNavigate();
  const isLogin = window.sessionStorage.getItem('loginName');

  const onClickLogout = () => {
    window.sessionStorage.setItem('loginName', 'null');
    navigate('/login');
  };

  return (
    <Container>
      <Logo>Alcoholic</Logo>
      <HeartIcon />
      {isLogin ? (
        <LogoutIcon onClick={onClickLogout} />
      ) : (
        <LoginIcon onClick={() => navigate('/login')} />
      )}
      <MyInfo onClick={() => navigate('/myinfo')}>내 정보</MyInfo>
    </Container>
  );
};

export default Header;
