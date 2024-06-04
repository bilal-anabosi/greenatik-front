import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function PaymentMethodAccordion({ onUpdate }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Cash on Delivery");
  const [expiryDate, setExpiryDate] = useState(null);
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false);
  const validationSchema = (selectedPaymentMethod) => {
    if (selectedPaymentMethod === "creditdebitcard") {
      return Yup.object().shape({
        cardNumber: Yup.string()
          .required("Card number is required")
          .matches(/^\d{16}$/, "Invalid card number"),
        cardName: Yup.string().required("Name on card is required"),
        expiryDate: Yup.date().nullable().required("Expiry date is required"),
        cvv: Yup.string()
          .required("CVV code is required")
          .matches(/^\d{3,4}$/, "Invalid CVV code"),
      });
    } else {
      return Yup.object().shape({});
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    onUpdate({ paymentMethod: method });
    setIsPaymentMethodSelected(true);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

 

  return (
    <div className="accordion-item py-4">
      <a
        href="#!"
        className="text-inherit h5"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
        <i className="bi bi-credit-card-2-front" style={{ color: "gray" }}></i>
        Payment Method
      </a>
      <div
        id="flush-collapseFour"
        className="accordion-collapse collapse "
        data-bs-parent="#accordionFlushExample"
        style={{}}
      >
        <div className="mt-5">
          <Formik
            initialValues={{
              cardNumber: "",
              cardName: "",
              expiryDate: null,
              cvv: "",
              paymentMethod: selectedPaymentMethod,
            }}
            validationSchema={validationSchema(selectedPaymentMethod)}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div>
                  <div className="card card-bordered shadow-none mb-2">
                    <div className="card-body p-6">
                      <div className="d-flex">
                        <div className="form-check">
                          <Field
                            type="radio"
                            name="paymentMethod"
                            id="Payment with Paypal"
                            className="form-check-input"
                            value="Payment with Paypal"
                            checked={selectedPaymentMethod === "Payment with Paypal"}
                            onChange={() => handlePaymentMethodChange("Payment with Paypal")}
                          />
                          <div className="d-flex flex-column">
                            <span
                              htmlFor="creditdebitcard"
                              className="form-check-label ms-2"
                              style={{ fontWeight: "bold" }}
                            >
                              Payment with Paypal{" "}
                            </span>{" "}
                            <p
                              className="mb-0 small"
                              style={{ marginTop: "5px" }}
                            >
                              You will be redirected to PayPal website to
                              complete your purchase securely.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-bordered shadow-none mb-2">
                    <div className="card-body p-6">
                      <div className="d-flex mb-4">
                        <div className="form-check">
                          <Field
                            type="radio"
                            name="paymentMethod"
                            id="Credit / Debit Card"
                            className="form-check-input"
                            value="creditdebitcard"
                            checked={
                              selectedPaymentMethod === "Credit / Debit Card"
                            }
                            onChange={() =>
                              handlePaymentMethodChange("Credit / Debit Card")
                            }
                          />
                          <div className="d-flex flex-column">
                            <span
                              htmlFor="Credit / Debit Card"
                              className="form-check-label ms-2"
                              style={{ fontWeight: "bold" }}
                            >
                              Credit / Debit Card
                            </span>{" "}
                            <p
                              className="mb-0 small"
                              style={{ marginTop: "5px" }}
                            >
                              Safe money transfer using your bank account. We
                              support Mastercard, Visa, Discover, and Stripe.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row g-2">
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Card Number</label>
                            <Field
                              type="text"
                              name="cardNumber"
                              className="form-control"
                              placeholder="1234 4567 6789 4321"
                            />
                            <ErrorMessage
                              name="cardNumber"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="mb-3 mb-lg-0">
                            <label className="form-label">Name on Card</label>
                            <Field
                              type="text"
                              name="cardName"
                              className="form-control"
                              placeholder="Enter your first name"
                            />
                            <ErrorMessage
                              name="cardName"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-0 position-relative">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <label htmlFor="expiryDateInput">Expiry date</label>
                            <div className="position-relative">
                              <DatePicker
                                id="expiryDateInput"
                                value={expiryDate}
                                onChange={(newValue) => setExpiryDate(newValue)}
                                textField={(props) => (
                                  <input
                                    {...props}
                                    className="form-control flatpickr flatpickr-input"
                                    type="text"
                                    placeholder="Select Date"
                                    readOnly="readonly"
                                  />
                                )}
                              />

                              <div className="position-absolute bottom-0 end-0 p-3 lh-1"></div>
                            </div>
                          </LocalizationProvider>
                        </div>

                        <div className="col-md-3 col-12">
                          <div className="mb-3 mb-lg-0">
                            <label className="form-label">CVV code</label>
                            <Field
                              type="password"
                              name="cvv"
                              className="form-control"
                              placeholder="***"
                            />
                            <ErrorMessage
                              name="cvv"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-bordered shadow-none mb-2">
                    <div className="card-body p-6">
                      <div className="d-flex">
                        <div className="form-check">
                          <Field
                            type="radio"
                            name="paymentMethod"
                            id="payoneer"
                            className="form-check-input"
                            value="payoneer"
                            checked={
                              selectedPaymentMethod === "Pay with Payoneer"
                            }
                            onChange={() =>
                              handlePaymentMethodChange("Pay with Payoneer")
                            }
                          />
                          <div className="d-flex flex-column">
                            <span
                              htmlFor="creditdebitcard"
                              className="form-check-label ms-2"
                              style={{ fontWeight: "bold" }}
                            >
                              Pay with Payoneer
                            </span>{" "}
                            <p
                              className="mb-0 small"
                              style={{ marginTop: "5px" }}
                            >
                              You will be redirected to the Payoneer website to
                              complete your purchase securely.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-bordered shadow-none">
                    <div className="card-body p-6">
                      <div className="d-flex">
                        <div className="form-check">
                          <Field
                            type="radio"
                            name="paymentMethod"
                            id="cashonDelivery"
                            className="form-check-input"
                            value="cashonDelivery"
                            checked={selectedPaymentMethod === "cashonDelivery"}
                            onChange={() =>
                              handlePaymentMethodChange("cashonDelivery")
                            }
                          />
                          <div className="d-flex flex-column">
                            <span
                              htmlFor="creditdebitcard"
                              className="form-check-label ms-2"
                              style={{ fontWeight: "bold" }}
                            >
                              Cash on Delivery
                            </span>{" "}
                            <p
                              className="mb-0 small"
                              style={{ marginTop: "5px" }}
                            >
                              Pay with cash when your order is delivered.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!isPaymentMethodSelected && (
                    <div className="text-danger">
                      Please select a payment method
                    </div>
                  )}
                </div>

                <div className="mt-5 d-flex justify-content-end">
                  <a
                    href="#!"
                    className="btn btn-outline-gray-400 text-muted collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Prev
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodAccordion;
