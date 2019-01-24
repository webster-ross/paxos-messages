import Server from './server'
import configs from './configs'

// start server
const server = Server()
server.listen(configs.PORT)
