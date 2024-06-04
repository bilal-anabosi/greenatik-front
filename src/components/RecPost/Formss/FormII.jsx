import React, { useState,useEffect } from 'react';
import './Formss.css';
import axios from 'axios';
import Map from './Map';

const FormII = ({postId}) => {
    const [material, setMaterial] = useState('');
    const [quantity, setQuantity] = useState('');
    const [condition, setCondition] = useState('');
    const [notes, setNotes] = useState('');

    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    
    const [pickup, setPickup] = useState(true);
    const [dropOff, setDropOff] = useState(false);

    const [maxQuantity, setMaxQuantity] = useState(0);
    const [points, setPoints] = useState(0); 
    
    const [locationUrl, setLocationUrl] = useState('');

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/singlepost/${postId}`);
                if (response.data) {
                    setMaxQuantity(response.data.quantity-response.data.provided);

                    // Assuming the server returns the location URL directly
                    const locationUrl = response.data.locationUrl; // Adjust this according to the actual structure of the response

                    setLocationUrl(locationUrl);
                }
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };
        fetchPostDetails();
    }, [postId]);

    const handleChange = (e) => {
        const value = e.target.value;

        // Validate the zip code
        if (!value.startsWith('p')) {
            setErrorMsg('Invalid zip number');
        } else {
            setErrorMsg('');
        }
        // Update the zip state
        setZip(value);
    };

    const handleOptionChange = (option) => {
        if (option === 'pickup') {
            setPickup(true);
            setDropOff(false);
        } else {
            setPickup(false);
            setDropOff(true);
        }
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;

        if (!/^[0-9]*$/.test(value)) {
            setErrorMsg('Please enter numbers only for quantity');
        } else {
            setQuantity(value);
            setErrorMsg('');

            const calculatedPoints = value ;
            setPoints(calculatedPoints);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate form data
            if (!material || !quantity || !condition) {
                setErrorMessage('Please fill in all required fields');
                return;
            }
            
            if (parseFloat(quantity) > maxQuantity) {
                setErrorMessage(`Quantity cannot exceed the available amount of ${maxQuantity} kg`);
                return;
            }

            // Construct contribution data object
            const contributionData = {
                material,
                quantity,
                condition,
                notes,
                address: pickup ? { city, street, zip } : null,
                date: dropOff ? date : null,
                time: dropOff ? time : null,
                points
            };

            // Retrieve token from localStorage
            const token = localStorage.getItem('userToken');
            console.log(token);

            // Submit contribution data to the server with token
            const response = await axios.post(`http://localhost:4000/singlepost/${postId}/contributions`, contributionData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':  `group__${token}` // user Token
                }
            });

            if (response.status === 201) {
                setSuccessMessage('Contribution created successfully . You are about to get ' + points + ' points!, wait until delivery to get them ');
                setErrorMessage('');
                // Reset form fields
                setMaterial('');
                setQuantity('');
                setCondition('');
                setNotes('');
                setCity('');
                setStreet('');
                setZip('');
                setDate('');
                setTime('');
                setPickup(true);
                setDropOff(false);
            } else {
                setErrorMessage(response.data.message || 'Please try again.');
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <div className="so">
                <div className="card-header border-0 pb-0">
                    <br/>
                    <h1 className="h4 card-title mb-0">Do you have any leftovers? <br/> Take the first step in turning it into something <span className="green-text">Green</span></h1>
                </div>
            </div>
            <br/>
            <div className="r">
                <form className="row g-3">
                    <div className="col-sm-6">
                        <label className="form-label">Material <span className="red-txt">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="In simple words followed by , e.g (Tefal, copper)"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Quantity <span className="red-txt">*</span> <span className="point"> Each 1 Kg = 200 points.</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="In Kg (Kilograms)"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Condition <span className="red-txt">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="In simple words"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Notes </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="In simple words"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <hr/>
            <div className="n">
                <div className="card-header border-0 pb-0">
                    <br/>
                <h2 className="h4 card-title mb-0">Please choose the method given in Pickup Details<br/><span className="red-txt"> Any incorrect information will be ignored !</span></h2>
                    <br/>
                    <h1 className="h4 card-title mb-0"> {pickup ? 'Pick up' : 'Drop off'} details
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio1"
                                autoComplete="off"
                                checked={pickup}
                                onChange={() => handleOptionChange('pickup')}
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">Pick Up</label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="btnradio"
                                id="btnradio2"
                                autoComplete="off"
                                checked={dropOff}
                                onChange={() => handleOptionChange('dropoff')}
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">Drop-Off</label>
                        </div>
                        <br />
                        <span className="s-text">fill your {pickup ? 'pick up' : 'drop off'} location manually or use the map</span>
                    </h1>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <form data-gtm-form-interact-id={0}>
                            {pickup && (
                                <div className="mb-3">
                                    <label className="form-label">City <span className="red-txt">*</span>{' '} </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cities/Towns/Villages"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                            )}
                            {pickup && (
                                <div className="mb-3">
                                    <label className="form-label">Street Name <span className="red-txt">*</span> {' '}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="..."
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                </div>
                            )}
                            {pickup && (
                                <div className="mb-5">
                                    <label className="form-label">Zip <span className="red-txt">*</span>{' '} </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Starting with 'p' followed by your zip number"
                                        value={zip}
                                        onChange={handleChange}
                                    />
                                    {errorMsg && <p className="text-danger">{errorMsg}</p>}
                                </div>
                            )}
                            {dropOff && (
                                <div className="mb-5">
                                    <label className="form-label">Date <span className="red-txt">*</span>{' '} </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="..."
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                            )}
                            {dropOff && (
                                <div className="mb-5">
                                    <label className="form-label">Time <span className="red-txt">*</span>{' '} </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder="..."
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </div>
                            )}
                            <div className='z'>
                                <div className="mb-3">
                                    {errorMessage && (
                                        <div className="toast-container position-fixed bottom-0 end-0 p-3">
                                            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                                <div className="toast-header">
                                                    <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                                                    <strong className="me-auto">GreeNatik</strong>
                                                    <small className="f-6">Now</small>
                                                    <button type="button" className="btn-close" onClick={() => setErrorMessage('')} aria-label="Close"></button>
                                                </div>
                                                <div className="toast-body">
                                                    {errorMessage}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {successMessage && (
                    <div className="toast-container position-fixed bottom-0 end-0 p-3">
                        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                                <strong className="me-auto">GreeNatik</strong>
                                <small className="f-6">Now</small>
                                <button type="button" className="btn-close" onClick={() => setSuccessMessage('')} aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                {successMessage}
                            </div>
                        </div>
                    </div>
                )}
                                </div>
                            </div>
                        </form>
                        <div>
                            <div className="m">
                                <button type="button" className="btn btn-primary btn-lg">Get it from my Account</button>
                                <button type="button" className="btn btn-secondary btn-lg" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                        <div className="d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color='#333333CC' fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg> 
                            <span className="t-text">By clicking submit it means you agree to our <a href="# ">terms and conditions</a></span>
                        </div>
                    </div>
                    <Map locationUrl={locationUrl}  />
                </div>
            </div>
        </div>
    );
};
export default FormII;