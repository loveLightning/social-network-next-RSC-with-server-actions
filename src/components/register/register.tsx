import Link from 'next/link';

export const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
        <div className="login-link">
          <Link href="/login">Already have an account? Login here</Link>
        </div>
      </div>
    </div>
  );
};
