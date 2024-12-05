const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const genarateJokes = ()=>{
    fetch('https://icanhazdadjokes')
    .then((res)=>{
      console.log(res.json());
}).catch((error)=>{
console.log(error);
})
}


jokeBtn.addEventListener('click',genarateJokes);
genarateJokes