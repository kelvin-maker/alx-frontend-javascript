import { uploadPhoto, createUser } from "./utils";

async function handleProfileSignup() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();
    const [photo, user] = await Promise.all([photoPromise, userPromise]);
    console.log(photo.body, user.firstName, user.lastName);
  } catch (error) {
    console.log("Signup system offline");
  }
}

export default handleProfileSignup;
