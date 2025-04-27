import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

function AllProducts() {
  const { products, searchQuery } = useAppContext();
  const [filteredProds, setFilteredProds] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProds(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProds(products);
    }
  }, [products, searchQuery]);
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col  w-max ">
        <p className="text-2xl font-medium uppercase ">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full self-end"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {filteredProds
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
}

export default AllProducts;
