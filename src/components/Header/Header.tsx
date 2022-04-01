import React from 'react';
import style from './Header.module.css';
import type { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({ basics }) => {
  return (
    <div className={style.header}>
      <picture className={style.avatar}>
        <source srcSet={basics?.image} />
        <img className={style.avatar_img} alt={basics?.name} title={basics?.name} />
      </picture>

      <h1 className={style.info}>
        {basics?.name && <span className={style.name}>{basics?.name}</span>}
        {basics?.label && <span className={style.label}>{basics?.label}</span>}
      </h1>
    </div>
  );
};
