function Home(){

	// Setting up some state and context variables
    const [show, setShow]      = React.useState(true);
    const [email, setEmail]    = React.useState('');
    const currentUser          = React.useContext(UserContext);

    // Get Current Authentication Status
    auth.onAuthStateChanged((userCredential) => {
        if (userCredential) {
            setShow(false);
            // If the user is logged in...
            console.log("Starting ------------------------------------------------")
            console.log("Current User: ")
            console.log(userCredential);
            currentUser.user = userCredential;
            console.log(`Current Email: ${currentUser.user.email}`)
            console.log(`Current UID: ${currentUser.user.uid}`)
            console.log("Ending ------------------------------------------------")
            setEmail(currentUser.user.email)
        } else {
            // If the user is logged out...
            setShow(true)
            console.log("No User Logged In Right Now")
            currentUser.user = {};
        }
    })

    return(
        <>
        <Card 
			bgcolor  = "light"	
			txtcolor = "dark"
			header   = {
						<>
						<h3>
						<table className="table table-borderless">
							<thead>
								<tr>
								<th>Welcome to the Duckberg Moneybin!</th>
								<th className="text-right">
									<div className = "badge bg-light text-dark"> {show ? 
									<>No Active User</> :
									<>{email}</>} 
									</div>
									</th>
								</tr>
							</thead>
						</table>
						</h3>
						</>
						}
			title="Welcome to the the Duckberg Moneybin! Deposit your money with us so Scrooge can swim even more!"
			body={
				<>
					<div className="text-center">	
						<img src="../bank.png" className="img-fluid center" alt="Responsive image" width="80%"/>
					</div><br/>
					
					Our customers are raving about the largest vault in Duckberg. Below are some of our glowing reviews:<br/><br/>
					
					<div className="card">
					<div className="card-body">
					<h5 className="card-title">&#9733;&#9733;&#9733;&#9733;&#9734;</h5>
					<h6 className="card-subtitle mb-2 text-muted">Launchpad McQuack</h6>
					<p className="card-text">I fly all over the world and know my money is safe in Mr. Scrooge's vault. I'm not just saying this because he's my employer.</p>
					</div>
					</div><br/>
					
					<div className="card">
					<div className="card-body">
					<h5 className="card-title">&#9733;&#9733;&#9733;&#9733;&#9734;</h5>
					<h6 className="card-subtitle mb-2 text-muted">John D. Rockafeather</h6>
					<p className="card-text">My philanthropy is important to me. Being able to access my account at any time lets me focus on high society.</p>
					</div>
					</div><br/>

					<div className="card">
					<div className="card-body">
					<h5 className="card-title">&#9733;&#9734;&#9734;&#9734;&#9734;</h5>
					<h6 className="card-subtitle mb-2 text-muted">The Beagle Boys</h6>
					<p className="card-text">No matter how many times we try to break in, the armed guards, lasers, and Scrooge's nephews are always stopping us!</p>
					</div>
					</div><br/>
					<br/>
					<div className="card">
					<div className="card-body">
					<h5 className="card-title">Contact Us!</h5>
					<p className="card-text">Do you have questions or need assistance?</p>
					<a href="mailto:jeffery.mizner@gmail.com?subject=Help with the Money Bin" class="btn btn-primary">Send us an email!</a>
					</div>
					</div><br/>
				</>
            }
		/>
        </>
    )
}