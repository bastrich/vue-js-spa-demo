// template for navigation menu
// attribute data-text is used for menu animation
const Navigation = {
    template: `
        <nav>
            <ul>
                <li id="about-nav">
                    <router-link to="/about" data-text="&nbsp;About">&nbsp;About&nbsp;</router-link>
                </li>
                <li id="rules-nav">
                    <router-link to="/rules" data-text="&nbsp;Rules">&nbsp;Rules&nbsp;</router-link>
                </li>
                <li id="selected-quotes-nav">
                    <router-link id="selected-quotes-link" to="/selected-quotes" data-text="&nbsp;Selected&nbsp;Quotes">&nbsp;Selected&nbsp;Quotes&nbsp;</router-link>
                </li>
                <li id="meeting-schedule-nav">
                    <router-link to="/meeting-schedule" data-text="&nbsp;Meeting&nbsp;Schedule">&nbsp;Meeting&nbsp;Schedule&nbsp;</router-link>
                </li>
                <li id="join-us-nav">
                    <router-link to="/join-us" data-text="&nbsp;Join&nbsp;Us">&nbsp;Join&nbsp;Us&nbsp;</router-link>
                </li>
            </ul>
        </nav>
    `
};