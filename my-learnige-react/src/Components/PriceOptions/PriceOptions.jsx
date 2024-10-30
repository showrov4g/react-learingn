import React from "react";
import PriceOption from "../../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceList = [
    {
      id: 1,
      name: "Basic Plan",
      duration: "1 Month",
      price: 30,
      features: ["Access to gym equipment", "Locker room access"],
    },
    {
      id: 2,
      name: "Standard Plan",
      duration: "3 Months",
      price: 80,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      duration: "6 Months",
      price: 150,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Personal trainer (1 session/month)",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      duration: "12 Months",
      price: 280,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited personal trainer sessions",
        "Free nutrition consultation",
      ],
    },
  ];
  return (
    <>
      <h1>This is price option page</h1>
      <div className="m-12 grid md:grid-cols-4 gap-5 ">
        {priceList.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </>
  );
};

export default PriceOptions;
