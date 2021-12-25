import React from 'react';

import classes from './Content.module.scss'

import Header from "./UI/Header/Header";
import Button from "./UI/Button/Button";
import Paragraph from "./UI/Paragraph/Paragraph";

const Content = () => {
    return (
        <div className={classes.content}>
            <Header>
                Шаблон приложения React с использованием Webpack
            </Header>

            <div className={classes.textWrapper}>
                <Paragraph>Пример приложения React</Paragraph>
                <Paragraph>На данный момент сборка поддерживает SCSS, CSS-модули.</Paragraph>
            </div>

            <Button>Пример кнопки</Button>
        </div>
    );
};

export default Content;