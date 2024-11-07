import './Home.css';

const Home = () => {

    // Function to handle the scroll to the split section
    const scrollToSplitSection = () => {
        const targetSection = document.getElementById('split-section');

        // Smoothly scrolls to the split section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (
        <div className='home-page'>
            <div className="homepageRight">
                <h1>R.D. Lights</h1>
                <p>Custom Pool Lights</p>
                <p>Handmade Wall Racks</p>
                {/* Button to trigger scroll */}
                <button className="button arrow-button" onClick={scrollToSplitSection}></button>
            </div>
            {/* Target section with an id */}
            <div id="split-section" className="split-section">
                {/* Left and right content sections */}
                <div className="Lcontent-section">
                </div>
                <div className="Rcontent-section">
                    <h1>About Me</h1>
                    <p>My name is Richard</p>
                </div>
            </div>
            <div className="third-section">
                <p>More about Richard</p>
            </div>
            <div className="split-section2">
                <div className="Lcontent-section2">
                    <h1>More about Richard</h1>
                </div>
                <div className="Rcontent-section2">
                </div>
            </div>
        </div>
    )
}

export default Home;
