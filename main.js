const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    const reply = {
        'status': 'ok'
    };
    res.json(reply);
});

app.post('/action-endpoint', function (req, res) {
  const challenge = req.body.challenge;

  const reply = {
      "challenge": challenge
  };

  const headers = {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${process.env.TOKEN}`
  }

  // console.log(req.body.event);

  /*if (req.body.event.subtype != 'bot_message') {
    const body = {
      'channel': req.body.event.channel,
      'text': 'Hello there'
    }

    const options = {
      url:   'https://slack.com/api/chat.postMessage',
      method: 'POST',
      headers,
      body:  JSON.stringify(body)
    };

    request.post(options, function(err, res, body) {
      if (err) {
        console.log(err);
      }
    })
  }*/

  res.json(reply);
});

const listener = app.listen(process.env.PORT || '3000', function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
