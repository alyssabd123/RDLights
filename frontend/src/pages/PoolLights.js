import './PoolLights.css'

const PoolLights = () => {
    return(
        <div className='pool-lights-page'>
            <div>
                <div id='split-section' className='split-section'>
                    <div className='lightsLeft'>
                        <div id='headera'>
                        <h1>Pool Lights</h1>
                        </div>
                        <p>Our lights are made to order in a size and color to match your room and table. 
                            Additional customization options - such as suede-wrapping, and adding logos 
                            or designs - are available at an additional price, based on the materials and work required.
                        </p>
                    </div>
                    <div className='lightsRight'></div>
            </div>
            <div className='pricing'>
                    <div>
                        <h1>Pricing</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoolLights;