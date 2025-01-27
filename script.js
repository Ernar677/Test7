let baturma = document.querySelector(".knopka")
let aqparat2 = document.querySelector(".aqparat_2")
let aqparat = document.querySelector(".aqparat")

baturma.addEventListener("click", () => {
    aqparat2.innerHTML = "Деректер алынуда..."
    
    fetch('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7')
    .then(response => response.json())
    .then(data => {
        aqparat2.innerHTML = "Деректер сәтті алынды!"
        aqparat2.innerHTML = data.record[0].aqparat2
    })
    .catch(error => {   
        aqparat2.innerHTML = "Қате орын алды: " + error.message
    })
})


async function getData() {
    try{
        
    }
}