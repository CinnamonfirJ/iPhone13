import { Link } from "react-router-dom/cjs/react-router-dom";

const ProductCard = ({ imgURL, name, price, color }) => {
  return (
    <div>
      <Link to={`/product/${color}`}>
        <img src={imgURL} alt='phone' width={200} />
        <h3 className=' text-xl font-bold mt-4'>{name}</h3>
        <p className=' mt-2 info-text'>Type: {color}</p>
        <p className=' mt-2 info-text text-sm'>Price: {price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
