const Product = (product) => {
  const incrementQuantity =(index) =>{
      console.log("Button click")
  }

  const { id, name, price, quantity } = product.product;
  console.log(product);
  return (
    <div className="space-y-5">
      <div className="my-6">
        <h1 className="text-5xl">Product Name: {name}</h1>
        <h2 className="text-4xl">Product price: {price}</h2>
      </div>
      <div className="join join-vertical lg:join-horizontal">
        <button className="btn join-item" onClick={()=>incrementQuantity(product.product.index)} >Add</button>
        <button className="btn join-item">{quantity}</button>
        <button className="btn join-item">Remove</button>
      </div>
      {/* total price show */}
      <div>
        <h2 className="bg-slate-700 text-3xl inline-block p-10 rounded-xl text-white"> 
          Total price: {quantity*price}</h2>
      </div>
    </div>
  );
};

export default Product;
