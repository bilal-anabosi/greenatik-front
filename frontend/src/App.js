import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SignUpPage from './pages/account/Pages/SignUpPage.jsx';
import LoginPage from './pages/account/Pages/LoginPage.jsx';
import SetPasswordPage from './pages/account/Pages/SetPasswordPage.jsx';
import ForgetPage from './pages/account/Pages/ForgetPage.jsx';
import AccessDenied from './pages/account/Pages/AccessDined';
import Error404 from './pages/account/Pages/Error404.jsx';
import Store from './pages/Store';
import AllBlogs from './pages/blog/AllBlogs';
import BlogCategory from './pages/blog/BlogCategory';
import SingleBlog from './pages/blog/SingleBlog';
import AllBlogsDash from "./pages/dashboard/blog/AllBlogsDash";
import CreateNewBlog from "./pages/dashboard/blog/CreateNewBlog";
import OpeningBlog from './components/blog/OpeningBlog';
import Posts from "./pages/postsPage/Posts.jsx";
import Profile from './pages/account/Pages/profile/Profile.jsx';
import ShopSingle from './pages/shop-single.jsx';
import CreatePost from './pages/dashboard/post.jsx';
import SinglePost from './pages/SinglePost.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Wide from './pages/Wide';
import LeaderBoard from './pages/LeaderBoard';
import EditProductPage from './pages/editProduct/EditProductPage';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import PostsList from './pages/dashboard/post-list.jsx';
import Test from './pages/Test';
import ProductsPage from './pages/ProductsPage';
import CreateProductForm from './pages/CreateProductForm';
import AboutUs from './pages/AboutUs.jsx';
import DeliveryOrders from "./pages/DeliveryOrders.jsx";
import OrderDetails from './pages/OrderDetails';
import EditPost from './pages/dashboard/edit-post.jsx';
import { useState, useEffect } from 'react';
import RiseLoader from "react-spinners/RiseLoader";
import Footer from './components/footer.jsx';
import { ToastContainer } from 'react-toastify';
import DeliveryContributions from './pages/DeliveryContributions';

import ContributionDetailsPage from './pages/ContributionDetailsPage';

function AppContent() {
  const location = useLocation();
  const shouldShowFooter = location.pathname !== '/about-us';
  const [exchangeRate, setExchangeRate] = useState(1);
  const handleRateChange = (newRate) => {
    console.log('Received new rate:', newRate);

    setExchangeRate(newRate);
  };
  return (
    <>
    <ToastContainer />
      <Navbar onRateChange={handleRateChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/checkout' element={<Checkout exchangeRate={exchangeRate} />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forget' element={<ForgetPage />} />
        <Route path='/profile' element={<Profile exchangeRate={exchangeRate} />} />
        <Route path='/set-password' element={<SetPasswordPage />} />
        <Route path='/AccessDenied' element={<AccessDenied />} />
        <Route path='/Error404' element={<Error404 />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Blog" element={<AllBlogs />} />
        <Route path="/blog-category/:category" element={<BlogCategory />} />
        <Route path="/single-blog/:id" element={<SingleBlog />} />
        <Route path="/dashboard/all-blogs" element ={<AllBlogsDash />} />
        <Route path="/dashboard/create-new-blog" element={<CreateNewBlog />} />
        <Route path="/openingblog" element={<OpeningBlog />} />
        <Route path="/all-posts" element={<Posts />} />
        <Route path="/shop-single/:id" element={<ShopSingle />} />
        <Route path="/dashboard/post" element={<PostsList />} />
        <Route path="/dashboard/post/add" element={<CreatePost />} />
        <Route path="/dashboard/post/edit/:id" element={<EditPost />} />
        <Route path="/singlepost/:id" element={<SinglePost />} />
        <Route path="/wishlist" element={<Wishlist exchangeRate={exchangeRate} />} />
        <Route path="/wide" element={<Wide />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/dashboard/products" element={<ProductsPage />} />
        <Route path="/dashboard/add-products" element={<CreateProductForm />} />
        <Route exact path="/dashboard/EditProductPage/:productId" element={<EditProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard/deliveryorders" element={<DeliveryOrders />} />
        <Route path="/dashboard/order-details/:numOrder" element={<OrderDetails />} /> 
        <Route path="/dashboard/contributions" element={<DeliveryContributions />} />
        <Route path="/dashboard/contribution-details/:id" element={<ContributionDetailsPage />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='load'>
      {loading ? (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'100vh', width:'100%', textAlign:'center'}}>
          <RiseLoader
            color="rgb(54, 230, 56)"
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Router>
          <AppContent />
        </Router>
      )}
    </div>
  );
}

export default App;
