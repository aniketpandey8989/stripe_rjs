import React from "react";
import bgimg from "../../assets/images/bg1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {


  return (
      <div class="h-screen">
        <div class="h-full p-3 space-y-2 w-60 bg-white text-gray-800 h-screen bg-gray-300">
          <div class="flex items-center p-2 space-x-4">
            <img
              src={bgimg}
              alt="img"
              class="object-cover w-10 h-10 rounded-full"
            />

            <div>
              <h2 class="text-lg font-semibold">Leroy Jenkins</h2>
              <span class="flex items-center space-x-1">
                <a href="#" class="text-xs hover:underline text-gray-600">
                  View profile
                </a>
              </span>
            </div>
          </div>

          <div class="divide-y divide-gray-300">
            <ul class="pt-2 pb-4 space-y-1 text-sm">
              <li class="bg-gray-100 text-gray-900">
                <a href="/" class="flex items-center p-2 space-x-3 rounded-md">
                  <FontAwesomeIcon icon={faHome} />

                  <span>Home</span>
                </a>
              </li>
            </ul>
            <ul class="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <a href="/settings" class="flex items-center p-2 space-x-3 rounded-md">
                  <FontAwesomeIcon icon={faCog} />

                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

  );
}
