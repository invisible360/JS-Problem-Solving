//Problem: 2
function isJavaScriptFile(fileName) {

    //Validation of input
    if (typeof fileName !== 'string') {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type a valid File Name';
    }

    //file extension checking
    else if (fileName.endsWith('.js')) {
        return true;
    }

    else {
        return false;
    }
}

const isThatJsFile = isJavaScriptFile('image.js.js.png');
console.log(isThatJsFile);

