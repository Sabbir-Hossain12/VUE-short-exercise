<template>
  <div>
    <h1>Vue.js Pie Chart</h1>
    <canvas ref="chartCanvas" id="chartCanvas"></canvas>
    <div class="flex justify-center items-center space-x-4">
<!--  Two way Data binding   -->
      <input v-model="newItem" class="border border-gray-300 rounded px-4 py-2" type="text"/>
      <button @click="addValue" class="bg-blue-500 text-white px-4 py-2 rounded">Add Value</button>
    </div>
  </div>


</template>

<script setup>
import {ref, onMounted, onUnmounted, onBeforeMount} from 'vue'
import {Chart, ArcElement, Tooltip, Legend, PieController} from 'chart.js'

// 1) Register controllers/elements/plugins
Chart.register(PieController, ArcElement, Tooltip, Legend)

const newItem = ref(16);
let chart = null;

let labels = ['Red', 'Blue', 'Yellow', 'Black'];
let label = 'This is a pie chart';

const dataset = [200, 200, 200,200];

const data = {
  labels: [
    ...labels
  ],
  datasets: [{
    label: label,
    data: dataset,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(41,29,29)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,
};

onBeforeMount( () =>{
  //Fetch data from API
  //Dataset
  //Labels
  //Label
  //Update chart
})


onMounted(() => {
  let ctx = document.getElementById('chartCanvas')
  chart = new Chart(ctx, config);
})

onUnmounted(() => {

  chart.destroy();
})

function addValue() {
  dataset.push(newItem.value);
  labels.push('New Item');
  chart.update();
}
</script>

<style scoped>
canvas {
  max-width: 800px !important;
  margin: 20px auto;
}
</style>
