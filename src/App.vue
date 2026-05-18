<script setup>
import ProductCard from './components/ProductCard.vue'
import { ref } from 'vue'

const cart = ref([])

function handleAddToCart(product) {
  cart.value.push(product)
}
</script>

<template>
  <div>
    <h2>Products</h2>
    <ProductCard
        name="Laptop"
        price="55000"
        @add-to-cart="handleAddToCart"
    />
    <ProductCard
        name="Phone"
        price="30000"
        @add-to-cart="handleAddToCart"
    />

    <h2>Cart</h2>
    <ul>
      <li v-for="item in cart" :key="item.name">
        {{ item.name }} – {{ item.price }}৳
      </li>
    </ul>
  </div>
</template>
