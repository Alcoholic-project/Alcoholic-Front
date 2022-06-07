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
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  cursor: pointer;
`;

const LoginIcon = styled(AiOutlineLogin)`
  cursor: pointer;
`;

const LogoutIcon = styled(AiOutlineLogout)`
  cursor: pointer;
`;

const MyInfo = styled.button`
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const isLogin = window.sessionStorage.getItem('loginName');
  console.log(isLogin);

  const onClickLogout = () => {
    window.sessionStorage.removeItem('loginName');
    navigate('/login');
  };

  const onClickMyInfo = () => {
    // 로그인 돼있을 때랑 안돼있을 때 다르게 하기
    navigate('/myinfo');
  };

  const onClickHeart = () => {
    // 로그인 돼있을 때랑 안돼있을 때 다르게 하기
    navigate('/mybasket');
  };

  return (
    <Container>
      <Logo onClick={() => navigate('/')}>Alcoholic</Logo>
      <HeartIcon onClick={onClickHeart} />
      {isLogin ? (
        <LogoutIcon onClick={onClickLogout} />
      ) : (
        <LoginIcon onClick={() => navigate('/login')} />
      )}
      <MyInfo onClick={onClickMyInfo}>내 정보</MyInfo>
    </Container>
  );
};

export default Header;
