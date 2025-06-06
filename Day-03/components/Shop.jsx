import { useState } from "react";
import { ProudctShop } from "./ProudctShop";

export const Shop = () => {
  const [proudct, setProduct] = useState({
    name: "Vivo Y20",
    price: 16000,
    description: "6GB RAM with 128GB",
  });

  return (
    <div className="text-3xl font-bold not-even:">
      Shop
      <ProudctShop name={proudct} />
    </div>
  );
};
