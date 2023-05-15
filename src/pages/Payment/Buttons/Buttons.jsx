import React from "react";

const Signupbuttons = () => {
  return (
    <>
      <div class="block space-y-4 mt-5">
        <button
          type="submit"
          class="
      w-full
      bg-primary
       p-6
      py-2.5
      text-white
      font-xl
      text-xl
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
        Pay with Credit Card 
        </button>

        <button
          type="submit"
          class="
      w-full
       p-6
      py-2.5
       bg-none
      text-black
      font-bold
      text-lg
      leading-tight
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          style={{ background: "none", border: "1px solid #131E47" }}
        >
          Pay with PayPAl
        </button>
      </div>
    </>
  );
};

export default Signupbuttons;
