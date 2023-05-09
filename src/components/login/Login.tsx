import { useState } from 'react';
import './Login.scss';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div><h1>Login</h1></div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary" style={{ display: 'block', margin: '0 auto' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
