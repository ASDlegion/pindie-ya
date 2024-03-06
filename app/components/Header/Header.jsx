'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';

import {AuthForm} from '../AuthForm/AuthForm';
import {Overlay} from '../Overlay/Overlay';
import {Popup} from '../Popup/Popup';
import Styles from './Header.module.css';

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  const pathname = usePathname();

  const openPopup = () => {
    setPopupIsOpened(true);
  };

  const closePopup = () => {
    setPopupIsOpened(false);
  };

  return (
    <header className={Styles['header']}>
      <Link href="http://localhost:3000/" className={Styles['logo']}>
        <img
          className={Styles['logo__image']}
          src="http://localhost:3000/images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link
              href="/new"
              className={`${Styles['menu__link']} ${
                pathname === '/new' ? Styles['menu__link_active'] : ''
              }`}
            >
              НОВИНКИ
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/popular"
              className={`${Styles['menu__link']} ${
                pathname === '/popular' ? Styles['menu__link_active'] : ''
              }`}
            >
              ПОПУЛЯРНЫЕ
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/shooters"
              className={`${Styles['menu__link']} ${
                pathname === '/shooters' ? Styles['menu__link_active'] : ''
              }`}
            >
              ШУТЕРЫ
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/runners"
              className={`${Styles['menu__link']} ${
                pathname === '/runners' ? Styles['menu__link_active'] : ''
              }`}
            >
              РАНЕРЫ
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/pixel-games"
              className={`${Styles['menu__link']} ${
                pathname === '/pixel-games' ? Styles['menu__link_active'] : ''
              }`}
            >
              ПИКСЕЛЬНЫЕ
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/tds"
              className={`${Styles['menu__link']} ${
                pathname === '/tds' ? Styles['menu__link_active'] : ''
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles['auth']}>
          <button className={Styles['auth__button']} onClick={openPopup}>
            Войти
          </button>
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} close={closePopup} />
      <Popup isOpened={popupIsOpened} close={closePopup}>
        <AuthForm />
      </Popup>
    </header>
  );
};
