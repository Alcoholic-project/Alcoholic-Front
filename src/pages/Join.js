import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsX, BsCheck2All } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const InputBlock = styled.div``;

const JoinInput = styled.input``;

const InputName = styled.p`
  display: inline-block;
`;

const CheckBtn = styled.button``;

const SubmitBtn = styled.button``;

const NoIcon = styled(BsX)`
  color: #e74c3c;
`;

const YesIcon = styled(BsCheck2All)`
  color: #2ecc71;
`;

const Join = () => {
  const [input, setInput] = useState({
    id: '',
    pw: '',
    name: '',
  });

  const [checkPw, setCheckPw] = useState(false);

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onChangePw = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    e.target.value === input.pw ? setCheckPw(true) : setCheckPw(false);
  };

  const checkSamePw = (e) => {
    e.target.value === input.pw ? setCheckPw(true) : setCheckPw(false);
  };

  const onClickSubmit = (e) => {
    console.log(input);
  };

  return (
    <>
      <Container>
        <InputBlock>
          <InputName>아이디</InputName>
          <JoinInput name="id" onChange={onChangeInput} />
          <CheckBtn>중복확인</CheckBtn>
        </InputBlock>

        <InputBlock>
          <InputName>비밀번호</InputName>
          <JoinInput name="pw" onChange={onChangePw} />
        </InputBlock>

        <InputBlock>
          <InputName>비밀번호 확인</InputName>
          <JoinInput onChange={checkSamePw} />
          {checkPw ? <YesIcon /> : <NoIcon />}
        </InputBlock>

        <InputBlock>
          <InputName>닉네임</InputName>
          <JoinInput name="name" onChange={onChangeInput} />
          <CheckBtn>중복확인</CheckBtn>
        </InputBlock>

        <SubmitBtn onClick={onClickSubmit}>확인</SubmitBtn>
      </Container>
    </>
  );
};

export default Join;
