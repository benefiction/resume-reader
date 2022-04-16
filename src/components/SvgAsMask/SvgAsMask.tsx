import React from 'react';
import style from './SvgAsMask.module.css';
import type { SvgAsMaskProps } from './SvgAsMask.types';

export const SvgAsMask: React.FC<SvgAsMaskProps> = ({ src, title, styleClass }) => {
  return (
    <span className={`${style.icon} ${styleClass}`} style={{ '--maskUrl': `url(${src})` }}>
      {title}
    </span>
  );
};
