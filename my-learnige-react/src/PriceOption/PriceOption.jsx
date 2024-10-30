import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, duration, price, features } = option;
  return (
    <div className="bg-blue-700 rounded-md p-4 text-white text-center space-y-5 flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold"> {price}</span>
        <span className="text-3xl">/month</span>
      </h2>
      <h4 className="text-4xl">{name}</h4>
      <div className="flex-grow">
        {features.map((feature) => (
          <Feature key={feature.i} feature={feature}></Feature>
        ))}
      </div>
      <button className="w-full bg-green-600 p-4 rounded-full font-bold duration-500 hover:bg-green-400">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
