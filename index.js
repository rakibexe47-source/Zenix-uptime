const https = require('https');

const URL = "https://zenix-dashboard-0s6l.onrender.com/#servers"; // এখানে আপনার Render URL বসান
const INTERVAL = 5 * 60 * 1000;

function pingServer() {
  https.get(URL, (res) => {
    console.log(`Pinged at ${new Date().toISOString()} - Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error('Ping failed:', err.message);
  });
}

setInterval(pingServer, INTERVAL);
pingServer();
