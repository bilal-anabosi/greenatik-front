import { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/sidebar";
import './post.css'
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
    const token = localStorage.getItem("userToken");
    let { id } = useParams();
    let [error, setError] = useState("")
    let navigate = useNavigate()

    let [data, setData] = useState({
        title: "",
        requesting: "",
        moreDetails: "",
        quantity: 0,
        condition: "",
        pickUpDetails: "Pick Up",
        postStatus: "Active",
        address: {
            city: "Jerusalem",
            street: "",
            zip: ""
        },
    })

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_GREENATIK}/posts/${id}`, {
            headers: {
                Authorization: `group__${token}`
            }
        }).then(({ data }) => {
            setData(data)
        }).catch((err) => {
            setError(err.response.data.message)
        })
    }, [])

    let requests = ["Plastic", "Metal", "Paper", "Others"]
    let pickUpDetails = ["Pick Up", "Drop Off", "Both"]
    let postStatus = ["Active", "Disabled"]
    let citys = ["Jerusalem", "Gaza City", "Hebron", "Naqab", "Jenin", "Nablus", "Rafah", "Ramallah", "Bethlehem", "Tulkarm"]

    const EditPost = async () => {
        if (data.title === "" || data.requesting === "" || data.quantity === 0 || data.condition === "" || data.address.city === "" || data.address.street === "" || data.address.zip === "") {
            return toast.error("All fields are required")
        }

        axios.put(`${process.env.REACT_APP_GREENATIK}/posts/${id}`, data, {
            headers: {
                Authorization: `group__${token}`
            }
        }).then(({ data }) => {
            toast.success(data.message)
            navigate("/dashboard/post")
        }).catch((err) => {
            toast.error(err.response.data.message)
        })
    }

    return (
        <div className="newproduct">
            <h1>Edit Post</h1>
            <div className="newproduct_container">
                <Sidebar />
                {
                    error ?
                        <div className="newproduct_box">
                            <h3>{error}</h3>
                        </div>
                        :
                        <div className="newproduct_box">
                            <h3>Post Details</h3>
                            <div className="newproduct_row">
                                <div className="newproduct_row_item">
                                    <span>title</span>
                                    <input
                                        placeholder="product title"
                                        value={data.title}
                                        onChange={(e) => setData({ ...data, title: e.target.value })}
                                    />
                                </div>
                                <div className="newproduct_row_item">
                                    <span>Requesting</span>
                                    <select
                                        value={data.requesting}
                                        onChange={(e) => setData({ ...data, requesting: e.target.value })}
                                    >
                                        {requests.map((request, index) => (
                                            <option key={index} value={request}>{request}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="newproduct_row">
                                <div className="newproduct_row_item">
                                    <span>Quantity* (In Kg)</span>
                                    <input
                                        value={data.quantity}
                                        onChange={(e) => setData({ ...data, quantity: e.target.value })}
                                        type="number"
                                        min={5}
                                        max={1000}
                                    />
                                </div>
                                <div className="newproduct_row_item">
                                    <span>Condition*</span>
                                    <input
                                        value={data.condition}
                                        onChange={(e) => setData({ ...data, condition: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="newproduct_row">
                                <div className="newproduct_row_item">
                                    <span>More Details</span>
                                    <textarea
                                        value={data.moreDetails}
                                        onChange={(e) => setData({ ...data, moreDetails: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                            <h3 style={{ marginTop: 37 }}>Post Status</h3>
                            <div className="newproduct_dots">
                                {
                                    postStatus.map((status, index) => (
                                        <div className="newproduct_dot" key={index}>
                                            <div onClick={() => setData({ ...data, postStatus: status })}>
                                                <div className="border_shape"></div>
                                                {status == data.postStatus && <div className="active_shape"></div>}
                                            </div>
                                            <span>{status}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <h3 style={{ marginTop: 37 }}>Pick Up Details</h3>
                            <div className="newproduct_dots">
                                {
                                    pickUpDetails.map((status, index) => (
                                        <div className="newproduct_dot" key={index}>
                                            <div onClick={() => setData({ ...data, pickUpDetails: status })}>
                                                <div className="border_shape"></div>
                                                {status == data.pickUpDetails && <div className="active_shape"></div>}
                                            </div>
                                            <span>{status}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="newproduct_row">
                                <div className="newproduct_row_item">
                                    <span>City *</span>
                                    <select
                                        placeholder="Cities/towns/villages"
                                        value={data.address.city}
                                        onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })}
                                    >
                                        {citys.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="newproduct_row_item">
                                    <span>Street name *</span>
                                    <input
                                        value={data.address.street}
                                        onChange={(e) => setData({ ...data, address: { ...data.address, street: e.target.value } })}
                                    />
                                </div>
                            </div>
                            <div className="newproduct_row">
                                <div className="newproduct_row_item">
                                    <span>zip *</span>
                                    <input
                                        placeholder="starting with ‘p’ followed by your zip number"
                                        value={data.address.zip}
                                        onChange={(e) => setData({ ...data, address: { ...data.address, zip: e.target.value } })}
                                    />
                                </div>
                                <div className="newproduct_row_item"></div>
                            </div>
                            <div onClick={EditPost} className="create_button">
                                <span>Edit Post</span>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}