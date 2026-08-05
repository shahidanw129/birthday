import '../css/login.css';

function LoginForm() {
  return (
    <form className="login-form">
      <h2>Welcome, Falak</h2>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Enter</button>
    </form>
  );
}

export default LoginForm;
