"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
// Example using pg
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
var parsed = dotenv_1.default.config().parsed;
exports.pool = new pg_1.Pool({
    host: parsed.DB_HOST || 'localhost', // service name in docker-compose
    user: parsed.DB_USER || 'admin',
    password: parsed.DB_PASSWORD || 'admin',
    database: parsed.DB_NAME || 'inventory_db',
    port: +parsed.DB_PORT || 5432
});
