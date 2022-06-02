import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// #8675E4

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.p`
  font-size: 23px;
`;

const OuterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 500px;
  border: 4px solid #b775e4;
  border-radius: 10px;
`;

const LoginInput = styled.input`
  display: flex;
  width: 350px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  border: 2px solid #767676;
  font-size: 20px;
  padding-left: 10px;
`;
const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 368px;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin-top: 35px;
  font-size: 20px;
  cursor: pointer;
  transition-duration: 0.1s;
  :hover {
    background-color: #f1ddfe;
  }
`;

const GoJoin = styled.p`
  display: flex;
  font-size: 17px;
  color: #414141;
  text-decoration: none;
`;

const Login = () => {
  const focusInputEmail = useRef();
  const focusInputPw = useRef();

  const onClickSubmit = () => {
    if (input.email === '') {
      focusInputEmail.current.focus();
    } else if (input.pw === '') {
      focusInputPw.current.focus();
    } else {
      axios
        .post(`/login`, {
          email: input.email,
          password: input.pw,
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const [input, setInput] = useState({
    email: '',
    pw: '',
  });

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Title>LOGIN</Title>
      <OuterBox>
        <LoginInput
          value={input.email}
          name="email"
          onChange={onChangeInput}
          placeholder="Email"
          ref={focusInputEmail}
        />
        <LoginInput
          value={input.pw}
          name="pw"
          onChange={onChangeInput}
          type={'password'}
          placeholder="Password"
          ref={focusInputPw}
        />
        <SubmitBtn onClick={onClickSubmit}>LOGIN</SubmitBtn>
        <GoJoin>
          <Link
            to="/join"
            style={{ textDecoration: 'inherit', color: 'inherit' }}
          >
            SIGN UP
          </Link>
        </GoJoin>
      </OuterBox>
    </Container>
  );
};

export default Login;
