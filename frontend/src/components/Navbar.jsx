import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-bgreylighter">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="mr-8">
                <NavLink to="/" className="flex items-center py-2 px-4 ">
                  <img className="h-12 w-12" src={logo} alt="logo" />
                </NavLink>
              </div>
              <div className="flex items-center space-x-4 text-bgrey transform ">
                <div className="transform hover:-translate-y-0.5 duration-300">
                  <NavLink to="/">Home</NavLink>
                </div>
                <div className="transform hover:-translate-y-0.5 duration-300">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6 ">
              {auth ? (
                <div className="flex">
                  <div className="mx-10">
                  <Profile auth={auth} setAuthorization={setAuthorization} />
                  </div>
                  <ButtonDefault function={onLoggedOut} name="Logout" />
                </div>
              ) : (
                <Login onLoggedIn={onLoggedIn} />
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
  

export default Navbar
