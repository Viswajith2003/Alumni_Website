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

let userProfile2 = {
  address: null,
  dob: null,
  skills: null,
};

// UID
export const setUserUID = (uid) => {
  userUID = uid;
};

export const getUserUID = () => {
  return userUID;
};

// Profile
export const setUserProfile = (profile) => {
  userProfile = { ...userProfile, ...profile };
  // Check if profile contains imageUrl and update accordingly
  if (profile.imageUrl) {
    userProfile.imageUrl = profile.imageUrl;
  } else {
    userProfile = { ...userProfile, ...profile };
  }
};

export const getUserProfile = () => {
  return userProfile;
};

// Profile2
export const setUserProfile2 = (profile2) => {
  userProfile2 = { ...userProfile2, ...profile2 };
};

export const getUserProfile2 = () => {
  return userProfile2;
};
