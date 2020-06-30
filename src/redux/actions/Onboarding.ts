import {
  SET_EMAIL,
  SET_USERNAME,
  SET_PASSWORD,
  SET_ADDRESS_LINE,
  SET_ADDRESS_POSTAL,
  SET_ADDRESS_STATE,
  SET_PICTURE,
  OnboardingActionTypes,
} from '_redux/types/Onboarding';

export const setEmail = (email: string): OnboardingActionTypes => ({
  type: SET_EMAIL,
  email: email,
});

export const setUsername = (username: string): OnboardingActionTypes => ({
  type: SET_USERNAME,
  username: username,
});

export const setPassword = (password: string): OnboardingActionTypes => ({
  type: SET_PASSWORD,
  password: password,
});

export const setAddressLine = (addressLine: string): OnboardingActionTypes => ({
  type: SET_ADDRESS_LINE,
  addressLine: addressLine,
});

export const SetAddressPostal = (postal: number): OnboardingActionTypes => ({
  type: SET_ADDRESS_POSTAL,
  postal: postal,
});

export const setAddressState = (state: string): OnboardingActionTypes => ({
  type: SET_ADDRESS_STATE,
  state: state,
});

export const setPicture = (profilePicture: string): OnboardingActionTypes => ({
  type: SET_PICTURE,
  profilePicture: profilePicture,
});
