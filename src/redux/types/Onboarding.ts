interface Address {
  addressLine: string;
  postal: number | string;
  state: string;
}

export interface OnboardingState {
  email: string;
  username: string;
  password: string;
  address: Address;
  profilePicture: string;
}

export const SET_EMAIL = 'SET_EMAIL';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_ADDRESS_LINE = 'SET_ADDRESS_LINE';
export const SET_ADDRESS_POSTAL = 'SET_ADDRESS_POSTAL';
export const SET_ADDRESS_STATE = 'SET_ADDRESS_STATE';
export const SET_PICTURE = 'SET_PICTURE';

interface SetEmailAction {
  type: typeof SET_EMAIL;
  email: string;
}

interface SetUsernameAction {
  type: typeof SET_USERNAME;
  username: string;
}

interface SetPasswordAction {
  type: typeof SET_PASSWORD;
  password: string;
}

interface SetAddressAction {
  type: typeof SET_ADDRESS_LINE;
  addressLine: string;
}

interface SetPostalAction {
  type: typeof SET_ADDRESS_POSTAL;
  postal: number;
}

interface SetStateAction {
  type: typeof SET_ADDRESS_STATE;
  state: string;
}

interface SetPictureAction {
  type: typeof SET_PICTURE;
  profilePicture: string;
}

export type OnboardingActionTypes =
  | SetEmailAction
  | SetUsernameAction
  | SetPasswordAction
  | SetAddressAction
  | SetPostalAction
  | SetStateAction
  | SetPictureAction;
