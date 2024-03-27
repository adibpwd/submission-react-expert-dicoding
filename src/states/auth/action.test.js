import { 
    describe, beforeEach, afterEach, it, expect, vi,
} from 'vitest';
import api from '../../utils/api';
import {
  asyncRegister,
} from './action';

/**
 * Skenario Test:
 *
 * - asyncRegister thunk
 *   Deskripsi: Skenario ini menguji fungsi asyncRegister, sebuah thunk yang bertugas melakukan proses registrasi.
 *   
 *   - should dispatch setUser action when registration succeeds
 *     Deskripsi: Pada kondisi ini, thunk harus memanggil fungsi register API dan mengirimkan aksi SETUSER dengan benar ketika proses registrasi berhasil.
 *   
 *   - should alert error message when registration fails
 *     Deskripsi: Pada kondisi ini, thunk harus memanggil fungsi register API dan mengirimkan aksi REGISTER_ERROR dengan pesan kesalahan yang benar ketika proses registrasi gagal.
 */

const fakeUser = {
  id: 'user-1',
  name: 'Test User',
  email: 'test@example.com',
};

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncRegister thunk', () => {
    beforeEach(() => {
        api.register = api.register;
    });

    afterEach(() => {
        api.register = api.register;

        delete api.register;
    });

    it('should dispatch setUser action when registration succeeds', async () => {
        api.register = () => Promise.resolve(fakeUser);

        const dispatch = vi.fn();

        await asyncRegister({ name: 'Test User', email: 'test@example.com', password: 'password' })(dispatch);

        expect(dispatch).toHaveBeenCalledWith({ type: 'SETUSER', payload: { user: fakeUser } });
    });

    it('should alert error message when registration fails', async () => {
        api.register = () => Promise.reject(fakeErrorResponse);

        const dispatch = vi.fn();

        await asyncRegister({ name: 'Test User', email: 'test@example.com', password: 'password' })(dispatch);

        expect(dispatch).toHaveBeenCalledWith({ type: 'REGISTER_ERROR', payload: fakeErrorResponse.message });
    });
});
