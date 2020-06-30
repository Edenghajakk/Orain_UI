import {
  OnboardingState,
  OnboardingActionTypes,
  SET_EMAIL,
  SET_USERNAME,
  SET_PASSWORD,
  SET_ADDRESS_LINE,
  SET_ADDRESS_POSTAL,
  SET_ADDRESS_STATE,
  SET_PICTURE,
} from '_redux/types/Onboarding';
const INITIAL_STATE: OnboardingState = {
  email: '',
  username: '',
  password: '',
  address: {
    addressLine: '',
    postal: '',
    state: '',
  },
  profilePicture: '',
};

const Onboarding = (
  state = INITIAL_STATE,
  action: OnboardingActionTypes
): OnboardingState => {
  switch (action.type) {
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_USERNAME: {
      return {
        ...state,
        username: action.username,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SET_ADDRESS_LINE: {
      return {
        ...state,
        address: {
          ...state.address,
          addressLine: action.addressLine,
        },
      };
    }
    case SET_ADDRESS_POSTAL: {
      return {
        ...state,
        address: {
          ...state.address,
          postal: action.postal,
        },
      };
    }
    case SET_ADDRESS_STATE: {
      return {
        ...state,
        address: {
          ...state.address,
          state: action.state,
        },
      };
    }
    case SET_PICTURE: {
      return {
        ...state,
        profilePicture: action.profilePicture,
      };
    }
    default:
      return state;
  }
};

export default Onboarding;
