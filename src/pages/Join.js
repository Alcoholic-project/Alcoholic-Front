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

const Title = styled.p`
  font-size: 23px;
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
  flex-direction: column;
`;

const InputBoxes = styled.div`
  display: flex;
  align-items: center;
`;

const JoinInput = styled.input`
  width: 350px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  border: 2px solid #767676;
  font-size: 20px;
  padding-left: 10px;
  margin-right: 20px;
`;

const InputName = styled.p`
  display: inline-block;
  font-size: 18px;
`;

const CheckBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  transition-duration: 0.1s;
  :hover {
    background-color: #f1ddfe;
  }
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
        <Title>SIGN UP</Title>
        <OuterBox>
          <InnerBox>
            <InputBoxes>
              <InputName>아이디</InputName>
              <JoinInput
                name="id"
                onChange={onChangeInput}
                style={{ marginLeft: 75 }}
              />
              <CheckBtn>중복확인</CheckBtn>
            </InputBoxes>

            <InputBoxes>
              <InputName>비밀번호</InputName>
              <JoinInput
                name="pw"
                onChange={onChangePw}
                style={{ marginLeft: 59 }}
              />
            </InputBoxes>

            <InputBoxes>
              <InputName>비밀번호 확인</InputName>
              <JoinInput onChange={checkSamePw} style={{ marginLeft: 18 }} />
              {checkPw ? <YesIcon size={30} /> : <NoIcon size={30} />}
            </InputBoxes>

            <InputBoxes>
              <InputName>닉네임</InputName>
              <JoinInput
                name="name"
                onChange={onChangeInput}
                style={{ marginLeft: 75 }}
              />
              <CheckBtn>중복확인</CheckBtn>
            </InputBoxes>
          </InnerBox>

          <InnerBox>
            <SubmitBtn onClick={onClickSubmit}>SUBMIT</SubmitBtn>
          </InnerBox>
        </OuterBox>
      </Container>
    </>
  );
};

export default Join;
