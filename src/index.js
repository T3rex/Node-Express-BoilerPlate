const express = require("express");
const { ServerConfig, Logger } = require("./config/index");
const apiRoutes = require("./routes/index");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server", "root", {});
});
