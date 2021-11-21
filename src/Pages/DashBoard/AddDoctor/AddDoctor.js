import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    fetch('http://localhost:4000/doctors', {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <h2>hello doctor</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: '50%' }}
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: '50%' }}
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
