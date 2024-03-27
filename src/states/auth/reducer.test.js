import { describe, it, expect } from 'vitest';
import authReducer from './reducer';
import { ActionType } from './action';

/**
 * Skenario Test:
 *
 * - setUser action
 *   Deskripsi: Skenario ini menguji apakah reducer dapat menangani aksi SETUSER dengan benar.
 *   
 * - unsetUser action
 *   Deskripsi: Skenario ini menguji apakah reducer dapat menangani aksi UNSETUSER dengan benar.
 *   
 * - unknown action type
 *   Deskripsi: Skenario ini menguji apakah reducer mengembalikan state saat ini jika tipe aksi tidak dikenali.
 */

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(null);
  });

  it('should handle SETUSER action', () => {
    const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
    const action = {
      type: ActionType.SETUSER,
      payload: {
        user,
      },
    };
    expect(authReducer(null, action)).toEqual(user);
  });

  it('should handle UNSETUSER action', () => {
    const currentState = { id: 1, name: 'John Doe', email: 'john@example.com' };
    const action = { type: ActionType.UNSETUSER };
    expect(authReducer(currentState, action)).toEqual(null);
  });

  it('should return current state for unknown action type', () => {
    const currentState = { id: 1, name: 'John Doe', email: 'john@example.com' };
    const action = { type: 'UNKNOWN_ACTION' };
    expect(authReducer(currentState, action)).toEqual(currentState);
  });
});
