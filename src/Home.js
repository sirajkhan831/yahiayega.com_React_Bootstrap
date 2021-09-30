function Home() {
    return (
        <body className="body">
            <a href="https://www.yahiayega.com/shop"><button type="button" class="fixed-btn btn btn-warning">Shop</button></a>
            <div className="container-fluid front-welcome">
                <div className="row welcome">
                    <div className="col portal">
                        <h1 className="h1">Chhattisgarh's <br /> own education <br /> portal</h1>
                        <h2 className="h2">ENGINEERING | MEDICAL | COMMERCE</h2>
                        <a href="https://www.yahiayega.com/shop"><button type="button" class="btn btn-warning col align-self-center vertical-center">Shop Now !</button></a>
                    </div>
                    <div className="col logo-welcome"><img src="logo.png" alt="No Logo" width="750" height="720" /></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="container-fluid mid">
                <h1 className="h1" style={{ fontSize: '50px', marginTop: '3rem', marginBottom: '1rem' ,textDecoration: 'underline'}}>Services we offer</h1>
                <div className="row">
                    <div className="services">
                        <div className="col-sm main2">
                            <img src="book.png" alt="book" width='520px' height='310px' style={{ marginBottom: '30px' }} />
                            <h2 className="h2" style={{ fontSize: '42px' }}>Books</h2>
                            <p className="p">We at Yahi Aayega provide books all over Chhattisgarh with no shipping charges. In Raipur you can get books on the same day of order and in other cities you can get books is less then 3 business days.</p>
                            <a href="https://www.yahiayega.com/shop"><button type="button" className="btn btn-warning book-btn">Shop Now !</button></a>
                        </div>
                        <div className="col-sm main2">
                            <img src="pencil.png" alt="book" width='520px' height='310px' style={{ marginBottom: '30px' }} />
                            <h2 className="h2" style={{ fontSize: '42px' }}>Sample Papers</h2>
                            <p className="p">We provide Previous Question Papers from PTRSU, CSVTU and Ayush university free of cost. We also provide you with Sample papers with carefully selected questions.</p>
                            <div className="samplebutton" style={{ marginTop: '40px' }}>
                                <a href="/csvtu"><button type="button" class="btn btn-warning lecture-btn" style={{ marginRight: '20px' }}>Engineering</button></a>
                                <a href="/ptrsu"><button type="button" class="btn btn-warning" >Commerce</button></a>
                            </div>
                        </div>
                        <div className="col-sm main2">
                            <img src="videos.webp" alt="book" width='520px' height='310px' style={{ marginBottom: '30px' }} />
                            <h2 className="h2" style={{ fontSize: '42px' }}>Lecture Videos</h2>
                            <p className="p">We provide explanation videos on almost all the important topics. You don't need to go anywhere else to study just before exams. Topics are so explained that it takes minimum time to understand.</p>
                            <a href="https://www.yahiayega.com/shop"><button type="button" class="btn btn-warning book-btn soon-btn" disabled>Coming Soon !</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line" style={{ marginTop: '4rem' }}></div>
            <div className="container-fluid help" style={{ marginTop: '2rem' }}>
                <h1 className="h1" style={{ fontSize: '50px', marginBottom: '50px', textDecoration: 'underline' }}>Helpdesk</h1>
                <div className="row">
                    <div className="col-sm right" style={{ float: 'left', marginLeft: '19rem' }}>
                        <h2 className="h2" style={{ fontSize: '40px', marginTop: '0px' }}>Working Hours</h2>
                        <h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' }}>Mon-Sat: 9am - 6pm</h2>
                        <h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' }}>Sun: Closed</h2></div>
                    <div className="col-sm right" style={{ float: 'left', marginLeft: '28rem' }}>
                        <h2 className="h2" style={{ fontSize: '40px', marginTop: '0px' }}>Contact Us</h2>
                        <a href="mailto: yahiayega@gmail.com"><h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' ,textDecoration: 'underline', textDecorationColor: 'rgb(21, 29, 32)'}}>yahiayega@gmail.com</h2></a>
                        <a href="https://wa.me/8966076379"><h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' , textDecoration: 'underline', textDecorationColor: 'rgb(21, 29, 32)'}}>8966076379</h2></a></div>
                </div>
            </div>
        </body >
    );
}

export default Home;