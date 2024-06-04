import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post.jsx";
import classes from "./Posts.module.css";
import DropdownMenu from "../../components/post/DropDowns.jsx";
import PostModal from "../../components/post/PostModal.jsx";
import Pagination from "../../components/post/Pagination.jsx";
import Banner from "../../components/post/Banner.jsx";
function generateRandomProgress() {
  return Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
}
const citiesAndFactories = [
  {
    city: "Ramallah",
    factory: "Plastic Manufacturing Co.",
    requestType: "plastic",
    quantity: "300 kg",
    date: "30 April 2024",
    progress: generateRandomProgress(),
  },
];
const Posts = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [almostCompletedData, setAlmostCompletedData] = useState([]);

  const [filter, setFilter] = useState({
    quantity: "",
    requestType: "",
    city: "",
    sortType: "",
    deliveryMethod: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/posts"); // Updated: Fetching data from the API
        const data = await response.json();
        setOriginalData(data);
        setFilteredData(data); // Updated: Setting the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount
  console.log("filteredData", filteredData);
  useEffect(() => {
    const almostCompletedData = [...originalData]
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 4);
    setAlmostCompletedData(almostCompletedData);
  }, [originalData]);

  useEffect(() => {
    let filteredData = [...originalData];

    if (filter.quantity) {
      filteredData = filteredData.filter((item) => {
        const itemQuantity = { ...item }.quantity;

        return (
          itemQuantity >= filter.quantity[0] &&
          itemQuantity <= filter.quantity[1]
        );
      });
      console.log("filteredData from quantity", filteredData);
    }

    if (filter.city) {
      filteredData = filteredData.filter(
        (item) => item.city.toLowerCase() === filter.city.toLowerCase()
      );
      console.log("filteredData from city", filteredData);
    }

    if (filter.requestType) {
      filteredData = filteredData.filter(
        (item) =>
          item.requesting.toLowerCase() === filter.requestType.toLowerCase()
      );

      console.log("filteredData from requestType", filteredData);
    }

    if (filter.sortType === "Latest") {
      filteredData = filteredData.sort(
        (a, b) => parseDate(b?.date) - parseDate(a?.date)
      );
    }

    if (filter.sortType === "Earliest") {
      filteredData = filteredData.sort(
        (a, b) => parseDate(a?.date) - parseDate(b?.date)
      );
    }

    if (filter.deliveryMethod) {
      filteredData = filteredData.filter(
        (item) =>
          item.pickUpDetails.toLowerCase() ===
          filter.deliveryMethod.toLowerCase()
      );

      console.log("filteredData from requestType", filteredData);
    }
    console.log("final data", filteredData);
    setFilteredData(filteredData);
  }, [filter]);

  const onQuantityChange = (e) => {
    e.preventDefault();
    const value = e.target.text;

    if (value === "All") {
      setFilter((prev) => ({ ...prev, quantity: "" }));
      return;
    }
    const range = value.split("-").map((number) => +number.replace("kg", ""));

    console.log("range", range);
    setFilter((prev) => ({ ...prev, quantity: range }));
  };

  const onMaterialChange = (e) => {
    e.preventDefault();
    const material = e.target.text;
    if (material === "All") {
      setFilter((prev) => ({ ...prev, requestType: "" }));
      return;
    }

    console.log("material", material);
    setFilter((prev) => ({ ...prev, requestType: material }));
  };

  const onCityChange = (e) => {
    e.preventDefault();
    const city = e.target.text;

    if (city === "All") {
      setFilter((prev) => ({ ...prev, city: "" }));
      return;
    }

    console.log("city", city);
    setFilter((prev) => ({ ...prev, city: city }));
  };

  const parseDate = (dateString) => {
    const date = new Date(dateString);
    return date;
  };

  const formateDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  };

  const onSortClick = (e) => {
    e.preventDefault();
    const selectedSortCraiteria = e.target.text;
    if (selectedSortCraiteria === "none") {
      setFilter((prev) => ({ ...prev, sortType: "" }));
      return;
    }
    console.log("selectedSortCraiteria", selectedSortCraiteria);
    setFilter((prev) => ({ ...prev, sortType: selectedSortCraiteria }));
  };
  const onDeliveryMethodClick = (e) => {
    e.preventDefault();
    const selectedDeliveryMethod = e.target.text;
    if (selectedDeliveryMethod === "All") {
      setFilter((prev) => ({ ...prev, deliveryMethod: "" }));
      return;
    }
    console.log("selectedDeliveryMethod", selectedDeliveryMethod);
    setFilter((prev) => ({ ...prev, deliveryMethod: selectedDeliveryMethod }));
  };

  const quantityChoices = [
    { label: "All", value: "" },
    { label: "5kg-20kg", value: "5-20" },
    { label: "21kg-50kg", value: "21-50" },
    { label: "51kg-100kg", value: "51-100" },
    { label: "101kg-200kg", value: "101-200" },
    { label: "201kg-500kg", value: "201-500" },
    { label: "501kg-1000kg", value: "501-1000" },
  ];

  const materialChoices = [
    { label: "All", value: "" },
    { label: "Plastic", value: "Plastic" },
    { label: "Metal", value: "Metal" },
    { label: "Paper", value: "Paper" },

    { label: "Others", value: "Others" },
  ];
  const cityChoices = [
    { label: "All", value: "" },
    { label: "Jerusalem", value: "Jerusalem" },
    { label: "Gaza City", value: "Gaza City" },
    { label: "Hebron", value: "Hebron" },
    { label: "Naqab", value: "Naqab" },
    { label: "Jenin", value: "Jenin" },
    { label: "Nablus", value: "Nablus" },
    { label: "Rafah", value: "Rafah" },
    { label: "Ramallah", value: "Ramallah" },
    { label: "Bethlehem", value: "Bethlehem" },
    { label: "Tulkarm", value: "Tulkarm" },
  ];
  const selectDeliveryMethod = [
    { label: "All", value: "" },
    { label: "Pick Up", value: "Pick Up" },
    { label: "Drop Off", value: "Drop Off" },
  ];

  const sortChoices = [
    { label: "None", value: "" },
    { label: "Latest", value: "Latest" },
    { label: "Earliest", value: "Earliest" },
  ];

  return (
    <div className="container">
      <div className="row mt-7 ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/home">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Recycling
            </li>
          </ol>
        </nav>
        <Banner />
        <PostModal />
        <div className={classes.almostCompletedDemands}>
          <h3>Almost Completed Demands</h3>
        </div>
        <div className="container">
          <div className="row">
            {almostCompletedData.map((post, index) => (
              <Post
                key={index}
                id={post.id}
                image={post.ownerImage}
                city={post.city}
                requestType={post.requesting}
                quantity={post.quantity}
                date={formateDate(post.date)}
                progress={post.percentage}
                deliveryMethod={post.pickUpDetails}
                postDetails={post.details}
                ownerUsername={post.ownerUsername}
                provided={post.provided}
              />
            ))}
            <div className="mt-6">
              <h4>All Recycling Factories' Material demands</h4>
              <h6>
                <small>
                  here you can browse what each company demand of material is
                </small>
              </h6>
            </div>
            <div className={`${classes.menus} row`}>
              <div className="mb-2 col-sm-6 col-lg-3">
                <DropdownMenu
                  title="Select City"
                  choices={cityChoices}
                  onChange={onCityChange}
                />
              </div>
              <div className="mb-2 col-sm-6 col-lg-3">
                <DropdownMenu
                  title="Select material"
                  choices={materialChoices}
                  onChange={onMaterialChange}
                />
              </div>
              <div className="mb-2 col-sm-6 col-lg-3">
                <DropdownMenu
                  title="Quantity"
                  choices={quantityChoices}
                  onChange={onQuantityChange}
                />
              </div>
              <div className="mb-2 col-sm-6 col-lg-3">
                <DropdownMenu
                  title="Delivery method"
                  choices={selectDeliveryMethod}
                  onChange={onDeliveryMethodClick}
                />
              </div>
              <div className="col-sm-6 col-lg-3">
                <DropdownMenu
                  title="Sort by:"
                  choices={sortChoices}
                  onChange={onSortClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination posts={filteredData} />
    </div>
  );
};

export default Posts;
