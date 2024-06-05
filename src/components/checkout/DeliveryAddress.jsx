import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function AddressAccordion({ onUpdate }) {
  const { t } = useTranslation();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isAddAddressClicked, setIsAddAddressClicked] = useState(false);
  const [isAddDeliveryAddressClicked, setIsAddDeliveryAddressClicked] = useState(true);
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [newAddress, setNewAddress] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    state: '',
    zipCode: '',
    businessName: '',
    isDefault: false,
  });

  const [addressData, setAddressData] = useState([]);
  const [selectedAddressForDeletion, setSelectedAddressForDeletion] = useState(null);

  useEffect(() => {
    setIsAddDeliveryAddressClicked(false);
  }, []);

  const handleAddressSelection = (index) => {
    setSelectedAddress(index === selectedAddress ? null : index);
    onUpdate({ address: addressData[index] });
    setIsAddressSelected(true);
  };

  const handleAddAddressClick = () => {
    setIsAddAddressClicked(!isAddAddressClicked);
  };

  const handleAddDeliveryAddressClick = () => {
    setIsAddDeliveryAddressClicked(!isAddDeliveryAddressClicked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };

  const handleSaveAddress = () => {
    if (
      !newAddress.firstName.trim() ||
      !newAddress.lastName.trim() ||
      !newAddress.addressLine1.trim() ||
      !newAddress.city.trim() ||
      !newAddress.country.trim() ||
      !newAddress.state.trim() ||
      !newAddress.zipCode.trim()
    ) {
      setErrorMessage(t('address.pleaseFillAllFields'));
      return;
    }

    const updatedAddressData = [...addressData, {
      type: newAddress.type,
      firstName : newAddress.firstName,
      lastName : newAddress.lastName,
      addressLine1: newAddress.addressLine1,
      addressLine2:newAddress.addressLine2,
      city: newAddress.city,
      state: newAddress.state,
      zip: newAddress.zipCode,
      country: newAddress.country,
      phone: '',
    }];

    setAddressData(updatedAddressData);

    setNewAddress({
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      country: '',
      state: '',
      zipCode: '',
      businessName: '',
      isDefault: false,
    });

    setIsAddAddressClicked(false);
    setErrorMessage('');
  };

  const handleDeleteAddress = () => {
    if (selectedAddressForDeletion !== null) {
      const updatedAddressData = addressData.filter((_, index) => index !== selectedAddressForDeletion);
      setAddressData(updatedAddressData);
      setSelectedAddress(null);
      setSelectedAddressForDeletion(null);
    }
  };

  return (
    <div className="accordion-item py-4">
      <div className="d-flex justify-content-between align-items-center">
        <a href="#!!" className={`fs-5 text-inherit h4 ${isAddDeliveryAddressClicked ? 'text-success' : ''}`} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne" onClick={handleAddDeliveryAddressClick}>
          <i className="bi bi-geo-alt" style={{ color: 'gray' }}></i>
          {t('address.addDeliveryAddress')}
        </a>
        <a href="#!" className={`btn ${isAddAddressClicked ? 'btn-primary' : 'btn-outline-primary'}`} onClick={handleAddAddressClick}>
          {t('address.addAddress')}
        </a>
      </div>
      {isAddAddressClicked && (
        <div className="modal fade show" id="addAddressModal" tabIndex="-1" aria-labelledby="addAddressModalLabel" style={{ display: 'block', padding: '0px' }} aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body p-6">
                <div className="d-flex justify-content-between mb-5">
                  <div>
                    <h5 className="h6 mb-1" id="addAddressModalLabel">{t('address.newShippingAddress')}</h5>
                    <p className="small mb-0">{t('address.addNewShippingAddress')}</p>
                  </div>
                  <div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleAddAddressClick}></button>
                  </div>
                </div>
                <div className="col-12">
                  <select className="form-select" name="type" value={newAddress.type} onChange={handleInputChange}>
                    <option value="home">{t('address.homeType')}</option>
                    <option value="office">{t('address.officeType')}</option>
                  </select>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder={t('address.firstName')} aria-label="First name" name="firstName" value={newAddress.firstName} onChange={handleInputChange} required />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder={t('address.lastName')} aria-label="Last name" name="lastName" value={newAddress.lastName} onChange={handleInputChange} required />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder={t('address.addressLine1')} name="addressLine1" value={newAddress.addressLine1} onChange={handleInputChange} />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder={t('address.addressLine2')} name="addressLine2" value={newAddress.addressLine2} onChange={handleInputChange} />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder={t('address.city')} name="city" value={newAddress.city} onChange={handleInputChange} />
                  </div>
                  <div className="col-12">
                    <select className="form-select" name="country" value={newAddress.country} onChange={handleInputChange}>
                      <option value="">{t('address.selectCountry')}</option>
                      <option value="palestine">Palestine</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <select className="form-select" name="state" value={newAddress.state} onChange={handleInputChange}>
                      <option value="">{t('address.selectState')}</option>
                      <option value="Westbank">WestBank</option>
                      <option value="GazaStrip">GazaStrip</option>
                      <option value="Jerusalem">Jerusalem</option>
                      <option value="48-palestinians">48-palestinians</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder={t('address.zipCode')} name="zipCode" value={newAddress.zipCode} onChange={handleInputChange} />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder={t('address.businessName')} name="businessName" value={newAddress.businessName} onChange={handleInputChange} />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value={newAddress.isDefault} id="flexCheckDefault" name="isDefault" onChange={handleInputChange} />
                      <label className="form-check-label" htmlFor="flexCheckDefault">{t('address.setDefault')}</label>
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={handleAddAddressClick}>{t('address.cancel')}</button>
                    <button className="btn btn-primary" type="button" onClick={handleSaveAddress}>{t('address.saveAddress')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="mt-5">
          {!isAddressSelected && !isAddAddressClicked && (
            <div className="text-danger">{t('address.pleaseFillAllFields')}</div>
          )}
          {addressData.map((address, index) => (
            <div key={index}>
              <div className="card card-body p-6">
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id={address.type}
                    checked={selectedAddress === index}
                    onChange={() => handleAddressSelection(index)}
                  />
                  <label className={`form-check-label ${isAddDeliveryAddressClicked ? 'text-success' : 'text-dark'}`} htmlFor={address.type}>{address.type}</label>
                </div>
                <address>
                  <strong>{address.firstName} {address.lastName}</strong>
                  <br />
                  {address.address},
                  <br />
                  {address.city}, {address.state}, {address.zip}, {address.country},
                  <br />
                  <abbr title="Phone">P: {address.phone}</abbr>
                </address>
                {selectedAddress === index && <span className="text-danger">{t('address.defaultAddress')}</span>}
                <a href="#!" className="text-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setSelectedAddressForDeletion(index)}>{t('address.delete')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content-new">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">{t('address.deleteAddress')}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6>{t('address.areYouSureDelete')}</h6>
              {selectedAddressForDeletion !== null && addressData[selectedAddressForDeletion] && (
                <div>
                  <p className="mb-6">
                    <strong>{addressData[selectedAddressForDeletion].name}</strong>
                    <br />
                    {addressData[selectedAddressForDeletion].address},
                    <br />
                    {addressData[selectedAddressForDeletion].city}, {addressData[selectedAddressForDeletion].state}, {addressData[selectedAddressForDeletion].zip}, {addressData[selectedAddressForDeletion].country},
                    <br />
                    <abbr title="Phone">P: {addressData[selectedAddressForDeletion].phone}</abbr>
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-gray-400" data-bs-dismiss="modal">{t('address.cancel')}</button>
              <button type="button" className="btn btn-danger" onClick={handleDeleteAddress}>{t('address.delete')}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        {errorMessage && (
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <img src="/favicon.ico" width={32} height={32} className="rounded me-2" alt="" />
                <strong className="me-auto">GreeNatik</strong>
                <small>Now</small>
                <button type="button" className="btn-close" onClick={() => setErrorMessage('')} aria-label="Close"></button>
              </div>
              <div className="toast-body">
                {errorMessage}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressAccordion;
