<template>
  <div class="flex flex-1 flex-col items-center">
    <!-- Banner -->
    <div
      v-if="route.query.preview"
      class="text-white bg-weather-secondary w-full text-center"
    >
      <p>
        You are currently previewing this city, click the " + " icon to start
        tracking the city
      </p>
    </div>
    <!-- Weather OverView -->
    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-4xl mb-2">{{ weatherData.location.region }}</h1>
      <p class="text-sm mb-8" v-if="weatherData">
        {{ weatherData.location.localtime }}
      </p>
      <p class="text-8xl mb-6">
        {{ Math.round(weatherData.current.temp_c) }}&deg;
      </p>
      <p class="text-center">
        Feels like
        {{ Math.round(weatherData.current.feelslike_c) }}&deg
      </p>
      <p class="capitalize">
        {{ weatherData.current.condition["text"] }}
      </p>
      <img
        class="w-[150px] h-auto"
        :src="weatherData.current.condition['icon']"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const apiKey = "3eb38e7f2a404155b85181511230606";

//awaiting time-zone of the lng and lat of each city serched and await for the time and date of the zone
const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${route.params.city}`
    );

    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};

const weatherData = await getWeatherData();
console.log(weatherData);
</script>
