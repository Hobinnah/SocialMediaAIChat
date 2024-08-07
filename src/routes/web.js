import express from "express";
import { getHomepage } from "../controllers/homepageController.js";
import { postWebhook } from "../controllers/chatBotController.js";
import { getWebhook } from "../controllers/chatBotController.js";
import { postIGMsgWebhook } from "../controllers/chatBotController.js";


let router = express.Router();

export const initWebRoutes = (app)=> {
    router.get("/", getHomepage);
    router.get("/webhook", getWebhook);
    router.post("/webhook", postWebhook);
    router.post("/postIGMsgWebhook", postIGMsgWebhook);

    return app.use("/", router);
};

//module.exports = initWebRoutes;