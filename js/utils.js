function fetchData(url, method, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState)
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = xhr.responseText;
                callback(null, response);
            } else {
                callback(new Error("something went wrong"));
            }
        }
    }

    const _data= JSON.stringify(data);
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(_data); 
}

/**
 * Print the time after specific time
 * @param {number} delayMs 
 * @param {function} cb 
 */
function printTime(delayMs, cb) {
    if (delayMs < 100) {
        const error = new Error('delayMs should be greater than 100ms');
        cb(error);
    } else {
        setTimeout(() => {
            logCurrentTime();
            cb();
        }, delayMs);
    }
}

function logCurrentTime() {
    const d = new Date();
    console.log(`%c ${d.toLocaleTimeString()} `, 'color: #4d0039');
}

// promisePrintTime(2000)
function promisePrintTime(delayMs) {
    const promiseCB = (resolve, reject) => {
        if (delayMs < 100) {
            setTimeout(() => {
                reject(new Error('delayMs should be greater than 100ms'));
            }, 10);
        } else {
            setTimeout(() => {
                logCurrentTime();
                resolve('Dunia');
            }, delayMs);
        }

    }
    return new Promise(promiseCB);
}