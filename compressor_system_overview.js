function displayAirSystemInfo(btnElement) {
    let title = 'Air System';
    let content = `
        <ul>
            <li>Air enters the inlet valve (butterfly valve or guide vanes) and then flows through multiple stages of compression and cooling to be delivered to the downstream process</li>
            <li>Additional Air System Accessories (typically shipped loose from compressor package) (API 672, 5th Ed. 6.1.4):
                <ul>
                    <li>Inlet air filter</li>
                    <li>Discharge blowoff valve</li>
                    <li>Discharge blowoff silencer</li>
                    <li>Discharge check valve</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 650, top: 400 };  // You can adjust these based on where you want the information to appear
    
    changeBackground('assets/compressor/air.png', btnElement, title, content, position);
}

function displayLubricationSystemInfo(btnElement) {
    let title = 'Lubrication System';
    let content = `
        <ul>
            <li>Provides proper lubrication for air compressor gearing and bearings.</li>
            <li>Oil systems shall meet the requirements of API 614, except as modified by API 672 Paragraph 6.9</li>
        </ul>`;
    let position = { left: 800, top: 650 };
    
    changeBackground('assets/compressor/oil.png', btnElement, title, content, position);
}

function displayWaterSystemInfo(btnElement) {
    let title = 'Water System';
    let content = `
        <ul>
            <li>Manifolds cooling water piping to single flanged supply and return connection (API 672, 5th Ed. 7.5.1.2)
                <ul>
                    <li>Reduced piping work at installation</li>
                    <li>Reduce compressor installation/civil costs</li>
                </ul>
            </li>
            <li>Carbon steel construction as standard (API 614 6th Ed. Table 5)</li>
        </ul>`;
    let position = { left: 550, top: 650 };
    
    changeBackground('assets/compressor/water.png', btnElement, title, content, position);
}

function displayElectricalSystemInfo(btnElement) {
    let title = 'Electrical System';
    let content = `
        <ul>
            <li>Electrical and instrumentation to provide safe efficient operation of the compressor</li>
            <li>Electrical systems shall meet requirements of API 614, except as modified by API 672 Paragraph 7.4.6</li>
        </ul>`;
    let position = { left: 750, top: 700 };
    
    changeBackground('assets/compressor/eletrical.png', btnElement, title, content, position);
}
