<template>
  <div class="flex flex-col flex-1 bg-weather-primary">
    <Suspense>
      <AsyncCityView />
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
</script>
