
document.getElementById("actualitzar").addEventListener("click",function(){


    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("bitcoin").innerHTML=data.bpi.EUR.rate+" €"
  });

  
})


document.getElementById("novaBroma").addEventListener("click",function(){


    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });

  
})



document.getElementById("RandomUser").addEventListener("click", function () {

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const user = data.results[0]

            document.getElementById("nom").innerHTML = user.name.first + " " + user.name.last
            document.getElementById("genere").innerHTML = user.gender
            document.getElementById("ciutat").innerHTML = user.location.city
            document.getElementById("pais").innerHTML = user.location.country
            document.getElementById("email").innerHTML = user.email
            document.getElementById("foto").src = user.picture.medium
        });

})