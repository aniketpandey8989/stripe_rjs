import React, { useState } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useLocalStorage } from "react-use";
import bgimg from "../../assets/images/laptop.jpg"
import { makePayment } from "../../store/actions";
import { toaster } from "../../views/util";

export default function Payment() {
  const [userDetails] = useLocalStorage("userDetails", null);
  const [ammount, setAmmount] = useState(350)
    const history = useHistory();
    
  if (!userDetails || !userDetails.id) {
    return <Redirect to="/login" />;
  }

  const handlePayment = () => {
    if(ammount && ammount >= 1){
      const paymentPayload = {
        amount: ammount
      }
      makePayment(paymentPayload).then((res) => {
        if (res && res.status === "succeeded") {
          toaster.show(
            `Payment of ${ammount} Successful to app`,
            toaster.SUCCESS
          );
          history.push("/")
        }
      });
    }else{
      toaster.show(
        "Please Enter Ammount greater than 1",
        toaster.ERROR
      );
    }
   
  }
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
            <h1 class="text-3xl mb-5 font-semibold">HP Pavilion 15</h1>

            <p>
            HP Pavilion 15, Ryzen 5- 16GB RAM/512GB SSD 15.6-inch(39.6 cm) Laptop, FHD Anti-Glare Display/Radeon Graphics/Backlit KB/Alexa/250 nits/B&O Audio/Fingerprint Reader/Win 11/1.75 kg, 15-eh1108AU
            </p>
            <br></br>
           <ul>
             <li>
             Processor: AMD Ryzen 5 5500U (up to 4.0 GHz max boost clock, 8 MB L3 cache, 6 cores, 12 threads) | Memory: 16 GB DDR4-3200 SDRAM (1 x 16 GB) | Storage: 512 GB PCIe NVMe M.2 SSD  
             </li>
             <li>
             Operating System & Pre-installed Software: Pre-loaded Windows 11 Home with lifetime validity | Microsoft Office Home & Student 2019  
             </li>
           </ul>
          </div>
        </div>
        <div class="bg-white p-5 rounded-md w-full flex items-center justify-end">
          <input onChange={e => setAmmount(e.target.value)} value={ammount} class="px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
             min="1" type= "number" placeholder="Enter Ammount"/>
          <button onClick={() => handlePayment()} type="submit" class="ml-4 text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}
