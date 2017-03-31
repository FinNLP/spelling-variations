/// <reference path="../../fin-sentiment/node_modules/@types/node/index.d.ts" />


import {dict} from "./dict";
import pattern from "./pattern";
import {writeFileSync} from "fs";
import lexicon from "../../en-lexicon/src/lexicon";


function checkEquality(word:string){
    const fromPattern = pattern(word)||[];
    const fromDict = dict[word].split("|");
    for (var index = 0; index < fromPattern.length; index++) {
        if(fromPattern[index] && fromPattern[index] !== fromDict[index]) return false;
    }
    return true;
}

const newObj:{[key:string]:string} = {};

for (var index = 0; index < Object.keys(dict).length; index++) {
    var word = Object.keys(dict)[index];
    if(!checkEquality(word) && lexicon[word]) newObj[word] = dict[word];
}


writeFileSync("./dict.js",JSON.stringify(newObj,null,4));