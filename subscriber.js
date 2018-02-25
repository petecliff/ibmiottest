const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org');

const config = require('./config');

client.on('connect', function () {
  client.subscribe(config.CHANNEL);
  console.log('Connected & subscribed...');
})

client.on('message', function (topic, message) {
  console.log(message.toString());
})
