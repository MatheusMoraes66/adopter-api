export const environment = (): any => {
  let env = null;
  if (process.env.MODE == "development") {
    env = {
      type: "sqlite",
      database: "./src/config/database.sqlite",
    };
  } else {
    env = {
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
    };
  }
  return env;
};
