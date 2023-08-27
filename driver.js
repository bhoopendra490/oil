function displayMainDriverInfo(btnElement) {
    let title = 'Main Driver';
    let content = `
        <ul>
            <li>Electric Motor or Steam Turbine with a nameplate rating of 110% of rated power
                <ul>
                    <li>Overload capacity</li>
                    <li>Safety margin</li>
                    <li>Future upgrade flexibility</li>
                </ul>
            </li>
            <li>Electric Motors standards to be specified by customer (API 672 5th Ed. 7.1.2.1)
                <ul>
                    <li>General purpose electric motors per API 547</li>
                    <li>Special purpose motors per API 541</li>
                    <li>Synchronous motors per API 546</li>
                </ul>
            </li>
            <li>Steam turbines shall follow API 611 requirements (API 672, 5th Ed. 7.1.3.1)</li>
        </ul>`;
    let position = { left: 1200, top: 200 };  // adjust as needed
    changeBackground('assets/driver/main.png', btnElement, title, content, position);
}

function displayCouplingGuardInfo(btnElement) {
    let title = 'Coupling Guard';
    let content = `
        <ul>
            <li>Removeable without disturbing coupling elements (API 672, 5th Ed. 7.2.2.1)
                <ul>
                    <li>Maintenance access</li>
                </ul>
            </li>
            <li>Enclose coupling to prevent contact with moving parts (API 672, 5th Ed. 7.2.2.2)
                <ul>
                    <li>Operator safety</li>
                </ul>
            </li>
            <li>Rigid structure to withstand 200 lb. point load (API 672, 5th Ed. 7.2.2.3)
                <ul>
                    <li>Prevents contact with moving parts</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 700, top: 450 };  // adjust as needed
    changeBackground('assets/driver/coupling_guard.png', btnElement, title, content, position);
}

function displayCouplingInfo(btnElement) {
    let title = 'Coupling';
    let content = `
        <ul>
            <li>Flexible elements of corrosion-resistant material (API 672, 5th Ed. 7.2.1.2)
                <ul>
                    <li>Misalignment compensation</li>
                    <li>Vibration damping</li>
                    <li>Corrosion protection</li>
                </ul>
            </li>
            <li>Couplings keyed to the shaft (API 672, 5th Ed. 7.2.1.5)
                <ul>
                    <li>Torque transmission</li>
                    <li>Slip prevention</li>
                    <li>Ease of maintenance</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 700, top: 450 };  // adjust as needed
    changeBackground('assets/driver/coupling.png', btnElement, title, content, position);
}

function displayDriverMountingInfo(btnElement) {
    let title = 'Driver Mounting';
    let content = `
        <ul>
            <li>Mounting surfaces to be 1 inch larger than driver's foot (API 672, 5th Ed. 7.3.7)
                <ul>
                    <li>Proper leveling and alignment</li>
                </ul>
            </li>
            <li>Mounting surfaces require stringent surface finish and flatness requirements (API 672, 5th Ed. 7.3.7)
                <ul>
                    <li>Prevent driver soft foot or misalignment</li>
                </ul>
            </li>
            <li>Slotted stainless steel shims
                <ul>
                    <li>Driver alignment</li>
                </ul>
            </li>
        </ul>`;
    let position = { left: 1200, top: 450 };  // adjust as needed
    changeBackground('assets/driver/mounting.png', btnElement, title, content, position);
}
