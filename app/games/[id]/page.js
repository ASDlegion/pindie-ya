'use client';

import {useEffect, useState} from 'react';

import {getGameById} from '../../data/data-utils';
import Styles from './Game.module.css';

export default function GamePage(props) {
  const params = props.params;
  const game = getGameById(params.id);
  const [votes, setVotes] = useState(3);
  const [canVote, setCanVote] = useState(true);
  document.title = game.title
  
  const handleClick = () => {
    setVotes(votes + 1);
    setCanVote(false);
  };

  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles['game']}>
            <iframe className={Styles['game__iframe']} src={game.link}></iframe>
          </section>
          <section className={Styles['about']}>
            <h2 className={Styles['about__title']}>{game.title}</h2>
            <div className={Styles['about__content']}>
              <p className={Styles['about__description']}>{game.description}</p>
              <div className={Styles['about__author']}>
                <p>
                  Автор: <span className={Styles['about__accent']}>{game.developer}</span>
                </p>
              </div>
            </div>
            <div className={Styles['about__vote']}>
              <p className={Styles['about__vote-amount']}>
                {`за игру уже проголовали `}
                <span className={Styles['about__accent']}>{votes}</span>
              </p>
              <button
                disabled={!canVote ? true : false}
                onClick={() => handleClick()}
                className={`button ${Styles['about__vote-button']}`}
              >
                Голосовать
              </button>
            </div>
          </section>
        </>
      ) : (
        <section className={Styles['game']}>
          <p>ТАКОЙ ИГРЫ НЕ СУЩЕСТВУЕТ 😢</p>
        </section>
      )}
    </main>
  );
}
