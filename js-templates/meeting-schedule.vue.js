// template for Meeting Schedule page
const MeetingSchedule = {
    template: `
        <div id="schedule">
            <p><span class="attention">Attention</span>: Due to COVID-19 restrictions the schedule is a subject of change.</p>
            <p>Our upcoming meetings:</p>
            <div id="schedule-layout">
                <!--filling template with meetings data-->
                 <p v-for="{day, month} in meetings" class="calendar">{{day}} <em>{{month}}</em></p>
            </div>
        </div>
    `,
    //array of meeting days
    data: function() {
        return {
            meetings: [
                {
                    day: 30,
                    month: 'February'
                },
                {
                    day: 31,
                    month: 'March'
                },
                {
                    day: 32,
                    month: 'March'
                },
                {
                    day: 1,
                    month: 'April'
                },
                {
                    day: 1,
                    month: 'May'
                },
                {
                    day: 19,
                    month: 'June'
                },
                {
                    day: 4,
                    month: 'July'
                }
            ]
        };
    }
};
