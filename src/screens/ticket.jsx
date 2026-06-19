function Ticket() {
    return (
        <div className="mobile-wrapper">
            <div className="movie-page">
                <div className="fixed-top">

                    <div className="topbar">


                        <div className="screen-title">
                            Your ticlet
                        </div>

                        <div className="back-btn">
                            <a className="tt1" href="/sessions"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.4911 13.4854C25.2268 13.4916 24.9758 13.6022 24.7928 13.793L19.9998 18.5859L15.2069 13.793C15.1136 13.6971 15.002 13.6208 14.8787 13.5688C14.7554 13.5168 14.6229 13.4901 14.4891 13.4902C14.2902 13.4905 14.096 13.55 13.9311 13.6612C13.7663 13.7724 13.6383 13.9302 13.5636 14.1145C13.4888 14.2987 13.4707 14.5011 13.5116 14.6957C13.5524 14.8903 13.6503 15.0683 13.7928 15.207L18.5858 20L13.7928 24.793C13.6968 24.8851 13.6202 24.9955 13.5674 25.1176C13.5146 25.2397 13.4868 25.3712 13.4854 25.5042C13.484 25.6373 13.5093 25.7692 13.5595 25.8924C13.6098 26.0156 13.6842 26.1275 13.7783 26.2216C13.8724 26.3157 13.9843 26.39 14.1074 26.4403C14.2306 26.4906 14.3626 26.5158 14.4956 26.5144C14.6287 26.5131 14.7601 26.4852 14.8822 26.4324C15.0044 26.3796 15.1147 26.303 15.2069 26.207L19.9998 21.4141L24.7928 26.207C24.885 26.303 24.9953 26.3796 25.1175 26.4324C25.2396 26.4852 25.371 26.5131 25.5041 26.5145C25.6371 26.5158 25.7691 26.4906 25.8923 26.4403C26.0154 26.39 26.1273 26.3157 26.2214 26.2216C26.3155 26.1275 26.3899 26.0156 26.4401 25.8924C26.4904 25.7692 26.5156 25.6373 26.5143 25.5042C26.5129 25.3712 26.485 25.2397 26.4323 25.1176C26.3795 24.9955 26.3028 24.8851 26.2069 24.793L21.4139 20L26.2069 15.207C26.3524 15.0675 26.4523 14.8873 26.4936 14.6899C26.5349 14.4926 26.5155 14.2874 26.4382 14.1012C26.3608 13.9151 26.2289 13.7567 26.0599 13.6468C25.8909 13.5369 25.6926 13.4806 25.4911 13.4854Z" fill="#637394" />
                            </svg>
                            </a>
                        </div>
                    </div>



                </div><br /><br /><br /><br /><br />
                <div className="ticket">

                    <div className="qr-section">

                        <div className="qr-box">
                            <img
                                src="https://w7.pngwing.com/pngs/1006/79/png-transparent-qr-code-qr-code-qr-code-thumbnail.png"
                                alt="QR Code"
                                className="qr-image"
                            />
                        </div>

                        <p className="qr-description">
                            Show this QR code at the cinema entrance
                        </p>

                    </div>

                    <div className="tear-line">

                        <div className="tear-side"></div>

                        {[...Array(14)].map((_, index) => (
                            <div key={index} className="tear-dot"></div>
                        ))}

                        <div className="tear-side"></div>

                    </div>

                    <div className="ticket-info">

                        <h2 className="movie-title">
                            The Batman
                        </h2>

                        <div className="info-row">
                            <span className="info-label">Cinema</span>

                            <div className="info-column">
                                <span className="info-value">
                                    Eurasia Cinema7
                                </span>

                                <span className="info-muted">
                                    ул. Петрова, д.24, ТЦ "Евразия"
                                </span>
                            </div>
                        </div>

                        <div className="info-row">
                            <span className="info-label">Date</span>
                            <span className="info-value">
                                6 April 2022, 14:40
                            </span>
                        </div>

                        <div className="info-row">
                            <span className="info-label">Hall</span>
                            <span className="info-value">6th</span>
                        </div>

                        <div className="info-row">
                            <span className="info-label">Seats</span>
                            <span className="info-value">
                                7 row (7, 8)
                            </span>
                        </div>

                        <div className="info-row">
                            <span className="info-label">Cost</span>
                            <span className="info-value">
                                3200 ₸ (paid)
                            </span>
                        </div>

                    </div>

                    <div className="ticket-buttons">

                        <button className="download-btn">
                            Save
                        </button>

                        <button className="share-btn">
                            <a className="tt1" href="/profile">     →
                                Share</a>
                        </button>

                    </div>

                </div>



            </div>
        </div>
    );
}

export default Ticket;