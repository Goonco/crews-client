import { useRef, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { baseInstance } from 'apis/utils/instance';
import AuthContext from './AuthProvider';

const LoginTest = () => {
  const { setAuth } = useContext(AuthContext);

  const idRef = useRef();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('test');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) idRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [id, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await baseInstance.post(
        '/testauthenticate',
        JSON.stringify({ id, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      setId('');
      setPwd('');
      setSuccess(true);
    } catch (e) {}
  };

  if (success) {
    return (
      <section>
        <h1>Success!</h1>
        <p>
          <a href="#">Go to home</a>
        </p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>Login</h1>
        {errMsg !== '' ? <p>{errMsg}</p> : <></>}
        <MyForm onSubmit={handleSubmit}>
          <label htmlFor="id">
            ID :
            <MyInput
              id="id"
              ref={idRef}
              value={id}
              onChange={(e) => setId(e.target.value)}
              autoComplete="off"
              required
            />
          </label>
          <label htmlFor="pw">
            PW :
            <MyInput
              type="password"
              id="pw"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </label>
          <MyButton>Sign In</MyButton>
        </MyForm>
      </section>
    );
  }
};

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  background-color: beige;
`;

const MyInput = styled.input`
  border: 1px solid black;
  width: 100px;
  height: 20px;
`;

const MyButton = styled.button`
  width: 60%;
  background-color: gray;
`;

export default LoginTest;
