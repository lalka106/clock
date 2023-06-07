window.addEventListener('load',Time);

function Time() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let week = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;

    document.getElementById('day').innerHTML = week[day];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;


    setTimeout(Time,200);
}


// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(getWeather);
//     }else{
//         alert("Geolocation not supported by this browser");
//     }
// }




function getWeather(position){
    // let lat = position.coords.latitude;
    // let long = position.coords.longitude;
   
    let city = "Minsk";
    let API_KEY = "d982b206b7125a363d94918d08ebf560";
    let baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`;
    // let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;
    // $.get(baseURL,function(res){
    //     let data = res.current;
    //     let temp = Math.floor(data.temp);
    //     let condition = data.weather[0].description;
    
    //     // Display data on the web page
    //     $('#temp').html(`${temp}°`);
    //     $('#condition').html(condition);
        
    // })
    // Отправляем запрос
axios.get(baseURL).then(res => {
    // Выводим результат в консоль браузера
    $('#temp').html(`${res.data.main.temp}°`);
    $('#city').html(`${res.data.name}`);
    $('#condition').html(`${res.data.main.humidity}%`);
 })

}

getWeather();
// getLocation();