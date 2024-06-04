import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './account/context/User';
import './shop-single.css';
import { toast } from 'react-toastify';

export default function ShopSingle({ exchangeRate }) {
    let [product, setProduct] = useState(null);
    let [reviews, setReviews] = useState([]);
    let [tab, setTab] = useState(0);
    let [selectedImage, setSelectedImage] = useState(0);
    let [amount, setAmount] = useState(1);
    let [selectedSize, setSelectedSize] = useState(0);
    let [newReview, setNewReview] = useState({ rating: 0, comment: '' });
    let [related, setRelated] = useState([]);
    let { id } = useParams();
    let { userData } = useContext(UserContext);
    let token = localStorage.getItem('userToken');
    let [currencySymbol, setCurrencySymbol] = useState('$');

    useEffect(() => {
        setCurrencySymbol(exchangeRate === 1 ? '$' : '₪');
    }, [exchangeRate]);

    useEffect(() => {
        handlePostLoad();
    }, [id]);

    function handlePostLoad() {
        axios.get(`http://localhost:4000/api/products/${id}`).then(({ data }) => {
            setProduct(data.product);

            axios.get(`http://localhost:4000/Store/by-category?category=${data.product?.category}`).then(({ data }) => {
                setRelated(data.products);
            }).catch(err => { });
        }).catch(err => { });

        axios.get(`http://localhost:4000/reviews/${id}`).then(({ data }) => {
            setReviews(data);
        }).catch(err => { });
    }

    function addToCart() {
        axios.post('http://localhost:4000/cart/add', {
            productId: product._id,
            quantity: amount,
            size: product.sizes[selectedSize].size
        }, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            toast.success('Added to cart');
        }).catch(err => {
            toast.error('Error adding to cart');
        });
    }

    function addToWishList() {
        axios.post('http://localhost:4000/wishlist/', {
            productId: product._id,
            size: product.sizes[selectedSize].size
        }, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            toast.success('Added to wishlist');
        }).catch(err => {
            toast.error('Error adding to wishlist');
        });
    }

    function addComment() {
        axios.post(`http://localhost:4000/reviews/${id}`, {
            rating: newReview.rating,
            comment: newReview.comment,
            product: id,
            user: userData._id || userData.id
        }, {
            headers: {
                'Authorization': `group__${token}`
            }
        }).then(({ data }) => {
            setReviews([...reviews, data]);
            setNewReview({
                rating: 0,
                comment: '',
            });
        }).catch(err => {
            toast.error('Error adding review');
        });
    }

    let tabs = [
        {
            title: 'Product Details',
            value: 0
        },
        {
            title: 'Product Reviews',
            value: 1
        }
    ];

    return product ? (
        <div className='single_container'>
            <div className="info">
                <div className="left">
                    <img src={`http://localhost:4000/${product.images[selectedImage]}`} />
                    <div className="images">
                        {product.images.map((image, index) =>
                            <img
                                key={index}
                                src={`http://localhost:4000/${image}`}
                                onClick={() => setSelectedImage(index)}
                                className={selectedImage === index ? 'selected' : ''}
                            />
                        )}
                    </div>
                </div>
                <div className="right">
                    <div className="right_title">
                        <a>{product.category}</a>
                        <h1>{product.title}</h1>
                        <div className='price-tag'>
                            {
                                product.sizes[selectedSize].salePrice ?
                                    <>
                                        <span>{(product.sizes[selectedSize].salePrice * exchangeRate).toFixed(2)}{currencySymbol}</span>
                                        <span>{(product.sizes[selectedSize].regularPrice * exchangeRate).toFixed(2)}{currencySymbol}</span>
                                        <small>{(100 - (product.sizes[selectedSize].salePrice * 100) / product.sizes[selectedSize].regularPrice).toFixed(0) || "NuN"}% Off</small>
                                    </>
                                    :
                                    <span>{(product.sizes[selectedSize].regularPrice * exchangeRate).toFixed(2)}{currencySymbol}</span>
                            }
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="right_options">
                        <div className="tags">
                            {product.sizes?.map((tag, index) => (
                                <span
                                    key={index}
                                    className={selectedSize === index ? 'selected_tg' : ''}
                                    onClick={() => setSelectedSize(index)}
                                >{tag.size}</span>
                            ))}
                        </div>
                        <div className="input">
                            <span onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}>-</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                max={product.sizes[selectedSize].quantity}
                                min={1}
                                readOnly
                            />
                            <span onClick={() => setAmount(amount < product.sizes[selectedSize].quantity ? amount + 1 : amount)}>+</span>
                        </div>
                        <div onClick={addToCart} className="button">
                            <i className="bi bi-bag"></i>
                            <span>Add to Cart</span>
                        </div>
                        <div onClick={addToWishList} className="button">
                            <i className="bi bi-bag"></i>
                            <span>Add to Wish List</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="product_info">
                        <div>
                            <h5>Availability:</h5>
                            <span>{product.inStock ? "In Stock" : "Out of stock"}</span>
                        </div>
                        <div>
                            <h5>Type:</h5>
                            <span>{product.category}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="pro_buttons">
                    {tabs.map((tab_, index) =>
                        <div
                            key={index}
                            className={tab_.value === tab ? 'nav_button nav_b_selected' : 'nav_button'}
                            onClick={() => setTab(tab_.value)}
                        >
                            <span>{tab_.title}</span>
                        </div>
                    )}
                </div>
                <div className="line"></div>
                {
                    tab === 0 ?
                        <>
                            <h3>Description</h3>
                            <span>{product.longDescription}</span>
                        </>
                        :
                        <>
                            <div className="add_review">
                                <h3>Add a Review</h3>
                                <div className="review_input">
                                    <textarea
                                        placeholder="Write your review here"
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    >
                                        {newReview.comment}
                                    </textarea>
                                    <div className="review_stars">
                                        {[1, 2, 3, 4, 5].map((star, index) =>
                                            <i
                                                key={index}
                                                className={newReview.rating >= star ? 'bi bi-star-fill' : 'bi bi-star'}
                                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                                style={{ color: newReview.rating >= star ? 'gold' : 'black' }}
                                            ></i>
                                        )}
                                    </div>
                                    <div className="review_input_row">
                                        <div onClick={addComment} className="button">
                                            <span style={{ marginBottom: 0 }}>Submit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 style={{ marginTop: 32 }}>Reviews</h3>
                            {reviews?.map((review, index) =>
                                <div className="review" key={index}>
                                    <div className="review_title">
                                        <div className="review_user">
                                            <i className="bi bi-person"></i>
                                            <span style={{ marginBottom: 0 }}>{review.user?.username || "No Username Found"}</span>
                                        </div>
                                        <div className="review_stars_small">
                                            {[1, 2, 3, 4, 5].map((star, index) =>
                                                <i
                                                    key={index}
                                                    className={review.rating >= star ? 'bi bi-star-fill' : 'bi bi-star'}
                                                    style={{ color: review.rating >= star ? 'gold' : 'black' }}
                                                ></i>
                                            )}
                                        </div>
                                    </div>
                                    <span>{review.comment}</span>
                                </div>
                            )}
                        </>
                }
            </div>
            <div className="related_items">
                <h1>Related Items</h1>
                <div className="related_items_list">
                    {
                        related?.map((item, index) =>
                            <Item key={index} {...item} exchangeRate={exchangeRate} currencySymbol={currencySymbol} />
                        )
                    }
                </div>
            </div>
            <div style={{ height: "3em" }}></div>
        </div>
    ) : (
        <div>Loading</div>
    );
}

function Item({ _id, images, title, sizes, exchangeRate, currencySymbol }) {
    return (
        <Link to={`/shop-single/${_id}`}>
            <div className='related_item'>
                <img src={`http://localhost:4000/${images[0]}`} />
                <span>{title}</span>
                <div className='related_row'>
                    <div className='price-tag-small'>
                        {
                            sizes[0].salePrice ?
                                <>
                                    <span>{(sizes[0].salePrice * exchangeRate).toFixed(2)}{currencySymbol}</span>
                                    <span>{(sizes[0].regularPrice * exchangeRate).toFixed(2)}{currencySymbol}</span>
                                </>
                                :
                                <span>{(sizes[0].regularPrice * exchangeRate).toFixed(2)}{currencySymbol}</span>
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}
