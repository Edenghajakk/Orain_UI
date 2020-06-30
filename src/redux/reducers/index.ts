import { combineReducers } from 'redux';
import landingReducer from './LandingReducer';
import Onboarding from './Onboarding';

const rootReducer = combineReducers({
  landingReducer: landingReducer,
  Onboarding: Onboarding,
});

export default rootReducer;
