import { useState } from "react";


function Paymentform() {
    const [showModal, setShowModal] = useState(false);
    const [showAddCardModal, setShowAddCardModal] = useState(false);

    return (
        <div className="mobile-wrapper">
            <div className="movie-page">

                <div className="payment-form">

                    {/* Login */}
                    <div className="payment-login">

                        <input
                            type="text"
                            placeholder="Phone number"
                            className="payment-input"
                        />

                        <button className="payment-btn">
                            Continue
                        </button>

                    </div>

                    {/* Confirm */}
                    <div className="payment-confirm">

                        <div className="confirm-header">
                            <p>Enter verification code</p>
                        </div>

                        <div className="otp-group">

                            <input type="text" maxLength="1" className="otp-input" />
                            <input type="text" maxLength="1" className="otp-input" />
                            <input type="text" maxLength="1" className="otp-input" />
                            <input type="text" maxLength="1" className="otp-input" />

                        </div>

                        <button className="payment-btn">
                            Confirm
                        </button>

                        <div className="confirm-actions">

                            <button className="text-btn">
                                Resend code
                            </button>

                            <button className="text-btn">
                                Change phone
                            </button>

                        </div>

                    </div>

                    {/* Payment Method */}
                    <div className="payment-method">

                        <div className="method-header">
                            <h3>Select payment method</h3>
                        </div>

                        <div className="method-list">

                            <div className="method-item active">
                                <div className="radio active"></div>
                                <span>Apple Pay</span>
                            </div>

                            <div className="method-item">
                                <div className="radio"></div>
                                <span>Google Pay</span>
                            </div>

                            <div className="method-item">
                                <div className="radio"></div>
                                <span>Visa •••• 5615</span>
                                <small>06/24</small>
                            </div>

                            <div onClick={() => setShowModal(true)} className="method-item add-method">
                                <span>+ Add new card</span>
                            </div>

                        </div>
                        {showModal && (
                            <div
                                className="modal-overlay"
                                onClick={() => setShowModal(false)}
                            >
                                <div
                                    className="card-modal"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="modal-header">
                                        <h2>Bank card</h2>
                                        <p>4716 •••• •••• 5615</p>
                                    </div>

                                    <button
                                        className="modal-btn"
                                        onClick={() => {
                                            setShowModal(false);
                                            setShowAddCardModal(true);
                                        }}
                                    >
                                        Remove card
                                    </button>
                                </div>
                            </div>
                        )}
                          {showAddCardModal && (
                            <div
                                className="add-card-overlay"
                                onClick={() => setShowAddCardModal(false)}
                            >
                                <div
                                    className="add-card-modal"
                                    onClick={(e) => e.stopPropagation()}
                                >

                                    <div className="add-card-header">
                                        <h2>Add card</h2>
                                    </div>

                                    <div className="card-form">

                                        <input
                                            type="text"
                                            placeholder="Card number"
                                            className="card-input"
                                        />

                                        <div className="card-row">

                                            <input
                                                type="text"
                                                placeholder="MM"
                                                className="small-input"
                                            />

                                            <input
                                                type="text"
                                                placeholder="YY"
                                                className="small-input"
                                            />

                                            <input
                                                type="text"
                                                placeholder="CVV"
                                                className="small-input"
                                            />

                                        </div>

                                    </div>

                                    <button
                                        className="save-card-btn"
                                        onClick={() => setShowAddCardModal(false)}
                                    >
                                        Save card
                                    </button>

                                </div>
                            </div>
                        )}

                        <button className="payment-btn">
                            <a className="tt1" href="pay" >   Pay 3200 ₸</a>
                        </button>

                    </div>

                </div>



            </div>
        </div>
    );
}

export default Paymentform;