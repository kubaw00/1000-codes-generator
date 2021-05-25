
const btn = document.querySelector('button');
const chars = "123456789qwertyuiopasdfghjklzxcvbnm";

btn.addEventListener('click', () =>{
    for(let j = 0; j < 1000; j++){
        const p = document.createElement('p');
        document.body.appendChild(p);
        for(let i = 0; i < 10; i++){
            const index = Math.floor(Math.random()*chars.length);
            p.textContent += chars[index];
    }
 }
})