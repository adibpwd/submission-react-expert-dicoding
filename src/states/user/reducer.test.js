import { describe, it, expect } from 'vitest';
import userReducer from './reducer';
import { ActionType } from './action';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual([]);
  });

  it('should handle RECEIVE_USERS action', () => {
    const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users,
      },
    };
    expect(userReducer([], action)).toEqual(users);
  });

  it('should return current state for unknown action type', () => {
    const currentState = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    const action = { type: 'UNKNOWN_ACTION' };
    expect(userReducer(currentState, action)).toEqual(currentState);
  });
});
