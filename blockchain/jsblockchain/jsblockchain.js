const SHA256 = require("crypto-js/sha256.js");

class Block{
    constructor(index, timestamp, data, previousHash = '')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        //we will be using SHA256 to generate hash of this block
        return SHA256(this.index+this.timestamp+this.previousHash+JSON.stringify(this.data)).toString();
    }
}

class BlockChain{
    constructor(){
        //the first variable of the chain will be the geneis block
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block (0, "12/01/2021", "This is the genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    checkBlockChainValid(){
        for (let i=1; i<this.chain.length-1; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if (currentBlock.previousHash != previousBlock.hash){
                return false;
            }
            if (currentBlock.hash != currentBlock.calculateHash()){
                return false;
            }
            
        };
        return true;
    }
}

//create 2 new blocks
let block1 = new Block(1, "12/02/2021", {myBalance : 100});
let block2 = new Block(2, "12/03/2021", {myBalance : 500});

//create new blockchain
let myBlockChain = new BlockChain();

//add two of the created blocks
myBlockChain.addBlock(block1);
myBlockChain.addBlock(block2);

console.log(JSON.stringify(myBlockChain,null,4));
console.log("VALIDATION CHECK:" + myBlockChain.checkBlockChainValid());

myBlockChain.chain[1].data = {myBalance : 5000};

console.log("VALIDATION CHECK AFTER TAMPERING:" + myBlockChain.checkBlockChainValid());