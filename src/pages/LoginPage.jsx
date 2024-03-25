import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogin } from '../states/auth/action';
import { setIsLoading } from '../states/isPreload/action';

function LoginPage() {
  const {
    auth = null,
  } = useSelector((states) => states);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setIsLoading(false));
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setIsLoading(true));
      await dispatch(asyncLogin(formData));
      dispatch(setIsLoading(false));
    } catch (error) {
      alert(error.message);
    }
  };

  if (auth !== null && auth !== undefined) {
    window.location.href = '/';
  }

  return (
    <div className="auth-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Belum punya akun? <Link to="/register">Daftar sekarang</Link>.</p>
    </div>
  );
}

export default LoginPage;
