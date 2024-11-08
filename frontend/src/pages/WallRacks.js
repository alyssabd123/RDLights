import './WallRacks.css'
import 'w3-css/w3.css'


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
                <div className = 'left' class="w3-container w3-cell">
                    <h1>Base Price*</h1>
                    <p>4 Cues: $150</p>
                </div>
                <div className = 'middle' class="w3-container w3-cell">
                    <img className = 'middle' src = 'https://i.imgur.com/GeaqXkp.png'/>
                </div>
                <div className = 'right' class="w3-container w3-cell">
                    <h1>Customizing</h1>
                </div>
            </div>
        </div>
    )
}

export default WallRacks;