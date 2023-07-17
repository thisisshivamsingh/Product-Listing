const mongoose = require("mongoose");
const next = require("next");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const dev = process.env.NODE_ENV !== "production";
const main = next({ dev });
const handle = main.getRequestHandler();
main.prepare().then(() => {
  const app = require("./app");

  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"));

  // For all other requests, use Next.js handler
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});
