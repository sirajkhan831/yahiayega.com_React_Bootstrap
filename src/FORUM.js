function FORUM() {
    return (
        <div className="forum">
            <div className="container-fluid front-forum">
                <div className="container-forum">
                    <div className='text'>
                        <h1 className="h1" style={{ marginTop: '0.1rem', fontSize: '4rem' }}>The Forum</h1>
                        <h2 className="h2"
                            style={{ fontSize: '1.4rem', marginTop: '0.3rem', marginBottom: '2rem' }}>Browse the forum
                            below & start posting questions, tips, and anything else that you'd like to share with
                            us.</h2>
                    </div>
                </div>
            </div>
            <a href="https://wa.me/8966076379" target="_blank">
                <div className="fixed-btn"></div>
            </a>
        </div>
    );
}

export default FORUM;