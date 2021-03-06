const path = require('path');

export default {
    http: {
        port: 2000,
        favicon: path.join(__dirname, '../client/assets/favicon.ico'),
        static: {
            '/build': path.join(__dirname, '../../build')
        }
    },
    session: {
        salt: 'SUPER_SALTY_YES?',
        secret: 'SUPER_SECRET_KEY_KERE',
        expires: 4 * 3600 * 1000 // 4 hours
    },
    databases: {
        mongo: 'mongodb://root:demo-center@demo.xinhuazhiyun.com:27017'
    }
}
