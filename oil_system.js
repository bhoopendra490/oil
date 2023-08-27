function displayOilFilterInfo(btnElement) {
    let title = 'Oil Filter';
    let content = `<ul>
        <li>Dual filter with replaceable cartridges (API 614, 6th Ed. 6.9.1)
            <ul>
                <li>Continuous operation</li>
                <li>Ease of maintenance</li>
            </ul>
        </li>
        <li>ASME Design standard (API 614, 6th Ed. 6.3.1)
            <ul>
                <li>Safety and reliability</li>
                <li>Code stamping can be specified (API 614, 6th Ed. 6.3.3)</li>
            </ul>
        </li>
        <!-- ... Add the rest of the content for Oil Filter in the same format ... -->
    </ul>`;
    let position = { left: 1300, top: 400 };  // Adjust position accordingly
    changeBackground('assets/oil/filter.png', btnElement, title, content, position);
}

function displayOilCoolerInfo(btnElement) {
    let title = 'Oil Cooler';
    let content = `<ul>
        <li>Water-cooled shell and tube type (API 614, 6th Ed. 6.8.2.2)
            <ul>
                <li>Consistent cooling performance</li>
                <li>Space efficiency</li>
                <li>Lower outlet temperatures</li>
            </ul>
        </li>
        <!-- ... Add the rest of the content for Oil Cooler in the same format ... -->
    </ul>`;
    let position = { left: 1000, top: 450 };  // Adjust position accordingly
    changeBackground('assets/oil/cooler.png', btnElement, title, content, position);
}

function displayOilHeaterInfo(btnElement) {
    let title = 'Oil Heater';
    let content = `<ul>
        <li>Removable emersion heating element (API 614, 6th Ed. 6.6.8.2.4)
            <ul>
                <li>Maintenance and replacement</li>
                <li>If specified, heating elements should be removable during operation (API 614, 6th Ed. 6.6.8.7)</li>
            </ul>
        </li>
        <!-- ... Add the rest of the content for Oil Heater in the same format ... -->
    </ul>`;
    let position = { left: 700, top: 550 };  // Adjust position accordingly
    changeBackground('assets/oil/heater.png', btnElement, title, content, position);
}

function displayLowOilLevelIndicationInfo(btnElement) {
    let title = 'Low Oil Level Indication';
    let content = `<ul>
        <li>Low-lube oil level alarm (API 672, 5th Ed. Table 1)
            <ul>
                <li>Protects machinery against loss of oil</li>
                <li>Interlocked to turn off the heater (API 614, 6th Ed. 6.6.8.6.4)</li>
            </ul>
        </li>
        <!-- ... Add the rest of the content for Low Oil Level Indication in the same format ... -->
    </ul>`;
    let position = { left: 625, top: 450 };  // Adjust position accordingly
    changeBackground('assets/oil/lolt.png', btnElement, title, content, position);
}

function displayOilPipingInfo(btnElement) {
    let title = 'Oil Piping';
    let content = `<ul>
        <li>Stainless steel downstream of the oil filter (API 672, 5th Ed. 7.5.2.1)
            <ul>
                <li>Mitigates corrosion</li>
                <li>Protects critical rotating components</li>
            </ul>
        </li>
        <!-- ... Add the rest of the content for Oil Piping in the same format ... -->
    </ul>`;
    let position = { left: 1000, top: 600 };  // Adjust position accordingly
    changeBackground('assets/oil/piping.png', btnElement, title, content, position);
}

function displayPLVInfo(btnElement) {
    let title = 'Pressure Limiting Valves (PLV)';
    let content = `<ul>
        <li>Required for each oil pump – (API 614 6th Ed. 6.7.20.1)
            <ul>
                <li>Pressure modulating type</li>
                <li>Protects pump and system from excessive pressure</li>
            </ul>
        </li>
        <!-- ... Add the rest of the content for PLV in the same format ... -->
    </ul>`;
    let position = { left: 800, top: 575 };  // Adjust position accordingly
    changeBackground('assets/oil/plv.png', btnElement, title, content, position);
}

function displayOilSuctionStrainerInfo(btnElement) {
    let title = 'Oil Suction Strainer';
    let content = `<ul>
        <li>Removeable strainer shall be in the suction pipe for each pump (API 614, 6th Ed. 6.7.27)
            <ul>
                <li>Protects pumps from pipe scale, rust, debris</li>
            </ul>
        </li>
    </ul>`;
    let position = { left: 525, top: 550 };  // Adjust position accordingly
    changeBackground('assets/oil/suction_strainer.png', btnElement, title, content, position);
}

function displayOilSightFlowInfo(btnElement) {
    let title = 'Oil Sight Flow';
    let content = `<ul>
        <li>Required for all atmospheric drains (API 672, 5th Ed. 7.4.4.5/API 614, 6th Ed. 8.3.9.1)
            <ul>
                <li>Visual confirmation of oil flow</li>
                <li>Monitor oil quality</li>
                <li>Detects oil fouling</li>
            </ul>
        </li>
    </ul>`;
    let position = { left: 400, top: 500 };  // Adjust position accordingly
    changeBackground('assets/oil/sight_flow.png', btnElement, title, content, position);
}

function displayAuxiliaryOilPumpInfo(btnElement) {
    let title = 'Auxiliary Oil Pump';
    let content = `<ul>
        <li>Motor driven (API 614, 6th Ed. 6.7.7.1)
            <ul>
                <li>Used for initial start-up</li>
                <li>Operates independently of compressor</li>
                <li>Provides proper cooling after compressor trip or shutdown</li>
            </ul>
        </li>
        <li>Designed for oil temp of 50° F (API 614, 6th Ed. 6.7.15)
            <ul>
                <li>Initial start-up</li>
                <li>Circulates oil during heating</li>
            </ul>
        </li>
    </ul>`;
    let position = { left: 400, top: 500 };  // Adjust position accordingly
    changeBackground('assets/oil/auxiliary.png', btnElement, title, content, position);
}




