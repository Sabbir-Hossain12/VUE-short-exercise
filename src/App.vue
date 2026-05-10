<script setup>
import {reactive, ref} from 'vue'
import {countries} from "@/countries.js";

let country = ref('')

function filterCountries() {
  return countries.filter(country => country.name.common.toLowerCase().startsWith(country.value.toLowerCase()))
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