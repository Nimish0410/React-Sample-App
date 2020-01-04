/* Promises */
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, 1000)
  })

  myPromise.then(response => console.log(response));

/* Promise Chaining */
fetch('users')
.then(usersResponse => usersResponse.json())
.then(users => {
    const firstUser = users[0];
    return fetch('posts'+firstUser.id)
})
.then(postsResponse => postsResponse.json())
.then(posts => console.log(posts))
.catch(error => console.log(error)) // catches error for all the above then's

/* Async Await */
const getPosts = async () => {
    try{
        const usersResponse = await fetch('users');
        const users = await usersResponse.json();
        const firstUser = users[0];
        const postsResponse =  await fetch('posts'+firstUser.id);
        const posts = await postsResponse.json();
        console.log(posts);
    }
    catch(error){
        console.log('An error was thrown');
    }
    
}

getPosts();

/* reduce */
const array = [1,2,3,4,5];
array.reduce((accumulator, currentElement) => accumulator + currentElement, 0) // returns single value
array.reduce((acc, currentElement) => { return acc + currentElement}, 0)

/* Basic Memoizer */
const addTO80Memoizer = (n) => {
    let cache = {};
    if(cache[n]){
        return cache[n];
    }
    console.log('Long calculations');
    cache[n] = n+80;
    return cache[n];
}

/* Fibonacci memoizer - Write by your own self */

/* Currying */
const Multiplier = (a, b) => a*b;
const curriedMultiplier = function(a){
    return function(b){
        return a*b;
    }
}
const curriedMultiplierArrow = (a) => (b) => a*b
const curriedMultiplier5 = curriedMultiplier(5); // utility
curriedMultiplier5(7)
curriedMultiplier(5)(6)


