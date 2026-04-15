const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-12851.crce217.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 12851
    }
});

module.exports = redisClient;