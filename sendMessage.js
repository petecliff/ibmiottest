const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org');
const config = require('./config');

console.log('Channel: ' + config.CHANNEL);

client.on('connect', function () {
  console.log("Connected. Sending message...");
  client.publish(config.CHANNEL, 'Teach your stars to dance');
  client.end();
});

