import { 
    describe, beforeEach, afterEach, it, expect, vi, 
} from 'vitest';
import api from '../../utils/api';
import { asyncGetListUsers } from './action';

/**
 * Skenario Test:
 *  Deskripsi: Skenario ini menguji fungsi getAllUsers, sebuah thunk yang bertugas melakukan proses pengambilan semua users.
 * 
 * - should dispatch receiveUsers action when fetching users succeeds
 *   Deskripsi : Thunk untuk memanggil pengambilan semua users API, dan mengirim RECEIVE_USERS ketika status berhasil
 * 
 * - should not dispatch any action when fetching users fails
 *   Deskripsi : Thunk untuk memanggil pengambilan semua users API, dan mengirimkan aksi RECEIVE_USERS_ERROR dengan pesan kesalahan yang benar ketika proses get semua users gagal.
 * 
 * */

const fakeUsers = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
];

const fakeErrorResponse = new Error('Failed to fetch users');

describe('asyncGetListUsers thunk', () => {
  beforeEach(() => {
    api.getAllUsers = api.getAllUsers;
  });

  afterEach(() => {
    api.getAllUsers = api.getAllUsers;
    delete api.getAllUsers;
  });

  it('should dispatch receiveUsers action when fetching users succeeds', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsers);

    const dispatch = vi.fn();

    await asyncGetListUsers()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: 'RECEIVE_USERS', payload: { users: fakeUsers } });
  });

  it('should not dispatch any action when fetching users fails', async () => {
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();

    await asyncGetListUsers()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: 'RECEIVE_USERS_ERROR', payload: fakeErrorResponse.message });
  });
});
