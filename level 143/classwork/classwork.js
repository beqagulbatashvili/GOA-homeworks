const os = require('os');

const systemInfo = {
    operatingSystem: os.type(),
    networks: os.networkInterfaces(),
    uptimeSeconds: os.uptime(),
    uptimeHours: os.uptime()/3600
};

console.log(systemInfo);