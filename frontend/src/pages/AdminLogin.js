const AdminLogin = () => {
    return(
        <div className="login-box">
          <form action="">
            <h1>Login</h1>
            <div className="logo">
              <img></img>
            </div>
            <div classname="input-box">
              <input type="text" placeholder="Username" required></input>
            </div>
            <div classname="input-box">
              <input type="password" placeholder="Password" required></input>
            </div>
          </form>
        </div>
    )
}

export default AdminLogin;