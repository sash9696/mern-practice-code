// Callbacks

//async operations take time
//callback tells
//run this function when the task is done

// function fetchUser(callback){
//     setTimeout(() => {
//         const user = {id:1, name:'John'};
//         callback(user);
//     },1000)

// }
// function fetchPosts(userId, callback){
//     setTimeout(() => {
//         const posts = ["Post 1", "Post 2"];
//         callback(posts);
//     },2000)
// }

// function fetchComments(post, callback){
//     setTimeout(() => {
//         const comments = ["Nice1", "Great"];
//         callback(comments);
//     },1500)

// }


// fetchUser((user) => {
//     // console.log("User loaded:", user);
//     fetchPosts(user.id , (posts) => {
//         // console.log(`Posts loaded for user ${user.id}` ,posts)
//         fetchComments(posts[0], (comments) => {
//             console.log(user);
//             console.log(posts);
//             console.log(comments);
//         })
//     })
// })
// This works
//Problems
//Callback hell
//deeply nested, hard to read, hard to debug, error handling is also messy
// inversion of control



// Promises
//promises uses callback
// Promise is an object that represents
// something that is happening now
// result that will come later

// States
// pending
// resolved
// rejected


// const promise  = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('Done')
//     }, 1000)
// })
// // .then guarantees that it will be executed only once
// promise.then(function(result) {
//     console.log(result)
// }).catch((error) => console.log(error))



// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = {id:1, name:'John'};
//             resolve(user)
//         },1000)
//     })
// }

async function fetchUser(){
    const user = {id:1, name:'John'};
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return user;
}

function fetchPosts(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ["Post 1", "Post 2"];
            resolve(posts);
        },2000)
    })
}

function fetchComments(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = ["Nice1", "Great"];
            resolve(comments);
        },1500)
    })
}


// fetchUser()
//     .then((user) => {
//         console.log("User", user)
//         return fetchPosts(user.id)
//     })
//     .then((posts) => {
//         console.log("Posts: ", posts);
//         return fetchComments(posts[0])
//     })
//     .then((comments) => {
//         console.log("Comments: ", comments);
//     })
//     .catch((error) => {
//         console.log("Error: ", error)
//     })

    // async await -> uses promises
    //more elegant way of writing async code
    //looks synchronous but its still async

    // async function loadDashboard(){
    //     try {
    //         const user = await fetchUser();
    //         console.log("User: ", user);
    
    //         const posts = await fetchPosts(user.id);
    //         console.log("Posts: ", posts);
    
    //         const comments = await fetchComments(posts[0]);
    //         console.log("Comments: ", comments);
    //     } catch (error) {
    //         console.log('Error: ', error)
    //     }

    // }

    // loadDashboard();

    const app = document.getElementById('app');


    async function loadDashboard() {

        app.textContent = "Loading ...";

        try {
            const user = await fetchUser();
            const posts = await fetchPosts(user.id);


            app.innerHTML = `
            
            <h2> ${user.name} </h2>
            <ul> 
                ${posts.map(post => `<li>${post}</li>`).join("")}
            </ul>
            `


        } catch (error) {
            app.textContent = "Something went wrong"
        }
    }


    loadDashboard();


    // use async examples

    //fetching data
    //form submit
    //load dashboards
    //asving settings
    //animations
    //searching



    // function displayUsers(){

    // }

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((users) => {
    //         displayUsers(users)
    //     })




   
    // setTimeout(() => console.log("timeout"), 0);

    // Promise.resolve().then(() => console.log('promise'));

    // console.log('sync')