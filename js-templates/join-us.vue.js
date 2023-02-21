// template for Join Us page
const JoinUs = {
    template: `
        <div id="join-us">
            <div class="join-us-box">
                <p>Be careful</p>
                <form>
                    <div class="join-us-field">
                        <input type="text">
                        <label>Name</label>
                    </div>
                    <div class="join-us-field">
                        <input type="text">
                        <label>Your talents</label>
                    </div>
                    <div class="join-us-field">
                        <input type="text">
                        <label>Where did you know about us?</label>
                    </div>
                    <button onclick="alert('Thank you for the submission, now look around')">
                        <!--spans for border animation-->
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>           
        </div>
    `
};
