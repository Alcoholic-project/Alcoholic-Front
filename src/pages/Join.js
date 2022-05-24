import { useState } from 'react';
import styled from 'styled-components';
import { BsX, BsCheck2All } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const OuterBox = styled.div`
  display: flex;
  width: 700px;
  height: 500px;
  border: 4px solid #b775e4;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBoxes = styled.div``;

const JoinInput = styled.input`
  width: 350px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  border: 2px solid #767676;
  font-size: 20px;
  padding-left: 10px;
`;

const InputName = styled.p`
  display: inline-block;
  font-size: 20px;
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
        <OuterBox>
          <InnerBox>
            <InputBoxes className="inputName">
              <InputName>아이디</InputName>
              <InputName>비밀번호</InputName>
              <InputName>비밀번호 확인</InputName>
              <InputName>닉네임</InputName>
            </InputBoxes>
            <InputBoxes className="joinInput">
              <JoinInput name="id" onChange={onChangeInput} />
              <CheckBtn>중복확인</CheckBtn>
              <JoinInput name="pw" onChange={onChangePw} />
              <JoinInput onChange={checkSamePw} />
              {checkPw ? <YesIcon /> : <NoIcon />}
              <JoinInput name="name" onChange={onChangeInput} />
              <CheckBtn>중복확인</CheckBtn>
            </InputBoxes>
          </InnerBox>

          <InnerBox>
            <SubmitBtn onClick={onClickSubmit}>확인</SubmitBtn>
          </InnerBox>
        </OuterBox>
      </Container>
    </>
  );
};

export default Join;

