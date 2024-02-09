import { SignJWT } from 'jose';
import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tokenUtils from 'mocks/tokenUtils';

import { createJwt } from './TokenTest';
import { baseInstance } from 'apis/utils/instance';

const ID_REGEX = /^[a-zA-X][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-X])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const test = async () => {
  const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
  );
  const alg = 'HS256';

  const jwt = await new SignJWT({ 'urn:example:claim': true })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('urn:example:issuer')
    .setAudience('urn:example:audience')
    .setExpirationTime('2h')
    .sign(secret);

  console.log(jwt);

  return jwt;
};

const Register = () => {
  const idRef = useRef();

  const [id, setId] = useState('');
  const [validId, setValidId] = useState(false);
  const [idFocus, setIdFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) idRef.current.focus();

    test();
  }, []);

  useEffect(() => {
    setValidId(ID_REGEX.test(id));
  }, [id]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [id, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If button enabled with JS hack
    const check1 = ID_REGEX.test(id);
    const check2 = PWD_REGEX.test(pwd);
    if (!check1 || !check2) {
      setErrMsg('Invalid Entry');
      return;
    }

    try {
      const response = await baseInstance.post(
        '/testregister',
        JSON.stringify({ id, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      setSuccess(true);
    } catch (err) {
      if (!err?.response) setErrMsg('No Server Response');
      else if (err?.response?.status === 409) setErrMsg('Wrong Id or Pw');
      else setErrMsg('Registration Failed');
    }
  };

  if (success) {
    return (
      <section>
        <h1>Success!</h1>
        <p>
          <a href="#">Sign In !</a>
        </p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>Register</h1>
        {errMsg !== '' ? <p>{errMsg}</p> : <></>}
        <MyForm onSubmit={handleSubmit}>
          <label htmlFor="id">
            ID:
            {validId && (
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            )}
            {!validId && id && (
              <span>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            )}
            <MyInput
              id="id"
              ref={idRef}
              // value={id}
              autoComplete="off"
              onChange={(e) => setId(e.target.value)}
              onFocus={() => setIdFocus(true)}
              onBlur={() => setIdFocus(false)}
              required={true}
            />
          </label>
          {idFocus && id && !validId && (
            <p>
              <FontAwesomeIcon icon={faInfoCircle} />4 to 24 characters. Must
              begin with a letter.
            </p>
          )}

          <label htmlFor="pwd">
            PWD:
            {validPwd && (
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            )}
            {!validPwd && pwd && (
              <span>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            )}
            <MyInput
              id="pwd"
              type="password"
              // value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              required={true}
            />
          </label>
          {pwdFocus && pwd && !validPwd && (
            <p>
              <FontAwesomeIcon icon={faInfoCircle} />4 to 24 characters. Must
              begin with a letter.
            </p>
          )}

          <label htmlFor="confirm_pwd">
            Confirm PWD:
            {validMatch && matchPwd && (
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            )}
            {!validMatch && matchPwd && (
              <span>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            )}
            <MyInput
              id="confirm_pwd"
              type="password"
              // value={matchPwd}
              onChange={(e) => setMatchPwd(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              required={true}
            />
          </label>
          {matchFocus && matchPwd && !validMatch && (
            <p>
              <FontAwesomeIcon icon={faInfoCircle} />4 to 24 characters. Must
              begin with a letter.
            </p>
          )}
          <MyButton disabled={!validId || !validPwd || !validMatch}>
            Sign Up
          </MyButton>
        </MyForm>
      </section>
    );
  }
};

const MyInput = styled.input`
  border: 1px solid black;
  width: 100px;
  height: 20px;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  background-color: beige;
`;

const MyButton = styled.button`
  width: 60%;
  background-color: gray;
`;

export default Register;
