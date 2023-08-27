function displayControlPanelInfo(btnElement) {
    let title = 'Control Panel';
    let content = `
        <ul>
            <li>Unit-mounted control panel (API 672, 5th Ed. 6.1.4 G)
                <ul>
                    <li>Local operator control and monitoring</li>
                    <li>Additional safety considerations (Emergency stop, Alarms, Lights, etc.)</li>
                </ul>
            </li>
            <li>Suitable for outdoor installation (API 672, 5th Ed. 7.4.1.2)
                <ul>
                    <li>Protects internal components</li>
                </ul>
            </li>
            <li>Display to be visible in darkness or direct sunlight (API 672, 5th Ed. 7.4.3.4)
                <ul>
                    <li>Ease of operation</li>
                </ul>
            </li>
            <li>Cooling for devices within the panel (API 672, 5th Ed. 7.4.3.4)
                <ul>
                    <li>Protects internal components</li>
                </ul>
            </li>
            <li>Surge recognition and protection system (API 672, 5th Ed. 7.4.3.4)
                <ul>
                    <li>Protects compressor from multiple surge events / possible damage</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 1050, top: 300 };

    changeBackground('assets/ctrl/panel.png', btnElement, title, content, position);
}

function displayTransmittersInfo(btnElement) {
    let title = 'Transmitters';
    let content = `
        <ul>
            <li>Required lieu of switches (API 614, 6th Ed. 8.3.3.1)
                <ul>
                    <li>Continuous measurement</li>
                    <li>Accuracy</li>
                    <li>Data Logging/Trending</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 650, top: 275 };

    changeBackground('assets/ctrl/transmitter.png', btnElement, title, content, position);
}

function displayConduitHeadRTDsInfo(btnElement) {
    let title = 'Conduit head RTDs';
    let content = `
        <ul>
            <li>Lead wires shall terminate in the conduit head. (API 614, 6th Ed. 8.3.6.2)
                <ul>
                    <li>Easy installation/replacement</li>
                    <li>Protects against harsh environments</li>
                    <li>Flexible cable length</li>
                </ul>
            </li>
			<li>Stainless steel thermowells required for temperature elements (API 672, 5th Ed. 7.4.4.3)
                <ul>
                    <li>Easy installation or replacement</li>
                    <li>Protects temperature sensor</li>
                    <li>Corrosion resistance</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 600, top: 500 };

    changeBackground('assets/ctrl/conduit_head_RTD.png', btnElement, title, content, position);
}

function displayCablingInfo(btnElement) {
    let title = 'Cabling';
    let content = `
        <ul>
            <li>Shall be armored cable in tray or run in metal conduit (API 672, 5th Ed. 7.4.6.6)
                <ul>
                    <li>Mechanical and environmental protection</li>
                    <li>Fire resistance</li>
                    <li>Electrical safety</li>
                    <li>Long-term durability</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 800, top: 500 };

    changeBackground('assets/ctrl/cabling.png', btnElement, title, content, position);
}
