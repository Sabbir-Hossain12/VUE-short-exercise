<script setup>
import {reactive, ref} from 'vue'

let countries = reactive([
  {name: 'Bangladesh', capital: 'Dhaka'},
  {name: 'India', capital: 'Delhi'},
  {name: 'Nepal', capital: 'Kathmandu'},
  {name: 'Argentina', capital: 'Buenos Aires'},
  {name: 'Australia', capital: 'Canberra'},
  {name: 'Austria', capital: 'Vienna'},
  {name: 'Azerbaijan', capital: 'Baku'},
])

let options = ['Dhaka', 'Delhi', 'Kathmandu', 'Buenos Aires', 'Canberra', 'Vienna', 'Baku'];

// let score = ref(0);

function getScores()
{
  let score = 0;
  countries.forEach(country => {
    if (country.answer === country.capital)
    {
      score++;
    }
  })
  return score;
}


</script>

<template>

  <div class="max-w-7xl mx-auto py-10">
    <div>
      {{ countries }}
    </div>
    <div class="flex justify-center items-center">
      <h1 class="text-2xl font-bold">Simple Quiz Project</h1>
    </div>
    <div class="my-3">
      Your Score: {{ getScores() }}
    </div>

    <div v-for="(country,index1) in countries" :key="country.name" class="border border-gray-300 p-4 rounded mt-2">
      <h2 class="text-lg font-semibold mb-2">What is the capital of {{ country.name }}?</h2>
      <div v-for="(option, index2) in options" :key="index2" class="flex flex-wrap items-center space-x-2 mb-2">
        <input :id="country.name + '-' + index2" type="radio" :name="country.name" :value="option" class="cursor-pointer" v-model="country.answer" />
        <label :for="country.name + '-' + index2"  class="cursor-pointer">{{ option }}</label>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>