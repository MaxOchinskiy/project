import React, { useState } from "react";
import s from './Like.module.css';

const Like = (props) => {
    // Состояние для количества лайков
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false); // Состояние для проверки, был ли лайкнут

    const onClick = () => {
        if (!liked) {
            setCount(count + 1);
            setLiked(true);  // Лайкнули, блокируем дальнейшее увеличение
        } else {
            setCount(count - 1);
            setLiked(false);  // Убираем лайк
        }
    };

    return (
        <div className={s.container}>
            <div className={s.count}>{count}</div>
            <button
                onClick={onClick}
                className={`${s.button} ${liked ? s.liked : ""}`} // Динамическое добавление класса для лайкнутого состояния
            >
                &#10084;
            </button>
            {props.message && <div className={s.message}>{props.message}</div>} {/* Если передано сообщение, то отобразим его */}
        </div>
    );
};

export default Like;

