import React, { FormEvent, useState } from 'react';
import Header from '../header/header';
import { useAppDispatch } from '../../hooks/store';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';

function Login(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLogin(evt.currentTarget.email.value);
    setPassword(evt.currentTarget.password.value);
    if (login && password) {
      onSubmit({
        login: login,
        password: password,
      });
    }
  };

  return (
    <>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              className='login__form form'
              action='#'
              method='post'
              onSubmit={handleSubmit}
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                />
              </div>
              <button
                className='login__submit form__submit button'
                type='submit'
              >
                Sign in
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
