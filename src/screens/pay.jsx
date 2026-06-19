function Pay() {
    return (
        <div className="mobile-wrapper">
            <div className="movie-page">
                <div className="fixed-top">

                    <div className="topbar">
                        <div className="back-btn">
                          <a className="tt1" href="/">←</a>  
                        </div>

                        <div className="screen-title">
                            Pay for tickets
                        </div>
                    </div>

          

                </div><br /><br /><br /><br /><br />
             

           
        <div className="ticket">
            <div className="ticket-info">

                <h2 className="ticket-title">The Batman</h2>

                <div className="ticket-details">

                    <div className="detail-row">
                        <span className="label">Cinema</span>
                        <div className="value-wrap">
                            <span className="value">Eurasia Cinema7</span>
                            <span className="sub-value">
                                ул. Петрова, д.24, ТЦ "Евразия"
                            </span>
                        </div>
                    </div>

                    <div className="detail-row">
                        <span className="label">Date</span>
                        <span className="value">
                            6 April 2022, 14:40
                        </span>
                    </div>

                    <div className="detail-row">
                        <span className="label">Hall</span>
                        <span className="value">6th</span>
                    </div>

                    <div className="detail-row">
                        <span className="label">Seats</span>
                        <span className="value">7 row (7, 8)</span>
                    </div>

                </div>

                <div className="ticket-line"></div>

                <div className="bill">

                    <div className="bill-row">
                        <span>1 x Adult</span>
                        <span>2200 ₸</span>
                    </div>

                    <div className="bill-row">
                        <span>1 x Child</span>
                        <span>1000 ₸</span>
                    </div>

                    <div className="bill-row total">
                        <span>2 total</span>
                        <span>3200 ₸</span>
                    </div>

                </div>

            </div>

            <div className="tear-line">
                <div className="tear-side"></div>

                {[...Array(14)].map((_, i) => (
                    <div key={i} className="tear-dot"></div>
                ))}

                <div className="tear-side"></div>
            </div>

            <div className="payment-form">

                <input
                    type="text"
                    className="promo-input"
                    placeholder="Promo code"
                />

             <a href="/ticket">   <button className="pay-btn">
                    Pay
                </button></a>

            </div>

        </div>

    </div>
</div>
    );
}

export default Pay;