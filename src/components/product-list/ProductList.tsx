import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in ", category);
    setProducts(["Clothing", "Home"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
