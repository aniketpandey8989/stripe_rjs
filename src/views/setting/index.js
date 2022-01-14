import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { updatePassword } from "../../store/actions";
import { toaster } from "../../views/util";

export default function Settings() {
  const [userDetails] = useLocalStorage("userDetails", null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!userDetails || !userDetails.id) {
    return <Redirect to="/login" />;
  }

  const onSubmit = () => {
    if (newPassword === confirmPassword && currentPassword) {
      const payload = {
        currentPassword: currentPassword,
        password: newPassword,
      };
      updatePassword(payload).then((res) => {
        if (res && res.id) {
          console.log("Password updated")
        }
      });
    } else {
      toaster.show(
        "Please fill all fields and new password must match confirm password",
        toaster.ERROR
      );
    }
  };

  return (
    <div class="flex w-full">
      <div class=" p-6 lg:w-2/4 sm:p-12 mx-auto">
        <div class="">
          <h1 class="text-3xl mb-5 font-semibold">Change Password</h1>
          <div>
            <label class="block mt-4 text-sm">Old Password</label>
            <input
              class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder=""
              type="password"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div>
            <label class="block mt-4 text-sm">New Password</label>
            <input
              class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder=""
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label class="block mt-4 text-sm">Confirm Password</label>
            <input
              class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder=""
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            href="#"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
          <hr class="my-8" />
        </div>
      </div>
    </div>
  );
}
