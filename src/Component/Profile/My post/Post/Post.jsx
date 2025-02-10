import React from "react";
import s from './Post.module.css';
import Like from "./Like/Like";

const Post = (props) => {
    // Можно добавить изображение пользователя через props
    const { message, id, imageUrl } = props;

    // Подготовим fallback изображение, если imageUrl не передан
    const defaultImage = 'https://steamuserimages-a.akamaihd.net/ugc/2269319015243757481/C30C3DB5C97ACDFB2CA45BF49A79A348C4D3BD36/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true';
    const imageSrc = imageUrl || defaultImage;

    return (
        <div className={s.item}>

            <div className={s.postHeader}>
                {/* Используем картинку пользователя */}
                <img
                    src={imageSrc}
                    alt="User Avatar"
                    className={s.userImage}
                />
                <div className={s.message}>
                    {/* Выводим сообщение */}
                    <p>{message}</p>
                </div>
            </div>

            <div className={s.actions}>
                {/* Кнопка Like */}
                <Like />
            </div>

        </div>
    );
};

export default Post;
