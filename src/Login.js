function Login() {
    return (
        <div className="container-fluid data-front">
            <div className="container-login container-fluid">
                <div className="container row data login col">
                    <h2 className="h2" style={{ fontSize: '2rem', borderBottom: '1px solid wheat' }}>Login Page</h2>
                    <div className="id">
                        <h2 className="h2">User ID : </h2>
                        <form action=""><input type="text" id="id" /></form>
                    </div>
                    <div className="pass">
                        <h2 className="h2">Password : </h2>
                        <form action=""><input type="password" id="myInput" id="pass" /></form>
                    </div>
                    <div className="container-fluid button" style={{ fontFamily: 'El Messiri' }}>
                        <a href="https://www.yahiayega.com/shop">
                            <button type="button" class="btn btn-success col home-btn" style={{ fontFamily: 'El Messiri', marginBottom: '2rem' }}>Login
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;