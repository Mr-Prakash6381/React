import { ProudctDetails } from "./ProudctDetails";

export const ProudctShop = ({ name }) => {
  // const{name}=props
//   console.log(name);
  return (
    <div>
      <h1 className="text-2xl text-blue-800 font-bold my-3">
        List of Proudct Items
      </h1>
      {/* <div>
        <h3 className="p-3">{name.name}</h3>
        <p className="p-3">{name.price}</p>
        <p className="p-3">{name.description}</p>
      </div> */}
      <ProudctDetails

      deepName={name.name}
        deepPrice={name.price}
        deepDescription={name.description}
        
      />
    </div>
  );
};
