import React from "react";
import { useLocalStorage } from "react-use";
// import { Redirect } from "react-router-dom";
import bgimg from "../../assets/images/bg1.jpeg";
import { removeUserDetailsFromApp } from "../../store/actions";

export default function Settings() {
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);

  // if (!userDetails || !userDetails.id) {
  //   return <Redirect to="/login" />;
  // }

  const onLogout = () => {
    setUserDetails(null);
    removeUserDetailsFromApp();
  };

  return (
    <div class="flex w-full">
  <div class=" p-6 lg:w-2/4 sm:p-12">
          <div class="">
            <h1 class="text-3xl mb-5 font-semibold">Change Password</h1>

            <div>
              <label class="block mt-4 text-sm">Old Password</label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder=""
                type="password"
              />
            </div>
            <div>
              <label class="block mt-4 text-sm">New Password</label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder=""
                type="password"
              />
            </div>
            <div>
              <label class="block mt-4 text-sm">Confirm Password</label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder=""
                type="password"
              />
            </div>
            <p class="mt-4">
              <a
                class="text-sm text-blue-600 hover:underline"
                href="./forgot-password.html"
              >
                Forgot your password?
              </a>
            </p>

            <button
              class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              href="#"
            >
             Submit
            </button>

            <hr class="my-8" />
          </div>
        </div>
    </div>
  );
}
