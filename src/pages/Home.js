import Header from '../components/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const WriteBtn = styled.button`
  cursor: pointer;
`;

const Home = () => {
  const isLogin = window.sessionStorage.getItem('loginName');
  console.log(window.sessionStorage.getItem('loginName')); // 로그인 안했으면 null , 했으면 nickName

  const navigate = useNavigate();

  const onClickWrite = () => {
    if (isLogin) {
      navigate('/write');
    } else {
      alert('로그인이 필요한 기능입니다.');
      navigate('/login');
    }
  };
  return (
    <>
      <Header />
      <WriteBtn onClick={onClickWrite}>글쓰기</WriteBtn>
    </>
  );
};

export default Home;
