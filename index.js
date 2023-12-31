let search_1=document.getElementById("search_1")

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date_1 = new Date();

async function getNews(country) {
  let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=007a6ff2effb483998d94316231008&q=${country}&days=3`)
  let data = await response.json()
  console.log(data);
  display(data.location, data.current, data.forecast)
}

getNews("cairo")

function display(location, current, forecast) {
  let addUser = `
  
  <div class="col-md-4 demo">
  <div class="d-flex flex_1">
    <h6>${days[date_1.getDay(location.localtime)]}</h6>
    <h6>${date_1.getDate() + months[date_1.getMonth(location.localtime)]}</h6>
  </div>
  <div class="text_t ps-3 my-5 ">
    <h5>${location.name}</h5>
    <div class="d-flex justify-content-between">
      <h2 class="me-5">${current.temp_c} <sup>o</sup>C</h2>
      <img src="https:${current.condition.icon}" width="80px" height="80px" alt="sun" />
    </div>
    <h6 class="text-info mb-4">${current.condition.text}</h6>
  </div>
  <div class="d-flex">
    <div class="d-flex ps-3">
      <img class="me-2" src="imgs/icon-umberella.png" width="20px" height="25px" alt="umbrella" />
      <p>20%</p>
    </div>
    <div class="d-flex ps-3">
      <img class="me-2" src="imgs/icon-wind.png" width="20px" height="25px" alt="wind" />
      <p>18km/h</p>
    </div>
    <div class="d-flex ps-3">
      <img class="me-2" src="imgs/icon-compass.png" width="20px" height="25px" alt="compass" />
      <p>East</p>
    </div>
  </div>
</div>

<div class="col-md-4 demo_1">
  <div class="flex_2 d-flex justify-content-center">
    <h6>${days[new Date(forecast.forecastday[1].date).getDay()]}</h6>
  </div>
  <div class="mor d-flex flex-column justify-content-center align-items-center mt-5">
    <img src="${forecast.forecastday[1].day.condition.icon}" width="50px" alt="sun" />
    <h2>${forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
    <p>${forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
    <h6 class="text-info">${forecast.forecastday[1].day.condition.text}</h6>
  </div>
</div>

<div class="col-md-4 demo_2">
  <div class="flex_3 d-flex justify-content-center">
    <h6>${days[new Date(forecast.forecastday[2].date).getDay()]}</h6>
  </div>
  <div class="mor d-flex flex-column justify-content-center align-items-center mt-5">
    <img src="${forecast.forecastday[2].day.condition.icon}" width="50px" alt="sun" />
    <h2>${forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
    <p>${forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
    <h6 class="text-info">${forecast.forecastday[2].day.condition.text}</h6>
  </div>
</div>
  `
  document.getElementById("childe_1").innerHTML = addUser
}

search_1.addEventListener('input',function(){
  getNews(search_1.value)
})




























// let cardGroup = document.getElementById("card-group");

// let months = [
//   "January","February","March","April","May","June","July","August","September","October","November","December",];
// let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let datee = new Date();

// async function getWeather(keyCountry) {
//   var apiResponse = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=d9e15c177aff40029a5125644230708&q=${keyCountry}&days=3`
//   );
//   var data = await apiResponse.json();
//   displayCurrent(data.location, data.current);
//   displayFuture(data.forecast);
// }

// getWeather('cairo');
// function displayCurrent(location, current) {
//   cardGroup.innerHTML = `
//             <div class="card">
//             <div class="card-header text-light bg-black bg-opacity-10 border-0 d-flex justify-content-between">
//             <span id="dayOne">${days[datee.getDay(location.localtime)]}</span>
//             <span id="dateDayOne">${datee.getDate() + months[datee.getMonth(location.localtime)]}</span>
//           </div>
//           <div class="card-body">
//             <h4 class="text-secondary" id="country">${location.name}</h4>
//             <div class="d-flex justify-content-between align-items-center  pt-2 mb-5">
//               <h1 class="text-white display-3 fw-bolder">${current.temp_c} <sup>o</sup>C</h1>
//               <img src="https:${current.condition.icon}" alt="icon-weather">
//             </div>
//             <span>${current.condition.text}</span>
//             <div class="d-flex mt-3 text-secondary">
//               <p class="d-flex justify-content-between align-items-center me-3"> <img src="images/icon-umberella.png" alt="" class="me-2"><span>35%</span>
//               </p>
//               <p class="d-flex justify-content-between align-items-center me-3"> <img src="images/icon-wind.png" alt=""class="me-2"><span>25km/h</span>
//               </p>
//               <p class="d-flex justify-content-between align-items-center me-3"> <img src="images/icon-compass.png" alt="" class="me-2"><span>North</span>
//               </p>
//           </div>
//           </div>
//           </div>`;
// }

// function displayFuture(temp) {
//   for (let i = 1; i < 3; i++) {
//     cardGroup.innerHTML += `
//     <div class="card border-0">
//         <div class="card-header bg-black bg-opacity-25 border-0 text-center text-light">
//             <span id="dayTwo">${days[new Date(temp.forecastday[i].date).getDay()]}</span>
//         </div>
//         <div class="card-body d-flex flex-column justify-content-around align-items-center py-5">
//             <img src="https:${temp.forecastday[i].day.condition.icon}" alt="icon-weather">
//                 <div>
//                     <h4 class="text-white">${temp.forecastday[i].day.maxtemp_c}<sup>o</sup>C</h4>
//                     <h6 class="text-secondary text-center">${temp.forecastday[i].day.mintemp_c }<sup>o</sup></h6>
//                 </div>
//             <span>${temp.forecastday[i].day.condition.text}</span> 
//         </div>
//     </div>

//     `;
//   }
// }
// inputSearch.addEventListener('keyup',function(e){
// getWeather(e.target.value);

// })