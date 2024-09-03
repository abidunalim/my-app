import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  
 [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();  

    // Lakukan validasi di sini
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);  


    // Jika tidak ada error, lakukan submit ke server
    if (Object.keys(newErrors).length === 0) {
      console.log('Submit form with:', { email, password });
      // Di sini kamu bisa mengirim data ke server untuk proses login
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  

        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  

        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>  

    </form>
  );
}

export default LoginForm;