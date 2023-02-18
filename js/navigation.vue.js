const Navigation = {
    template: `
        <nav>
            <ul>
                <li style="--clr:mediumblue">
                    <router-link to="/about" data-text="&nbsp;About">&nbsp;About&nbsp;</router-link>
                </li>
                <li style="--clr:saddlebrown">
                    <router-link to="/rules" data-text="&nbsp;Rules">&nbsp;Rules&nbsp;</router-link>
                </li>
                <li style="--clr:orchid">
                    <router-link id="selected-quotes-link" to="/selected-quotes" data-text="&nbsp;Selected Quotes">&nbsp;Selected Quotes&nbsp;</router-link>
                </li>
                <li style="--clr:darkorange">
                    <router-link to="/meeting-schedule" data-text="&nbsp;Meeting Schedule">&nbsp;Meeting Schedule&nbsp;</router-link>
                </li>
                <li style="--clr:lime">
                    <router-link to="/join-us" data-text="&nbsp;Join Us">&nbsp;Join Us&nbsp;</router-link>
                </li>
            </ul>
        </nav>
    `
};