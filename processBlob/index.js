const sharp = require('sharp');

module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

    let x = 1024;
    let y = 768;

    if(myBlob.width > myBlob.height) { // If landscape
        x = 768;
        y = 1024;
    }

    var img = sharp(myBlob);
    var data = await img.resize(x, y).toBuffer();
    
    context.bindings.outputBlob = data;
    context.log("Resize done");
};