'use client';
import { FC } from 'react';
import CardContent from '@mui/material/CardContent';
import { ImageStyled, CardStyled } from './styled';

interface Props {
  url: string;
  title: string;
  size?: 'small' | 'large';
}

const sizeMapping = {
  small: { width: 150, height: 150 },
  large: { width: 600, height: 600 }
};

export const PhotoCard: FC<Props> = ({ url, title, size = 'small' }) => {
  const { width, height } = sizeMapping[size];

  return (
    <CardStyled variant="outlined">
      <ImageStyled src={url} alt={title} width={width} height={height} />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </CardContent>
    </CardStyled>
  );
};
