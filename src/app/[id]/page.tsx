import { FC } from 'react';
import { Metadata } from 'next';
import { IdParamIsNotNumberError } from '../../errors/IdParamIsNotNumberError';
import { PhotoService } from '../../services/PhotoService';
import container from '../../di/container';
import { PhotoCard } from '../../components/PhotoCard';
import { BackLink } from '../../components/BackLink';

interface Props {
  params: { id: string };
}

export const generateMetadata = async ({
  params: { id }
}: Props): Promise<Metadata> => {
  const photoService = container.get(PhotoService);
  const idNum = Number(id);

  try {
    if (isNaN(idNum)) throw new IdParamIsNotNumberError();
    const photo = await photoService.getById(idNum);
    return {
      title: 'Full photo size',
      description: photo.title
    };
  } catch (err) {
    console.log(err);
    return { title: 'Phosto not found' };
  }
};

const PhotoPage: FC<Props> = async ({ params: { id } }) => {
  const photoService = container.get(PhotoService);

  try {
    const idNum = Number(id);
    if (isNaN(idNum)) throw new IdParamIsNotNumberError();
    const photo = await photoService.getById(idNum);
    const { url, title } = photo;
    return (
      <div>
        <BackLink />
        <PhotoCard url={url} title={title} size={'large'} />
      </div>
    );
  } catch (err) {
    console.log(err);
    const typedError = err as Error;
    return <div>{typedError.message}</div>;
  }
};

export const generateStaticParams = async () => {
  const photoService = container.get(PhotoService);
  try {
    const photos = await photoService.getAllPhotos();
    return photos.map((photo) => ({ id: String(photo.id) }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default PhotoPage;
