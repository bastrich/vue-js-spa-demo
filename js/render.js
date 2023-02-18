function renderArticlesList() {
    let template = document.getElementById('template').innerHTML;
    let articles = []
    for(let i = 0; i < 10; i++) {
        articles.push({
            title: 'Lorem Ipsum',
            datetime: '05 Jan 2021 05:46 PM',
            preview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' +
                'Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took' +
                'a galley of type and scrambled it to make a type specimen book...'
        })
    }
    document.getElementById('content').innerHTML = Mustache.render(
        template,
        {
            articles: articles
        }
    );
}