function Home() {
    return (
        <body className="body">
            <div className="container-fluid front-welcome">
                <div className="row welcome">
                    <div className="col portal container-fluid">
                        <h1 className="h1" style={{ marginTop: '3rem' }}>Chhattisgarh's <br /> own education <br /> portal</h1>
                        <h2 className="h2">ENGINEERING | MEDICAL | COMMERCE</h2>
                        <div className="container-fluid button" style={{ marginBottom: '5rem' }}>
                            <a href="https://www.yahiayega.com/shop">
                                <button type="button" class="btn btn-warning col home-btn">Shop Now
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="img img-logo-mobile col col-img-portal container-fluid" style={{ maxWidth: '50rem' ,marginTop: '1rem'}}>
                        <img src="logo.png" alt="No Logo" width='600rem' />
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="container-fluid mid">
                <h1 className="h1" style={{
                    fontSize: '50px',
                    marginTop: '3rem',
                    marginBottom: '1rem',
                    textDecoration: 'underline'
                }}>Services we offer</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-mid">
                            <div className="container-fluid main2">
                                <img src="book.png" alt="Books" height="320rem" width="550rem" />
                                <h2 className="h2" style={{ fontSize: '2rem' }}>Books</h2>
                                <h2 className="h2 service-h2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem eos eveniet nisi impedit excepturi quo, fugit labore dicta quis veniam necessitatibus expedita fuga non repellendus quae, nihil recusandae soluta. Dolorum, sint.</h2>
                                <div className="container-fluid button btn-service">
                                    <a href="https://www.yahiayega.com/shop">
                                        <button type="button" class="btn btn-warning col home-btn" style={{ fontFamily: 'El Messiri' }}>Shop Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-mid">
                            <div className="container-fluid main2">
                                <img src="pencil.png" alt="pencil" height="320rem" width="550rem" />
                                <h2 className="h2" style={{ fontSize: '2rem' }}>Sample Papers</h2>
                                <h2 className="h2 service-h2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem eos eveniet nisi impedit excepturi quo, fugit labore dicta quis veniam necessitatibus expedita fuga non repellendus quae, nihil recusandae soluta. Dolorum, sint.</h2>
                                <div className="container-fluid button btn-service">
                                    <a href="https://www.yahiayega.com/shop">
                                        <button type="button" class="btn btn-warning col home-btn" style={{ marginTop: '0px', fontFamily: 'El Messiri' }}>CSVTU
                                        </button>
                                    </a>
                                </div>
                                <div className="container-fluid btn-service">
                                    <a href="https://www.yahiayega.com/shop">
                                        <button type="button" class="btn btn-warning col home-btn" style={{ marginTop: '0px', fontFamily: 'El Messiri' }}>PTRSU
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-mid">
                            <div className="container-fluid main2">
                                <img src="videos.webp" alt="Video" height="320rem" width="550rem" />
                                <h2 className="h2" style={{ fontSize: '2rem' }}>Lecture Videos</h2>
                                <h2 className="h2 service-h2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem eos eveniet nisi impedit excepturi quo, fugit labore dicta quis veniam necessitatibus expedita fuga non repellendus quae, nihil recusandae soluta. Dolorum, sint.</h2>
                                <div className="container-fluid button btn-service">
                                    <button type="button" class="btn btn-warning col home-btn disabled" style={{ fontFamily: 'El Messiri' }}>Coming Soon
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line" style={{ marginTop: '4rem' }}></div>
            <div className="container-fluid">
                <h1 className="h1" style={{ textDecoration: 'underline', marginBottom: '0px' }}>Helpdesk</h1>
                <div className="row">
                    <div className="col col-help">
                        <div className="help-service">
                            <h2 className="h2" style={{ fontSize: '2rem', borderBottom: '1px solid wheat' }}>Contact Us</h2>
                            <h2 className="h2"><a href="https://wa.me/+918966076379" style={{ color: 'rgb(219, 200, 190)' }}>Phone : &nbsp;8966076379</a><br />
                                <a href="Mailto:yahiayega@gmail.com" style={{ color: 'rgb(219, 200, 190)' }}>Email : &nbsp;yahiayega@gmail.com</a></h2>
                        </div>
                    </div>
                    <div className="col col-help">
                        <div className="help-service">
                            <h2 className="h2" style={{ fontSize: '2rem', borderBottom: '1px solid wheat' }}>Working Hours</h2>
                            <h2 className="h2">Mon-Sat : 9AM - 5PM<br />Sunday : Closed</h2>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://wa.me/918966076379" target="_blank">
                <div className="fixed-btn"></div>
            </a>
        </body>
    );
}

export default Home;