import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const WishlistPage = () => {
  const wishlist = useSelector(state => state.wishlist);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
