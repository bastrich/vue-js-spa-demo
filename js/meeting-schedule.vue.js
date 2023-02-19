const MeetingSchedule = {
    template: `
        <div id="content">
            <p><span>Attention</span></p>
            Our upcoming meetings:
            
            <p v-for="{day, month} in meetings" :key="index" class="calendar">{{day}} <em>{{month}}</em></p>
        </div>
    `,
    data: function() {
        return {
            meetings: [
                {
                    day: 30,
                    month: 'February'
                },
                {
                    day: 30,
                    month: 'March'
                },
                {
                    day: 30,
                    month: 'March'
                },
                {
                    day: 30,
                    month: 'March'
                },
                {
                    day: 30,
                    month: 'March'
                },
                {
                    day: 30,
                    month: 'March'
                },
                {
                    day: 30,
                    month: 'March'
                }

            ]
        };
    }
};
