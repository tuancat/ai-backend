"use strict";
/**
 * Required External Modules
 */
exports.__esModule = true;
var dotenv = require("dotenv");
var express_1 = require("express");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
// import {itemsRouter} from "./items/items.router";
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = express_1["default"]();
/**
 *  App Configuration
 */
app.use(helmet_1["default"]());
app.use(cors_1["default"]());
app.use(express_1["default"].json());
// app.use('/items', itemsRouter);
/**
 * Server Activation
 */
var server = app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () { return server.close(); });
}
