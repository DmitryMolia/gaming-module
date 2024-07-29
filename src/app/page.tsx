import { FC } from 'react';
import container from '../di/container';
import { PhotoService } from '../services/PhotoService';
import { PhotoList } from '../components/PhotoList';
import { SearchBar } from '../components/SearchBar';
import { filterPhotosByTitle } from '../utils/filterPhotosByTitle';
import { italicizePhotoTitle } from '../utils/italicizePhotoTitle';

interface Props {
  searchParams: { title?: string };
}

const HomePage: FC<Props> = async ({ searchParams: { title = '' } }) => {
  const photoService = container.get(PhotoService);

  try {
    let photos = await photoService.getAllPhotos();
    photos = title
      ? filterPhotosByTitle(title, photos).map((photo) =>
          italicizePhotoTitle(title, photo)
        )
      : photos;

    return (
      <div>
        <SearchBar initTitle={title} />
        {!photos.length ? (
          <div>No results found</div>
        ) : (
          <PhotoList photos={photos} />
        )}
      </div>
    );
  } catch (err) {
    const typedError = err as Error;

    return <div>{typedError.message}</div>;
  }
};

export default HomePage;
