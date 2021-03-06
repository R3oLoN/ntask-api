import supertest from 'supertest';
import chai from 'chai';
import app from '../index.js';
import mongoose from 'mongoose';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
global.mongoose = mongoose;

global.Utils = {
    copy: (value) => {return JSON.parse(JSON.stringify(value));}
}