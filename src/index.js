const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 3001;
// Instantiating an express server
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
