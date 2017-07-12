import express from "express";
import consign from "consign";
import config from './libs/config.js';
import database from './libs/database.js';

const app = express();

database(config.database);

consign()
    .include('models')
    .then('libs/middleware.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);