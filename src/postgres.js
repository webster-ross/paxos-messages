import {Pool} from 'pg'
import configs from './configs'

const client = new Pool({connectionString: configs.DATABASE_URL})
export default client
