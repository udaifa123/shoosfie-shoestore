import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';

const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const isWishlisted = wishlist.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <button onClick={toggleWishlist}>
      {isWishlisted ? '' : ''}
    </button>
  );
};

export default WishlistButton;
