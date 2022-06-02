import { useRef, useState } from 'react';
import styled from 'styled-components';
import { BsX, BsCheck2All } from 'react-icons/bs';
import axios from 'axios';

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
  const focusInputEmail = useRef();

  const [input, setInput] = useState({
    email: '',
    emailEnd: '',
    pw: '',
    name: '',
    emailCheck: false,
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

  const onClickSubmit = () => {
    console.log(input);
    // if (input.email === '') {
    //   focusInputEmail.current.focus();
    // } else if (input.pw === '') {
    //   focusInputPw.current.focus();
    // }
    // else
    //{

    // 모든 칸이 다 채워져있는지
    // 중복확인 버튼 두 개 다 눌렀는지
    axios
      .post(`/user/join`, {
        email: `${input.email}@${input.emailEnd}`,
        nickname: input.name,
        password: input.pw,
        passwordCorrect: '',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    // }
  };

  const onClickEmailCheck = () => {
    axios
      .post(`/user/email-check?email=${input.email}@${input.emailEnd}`)
      .then((res) => {
        console.log(res.data);
        setInput({ ...input, emailCheck: res.data });
        if (res.data === false) {
          focusInputEmail.current.focus(); // 나중에 테스트해봐야 함
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Container>
        <Title>SIGN UP</Title>
        <OuterBox>
          <InnerBox>
            <InputBoxes>
              <InputName>이메일 주소</InputName>
              <JoinInput
                name="email"
                onChange={onChangeInput}
                style={{ marginLeft: 37, width: '200px', marginRight: '8px' }}
                ref={focusInputEmail}
              />
              <p style={{ fontSize: '18px' }}>@</p>
              <JoinInput
                name="emailEnd"
                onChange={onChangeInput}
                style={{ width: '100px', marginLeft: '8px' }}
                ref={focusInputEmail}
              />
              {input.emailCheck ? (
                <YesIcon size={30} />
              ) : (
                <CheckBtn onClick={onClickEmailCheck}>중복확인</CheckBtn>
              )}
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
                style={{ marginLeft: 76 }}
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
