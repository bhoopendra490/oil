function displayBullGearInfo(btnElement) {
    let title = 'Bull Gear';
    let content = `
        <ul>
            <li>Designed and manufactured to tolerances specified in ISO 1328-1, Grade 5 or better (API 672, 5th Ed. 6.5.3)
                <ul>
                    <li>Minimizes vibration and noise</li>
                    <li>Special duty packages require gear tooth quality tolerances specified in ISO 1328-1, Grade 4 (API 672, 5th Ed. 6.12.3)</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 400, top: 400 };  // Placeholder position
    
    changeBackground('assets/airend/bull_gear.png', btnElement, title, content, position);
}

function displayMainOilPumpInfo(btnElement) {
    let title = 'Main Oil Pump';
    let content = `
        <ul>
            <li>Shaft-driven pumps to be positive displacement type (API 614, 6th Ed. 6.7.10)
                <ul>
                    <li>Simple and reliable</li>
                    <li>Protects against loss of power</li>
                </ul>
            </li>
            <li>Sized for highest rated temperature (API 614, 6th Ed. 6.7.13a)
                <ul>
                    <li>Handles lowest possible oil viscosity</li>
                    <li>Prevents premature wear</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 1000, top: 400 };  // Placeholder position
    
    changeBackground('assets/airend/oil_pump.png', btnElement, title, content, position);
}

function displayCasingsInfo(btnElement) {
    let title = 'Casings';
    let content = `
        <ul>
            <li>Rated for 1.1x max discharge pressure (API 672, 5th Ed. 6.2.2)
                <ul>
                    <li>Protects against fluctuations in pressure</li>
                    <li>Provides a safety factor on the discharge pressure</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 850, top: 400 };  // Placeholder position
    
    changeBackground('assets/airend/casing.png', btnElement, title, content, position);
}

function displaySealsInfo(btnElement) {
    let title = 'Seals';
    let content = `
        <ul>
            <li>Air and oil shaft seals shall be provided (API 672, 5th Ed. 6.6)
                <ul>
                    <li>Contains air inside the compressor casings</li>
                    <li>Prevents oil from migrating to the airstream</li>
                    <li>Verified by ISO 8573 Class Zero emissions testing and certification</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 550, top: 450 };  // Placeholder position
    
    changeBackground('assets/airend/seal.png', btnElement, title, content, position);
}

function displayBearingsInfo(btnElement) {
    let title = 'Bearings';
    let content = `
        <ul>
            <li>Hydrodynamic radial and thrust bearings (API 672, 5th Ed. 6.8.1.1)
                <ul>
                    <li>Even load distribution</li>
                    <li>Vibration damping</li>
                    <li>Proven track record for high-speed applications</li>
                </ul>
            </li>
            <li>Allow for bearing removal without disturbing the equipment driver (API 672, 5th Ed. 6.8.4.1)
                <ul>
                    <li>Ease of maintenance and reduced downtime</li>
                </ul>
            </li>
            <li>Bearings shall be designed not to exceed 100° C (212° F) (API 672, 5th Ed. 6.8.1.3)
                <ul>
                    <li>Equipment protection and reliability</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 500, top: 450 };  // Placeholder position
    
    changeBackground('assets/airend/barings.png', btnElement, title, content, position);
}

function displayRotorAssemblyInfo(btnElement) {
    let title = 'Rotor Assembly';
    let content = `
        <ul>
            <li>10% pressure rise from rated capacity to surge (API 672, 5th Ed. 6.1.9.3)
                <ul>
                    <li>Compressor stability and surge avoidance</li>
                    <li>Equipment protection and reliability</li>
                    <li>Improved efficiency</li>
                </ul>
            </li>
            <li>Impellers shall be stainless steel, cast or forged and milled construction (API 672, 5th Ed. 6.5.2.1)
                <ul>
                    <li>Corrosion protection</li>
                    <li>Strength and material composition and structure</li>
                </ul>
            </li>
            <li>Shaft surface finish to be maximum of 0.8µm (32 µin) (API 672, 5th Ed. 6.5.1.2.2)
                <ul>
                    <li>Reduce vibration levels</li>
                    <li>Safe and reliable operation</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 400, top: 500 };  // Placeholder position
    
    changeBackground('assets/airend/rotor.png', btnElement, title, content, position);
}

function displayInstrumentationInfo(btnElement) {
    let title = 'Instrumentation';
    let content = `
        <ul>
            <li>Two radial vibration probes oriented 90° apart (API 672, 5th Ed. 7.4.4.6.1)
                <ul>
                    <li>Detects vibration in either axis</li>
                    <li>Prevents costly damage to the unit</li>
                    <li>Leading indicator of bearing wear</li>
                </ul>
            </li>
            <li>Bearing temperature monitor (API 672, 5th Ed. 7.10.13)
                <ul>
                    <li>Detects bearing wear</li>
                    <li>Predictive maintenance</li>
                    <li>Requires customer to specify</li>
                </ul>
            </li>
            <li>Gearcase accelerometer provisions (API 672, 5th Ed. 7.4.4.6.2)
                <ul>
                    <li>Condition monitoring</li>
                    <li>Predictive maintenance</li>
                </ul>
            </li>
            <li>Additional instrumentation can be specified</li>
        </ul>`;
    let position = { left: 700, top: 250 };  // Placeholder position
    
    changeBackground('assets/airend/instrumentation.png', btnElement, title, content, position);
}






