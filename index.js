function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction() {
    function wednesday() {
        console.log("Today is Wednesday!");
    }
    return wednesday; 
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is a hook");
    };
}