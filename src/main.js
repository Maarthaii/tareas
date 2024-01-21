const server = require('./config/server')
const dotenv = require('dotenv');
require('./database/db')

dotenv.config()

const port = process.env.PORT;



//  Hay que pasar el port antes del callback
server.listen(port, () => {
  console.log(' Server is running on port ' + port);
  console.log('Click here: http://localhost:' + port + '\n');
});
