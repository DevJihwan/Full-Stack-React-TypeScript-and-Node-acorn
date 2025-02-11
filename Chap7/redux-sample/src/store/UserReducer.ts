export const USER_TYPE = "USER_TYPE";

export interface User {
  id: number;
  username: string;
  email: string;
  city: string;
}

export interface UseraAction {
  type: string;
  payload: User | null;
}

export const UserReducer = (
  state: User | null = null,
  action: UseraAction
): User | null => {
  switch (action.type) {
    case USER_TYPE:
      return action.payload;
    default:
      return state;
  }
};
