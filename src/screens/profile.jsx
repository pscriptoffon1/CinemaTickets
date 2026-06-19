import { useState } from "react";

function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [showAddCardModal, setShowAddCardModal] = useState(false);
    return (

        <div className="mobile-wrapper">
            <div className="movie-page">
                <div className="fixed-top">

                    <div className="topbar">
                        <div className="back-btn">
                            <a className="tt1" href="/sessions">←</a>
                        </div>

                        <div className="screen-title">
                            8 (707) 268 48 12
                        </div>


                    </div>



                </div><br /><br /><br /><br /><br />

                <div className="payments-content">

                    <div className="payment-section">

                        <h3 className="section-title">
                            Saved cards
                        </h3>

                        <div className="saved-card">

                            <div className="card-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33317 6.66667C3.85984 6.66667 2.6665 7.86001 2.6665 9.33334V14.7318H6.69515C7.79515 14.7318 8.21598 15.763 8.21598 15.763L9.15088 20.513C8.04421 16.9477 3.7785 15.2189 2.6665 14.8229V30.6667C2.6665 32.14 3.85984 33.3333 5.33317 33.3333H34.6665C36.1398 33.3333 37.3332 32.14 37.3332 30.6667V9.33334C37.3332 7.86001 36.1398 6.66667 34.6665 6.66667H5.33317ZM24.492 14.4948C25.78 14.4948 27.0962 15.0104 27.0962 15.0104L26.6457 17.3229C26.6457 17.3229 25.6186 16.6484 24.7186 16.6484C23.3373 16.6484 22.854 17.0991 22.854 17.7057C22.854 18.8937 26.7108 19.086 26.7108 21.75C26.7094 23.9633 23.9449 25.5052 21.9556 25.5052C19.9636 25.5052 18.9347 24.8984 18.9347 24.8984L19.4165 22.6797C19.4165 22.6797 20.4778 23.2891 22.0858 23.2891C23.6911 23.2891 23.9139 22.6149 23.9139 22.3255C23.9139 20.6255 20.0623 21.0788 20.0623 17.7708C20.0623 15.9415 21.5707 14.4948 24.492 14.4948ZM12.0285 14.7057H15.0024L10.7733 25.1771H7.71077L5.48161 16.6979C5.48161 16.6979 7.83048 17.8875 9.27848 21.1328C9.34115 21.5275 9.48682 22.1615 9.48682 22.1615L12.0285 14.7057ZM16.0988 14.7057H18.9113L17.2316 25.1771H14.453L16.0988 14.7057ZM31.1978 14.7057H34.1196L36.2707 25.1771H33.742L33.4425 23.6849H29.966L29.3957 25.1771H26.6353L31.1978 14.7057ZM32.2472 17.7266L30.7368 21.6823H33.0389L32.2472 17.7266Z" fill="#637394" />
                                </svg>

                            </div>

                            <div className="card-number">
                                **** **** **** 5615
                            </div>

                            <div className="card-exp">
                                06/24
                            </div>

                        </div>

                        <button onClick={() => setShowModal(true)} className="add-card-btn">
                            Add new card
                        </button>
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

                    </div>

                    <div className="payment-section">

                        <h3 className="section-title">
                            Payments history
                        </h3>

                        <div className="payment-history-card">

                            <img
                                src="https://upload.wikimedia.org/wikipedia/ru/b/b2/The_Batman_Poster.jpg"
                                alt="Batman"
                                className="history-poster"
                            />

                            <div className="history-info">

                                <h4 className="history-title">
                                    The Batman
                                </h4>

                                <p className="history-date">
                                    6 April 2022, 14:40
                                </p>

                                <p className="history-detail">
                                    Eurasia Cinema7 • 3200 ₸
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;