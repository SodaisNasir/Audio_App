export const USER_DETAILS = 'USER_DETAILS';
export const OTP = 'OTP';

const initial_state = {
  userDetails: null,
  otp: null,
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case OTP:
      return {
        ...state,
        otp: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
