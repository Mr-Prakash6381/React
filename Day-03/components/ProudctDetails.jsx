import proptypes from "prop-types";
export const ProudctDetails = ({
  deepName = "No Name",
  deepPrice = "No Price",
  deepDescription = "Noting Description",
}) => {
  return (
    <div>
      <h1>{deepName}</h1>
      <p>{deepPrice}</p>
      <p>{deepDescription}</p>
    </div>
  );
};

ProudctDetails.prototype = {
  deepName: proptypes.string.isRequired,
  deepPrice: proptypes.number.isRequired,
  deepDescription: proptypes.string.isRequired,
};

ProudctDetails.defaultProps = {
  deepName: "No Name",
  deepPrice: "No Price",
  deepDescription: "Noting",
};
