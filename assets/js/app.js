//
// FÆLLES
//

// Vi skal anvende data herfra: https://randomuser.me/

// Læs dokumentation og find ud af hvordan man får en user (5 min eller indtil en har et svar)

// Find ud af hvordan man får 50 users (5 min eller indtil en har et svar)

const baseEndpoint = "https://randomuser.me/api/";
const limitResult = "?results=69";

// Fetch og log dem med fetch
//fetch(baseEndpoint + limitResults)
//  .then(res => {
//    return res.json()
//  })
//  .then(data => console.log(data))
//  .catch(err => console.error("fejl!!", err))

//her er det samme med async/await syntaks
// async function fetchUsers(){
//   try {
//     const res = await fetch(baseEndpoint + limitResults);
//     const data = await res.json();
//     console.log(data)
//   } catch (FEJLKODE) {
//     console.log("fejl!!", FEJLKODE)
    
//   }
// }

// fetchUsers();


// Prøv nu at kopiere og omskrive det til async/await (Mark viser hvordan)

//
// I grupperne
//

// Prøv nu at anvende document.createElement(), .classlist.add(), .textContent og append() til at skabe en artikel med følgende struktur per user i results og append i .result:

async function fetchUsers(){
  try {
    const res = await fetch(baseEndpoint + limitResult);
    const data = await res.json();
    const userSectionEl = document.querySelector(".users");
 
    data.results.forEach(function(user){
 
      const newNameHeader = document.createElement("h4");
      newNameHeader.textContent = user.name.first;
      newNameHeader.classList.add("title");
 
      const newUserImg = document.createElement("img");
      newUserImg.src = user.picture.large;
 
      userSectionEl.append(newUserImg, newNameHeader);
 
    })
 
    console.log(data);
  } catch (error) {
    console.log("Der er en fejl: ", error)
  }
}
 
fetchUsers();



{
  /* <article>
  <h4 class="title">NAVN</h4>
  <img src="URL" alt="ALT" />
</article>; */
}

// Prøv nu at udkommentere ovenfor og anvend istedet .innerHTML med strukturen fra index.html. Igen en per bruger i results

//
// FÆLLES
//

// Hvis vi kan nå det: implementér filtrering i form af en input[type="search"]
