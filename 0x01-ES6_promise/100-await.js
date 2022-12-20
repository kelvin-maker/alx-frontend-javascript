import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let photo = null; let
    user = null;
  try {
    photo = await uploadPhoto();
  } catch (error) {
    console.error(error);
  }
  try {
    user = await createUser();
  } catch (error) {
    console.error(error);
  }
  return {
    photo,
    user,
  };
}

export default asyncUploadUser;
