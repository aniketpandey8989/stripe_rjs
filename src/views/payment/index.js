import React from "react";
import { useLocalStorage } from "react-use";
// import { Redirect } from "react-router-dom";
import bgimg from "../../assets/images/bg1.jpeg";
import { removeUserDetailsFromApp } from "../../store/actions";
import { useHistory } from "react-router";
 
export default function Payment() {
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);
    const history = useHistory();
  // if (!userDetails || !userDetails.id) {
  //   return <Redirect to="/login" />;
  // }

  const onLogout = () => {
    setUserDetails(null);
    removeUserDetailsFromApp();
  };

  return (
    <div class="flex w-full">
      <div class="w-full">
        <div class="bg-white p-5 rounded-md w-full">
          <button onClick={()=>history.goBack()}  class=" text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
            Back
          </button>
        </div>
        <div class="flex">
          <div class=" md:md:w-1/2">
            <img src={bgimg} alt="img" class="object-cover w-50 mx-5" />
          </div>
          <div class="pl-2 lg:w-2/4 sm:p-12 md:w-1/2   ">
            <h1 class="text-3xl mb-5 font-semibold">What is Lorem Ipsum?</h1>

            <p>
              Lorem Ipsum, sometimes referred to as ‘lipsum’, is the placeholder
              text used in design when creating content. It helps designers plan
              out where the content will sit, without needing to wait for the
              content to be written and approved.
            </p>
            <br></br>
            <p>
              Lorem Ipsum, sometimes referred to as ‘lipsum’, is the placeholder
              text used in design when creating content. It helps designers plan
              out where the content will sit, without needing to wait for the
              content to be written and approved.
            </p>
          </div>
        </div>
        <div class="bg-white p-5 rounded-md w-full">
          <button class="float-right text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}
