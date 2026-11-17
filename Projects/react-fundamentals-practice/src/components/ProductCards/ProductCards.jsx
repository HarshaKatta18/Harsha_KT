function ProductCards() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
  ];

  return (
    <div>
      <h2>Product Cards</h2>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <button>Add to Cart</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductCards;