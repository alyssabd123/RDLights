import './Home.css';

const Home = () => {
    return(
        <div>
            <div className="homepage">
                <h1>R.D. Lights</h1>
                <p>Custom Pool Lights</p>
                <p>Handmade Wall Racks</p>
            </div>
            <div className="split-section">
                {/* L section on top of R section to keep ordering accruate */}
                <div className="Lcontent-section">
                    <h1>Photo</h1>
                </div>
                <div className="Rcontent-section">
                    <h1>About Me</h1>
                    <p>My name is Richard</p>
                </div>
            </div>

        </div>    
    )
}

export default Home;