module.exports = {
  HOST: "http://ec2-54-167-49-153.compute-1.amazonaws.com/",
  USER: "root",
  PASSWORD: "root",
  DB: "album-database",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
