import { faHome, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bgimg from "../../assets/images/bg1.jpeg";
import { useLocalStorage } from "react-use";
import { NavLink } from "react-router-dom";
import { removeUserDetailsFromApp } from "../../store/actions";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);
  const history = useHistory()

  const onLogout = () => {
    console.log(userDetails)
    setUserDetails(null);
    removeUserDetailsFromApp();
    history.push('/login')
  };

  return (
      <div class="min-h-screen">
        <div class="h-full p-3 space-y-2 w-60 bg-white text-gray-800 h-screen bg-gray-300">
          <div class="flex items-center p-2 space-x-4">
            <img
              src={bgimg}
              alt="img"
              class="object-cover w-10 h-10 rounded-full"
            />
            <div>
              <h2 class="text-lg font-semibold">{userDetails?.email}</h2>
            </div>
          </div>
          <div class="divide-y divide-gray-300">
            <ul class="pt-2 pb-2 space-y-1 text-sm">
              <NavLink activeClassName="bg-gray-100 block" exact={true}   to="/">
              <li class=" text-gray-900 flex items-center p-2 space-x-3 rounded-md bg-transparent">
                  <FontAwesomeIcon icon={faHome} />
                  <span>Home</span>
              </li>
              </NavLink>
            </ul>
            <ul class=" pb-2 space-y-1 text-sm">
            <NavLink exact={true} activeClassName="bg-gray-100 block"  to="/settings">
            <li class=" text-gray-900 flex items-center p-2 space-x-3 rounded-md bg-transparent">
                  <FontAwesomeIcon icon={faCog} />
                  <span>Settings</span>
              </li>
              </NavLink>
            </ul>
            <ul class=" pb-2 space-y-1 text-sm">
            <a href="#/" onClick={(e) => {e.preventDefault();onLogout()}}>
            <li class=" text-gray-900 flex items-center p-2 space-x-3 rounded-md bg-transparent">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span>Logout</span>
              </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

  );
}
