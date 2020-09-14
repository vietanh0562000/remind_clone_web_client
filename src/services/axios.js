const axios = require("axios");
const { serverAPI: api } = require("@/utils/constants");

const instance = axios.create({
  baseURL: api.BASE_URL,
});

module.exports = instance;
