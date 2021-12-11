import { createContext } from 'react';
import { User } from '../types/user';

const initialUserState: User = {
  name: '',
};
interface UserInfos {
    id?: number;
    name: string;
}

interface UserActions {
    type: 'ADD_INFO' | 'REMOVE_INFO';
    payload: UserInfos
}

export const userReducer = (state: User, action: UserActions): User => {
  switch (action.type) {
    case 'ADD_INFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'REMOVE_INFO':
      return initialUserState;
    default:
      return state;
  }
};

interface UserContextProps {
    userState: User;
    userDispatch: React.Dispatch<UserActions>;
}

const UserContext = createContext<UserContextProps>({
  userState: initialUserState,
  userDispatch: () => {},
});

const UserContextConsumer = UserContext.Consumer;
const UserContextProvider = UserContext.Provider;

export {
  UserInfos,
  UserContextProps,
  initialUserState,
  UserContextConsumer,
  UserContextProvider,
  UserContext,
};
