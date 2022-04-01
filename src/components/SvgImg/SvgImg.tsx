import React from 'react';
import type { SvgImgProps } from './SvgImg.types';

export const SvgImg: React.FC<SvgImgProps> = ({ src, title, styleClass }) => {
  return (
    <picture className={styleClass}>
      <source srcSet={src} type="image/svg+xml" />
      <img alt={title} title={title} />
    </picture>
  );
};
