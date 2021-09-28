function Home() {
    return (
        <body className="body">
            <div className="front">
                <div className="main">
                    <h1 className="h1">Chhattisgarh's <br /> own education <br /> portal</h1>
                    <h2 className="h2">ENGINEERING | MEDICAL | COMMERCE</h2>
                    <a href="https://www.yahiayega.com/shop"><button type="button" class="btn btn-warning shop">Shop Now !</button></a>
                </div>
                <div className="image"><img src="logo.png" alt="No Logo" width="750" height="720" /></div>
            </div>
            <div className="line"></div>
            <h1 className="h1" style={{ fontSize: '50px' , marginTop: '3rem', marginBottom: '1rem'}}>Services we offer</h1>
            <div className="services">
                <div className="main2">
                    <img src="book.png" alt="book" width='520px' height='310px' style={{ marginBottom: '30px' }} />
                    <h2 className="h2" style={{ fontSize: '42px' }}>Books</h2>
                    <p className="p">We at Yahi Aayega provide books all over Chhattisgarh with no shipping charges. In Raipur you can get books on the same day of order and in other cities you can get books is less then 3 business days.</p>
                    <a href="https://www.yahiayega.com/shop"><button type="button" className="btn btn-warning book-btn">Shop Now !</button></a>
                </div>
                <div className="main2">
                    <img src="pencil.png" alt="book" width='520px' height='310px' style={{ marginBottom: '30px' }} />
                    <h2 className="h2" style={{ fontSize: '42px' }}>Sample Papers</h2>
                    <p className="p">We provide Previous Question Papers from PTRSU, CSVTU and Ayush university free of cost. We also provide you with Sample papers with carefully selected questions.</p>
                    <div className="samplebutton" style={{ marginTop: '40px' }}>
                        <a href="/csvtu"><button type="button" class="btn btn-warning lecture-btn" style={{ marginRight: '20px' }}>Engineering</button></a>
                        <a href="/ptrsu"><button type="button" class="btn btn-warning" >Commerce</button></a>
                    </div>
                </div>
                <div className="main2">
                    <img src="videos.webp" alt="book" width='520px' height='310px' style={{ marginBottom: '30px' }} />
                    <h2 className="h2" style={{ fontSize: '42px' }}>Lecture Videos</h2>
                    <p className="p">We provide explanation videos on almost all the important topics. You don't need to go anywhere else to study just before exams. Topics are so explained that it takes minimum time to understand.</p>
                    <a href="https://www.yahiayega.com/shop"><button type="button" class="btn btn-warning book-btn" disabled>Coming Soon !</button></a>
                </div>
            </div>
            <div className="line" style={{marginTop: '4rem'}}></div>
            <div className="help" style={{marginTop: '2rem'}}>
                <h1 className="h1" style={{ fontSize: '50px', marginBottom: '50px', textDecoration: 'underline' }}>Helpdesk</h1>
                <div className="right" style={{ float: 'left', marginLeft: '19rem' }}>
                    <h2 className="h2" style={{ fontSize: '40px', marginTop: '0px' }}>Working Hours</h2>
                    <h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' }}>Mon-Sat: 9am - 6pm</h2>
                    <h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' }}>Sun: Closed</h2></div>
                <div className="right" style={{ float: 'left', marginLeft: '28rem' }}>
                    <h2 className="h2" style={{ fontSize: '40px', marginTop: '0px'}}>Contact Us</h2>
                    <h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' }}>yahiayega@gmail.com</h2>
                    <h2 className="h2" style={{ marginTop: '10px', fontSize: '1.3rem' }}>8966076379</h2></div>
            </div>
        </body >
    );
}

export default Home;