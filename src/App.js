
import { useEffect, useState } from "react";
import Bloglist from "./COMPONENTS/Bloglist";
import BlogStyle from "./COMPONENTS/BlogStyle";
import "./CSS/App.css"
import Menu from "./COMPONENTS/Menu";
import Routing from "./COMPONENTS/Routing";
import Signin from "./COMPONENTS/Signin";
import Signout from "./COMPONENTS/Signout";
import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";


const App = () =>
{

  let navigate = useNavigate();
  let [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() =>
  {
    // if (localStorage.getItem('bloglist') === null)
    localStorage.setItem('bloglist', JSON.stringify(Bloglist));

    // if (localStorage.getItem('blogtitlestyle') === null)
    localStorage.setItem('blogtitlestyle', JSON.stringify(BlogStyle));

    // if (localStorage.getItem('blogbodystyle') === null)
    localStorage.setItem('blogbodystyle', JSON.stringify(BlogStyle));
  }, []);


  const handleSignout = () =>
  {
    setLoggedIn(false);
    navigate("/");
  }

  const handleSignin = (name, pass) =>
  {
    if (pass === localStorage.getItem(name)) {
      setLoggedIn(true);
    }
    else {
      alert("Wrong pass");
    }
  }



  return (
    <div>


      <div className="header">
        {
          loggedIn ? <Signout handleSignout={handleSignout} /> : <Link to="/sign-up">Register</Link>
        }
      </div>

      <div>
        {
          loggedIn ?

            <div className="navbar">
              <Menu />
            </div>
            :
            <div>
              <div className="navbar">
                <Menu />
              </div>
            </div>
        }

      </div>
      <div className="routing">
        {
          loggedIn || location.pathname !== "/" ? <Routing /> : <Signin handleSignin={handleSignin} />
        }


      </div>
    </div>
  );
}

export default App;
