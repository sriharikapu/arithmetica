'use strict'

const Worker = require('./worker');

var Web3 = require('web3');
var contract = require('truffle-contract');

var web3Provider = new Web3.providers.HttpProvider('http://localhost:9545');
var web3 = new Web3(web3Provider);
//var gasLimit = 10000000;
var arithmeticaArtifact = require('../build/contracts/Arithmetica.json');
var arithmeticaContract = contract(arithmeticaArtifact);
arithmeticaContract.setProvider(web3Provider);
arithmeticaContract.deployed().then(
    (instance) => {return instance;}
).then(
    (arithmetica) => {return arithmetica.createProblem("Name","Evaluation","Assertions","Results Location");}
);

