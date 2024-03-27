import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncLogin } from '../states/auth/action';
import { setIsLoading } from '../states/isPreload/action';

function LoginPage() {
  const { auth = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(false));
}, [dispatch]);

const onLogin = ({ email, password }) => {
  dispatch(asyncLogin({ email, password }));
};

  if (auth !== null && auth !== undefined) {
    window.location.href = '/';
  }

  return (
    <div className="auth-container">
      <h1>Login Page 1</h1>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? <Link to="/register">Daftar sekarang</Link>.</p>
    </div>
  );
}

export default LoginPage;
