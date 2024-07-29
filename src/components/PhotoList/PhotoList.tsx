import { FC } from 'react';
import { IPhoto } from '../../interfaces/IPhoto';
import { ContainerGrid } from '../ContainerGrid';
import { PhotoCard } from '../PhotoCard';
import { LinkStyled } from './styled';

interface Props {
  photos: IPhoto[];
}

export const PhotoList: FC<Props> = ({ photos }) => (
  <ContainerGrid>
    {photos.map((photo) => {
      const { id, title, thumbnailUrl } = photo;
      return (
        <LinkStyled key={id} href={`/${id}`}>
          <PhotoCard url={thumbnailUrl} title={title} />{' '}
        </LinkStyled>
      );
    })}
  </ContainerGrid>
);
