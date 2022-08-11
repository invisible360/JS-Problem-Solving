//Problem: 5
function isBestFriend(friend1, friend2) {

    //validation
    if ((typeof friend1 !== 'object') || (typeof friend2 !== 'object') || (Array.isArray(friend1) === true) || (Array.isArray(friend2) === true)) {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type a valid Object with 2 property: Name & friend [Having additional properties won\'t use for comparison]';
    }

    //bestFriend comparison
    else if ((friend1.name === friend2.friend) && (friend1.friend === friend2.name)) {
        return true;
    }
    else {
        return false;
    }

}

const friend1 = {
    name: 'zakir',
    friend: 'sima',
}
const friend2 = {
    name: 'imran',
    friend: 'zakir'
}

const isBest = isBestFriend(friend1, ['friend2']);
console.log(isBest);