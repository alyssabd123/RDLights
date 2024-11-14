import './WallRacks.css'

const WallRacks = () => {

    // Function to handle the scroll to the split section
    const scrollToVisual = () => {
        const targetSection = document.getElementById('visual');

        // Smoothly scrolls to the split section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    return(
        <div className='wall-rack-page'>
            <div className = 'split-section'>
                <div className='racksLeft'>
                </div>
                <div className='racksRight'>
                    <h1>Wall Racks</h1>
                    <p>Hand carved cue racks are available in sizes of 4 to 8 pool cues, 
                        and can come in any color. The racks can be expanded to include 
                        a billiard ball holder for an extra $75.</p> 
                    <button className="button arrow-button" onClick={scrollToVisual}></button>
                </div>
            </div>
            <div className='bar'>
                <h1>PRICING</h1>
            </div>
            <div className="visual" id="visual" class="w3-cell-row">
                <div className = 'left' >
                    <h1>Base Price*</h1>
                    <p><b>4 Cues:</b> $150</p>
                    <p><b>6 Cues:</b> $200</p>
                    <p><b>8 Cues:</b> $250</p>

                    <p>*Does not include cost of installation</p>
                    
                </div>
                <div className = 'middle' >
                    <img className = 'middle' src= 'https://i.imgur.com/GeaqXkp.png' alt='graph'/>
                </div>
                <div className = 'right' >
                    <h1>Customizing</h1>
                    <p><b>Pool Ball Holder</b></p>
                    <p>extra $75</p>

                    <p><b>Rack Color</b></p>
                    <p>No extra cost</p>

                    <p><b>Rack Detailing</b></p>
                    <p>Price depends on design complexity</p>
                </div>
            </div>
        </div>
    )
}

export default WallRacks;