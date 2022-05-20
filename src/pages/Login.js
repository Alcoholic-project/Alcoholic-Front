import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const LoginInput = styled.input`
  display: flex;
`;
const SubmitBtn = styled.button`
  display: flex;
`;
const GoJoin = styled.p`
  display: flex;
`;

const Login = () => {
  const [input, setInput] = useState({
    id: '',
    pw: '',
  });

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onClickSubmit = () => {
    console.log(input);
  };

  return (
    <Container>
      <LoginInput value={input.id} name="id" onChange={onChangeInput} />
      <LoginInput value={input.pw} name="pw" onChange={onChangeInput} />
      <SubmitBtn onClick={onClickSubmit}>Login</SubmitBtn>
      <GoJoin>
        <Link to="/join">회원가입</Link>
      </GoJoin>
    </Container>
  );
};

export default Login;
