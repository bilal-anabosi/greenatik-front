import { Fragment, useEffect, useState } from 'react'
import Sidebar from '../../components/dashboard/sidebar'
import './post-list.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PostsList() {
    let [posts, setPosts] = useState([]);
    let [search, setSearch] = useState('');
    let token = localStorage.getItem('userToken');

    useEffect(() => {
        axios.get("http://localhost:4000/posts/admin", {
            headers: {
                'Authorization': `group__${token}`,
            }
        }).then(({ data }) => {
            setPosts(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    let filter = search ? posts.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) : posts;

    return (
        <div className="newproduct">
            <h1>Posts List</h1>
            <div className="newproduct_container">
                <Sidebar />
                <div className="newproduct_box_container">
                    <div className="newproduct_title">
                        <h3>Posts</h3>
                        <Link to="/dashboard/post/add">
                            <div className='create_button_2'>
                                <span>Create Post</span>
                            </div>
                        </Link>
                    </div>
                    <div className="newproduct_box">
                        <div className="search_input">
                            <input
                                type="text"
                                placeholder="Search Products"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="table-responsive custom-table-responsive">
                            <table className="table custom-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Requesting</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">PickUp Details</th>
                                        <th scope="col">Create at</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filter.map(item => {
                                            var date = new Date(item.date || Date.now());

                                            return (
                                                <Fragment>
                                                    <tr scope="item_row">
                                                        <td>{item.title}</td>
                                                        <td><a href="#">{item.requesting}</a></td>
                                                        <td>{item.quantity}</td>
                                                        <td>
                                                            <div className="item_status">
                                                                {item.status}
                                                            </div>
                                                        </td>
                                                        <td>{item.pickUpDetails}</td>
                                                        <td>{((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}</td>
                                                        <td>
                                                            <Link to={`/dashboard/post/edit/${item.id}`}>
                                                                <div className="button-small">
                                                                    <span>Edit</span>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr className="spacer"><td colspan="100"></td></tr>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}