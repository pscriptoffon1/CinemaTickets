function About() {
    return (
        <div className="mobile-wrapper2">
            <div className="page movie-page">

                {/* HEADER */}
                <div className="fixed-top">

                    <div className="topbar">
                     <a className="tt1" href="/"> <div className="back-btn">
                            ←
                        </div></a>  

                        <div className="screen-title">
                            The Batman
                        </div>
                    </div>

                    <div className="tabs">
                        <div className="tab active">
                            <span>About</span>
                        </div>

                 <div className="tab">
                                  <a className="tt1" href="/sessions"> <span>Sessions</span></a>
                        </div>
                    </div>

                </div>

                {/* VIDEO */}
                <div className="video-block">

                    {/* Вариант с картинкой */}
                    <div className="play-button">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.19824 0.0017189C1.0521 0.0470642 0 0.982144 0 2.24195V17.6502C0 19.3299 1.87138 20.432 3.34082 19.6179L17.2451 11.9138C18.7568 11.0762 18.7568 8.81592 17.2451 7.97828L3.34082 0.27418C2.97346 0.0706622 2.58029 -0.0133962 2.19824 0.0017189Z" fill="white" fill-opacity="0.5" />
                        </svg>

                    </div>

                    {/* Если видео настоящее, раскомментируй */}

                    {/*
                    <video
                        src="/videos/batman.mp4"
                        poster="/images/batman.jpg"
                        controls
                    />
                    */}

                </div>

                {/* RATING */}
                <div className="rating-section">

                    <div className="rating-item">
                        <h3>8.3</h3>
                        <p>IMDB</p>
                    </div>

                    <div className="rating-line"></div>

                    <div className="rating-item">
                        <h3>7.9</h3>
                        <p>Kinopoisk</p>
                    </div>

                </div>

                {/* CONTENT */}
                <div className="movie-content">

                    <div className="about-text">
                        The Batman is a 2022 American superhero film based on
                        the DC Comics character Batman. The film follows Batman
                        as he investigates corruption in Gotham City while
                        pursuing the Riddler.
                    </div>

                    <div className="params">

                        <div className="param-row">
                            <span className="label">
                                Certificate
                            </span>

                            <div className="certificate">
                                16+
                            </div>
                        </div>

                        <div className="param-row">
                            <span className="label">
                                Runtime
                            </span>

                            <span className="value">
                                02:56
                            </span>
                        </div>

                        <div className="param-row">
                            <span className="label">
                                Release
                            </span>

                            <span className="value">
                                2022
                            </span>
                        </div>

                        <div className="param-row">
                            <span className="label">
                                Genre
                            </span>

                            <span className="value">
                                Action, Crime, Drama
                            </span>
                        </div>

                        <div className="param-row">
                            <span className="label">
                                Director
                            </span>

                            <span className="value">
                                Matt Reeves
                            </span>
                        </div>

                        <div className="param-row cast">
                            <span className="label">
                                Cast
                            </span>

                            <span className="value">
                                Robert Pattinson,
                                Zoë Kravitz,
                                Jeffrey Wright,
                                Colin Farrell,
                                Paul Dano,
                                Andy Serkis
                            </span>
                        </div>

                    </div>

                </div>

                {/* BUTTON */}
                <div className="bottom-action">

                    <button className="buy-ticket-btn">
                        Buy Ticket
                    </button>

                </div>

            </div>
        </div>
    );
}

export default About;