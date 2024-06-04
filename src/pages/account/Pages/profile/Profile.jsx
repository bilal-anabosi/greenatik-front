import React, { useContext, useState } from "react";
import { UserContext } from "../../context/User.jsx";
import { Logout } from "../../Inputs/logout.jsx";
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import OrderList from "../../../../components/Orders/OrderList.jsx"; // Import OrderList component
import Activity from "../../../../components/RecPost/Activity.jsx";
import PointsCard from '../../../../components/PointsCard';

function Profile({ exchangeRate }) {
  const { userData, Loading, setUserData } = useContext(UserContext);
  const [activeItem, setActiveItem] = useState("profile");
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  if (Loading) {
    return <p>Loading ...</p>
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">
            User activity
          </div>
          <ul className="list-group list-group-flush">
            <li
              className={`list-group-item ${activeItem === "profile" ? "active" : ""}`}
              onClick={() => handleItemClick("profile")}
            >
              Profile
            </li>
            <li
              className={`list-group-item ${activeItem === "orders" ? "active" : ""}`}
              onClick={() => handleItemClick("orders")}
            >
              Orders
            </li>
            <li
              className={`list-group-item ${activeItem === "points" ? "active" : ""}`}
              onClick={() => handleItemClick("points")}
            >
              points
            </li>
            <li
              className={`list-group-item ${activeItem === "posts" ? "active" : ""}`}
              onClick={() => handleItemClick("posts")}
            >
              posts
            </li>
            <li
              className={`list-group-item ${activeItem === "ResetPassword" ? "active" : ""}`}
              onClick={() => handleItemClick("ResetPassword")}
            >
              ResetPassword
            </li>
          </ul>
        </div>

        {/* Profile Content */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-header"> {userData.username} Profile</div>
            <div className="card-body">
              {activeItem === "profile" && (
                <Formik
                  initialValues={{
                    img: null,
                    username: userData.username,
                    email: userData.email,
                    address: userData.address,
                  }}
                  onSubmit={(values) => {
                    const userToken = localStorage.getItem("userToken");
                    const formData = new FormData();
                    formData.append("img", values.img);
                    formData.append("username", values.username);
                    formData.append("email", values.email);
                    formData.append("address", values.address);

                    axios
                      .put("http://localhost:4000/profile", formData, {
                        headers: { Authorization: `group__${userToken}` },
                      })
                      .then((response) => {
                        setUserData(response.data.data);
                      })
                      .catch((error) => {
                        // Handle error
                      });
                  }}
                >
                  {({ setFieldValue }) => (
                    <Form encType="multipart/form-data">
                      {/* Profile Form Fields */}
                      <div className="form-group">
                        <div className="text-center">
                          <img
                            src={userData.image?.secure_url}
                            className="avatar img-circle img-thumbnail"
                            style={{ width: "150px", height: "150px" }}
                            alt="avatar"
                          />
                          <h6>Upload a photo...</h6>
                          <input
                            name="img"
                            type="file"
                            className="text-center center-block file-upload"
                            onChange={(event) => {
                              setFieldValue("img", event.currentTarget.files[0]);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="username">User name</label>
                        <Field
                          type="text"
                          className="form-control"
                          name="username"
                          id="username"
                          title="User name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          title="Email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <Field
                          type="text"
                          className="form-control"
                          id="address"
                          title="Address"
                          name="address"
                        />
                      </div>
                      <div className="form-group mt-5">
                        <div className="text-center">
                          <button className="btn btn-success mr-2" type="submit">
                            <i className="glyphicon glyphicon-ok-sign" /> Save
                          </button>
                          <button className="btn btn-secondary" type="reset">
                            <i className="glyphicon glyphicon-repeat" /> Reset
                          </button>
                        </div>
                      </div>
                      <div className="form-group mt-3 text-center">
                        <Logout />
                      </div>
                    </Form>
                  )}
                </Formik>
              )}

              {activeItem === "orders" && (
                <OrderList exchangeRate={exchangeRate} /> 
              )}

              {activeItem === "points" && (
                <>
                <h1>User Points</h1>
                <PointsCard />
                </>
              )}

              {activeItem === "posts" && (
                <p className="card-text"> <Activity /> </p>
              )}
              {activeItem === "ResetPassword" && (
                navigate('/forget')
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .list-group-item:hover {
          background-color: green;
          color: white;
        }
        .list-group-item.active {
          background-color: green;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Profile;
