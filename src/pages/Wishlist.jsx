import React from 'react';
import WishlistBreadcrumb from "../components/Home/Categories/Wishlist/WishlistBreadcrumb"
import WishlistPage from '../components/Home/Categories/Wishlist/WishlistTable';
const Wishlist = ({exchangeRate}) => {
    return ( <>
     <div className="container10">
<WishlistBreadcrumb/>
<WishlistPage     exchangeRate={exchangeRate}
/>



     </div>
    </>   );
}

export default Wishlist;