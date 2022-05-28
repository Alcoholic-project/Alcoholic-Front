import { useState } from 'react';
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
      <OuterBox>
        <LoginInput value={input.id} name="id" onChange={onChangeInput} />
        <LoginInput
          value={input.pw}
          name="pw"
          onChange={onChangeInput}
          type={'password'}
        />
        <SubmitBtn onClick={onClickSubmit}>LOGIN</SubmitBtn>
        <GoJoin>
          <Link
            to="/join"
            style={{ textDecoration: 'inherit', color: 'inherit' }}
          >
            회원가입
          </Link>
        </GoJoin>
      </OuterBox>
    </Container>
  );
};

export default Login;
