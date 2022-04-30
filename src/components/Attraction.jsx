import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Plan.css";

function Attraction({ src, text, path, onClick, id }) {
  return (
    <>
    <button onClick={onClick} id={id} className="button_cover">
      <li className={`cards__item ${text}`} id={id}>
        <Link className={`cards__item__link ${text}`} to={path} id={id}>
          <figure className={`cards__item__pic-wrap ${text}`} id={id}>
            <img src={src} alt="Travel" className={`cards__item__img ${text}`} id={id}/>
          </figure>
          <div className={`cards__item__info ${text}`} id={id}>
            <h5 className={`cards__item__text ${text}`} id={id} >{text}</h5>
          </div>
        </Link>
      </li>
      </button>
    </>
  );
}

export default Attraction;