import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useLocalStorage } from "react-use";
import bgimg from "../../assets/images/bg1.jpeg";
import { getPaymentHistory } from "../../store/actions";

export default function Home() {
  const [userDetails] = useLocalStorage("userDetails", null);
  const history = useHistory();
  const list = useSelector((state) => state.payment.paymentList);

  useEffect(() => {
    getPaymentHistory().then((res) => {});
  }, []);

  const renderList = () => {
    if (list && list.length > 0) {
      return (
        <div>
          <h1 class="text-md font-semibold">Payment History</h1>
          <div class="mx-4 lg:mx-0 sm:-mx-8 px-4 lg:px-0 sm:px-0 py-2  w-full">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created at
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Ammount
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list
                    .sort((a, b) => b.created - a.created)
                    .map((dt) => (
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                src={bgimg}
                                alt="img"
                                class="object-cover w-10 h-10 rounded-full"
                              />
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Test User
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {moment.unix(dt.created).format("lll")}
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {dt.amount / 100}
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {dt.status === "succeeded" ? (
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Success</span>
                            </span>
                          ) : (
                            <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-red-200 opacityPayment-50 rounded-full"
                              ></span>
                              <span class="relative">Failed</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 class="text-md font-semibold">Payment History</h1>
          <div class="mx-4 lg:mx-0 sm:-mx-8 px-4 lg:px-0 sm:px-0 py-2  w-full">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              Payment History Not Available
            </div>
          </div>
        </div>
      );
    }
  };

  if (!userDetails || !userDetails.id) {
    return <Redirect to="/login" />;
  }

  return (
    <div class="flex w-full">
      <div class="w-full ">
        <div class="bg-white p-8 rounded-md w-full">
          <button
            onClick={() => history.push("payment")}
            class="mb-5 float-right text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
          >
            New Payment
          </button>
          {renderList()}
        </div>
      </div>
    </div>
  );
}
