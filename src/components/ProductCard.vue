<script setup>
const props = defineProps(['name', 'price'])
const emit = defineEmits(['add-to-cart'])

// function addItem() {
//   emit('add-to-cart', { name: props.name, price: props.price })
// }
</script>

<template>
  <div class="border p-2">
    <h3>{{ props.name }}</h3>
    <p>Price: {{ props.price }}৳</p>
    <button @click="addItem">Add to Cart</button>
  </div>
</template>