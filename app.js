// 1a
const button1 = document.getElementById(`one`);

// 1b
button1.onclick = function(){
    alert(`Cool! You can hear/understand a hummingbird and ants!`);
}

// 2a
const h3 = document.getElementsByTagName(`h3`);

// 2b
h3.addEventListener("onmouseover", function(){
    alert(`OH NO!`);
});

// 3a
const form = document.getElementsByTagName(`form`);

// 3b
const input = document.getElementsByName(`quote`).values;
form.addEventListener("submit", function(){
    alert(`${input}`);
});