const getRequest = (callbackFunc, url) => {
    const request = new XMLHttpRequest();

    request.addEventListener(
        "readystatechange",
        () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                //          err, data
                callbackFunc(null, data)
            }
            else if (request.readyState === 4) {
                callbackFunc(`${request.status} - Could not fetch the data`, null)
            }
        }
    )

    request.open("GET", url);
    request.send();
}

const jsonPlaceholderURL = 'https://jsonplaceholder.typicode.com';

//callback hell
// getRequest(
//     (err, data) => {
//         if (!err) {
//             console.log(data); getRequest(
//                 (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         getRequest(
//                             (err, data) => {
//                                 if (!err) {
//                                     console.log(data);
//                                     getRequest(
//                                         (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                                 getRequest(
//                                                     (err, data) => {
//                                                         if (!err) {
//                                                             console.log(data);
//                                                             getRequest(
//                                                                 (err, data) => {
//                                                                     if (!err) {
//                                                                         console.log(data);
//                                                                     }
//                                                                     else {
//                                                                         console.log(err);
//                                                                     }
//                                                                 },
//                                                                 `${jsonPlaceholderURL}/todos/7`
//                                                             )
//                                                         }
//                                                         else {
//                                                             console.log(err);
//                                                         }
//                                                     },
//                                                     `${jsonPlaceholderURL}/todos/6`
//                                                 )
//                                             }
//                                             else {
//                                                 console.log(err);
//                                             }
//                                         },
//                                         `${jsonPlaceholderURL}/todos/5`
//                                     )
//                                 }
//                                 else {
//                                     console.log(err);
//                                 }
//                             },
//                             `${jsonPlaceholderURL}/todos/4`
//                         )
//                     }
//                     else {
//                         console.log(err);
//                     }
//                 },
//                 `${jsonPlaceholderURL}/todos/3`
//             )
//         }
//         else {
//             console.log(err);
//         }
//     },
//     `${jsonPlaceholderURL}/todos/2`
// )

const getRequestWithPromise = (url) => {
    return new Promise(
        (resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener(
                "readystatechange",
                () => {
                    if (request.readyState === 4 && request.status === 200) {
                        const data = JSON.parse(request.responseText);
                        resolve(data)
                    }
                    else if (request.readyState === 4) {
                        reject(`${request.status} - Could not fetch the data`)
                    }
                }
            )

            request.open("GET", url);
            request.send();
        }
    )
}


// console.log(1);
// console.log(2);
// getRequestWithPromise(`${jsonPlaceholderURL}/todos/1`)
//     .then(response => console.log(response));
// console.log(3);
// console.log(4);


//YANLIS!!!!
// getRequestWithPromise(`${jsonPlaceholderURL}/todos/1`)
//     .then(
//         (response) => {
//             console.log(response)
//             getRequestWithPromise(`${jsonPlaceholderURL}/todos/1`)
//                 .then(
//                     (response) => {
//                         console.log(response)
//                         getRequestWithPromise(`${jsonPlaceholderURL}/todos/1`)
//                             .then(
//                                 (response) => {
//                                     console.log(response)
//                                 }
//                             );
//                     }
//                 );
//         }
//     );

// console.log(1);
// console.log(2);
// getRequestWithPromise(`${jsonPlaceholderURL}/todos/1`)
//     .then((response) => {
//         console.log(response)
//         return getRequestWithPromise(`${jsonPlaceholderURL}/todos/2`);
//     })
//     .then((response) => {
//         console.log(response)
//         return getRequestWithPromise(`${jsonPlaceholderURL}/todos/3`);
//     })
//     .then((response) => {
//         console.log(response)
//         return getRequestWithPromise(`${jsonPlaceholderURL}/todosasdasd/4`);
//     })
//     .then((response) => {
//         console.log(response)
//         return getRequestWithPromise(`${jsonPlaceholderURL}/todos/5`);
//     })
//     .then((response) => {
//         console.log(response)
//         return getRequestWithPromise(`${jsonPlaceholderURL}/todos/6`);
//     })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((err) => console.log(err))
//     .finally(() => console.log("finally calisti"))
// console.log(3);
// console.log(4);

// getRequestWithPromise(`${jsonPlaceholderURL}/users/3`)
//     .then(res => console.log(res));

// getRequestWithPromise(`${jsonPlaceholderURL}/comments/12`)
//     .then(res => console.log(res));

// getRequestWithPromise(`${jsonPlaceholderURL}/photos/8`)
//     .then(res => {
//         ///islemler....
//         ///islemler....
//         ///islemler....
//         ///islemler....
//         ///islemler....
//         ///islemler....
//         console.log(res);
//         console.log(res.url);
//         const picUrl = res.url;   

//     })


const newToDo = {
    id: "234FD46",
    title: "JavaScript calis",
    userId: 5,
    completed: false
}

// console.log(newToDo);

// fetch(`${jsonPlaceholderURL}/todos/3`)
//     .then(
//         function (mahir) {
//             // const data = pinar.json();
//             // console.log(data);
//             return mahir.json();
//         }
//     )
//     .then(data => console.log(data))

// fetch(`${jsonPlaceholderURL}/todos`,
//     {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(
//             {
//                 title: "JavaScript cok calis!",
//                 userId: 1,
//                 completed: false
//             }
//         )
//     }
// )
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch()



//async function, await
let todo3 = null;
// fetch(`${jsonPlaceholderURL}/todos/3`)
//     .then(
//         function (response) {
//             return response.json();
//         }
//     )
//     .then(function (data) {
//         todo3 = data;
//     })
// console.log(todo3);

// console.log("then 1");
// console.log("then 2");
// fetch(`${jsonPlaceholderURL}/todos/3`)
//     .then(
//         function (response) {
//             return response.json();
//         }
//     )
//     .then(function (data) {
//         console.log("then result:\n", data);
//     })
// console.log("then 3");
// console.log("then 4");

// const getTodo = async () => {
//     console.log("inner await 1");
//     console.log("inner await 2");
//     const response = await fetch(`${jsonPlaceholderURL}/todos/3`);
//     const data = await response.json();
//     console.log("await result:\n", data);
//     console.log("inner await 3");
//     console.log("inner await 4")
// }

// console.log("outer await 1");
// console.log("outer await 2")
// getTodo();
// console.log("outer await 3");
// console.log("outer await 4")


const createComment = (comment) => {
    return fetch(
        `${jsonPlaceholderURL}/comments`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        }
    )
        .then(response => response.json())
}

createComment({ postId: 5, name: "lorem ipsum", email: "lorem@ipsum", body: "lorem ipsum dolor sit amet non elit" })
    .then(result => console.log(result))

const createCommentAwait = async ({ postId, name, email, body }, param2) => {
    try {
        const response = await fetch(
            `${jsonPlaceholderURL}/comments`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ postId, name, email, body })
            });
        const data = await response.json();
        console.log(postId);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const newComment = { postId: 5, name: "lorem ipsum", email: "lorem@ipsum", body: "lorem ipsum dolor sit amet non elit" };

createCommentAwait(newComment).then(result => console.log(result));