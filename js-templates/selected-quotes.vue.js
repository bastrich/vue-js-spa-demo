// template for Selected Quotes page
const SelectedQuotes = {
    template: `
        <div id="quotes">
            <div id="quotes-header">
                <p>Lone Wolf playing in the distance...</p>
                <audio controls id="lone-wolf-audio">
                  <source src="../resources/music/lone-wolf-10374.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        
            <div id="quotes-block">
                <!--filling template with data-->
                <div v-for="{text, author} in quotes" class="quote">
                    <i class="fas fa-quote-left fa2"></i>
                    <div class="text">
                        <i class="fas fa-quote-right fa1"></i>
                        <div class="quote-content">
                            <p class="quote-text">{{text}}</p>
                            <p class="quote-author">{{author}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    //array of quotes
    data: function() {
        return {
            quotes: [
                {
                    text: 'The lion may be more powerful but the wolf does not perform in the circus',
                    author: 'Unknown'
                },
                {
                    text: 'If you live among wolves you have to act like a wolf',
                    author: 'Nikita Khrushchev'
                },
                {
                    text: 'If the wolf is silent, then it is better not to interrupt him',
                    author: 'Unknown'
                },
                {
                    text: 'Wolves go after a wounded deer, it is the nature of the beast',
                    author: 'Barbara Delinsky'
                },
                {
                    text: 'There are many more sheep in the world than wolves',
                    author: 'Unknown'
                },
                {
                    text: 'Hunger drives the wolf out of the wood',
                    author: 'German Proverb'
                },
                {
                    text: 'If you are not with the wolves in the pack, then you will become their food',
                    author: 'Unknown'
                },
                {
                    text: 'It\'s better to be who you are than to be who you won\'t be',
                    author: 'Unknown'
                }
            ]
        };
    }
};
