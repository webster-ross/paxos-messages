export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL
}
