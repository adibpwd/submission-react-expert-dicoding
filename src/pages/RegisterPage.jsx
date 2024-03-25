import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncRegister } from '../states/auth/action';
import { setIsLoading } from '../states/isPreload/action';

function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const auth = useSelector((state) => state.auth);
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
      await dispatch(asyncRegister(formData));
      setIsRegisterSuccess(true);
      dispatch(setIsLoading(false));
    } catch (error) {
      alert(error.message);
    }
  };

  if (isRegisterSuccess && auth !== null) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div className="auth-container">
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Sudah punya akun? <Link to="/login">Login sekarang</Link>.</p>
    </div>
  );
}

export default RegisterPage;
