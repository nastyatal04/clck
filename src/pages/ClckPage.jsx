import React, { useState } from "react";
import "./ClckPage.css";

export const ClckPage = () => {
  const [fullURL, setFullURL] = useState("");
  const changeFullURL = (event) => setFullURL(event.target.value);
  const [reduceURL, setReduceURL] = useState("");

  return (
    <div className="clck-page">
      <div className="clck-inf">
        Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
        короткой ссылке клиентам не придётся видеть длинные url-адреса,
        занимающие много места.
      </div>
      <div className="clck-box-element">
        <input
          className="clck-input-full-url"
          value={fullURL}
          onChange={changeFullURL}
        />
        {/* Если нечего переводить -- курсор обычный цвет серый без ховера текст серый
        Если сеть что переводить -- цвет жёлтый текст чёрный курсор палец на ховер тёмненькое*/}
        <div className="clck-reduce-button" onClick={() => {}}>
          Сократить
        </div>
      </div>
      {reduceURL && <div className="clck-reduceURL">{reduceURL}</div>}
    </div>
  );
};
