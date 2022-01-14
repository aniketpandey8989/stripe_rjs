import React, { useState } from "react";
import bgimg from "../../assets/images/bg1.jpeg";
import { login } from "../../store/actions";
import { toaster } from "../../views/util";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (email && password) {
      const obj = {
        email: email,
        password: password,
      };
      login(obj).then((res) => {
        if (res && res.id) {
          props.history.push("/");
        }
      });
    } else {
      toaster.show(
        "Please Enter email and password",
        toaster.ERROR
      );
    }
  };

  const onHandleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div class="flex">
      <div class=" md:md:w-1/2">
        <img src={bgimg} alt="img" class="object-cover w-50 h-screen" />
      </div>
      <div class="flex items-center justify-center p-6 lg:w-2/4 sm:p-12 md:w-1/2 m-auto">
        <div class="w-1/2">
          <h1 class="text-3xl mb-5 font-semibold">Login to Your Account</h1>

          <label class="block text-sm">Email</label>
          <input
            name="email"
            onChange={(e) => onHandleChange(e)}
            type="email"
            class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
            placeholder=""
          />

          <div>
            <label class="block mt-4 text-sm">Password</label>
            <input
              name="password"
              onChange={(e) => onHandleChange(e)}
              class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder=""
              type="password"
            />
          </div>

          <button
            class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            // href="#"
            onClick={() => onSubmit()}
          >
            Log in
          </button>

          <hr class="my-8" />
        </div>
      </div>
    </div>
  );
}
