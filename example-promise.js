function getTempCallBack(location, callback) {
    callback(undefined, 75);
    callback('City not found');
}

getTempCallBack('New york', function (err, temperature) {
    if (err) {
        console.log('error', err);
    }
    else {
        console.log('success', temperature);
    }
});

function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        resolve(75);
        reject('City not found');
    });
}

getTempPromise('San Jose').then(function (temp) {
    console.log('success', temp);
}, function (err) {
    console.log('error', err);
});

function addPromise(a, b) {
    return new Promise(function (success, failure) {
        if (typeof a === 'number' && typeof b === 'number') {
            success(a + b);
        } else {
            failure('arguments should be number')
        }
    });
}

function successFunction(sum) {
    console.log('success', sum);
}

function failureFunction(sum) {
    console.log('error');
}

addPromise(2, 3).then(successFunction, failureFunction);
addPromise('rao', 3).then(successFunction, failureFunction);