const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const moment = require('moment');
const asincronico = require('async');
const request = require('request');
const fetch = require('node-fetch');
var metasecciones = {};
var bodyResponse = '';
var startTime, endTime;
