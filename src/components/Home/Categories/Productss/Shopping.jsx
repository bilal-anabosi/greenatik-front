import React from 'react';
import './Products.css';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Shopping = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="ba">
            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="mb-4 bg-light d-lg-flex justify-content-between align-items-center rounded p-4">
                            <div className="p-lg-5 p-0">
                                <h2 className="mb-2 fw-bold">One Stop Natural Shop</h2>
                                <p className="mb-3 lead">Shopping for your furry friend? Find Green,<br/> treats, and more in one easy spot.</p>
                                <a className="btn btn-dark" onClick={() => setShowModal(true)}>Get Points</a>
                            </div>
                        <div className="p-lg-4 d-lg-block d-none">
                    <img src="/pics/images/store.png" alt="..." className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</div>

    <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        dialogClassName="modal-content-wrapper sos"
    >
        <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className='oo'>
                <div className="modal-content-body">
                    <div className="modal-text gradient-text">
                        <p>For every purchase you make, you earn points that can be redeemed for discounts on future purchases!</p>
                    </div>
                    <div className="modal-image">
                        <img src="/pics/images/sss1.png" alt="Discount" />
                    </div>
                </div>
                </div>
            </Modal.Body>
        <Modal.Footer></Modal.Footer>
        </Modal>
</div>
);
};
export default Shopping;