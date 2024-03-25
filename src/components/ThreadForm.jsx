import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../states/isPreload/action';

function ThreadForm({ onSubmit }) {
  const [formData, setFormData] = useState({ title: '', body: '', category: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    try {
        dispatch(setIsLoading(true));
        onSubmit(formData);
        setFormData({ title: '', body: '', category: '' });
        dispatch(setIsLoading(false));
    } catch (error) {
        console.log(error);
        dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="create-thread-form">
      <h2>Create Thread</h2>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} /> <br /> <br />
      <textarea name="body" placeholder="Body" value={formData.body} onChange={handleChange} /> <br /> <br />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} /> <br /><br />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

ThreadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ThreadForm;
