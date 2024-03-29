import fetch from "node-fetch";
import API_KEY from "../tokens";

// @desc  	get latitude and longitude for a location
async function getLatLong(city) {
	const latLongRes = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
	);

	const latLongData = await latLongRes.json();

	if (!latLongData.length) {
		throw new Error("ENOENT");
	}

	let lat = latLongData[0].lat;
	let lon = latLongData[0].lon;

	return { lat, lon };
}

// @desc  	get current weather for a location
// @route		/:city
async function getCurrentWeather(lat, lon) {
	const weatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);

	const weatherData = await weatherRes.json();

	return weatherData;
}

// @desc  	get weather forecast of 5 days for a location
// @route		/:city/:days
async function getWeatherForecast(lat, lon) {
	const forecastRes = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);

	const forecastData = await forecastRes.json();

	return forecastData;
}

export { getLatLong, getCurrentWeather, getWeatherForecast };
