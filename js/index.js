const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = input.value;

    // callback
    // fetchData('https://fake-api-ahmed.herokuapp.com/', 'POST', { name }, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(res)
    //         const txt = res.split('<p>')[1].split('</p>')[0];
    //         const div = document.createElement('div');
    //         div.textContent = txt;
    //         form.parentElement.appendChild(div);

    //     }
    // })

    // fetch API
    // fetch('https://fake-api-ahmed.herokuapp.com/', {
    //     method: 'post',
    //     credentials: 'same-origin',
    //     headers: {
    //         'Content-Type': 'application/json', //mime types
    //     },
    //     body: JSON.stringify({ name }),
    // })
    // .then(res => {
    //     console.log(res)
    //     return res.text();
    // })
    // .then(data => {
    //     console.log(data);
    //     response = data;
  
    // })
    // .catch(err => {
    //     console.log(err)
    // });


    // callback hell
    // logCurrentTime();
    // printTime(2000, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     printTime(1000, (err1) => {
    //         if (err1) {
    //             console.log(err1);
    //         }
    //         printTime(50, (err2) => {
    //             if (err2) {
    //                 console.log(err2);
    //             }
    //             printTime(500, err => {
    //                 if (err) {
    //                     console.log(err);
    //                 }
    //             });
    //         });
    //     });
    // });

    // promise
    let promise2
    logCurrentTime();
    const promise = promisePrintTime(1000);
    console.log(promise);

    promise
        .then((name) => {
            console.log(promise);
            return promisePrintTime(2000)
        })
        .then((name) => promisePrintTime(1000))
        .then((name) => {
            promise2 = promisePrintTime(40);
            console.log(promise2);
            return promise2;
        })
        .then((name) => promisePrintTime(2000))
        .then((name) => promisePrintTime(2000))
        .then((name) => promisePrintTime(2000))
        .catch((err) => {
            console.log(promise2)
            console.log(err);
        });

});
