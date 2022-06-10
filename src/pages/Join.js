import { useRef, useState } from 'react';
import styled from 'styled-components';
import { BsX, BsCheck2All } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

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
  const focusInputEmailEnd = useRef();
  const focusInputPw = useRef();
  const focusInputPwCheck = useRef();
  const focusInputName = useRef();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    emailEnd: '',
    pw: '',
    pwCheck: '',
    name: '',
    emailCheck: false,
    nameCheck: false,
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
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onClickSubmit = () => {
    if (input.emailCheck === false) focusInputEmail.current.focus();
    else if (input.pw.length < 5) focusInputPw.current.focus();
    else if (checkPw === false) focusInputPwCheck.current.focus();
    else if (input.nameCheck === false) focusInputName.current.focus();
    else {
      axios
        .post(`/user/join`, {
          email: `${input.email}@${input.emailEnd}`,
          nickname: input.name,
          password: input.pw,
          passwordCorrect: input.pwCheck,
        })
        .then((res) => {
          console.log(res);
          alert('회원가입이 완료되었습니다.');
          navigate('/login');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const onClickEmailCheck = () => {
    if (input.email.length < 2) focusInputEmail.current.focus();
    else if (input.emailEnd.length < 2) focusInputEmailEnd.current.focus();
    else {
      axios
        .post(`/user/email-check?email=${input.email}@${input.emailEnd}`)
        .then((res) => {
          setInput({ ...input, emailCheck: res.data });
          if (res.data === false) {
            focusInputEmail.current.focus();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const onClickNamelCheck = () => {
    if (input.name.length < 1) focusInputName.current.focus();
    else {
      axios
        .post(`/user/nickname-check?nickname=${input.name}`)
        .then((res) => {
          setInput({ ...input, nameCheck: res.data });
          if (res.data === false) {
            focusInputName.current.focus();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <Container>
        <Title>SIGN UP</Title>
        <OuterBox>
          <InnerBox>
            <InputBoxes>
              <InputName>이메일 주소</InputName>
              {input.emailCheck ? (
                <JoinInput
                  name="email"
                  style={{ marginLeft: 37, width: '200px', marginRight: '8px' }}
                  disabled
                />
              ) : (
                <JoinInput
                  name="email"
                  onChange={onChangeInput}
                  style={{ marginLeft: 37, width: '200px', marginRight: '8px' }}
                  ref={focusInputEmail}
                />
              )}

              <p style={{ fontSize: '18px' }}>@</p>
              {input.emailCheck ? (
                <JoinInput
                  name="emailEnd"
                  style={{ width: '100px', marginLeft: '8px' }}
                  disabled
                />
              ) : (
                <JoinInput
                  name="emailEnd"
                  onChange={onChangeInput}
                  style={{ width: '100px', marginLeft: '8px' }}
                  ref={focusInputEmailEnd}
                />
              )}

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
                type="password"
                style={{ marginLeft: 59 }}
                placeholder="5-12자"
                maxLength="12"
                ref={focusInputPw}
              />
            </InputBoxes>

            <InputBoxes>
              <InputName>비밀번호 확인</InputName>
              <JoinInput
                name="pwCheck"
                onChange={checkSamePw}
                type="password"
                style={{ marginLeft: 18 }}
                ref={focusInputPwCheck}
              />
              {checkPw ? <YesIcon size={30} /> : <NoIcon size={30} />}
            </InputBoxes>

            <InputBoxes>
              <InputName>닉네임</InputName>
              {input.nameCheck ? (
                <JoinInput
                  name="name"
                  style={{ marginLeft: 76 }}
                  placeholder="10자 이내"
                  maxLength="10"
                  disabled
                />
              ) : (
                <JoinInput
                  name="name"
                  onChange={onChangeInput}
                  style={{ marginLeft: 76 }}
                  placeholder="10자 이내"
                  maxLength="10"
                  ref={focusInputName}
                />
              )}
              {input.nameCheck ? (
                <YesIcon size={30} />
              ) : (
                <CheckBtn onClick={onClickNamelCheck}>중복확인</CheckBtn>
              )}
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
