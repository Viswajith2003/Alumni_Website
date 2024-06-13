let userUID = null;
let userProfile = {
  imageUrl: null,
  name: null,
  email: null,
  phone: null,
  middleName: null,
  lastName: null,
  gender: null,
  batch: null,
  course: null,
  connectedTo: null,
};

export const setUserUID = (uid) => {
  userUID = uid;
};

export const getUserUID = () => {
  return userUID;
};

export const setUserProfile = (profile) => {
  userProfile = { ...userProfile, ...profile };
};

export const getUserProfile = () => {
  return userProfile;
};
