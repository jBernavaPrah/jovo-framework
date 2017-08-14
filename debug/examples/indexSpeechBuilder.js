'use strict';

const webhook = require('../../index').Webhook;

webhook.listen(3000, function() {
    console.log('Example server listening on port 3000!');
});

const app = require('../../index').Jovo;
app.enableRequestLogging();
app.enableResponseLogging();

// listen for post requests
webhook.post('/webhook', function(req, res) {
    app.handleRequest(req, res, handlers);
    app.execute();
});


let handlers = {

    'LAUNCH': function() {
        app.tell('App launched');
    },
    'HelloWorldIntent': function() {
        let speech = app.speechBuilder();

        let foo = false;
        let bar = true;

        speech
            .addText('HelloWorld')
            .addBreak('100ms', false)
            .addAudio('http://www.any.url/test.mp3', 'Text')
            .addText('Foo', foo)
            .addText('Bar', bar)
            .addText(['Text1', 'Text2', 'Text3'])
            .addBreak(['500ms', '1s'])
            .addAudio(['url1', 'url2', 'url3'])
            .addText('Good Bye.');

        app.tell(speech);
    },
};

// quick testing
// node indexInputs.js --intent NameIntent --parameter name=John

