function NavBar(){
	return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src="/scrooge.png"/>
            Duckberg Moneybin &#127974;
                </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" 
                        href='#/createaccount/' 
                        data-toggle="tooltip" 
                        title="Create a new account">
                        Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" 
                        href='#/login/'
                        data-toggle="tooltip" 
                        title="Login to your account">
                        Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" 
                        href='#/deposit/'
                        data-toggle="tooltip" 
                        title="Show your current balance and deposit funds into your account">
                        Deposit &#43; &#36;</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" 
                        href='#/withdraw/'
                        data-toggle="tooltip" 
                        title="See your current balance and withdraw funds from your account">
                        Withdraw &#8722; &#36;</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" 
                        href='#/activity/'
                        data-toggle="tooltip" 
                        title="See all account information and recent transactions">
                        Activity &#129534;</a>
                    </li>
                </ul>
            </div>
        </nav>
	);
}