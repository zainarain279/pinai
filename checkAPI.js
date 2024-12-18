const axios = require("axios");
const { log } = require("./utils"); // Adjust the path as necessary
const settings = require("./config/config");

// Direct JSON data (used instead of URL checking)
const apiData = {
  "clayton": "https://tonclayton.fun/api/aT83M535-617h-5deb-a17b-6a335a67ffd5",
  "pineye": "https://api2.pineye.io/api",
  "memex": "https://memex-preorder.memecore.com",
  "pocketfi": "https://bot.pocketfi.org",
  "kat": "https://apiii.katknight.io/api",
  "pinai": "https://prod-api.pinai.tech",
  "hivera": "https://app.hivera.org",
  "midas": "https://api-tg-app.midas.app/api",
  "copyright": "If the api changes, please contact the Airdrop Hunter Super Speed tele team (https://t.me/AirdropScript6) for more information and updates!| Have any issuess, please contact: https://t.me/AirdropScript6"
};

async function checkBaseUrl() {
  console.log("Checking API...");
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = await getBaseApi();
    if (result.endpoint) {
      log("No change in API!", "success");
      return result;
    }
  } else {
    return settings.BASE_URL;
  }
}

async function getBaseApi() {
  try {
    if (apiData.pinai) {
      return { endpoint: apiData.pinai, message: apiData.copyright };
    } else {
      return {
        endpoint: null,
        message: defaultMessage()
      };
    }
  } catch (e) {
    return {
      endpoint: null,
      message: defaultMessage()
    };
  }
}

function defaultMessage() {
  return apiData.copyright;
}

module.exports = { checkBaseUrl };