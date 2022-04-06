import React, {useEffect} from 'react';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks/store';
import { AppRoute, Authorization } from '../../const';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import {getLoginAction, logoutAction} from '../../store/api-actions';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );
  const userData = useAppSelector((state) => state.userData);

  useEffect(() => {
    store.dispatch(getLoginAction());
  }, []);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <a
                  className='header__nav-link header__nav-link--profile'
                  href='#'
                >
                  <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                  {authorizationStatus === Authorization.Authorized && (
                    <Link to={AppRoute.Favorites} className='header__user-name user__name'>
                      {userData?.email}
                    </Link>
                  )}
                </a>
              </li>
              <li className='header__nav-item'>
                {authorizationStatus === Authorization.Authorized ? (
                  <a
                    className='header__nav-link'
                    href='#'
                    onClick={() => store.dispatch(logoutAction())}
                  >
                    <span className='header__signout'>Sign out</span>
                  </a>
                ) : (
                  <Link
                    className='header__nav-link header__nav-link--profile'
                    to={AppRoute.Login}
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__login'>Sign in</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
