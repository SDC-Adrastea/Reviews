const db = require('../../model/index.js');
const { getMeta } = require('../../model/getMetaData.js');
const { getMetaRatRec } = require('../../model/getMetaData.js');
const { getMetaChars } = require('../../model/getMetaData.js');

module.exports = {
  getMetaData: (req, res) => {
    let query = req.query;

    return getMeta(query);


    // for mudulation:
    // return new Promise((resolve, reject) => {
    //   Promise.all([getMetaRatRec(query), getMetaChars(query)])
    //   .then((data) => {
    //     // console.log('data from promise.all, ', data);

    //     // consider adding different middleware files
    //     // transform data:

    //     let ratingObj = {};
    //     let recObj = {};
    //     let charsObj = {};
    //     let charCount = {};

    //     let ratsAndRecs = data[0];
    //     let charsRes = data[1];

    //     ratsAndRecs.forEach((obj) => {
    //       let curRating = obj.rating;
    //       let curRec = obj.recommend;

    //       if (ratingObj[curRating] === undefined) {
    //         ratingObj[curRating]= 1;
    //       } else {
    //         ratingObj[curRating]++;
    //       }

    //       if (recObj[curRec] === undefined) {
    //         recObj[curRec] = 1;
    //       } else {
    //         recObj[curRec]++;
    //       }

    //     })

    //     // console.log('charsRes', charsRes)

    //     charsRes.forEach((obj) => {
    //       let curChar = obj.name;
    //       let curVal = obj.value

    //       if (charCount[curChar] === undefined) {
    //         charCount[curChar] = 1;
    //       } else {
    //         charCount[curChar]++;
    //       }

    //       if (charsObj[curChar] === undefined) {
    //         delete obj.name;
    //         charsObj[curChar] = obj;
    //       } else {
    //         charsObj[curChar].value += curVal;
    //       }

    //     })


    //     Object.keys(charsObj).forEach((key) => {
    //       charsObj[key].value = charsObj[key].value / charCount[key];
    //     })

    //     // console.log('charsObj', charsObj)

    //     resObj['ratings'] = ratingObj;
    //     resObj["recommended"] = recObj;
    //     resObj["characteristics"] = charsObj;

    //     resolve(resObj)
    //     // return resObj
    //   })
    //   .catch((err) => {
    //     reject(err);
    //     console.log('metadata prmise/all  error ', err);
    //   })
    // })

  }
}