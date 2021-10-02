function Team() {
    return (
        <div className="container-fluid front-teams">
            <h1 className="h1" style={{
                fontSize: '50px',
                marginTop: '3rem',
                marginBottom: '3rem',
                textDecoration: 'underline'
            }}>The Team</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-member">
                        <div className="conatiner-fluid image-team"><img src="siraj.webp" className="rounded-circle" alt="logo" height='350rem' /></div>
                        <h2 className="h2" style={{ fontSize: '3rem', borderTop: '1px solid wheat', borderBottom: '1px solid wheat', borderRadius: '2px' }}>Siraj Khan</h2>
                        <h2 className="h2">Founder and Developer</h2>
                    </div>
                    <div className="col col-member">
                        <div className="conatiner-fluid image-team"><img src="vibhooti.webp" className="rounded-circle" alt="logo" height='350rem' /></div>
                        <h2 className="h2" style={{ fontSize: '3rem', borderTop: '1px solid wheat', borderBottom: '1px solid wheat', borderRadius: '2px' }}>Vibhooti Gonnade</h2>
                        <h2 className="h2">Accounting and Finance</h2>
                    </div>
                    <div className="col col-member">
                        <div className="conatiner-fluid image-team"><img src="neeraj.png" alt="logo" className="rounded-circle" height='350rem' /></div>
                        <h2 className="h2" style={{ fontSize: '3rem', borderTop: '1px solid wheat', borderBottom: '1px solid wheat', borderRadius: '2px' }}>Neeraj Sahu</h2>
                        <h2 className="h2">Marketing and Sales</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;