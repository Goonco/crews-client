import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Flex, Space, Text } from 'components/atoms';
import { useNavigate } from 'react-router-dom';
import arrow from './arrow-up.svg';
import { instance } from 'api/axios';
import { signInRequest } from 'api/request';
import dayjs from 'dayjs';
export const SignIn = () => {
  const navigate = useNavigate();
  const [isRed, setIsRed] = useState({
    id: '',
    pw: '',
    checkpw: '',
    sogangemail: '',
  });
  const [isActivate, setIsActivate] = useState({
    id: '',
    sogangemail: '',
    authint: false,
  });
  const [이미등록학교이메일, set이미등록학교이메일] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const [form, setForm] = useState({
    id: '',
    pw: '',
    checkpw: '',
    name: '',
    studentid: '',
    first_major: '',
    second_major: null,
    third_major: null,
    sogangemail: '',
    authnum: '',
  });

  const onChangeID = (e) => {
    // 성공
    if (checkID(e.target.value)) {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, id: false });
      setIsActivate(true);
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, id: true });
      setIsActivate(false);
    }
  };
  const onChangePw = (e) => {
    if (checkPw(e.target.value)) {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, pw: false });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, pw: true });
    }
  };
  const onChangePwCheck = (e) => {
    if (checkPwcheck(e.target.value)) {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, checkpw: false });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, checkpw: true });
    }
  };
  const onChangeSgMail = (e) => {
    set이미등록학교이메일(false);
    if (checkSogangEmail(e.target.value)) {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, sogangemail: false });
      setIsActivate({ ...isActivate, sogangemail: true });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
      setIsRed({ ...isRed, sogangemail: true });
      setIsActivate({ ...isActivate, sogangemail: false });
    }
  };
  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSelectMajor = (e, majorType) => {
    setForm({ ...form, [`${majorType}_major`]: e.target.value });
  };

  const checkID = (inputString) => {
    const emailRegex = /\b@\b.*\.com\b/;
    return emailRegex.test(inputString);
  };
  const checkPw = (inputString) => {
    const passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return passwordRegex.test(inputString);
  };
  const checkPwcheck = (inputString) => {
    return form.pw === inputString;
  };

  const checkSogangEmail = (inputString) => {
    return inputString.includes('@sogang.ac.kr');
  };

  const ID중복확인 = async () => {
    const res = instance.post(`${signInRequest.doubleCheck}`);
  };
  const 인증번호전송 = async () => {
    try {
      const res = await instance.post(`${signInRequest.mailCheck}`, {
        sogang_mail: form.sogangemail,
      });
      setVerifyCode(res.data.verification_code);
      setIsActivate({ ...isActivate, authint: true });
    } catch {
      set이미등록학교이메일(true);
      alert('이미 등록된 이메일입니다!');
    }
  };

  const 인증번호확인 = () => {
    try {
      instance.post(`${signInRequest.verify}`, {
        user_input_code: form.checkpw,
        verification_code: verifyCode,
      });
    } catch {
      alert('인증번호가 틀렸습니다.');
    }
  };
  const 회원가입끝 = async () => {
    try {
      console.log(form);
      await instance.post(`${signInRequest.register}`, {
        email: form.id,
        password: form.pw,
        name: form.name,
        sogang_mail: form.sogangemail,
        student_number: form.studentid,
        first_major: form.first_major,
        second_major: form.second_major,
        third_major: form.third_major,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
      alert('필수 항목을 모두 작성해주세요!');
    }
  };

  const majorList = [
    '해당없음',
    '국어국문학과',
    '아트엔테크놀리지',
    '컴퓨터공학과',
    '전자공학과',
    '기계공학과',
    '수학과',
    '물리학과',
    '생명공학과',
    '반도체학과',
    '철학과',
  ];
  const [isDisplayCount, setIsDisPlayCount] = useState(false);
  const [leftCount, setLeftCount] = useState(120);
  const secondsToMinutesAndSeconds = (seconds) => {
    const duration = dayjs.duration(seconds, 'seconds');
    const minutes = duration.minutes();
    const remainingSeconds = duration.seconds();
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    // 1초마다 현재 시간을 갱신
    if (isDisplayCount) {
      const intervalId = setInterval(() => {
        setLeftCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, []);
  console.log(form);
  return (
    <SigninWrapper>
      <Space height={'60px'} />
      <SingInH1>
        <Title>회원가입</Title>
        <Subtitle>CREWS에 오신 것을 환영합니다! 계정을 생성해주세요.</Subtitle>
      </SingInH1>
      <Space height={'35px'} />
      <FormID>
        <FormName>아이디 (이메일)</FormName>
        <InputPlusButton>
          <SmallInput
            name="id"
            value={form.id}
            onChange={onChangeID}
            isRed={isRed.id}
          />
          {isRed.id ? (
            <DoubleCheckInactiveButton>중복 확인</DoubleCheckInactiveButton>
          ) : (
            <DoubleCheckButton>중복 확인</DoubleCheckButton>
          )}
        </InputPlusButton>
        {isRed.id ? (
          <CautionMessage>올바른 이메일 형식이 아닙니다.</CautionMessage>
        ) : (
          ''
        )}
      </FormID>
      <Space height={'35px'} />
      <FormPw>
        <FormName isRed={isRed.id}>비밀번호</FormName>
        <MaxInput
          name="pw"
          type="password"
          isRed={isRed.pw}
          value={form.pw}
          onChange={onChangePw}
        />
        {isRed.pw ? (
          <CautionMessage>
            비밀번호는 8자 이상으로 특수문자를 포함해주세요.
          </CautionMessage>
        ) : (
          ''
        )}
        <FormName>비밀번호 확인</FormName>
        <MaxInput
          name="checkpw"
          type="password"
          isRed={isRed.checkpw}
          value={form.checkpw}
          onChange={onChangePwCheck}
        />
        {isRed.checkpw ? (
          <CautionMessage>비밀번호가 일치하지 않습니다.</CautionMessage>
        ) : (
          ''
        )}
      </FormPw>
      <Space height={'80px'} />
      <GuideText>학생 정보 및 인증 등록을 진행해주세요</GuideText>
      <Space height={'28px'} />
      <FormUserName>
        <FormName>이름</FormName>
        <MaxInput name="name" value={form.name} onChange={onChangeForm} />
      </FormUserName>
      <Space height={'28px'} />
      <FormStudentId>
        <FormName>학번</FormName>
        <MaxInput
          name="studentid"
          value={form.studentid}
          onChange={onChangeForm}
        />
      </FormStudentId>
      <Space height={'80px'} />
      <MajorSelectSection>
        <FormMajor>
          <FormName>제 1전공(필수)</FormName>
          <Label>
            <SelectInput
              value={form.first_major}
              onChange={(e) => onSelectMajor(e, 'first')}
            >
              {majorList.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </SelectInput>
            <ArrowUp src={arrow} />
          </Label>
        </FormMajor>
        <FormMajor>
          <FormName>제 2전공(선택)</FormName>
          <Label>
            <SelectInput
              value={form.second_major}
              onChange={(e) => onSelectMajor(e, 'second')}
            >
              {majorList.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </SelectInput>
            <ArrowUp src={arrow} />
          </Label>
        </FormMajor>
        <FormMajor>
          <FormName>제 3전공(선택)</FormName>
          <Label>
            <SelectInput
              value={form.third_major}
              onChange={(e) => onSelectMajor(e, 'third')}
            >
              {majorList.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </SelectInput>
            <ArrowUp src={arrow} />
          </Label>
        </FormMajor>
      </MajorSelectSection>
      <Space height={'80px'} />
      <FormAuthEmail>
        <FormName>학교 이메일 인증</FormName>
        <InputPlusButton>
          <SmallInput
            name="sogangemail"
            isRed={isRed.sogangemail}
            value={form.sogangemail}
            onChange={onChangeSgMail}
          />
          {isActivate.sogangemail ? (
            <DoubleCheckButton onClick={인증번호전송}>
              인증번호 전송
            </DoubleCheckButton>
          ) : (
            <DoubleCheckInactiveButton>중복 확인</DoubleCheckInactiveButton>
          )}
        </InputPlusButton>
        {isRed.sogangemail ? (
          <CautionMessage>올바른 이메일 형식이 아닙니다.</CautionMessage>
        ) : (
          ''
        )}
        {이미등록학교이메일 ? (
          <CautionMessage>이미 등록된 이메일입니다.</CautionMessage>
        ) : (
          ''
        )}
        <FormName>인증번호</FormName>
        <InputPlusButton style={{ position: 'relative' }}>
          {isDisplayCount ? (
            <DisplayLeftTime>
              {secondsToMinutesAndSeconds(leftCount)}
            </DisplayLeftTime>
          ) : (
            ''
          )}
          <SmallInput
            name="authnum"
            value={form.authnum}
            onChange={onChangeForm}
          />
          {isActivate.authint ? (
            <DoubleCheckButton onClick={인증번호확인}>
              인증번호 확인
            </DoubleCheckButton>
          ) : (
            <DoubleCheckInactiveButton>인증번호 확인</DoubleCheckInactiveButton>
          )}
        </InputPlusButton>
      </FormAuthEmail>
      <Space height={'80px'} />
      <EndSignInButton onClick={회원가입끝}>회원가입 완료</EndSignInButton>
      <Space height={'80px'} />
    </SigninWrapper>
  );
};
const DisplayLeftTime = styled.div`
  color: #fc6363;
  font-family: Pretendard;
  position: absolute;
  top: 20px;
  left: 290px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CautionMessage = styled.div`
  color: #db4242;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  margin: 0 auto;
`;

const SingInH1 = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  color: var(--blue-b-05-m, #3172ea);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
`;

const Subtitle = styled.div`
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const FormName = styled.div`
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
`;
const FormID = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputPlusButton = styled.div`
  display: flex;
  gap: 12px;
`;

const SmallInput = styled.input`
  width: 360px;
  height: 68px;
  border-radius: 10px;
  padding: 22px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  border: 1.4px solid var(--gray-g-03, #ccc);
  background: #fff;
  background: ${(props) => (props.isRed ? '#FDF2F3' : '#F6F9FE')};
  &:focus {
    outline: ${(props) => (props.isRed ? '2px solid #DB4242' : '')};
  }
`;

const DoubleCheckButton = styled.div`
  width: 150px;
  height: 65px;
  flex-shrink: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  align-items: center;
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid var(--blue-b-05-m, #3172ea);
  border-radius: 10px;
  background: #3172ea;
  color: white;
  cursor: pointer;
`;

const DoubleCheckInactiveButton = styled(DoubleCheckButton)`
  background: var(--gray-g-03, #ccc);
  color: var(--gray-g-05, #999);
  border: none;
`;

const FormPw = styled(FormID)``;

const MaxInput = styled(SmallInput)`
  width: 512px;
`;

const FormUserName = styled(FormID)``;

const FormStudentId = styled(FormID)``;

const MajorSelectSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const GuideText = styled.div`
  color: var(--gray-g-05, #999);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const FormAuthEmail = styled(FormID)``;
const EndSignInButton = styled.div`
  width: 392px;
  cursor: pointer;
  height: 65px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  flex-shrink: 0;
`;

const FormMajor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SelectInput = styled.select`
  appearance: none;
  width: 522px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.4px solid var(--gray-g-03, #ccc);
  dipslay: flex;
  justify-content: center;
  background: #fff;
  color: var(--black-bk-02, #101010);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
  padding: 20px;
`;

const Label = styled.div`
  position: relative;
`;
const ArrowUp = styled.img`
  position: absolute;
  width: 36px;
  top: 16px;
  right: 16px;
`;
