module.exports = {
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [__dirname + "/**/*.entity.{js,ts}"],
  logging: false,
};
