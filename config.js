const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "W0pAyY7Y#xzU_u4MRVlnFetU9EMvtM60XlWvW53z9pl3yE0yFAyA",
  OWNER_NUM: process.env.OWNER_NUM || "94754776692",
};
