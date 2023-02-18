const Navigation = {
    template: `
        <nav>
            <ul>
                <li class="border-left border-right">
                    <router-link to="/about"><span>About</span></router-link>
                </li>
                <li class="border-right">
                    <router-link to="/rules"><span>Rules</span></router-link>
                </li>
                <li class="border-right">
                    <router-link id="selected-quotes-link" to="/selected-quotes"><span>Selected Quotes</span></router-link>
                </li>
                <li class="border-right">
                    <router-link to="/meeting-schedule"><span>Meeting Schedule</span></router-link>
                </li>
                <li class="border-left border-right">
                    <router-link to="/join-us"><span>Join Us</span></router-link>
                </li>
            </ul>
        </nav>
    `
};