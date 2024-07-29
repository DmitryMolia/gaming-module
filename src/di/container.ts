import { Container, interfaces } from 'inversify';
import { PhotoRepository } from '../repositories/PhotoRepository';
import { PhotoService } from '../services/PhotoService';

const container: interfaces.Container = new Container();

container.bind<PhotoRepository>(PhotoRepository).toSelf().inSingletonScope();
container.bind<PhotoService>(PhotoService).toSelf().inSingletonScope();

export default container;