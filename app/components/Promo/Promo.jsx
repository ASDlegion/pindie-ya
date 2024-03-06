'use client';

import {useEffect, useState} from 'react';

import Styles from './Promo.module.css';

export const Promo = () => {
  const [CodeISVisible, setCodeIsVisible] = useState(false);

  const handleButtonClick = () => {
    !CodeISVisible && setCodeIsVisible('true');
    navigator.clipboard.writeText('Паша Дуров');
  };

  useEffect(() => {
    let timeout;
    if (CodeISVisible) {
      timeout = setTimeout(() => {
        setCodeIsVisible(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [CodeISVisible]);

  return (
    <section className={Styles['promo']}>
      <div className={Styles['promo__description-block']}>
        <h2 className={Styles['promo__title']}>Твой промо-код</h2>
        <p className={Styles['promo__description']}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button
          onClick={handleButtonClick}
          className={`Styles['promo__button'] ${Styles['promo__button']}`}
        >
          {CodeISVisible ? <span className="promo-code">WEBTEEN</span> : 'Получить код'}
        </button>
      </div>
      <img
        src="http://localhost:3000/images/promo-illustration.svg"
        alt="Собака"
        className={Styles['promo__image']}
      />
    </section>
  );
};
