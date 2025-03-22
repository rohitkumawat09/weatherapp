const input = document.getElementById("city")
const btn = document.getElementById("submitBtn")
const result = document.getElementById("result")
const date = document.get
const url = "https://api.openweathermap.org/data/2.5/weather?APPID=1322765373529ef9e183768401604ae1";

const time = new Date();
const newtime=time.toDateString()
console.log(time);

document.getElementById("demo").innerHTML = newtime;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = input.value.trim();
    console.log(cityName.value);
    OpenWeatherMap(cityName);
    input.value = ""
});
async function OpenWeatherMap(plaace) {
    try {
        const city = await fetch(url + "&q=" + plaace)
        const data = await city.json();
        console.log(data);
        result.innerHTML = `
        <h2>${data.name}</h2>
        
             <h3>Wind Speed: ${data.wind.speed} m/s</h3>
                    <h3>Visibility: ${data.visibility} meters</h3>
                    <p>tem: ${data.main.temp})</p>
                    
        
        `
    }


    catch (error) {
        result.innerHTML = `<p>City not found or error fetching data.</p>`;
        console.error(error);
    }

}

