import Header from '../components/Header';

const Home = () => {
  const isLogin = window.sessionStorage.getItem('loginName');
  console.log(window.sessionStorage.getItem('loginName')); // 로그인 안했으면 null , 했으면 nickName
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
