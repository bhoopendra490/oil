function displayIntercoolerInfo(btnElement) {
    console.log("Function called!");
    let title = 'Intercoolers';
    let content = `
    <ul>
        <li>Water-cooled shell and tube type (API 672, 5th Ed. 7.6.4)
            <ul>
                <li>Consistent cooling performance</li>
                <li>Space efficiency</li>
                <li>Lower outlet temperatures</li>
            </ul>
        </li>
        <li>5/8" tube diameter and 18 BWG tube wall thickness (API 672, 5th Ed. 7.6.4)
            <ul>
                <li>Reduces tube fouling</li>
                <li>Prevents tube leaks</li>
                <li>Reduces maintenance and increases reliability</li>
            </ul>
        </li>
        <li>30° F temperature rise of water and 5-8 ft/s water velocity (API 672, 5th Ed. 6.1.6)
            <ul>
                <li>Cooling efficiency and performance</li>
                <li>Customer cooling water limitations</li>
                <li>Prevents fouling and piping scale</li>
                <li>Minimize pipe corrosion</li>
            </ul>
        </li>
        <li>Carbon steel shell and copper tubes (API 672, 5th Ed. 7.6.6)
            <ul>
                <li>Suitable for non-corrosive environments or water</li>
                <li>Alternative materials may be specified for corrosive environments</li>
            </ul>
        </li>
    </ul>`;
    
    let position = { left: 1000, top: 400 };
    
    changeBackground('assets/baseplate/intercooler.png', btnElement, title, content, position);
}

function displayOilReservoirInfo(btnElement) {
    console.log("Function called!");
    let title = 'Oil Reservoir';
    let content = `
    <ul>
        <li>Vendor standard design and material (API 672, 5th Ed. 6.9.4)
            <ul>
                <li>Suitable for non-corrosive environments</li>
                <li>Cost considerations</li>
                <li>Stainless steel may be specified for corrosive environments (API 672, 5th Ed. 6.9.5)</li>
                <li>Sloping may be specified for proper draining (API 614, 5th Ed. 6.6.3.1)</li>
            </ul>
        </li>
        <li>3 min working capacity/5 min retention capacity (API 614, 6th Ed. 6.6.7.2/6.6.7.3)
            <ul>
                <li>Sufficient oil for initial lubrication and priming</li>
                <li>Cooling and heat dissipation</li>
                <li>Protects machinery due to low oil level or loss of pressure</li>
            </ul>
        </li>
    </ul>`;
    
    let position = { left: 1300, top: 400 };  // Adjust the position as needed
    
    changeBackground('assets/baseplate/reservoir.png', btnElement, title, content, position);
}

function displayLevelIndicatorInfo(btnElement) {
    console.log("Function called!");
    let title = 'Level Indicator';
    let content = `
    <ul>
        <li>Span minimum to maximum operating levels (API 614, 5th Ed. 6.6.4.3)
            <ul>
                <li>Provides a clear indication of the oil level to the operator locally</li>
            </ul>
        </li>
    </ul>`;
    
    let position = { left: 500, top: 400 };  // Adjust the position as needed
    
    changeBackground('assets/baseplate/level.png', btnElement, title, content, position);
}

