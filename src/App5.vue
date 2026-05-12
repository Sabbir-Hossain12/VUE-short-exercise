<script setup>
import {reactive, ref} from 'vue'
import {countries} from "@/countries.js";

let country = ref('')

function filterCountries() {
  return countries.filter(country2 => country2.name.common.toLowerCase().startsWith(country.value.toLowerCase()))
  // return countries.filter(function (country2)
  // {
  //   return country2.name.common.toLowerCase().startsWith(country.value.toLowerCase())
  // });

  // This expression filters the countries array and returns a new array containing only those country objects whose name.common string starts with the current value of country.value, using a case‑insensitive comparison.
}

</script>

<template>
  <div class="max-w-7xl mx-auto py-10">
    <div class="my-3 flex flex-col justify-center items-center space-y-3">
      <h1 class="text-2xl font-bold text-black">Dynamic Search of Countries</h1>
      <input type="text" class="p-3 border rounded border-gray-300" placeholder="Search country" v-model="country">
    </div>
    <hr>
    <div class="flex justify-center items-center my-3">
      <ul>
        <li v-for="country in filterCountries()" :key="country.name.common">
          {{ country.name.common }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>