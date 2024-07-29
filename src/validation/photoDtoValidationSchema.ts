import { object, string, number } from 'yup';

export const photoDtoValidationSchema = object({
  id: number().required().positive().integer(),
  title: string().required(),
  url: string().required().url(),
  thumbnailUrl: string().required().url()
});
