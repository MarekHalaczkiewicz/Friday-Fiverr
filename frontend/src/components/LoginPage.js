import { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import "../components/LoginPage.css";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const location = useLocation();
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      //   dispatch(userActions.login(username, password, from));
      login(username, password, from);
    }
  }

  function login(username, password, from) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    return fetch(`http://localhost:8000/api/users/authenticate`, requestOptions)
      .then(handleResponse)
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        setUser({ ...user, loggedIn: true });
        console.log({ ...user, loggedIn: true });
        history.push(from);
        return user;
      });
  }

  function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
  }

  function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          logout();
          // location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }

  return (
    <div className="Login">
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <strong>Username:</strong>
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !username ? " is-invalid" : "")
            }
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>
            <strong>Password:</strong>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group2">
          <button className="button">
            {/* {user.loggedIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )} */}
            Log in
          </button>
          {/* <Link to="/register" className="btn btn-link">
            Register
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export { LoginPage };
