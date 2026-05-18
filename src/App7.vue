<script setup>

import {reactive} from "vue";
import {invData} from "@/invData.js";
import invoiceInput from "@/components/invoiceInput.vue";

// let invData = reactive(
//     {
//       invoiceID: "",
//       billingAddress: "",
//       shippingAddress: "",
//       date: "",
//       dueDate: "",
//       poNumber: "",
//       items: [{
//         name: "",
//         quantity: "",
//         rate: "",
//         amount: ""
//       }],
//       notes: "",
//       terms: "",
//       subTotal: "",
//       tax: "",
//       total: ""
//     }
// );

function addItem() {

  invData.items.push({})
}

function removeItem(index) {
  invData.items.splice(index,1);
}

function subTotal(){
  let subtotal = 0;
  invData.items.forEach(item => {
    subtotal += item.amount;
  })
  invData.subTotal = subtotal;
  return subtotal;
}

function calcTotal()
{
  let total=0;
  total = invData.subTotal + (invData.subTotal * invData.tax / 100);
  invData.total = total;
  return total;
}



// function rowAmount(qty,rate,index)
// {
//   invData.items[index].amount = 0;
//   return invData.items[index].amount = qty * rate;
//
// }

</script>

<template>
  <div class="bg-gray-100 min-h-screen flex items-start justify-center py-6 px-3 sm:py-10 sm:px-6">
    <div class="bg-white w-full max-w-4xl shadow-md p-5 sm:p-10">

      <!-- ── TOP: Logo + Invoice Title ─────────────────────────── -->
      <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between mb-8">

        <!-- Logo Box -->
        <div
            class="w-36 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm cursor-pointer select-none shrink-0">
          + Add Your Logo
        </div>

        <!-- Invoice Title + Number -->
        <div class="sm:text-right">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 tracking-widest uppercase mb-3">Invoice</h1>
          <div class="flex items-center sm:justify-end">
            <span class="border border-r-0 border-gray-300 px-2 py-1 text-gray-500 text-sm">#</span>
            <invoiceInput/>
          </div>
        </div>
      </div>

      <!-- ── BILL TO / SHIP TO  +  DATE FIELDS ─────────────────── -->
      <div class="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start mb-8">

        <!-- Bill To + Ship To -->
        <div class="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <div>
            <p class="text-xs font-semibold text-gray-600 mb-1">Bill To</p>
            <textarea
                rows="3"
                placeholder="Who is this invoice to? (required)"
                class="border border-gray-300 text-sm px-3 py-2 w-full sm:w-44 resize-none focus:outline-none placeholder-gray-400"
                v-model="invData.billingAddress"
            ></textarea>
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-600 mb-1">Ship To</p>
            <textarea
                rows="3"
                placeholder="(optional)"
                class="border border-gray-300 text-sm px-3 py-2 w-full sm:w-44 resize-none focus:outline-none placeholder-gray-400"
                v-model="invData.shippingAddress"
            ></textarea>
          </div>
        </div>

        <!-- Date / Payment Terms / Due Date / PO Number -->
        <div class="grid grid-cols-2 gap-x-3 gap-y-2 text-sm sm:grid-cols-[auto_160px]">
          <span class="text-gray-500 sm:text-right self-center">Date</span>
          <input type="date" class="border border-gray-300 px-2 py-1 focus:outline-none w-full" v-model="invData.date"/>

          <span class="text-gray-500 sm:text-right self-center">Due Date</span>
          <input type="date" class="border border-gray-300 px-2 py-1 focus:outline-none w-full"
                 v-model="invData.dueDate"/>

          <span class="text-gray-500 sm:text-right self-center">PO Number</span>
          <input type="text" class="border border-gray-300 px-2 py-1 focus:outline-none w-full"
                 v-model="invData.poNumber"/>
        </div>
      </div>

      <!-- ── LINE ITEMS TABLE ───────────────────────────────────── -->
      <div class="overflow-x-auto mb-3">
        <table class="w-full text-sm min-w-[520px]">
          <thead>
          <tr class="bg-gray-800 text-white">
            <th class="text-left px-3 py-2.5 font-semibold">Item</th>
            <th class="text-center px-3 py-2.5 font-semibold w-24">Quantity</th>
            <th class="text-center px-3 py-2.5 font-semibold w-32">Rate</th>
            <th class="text-right px-3 py-2.5 font-semibold w-24">Amount</th>
            <th class="text-right px-3 py-2.5 font-semibold w-24"></th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b border-gray-200" v-for="(item,index) in invData.items" :key="index">
            <td class="px-3 py-2.5">
              <input
                  type="text"
                  placeholder="Name of service or product..."
                  class="w-full focus:outline-none placeholder-gray-400 text-gray-700"
                  v-model="item.name"
              />
            </td>
            <td class="px-3 py-2.5">
              <input
                  type="number"
                  value="1"
                  class="w-full text-center border border-gray-300 px-1 py-0.5 focus:outline-none"
                  v-model="item.quantity"
              />
            </td>
            <td class="px-3 py-2.5">
              <div class="flex items-center gap-1">
                <span class="text-gray-500">$</span>
                <input
                    type="number"
                    value="0"
                    class="w-full border border-gray-300 px-1 py-0.5 focus:outline-none"
                    v-model="item.rate"
                />
              </div>
            </td>
            <!-- <td class="px-3 py-2.5 text-right text-gray-700 whitespace-nowrap">$ {{ rowAmount(item.quantity,item.rate,index) }}</td>-->
            <td class="px-3 py-2.5 text-right text-gray-700 whitespace-nowrap">$ {{ item.amount = item.quantity * item.rate }}</td>
            <td class="px-3 py-2.5 text-right text-gray-700 whitespace-nowrap">
              <button class="bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-red-700" @click="removeItem(index)">X</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="mb-10">
        <button class="bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-green-700"
                @click="addItem"
        >
          + Line Item
        </button>
      </div>


<!--      <div>-->
<!--        {{ invData }}-->
<!--      </div>-->

      <!-- + Line Item Button -->


      <!-- ── BOTTOM: Notes & Terms  /  Totals ───────────────────── -->
      <div class="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">

        <!-- Left: Notes + Terms -->
        <div class="flex flex-col gap-5 flex-1">

          <div>
            <p class="text-sm font-semibold text-gray-700 mb-1">Notes</p>
            <textarea
                rows="4"
                placeholder="Notes - any relevant information not already covered"
                class="w-full border border-gray-300 text-sm px-3 py-2 resize-none focus:outline-none placeholder-gray-400"
                v-model="invData.notes"
            ></textarea>
          </div>

          <div>
            <p class="text-sm font-semibold text-gray-700 mb-1">Terms</p>
            <textarea
                rows="4"
                placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                class="w-full border border-gray-300 text-sm px-3 py-2 resize-none focus:outline-none placeholder-gray-400"
                v-model="invData.terms"
            ></textarea>
          </div>

        </div>

        <!-- Right: Totals Block -->
        <div class="w-full sm:w-72 flex flex-col gap-3 text-sm">

          <!-- Subtotal -->
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Subtotal</span>
            <span class="text-gray-800 font-medium">${{ subTotal() }}</span>
          </div>

          <!-- Tax -->
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Tax</span>
            <div class="flex items-center gap-1">
              <input
                  type="number"
                  value="0"
                  class="w-14 text-right border border-gray-300 px-1 py-0.5 focus:outline-none"
                  v-model="invData.tax" @input="calcTotal()"
              />
              <span class="text-gray-500">%</span>
              <span class="text-gray-400 cursor-pointer select-none text-base leading-none">↻</span>
            </div>
          </div>

          <!--          &lt;!&ndash; Discount + Shipping &ndash;&gt;-->
          <!--          <div class="flex justify-end gap-4 text-green-600 text-xs font-semibold">-->
          <!--            <button class="hover:underline">+ Discount</button>-->
          <!--            <button class="hover:underline">+ Shipping</button>-->
          <!--          </div>-->

          <div class="border-t border-gray-200"></div>

          <!-- Total -->
          <div class="flex justify-between items-center">
            <span class="text-gray-700 font-semibold">Total</span>
            <span class="text-gray-900 font-bold">${{ calcTotal() }}</span>
          </div>

          <!-- Amount Paid -->
          <!--          <div class="flex justify-between items-center">-->
          <!--            <span class="text-gray-500">Amount Paid</span>-->
          <!--            <div class="flex items-center gap-1">-->
          <!--              <span class="text-gray-500">$</span>-->
          <!--              <input-->
          <!--                  type="number"-->
          <!--                  value="0"-->
          <!--                  class="w-24 border border-gray-300 px-1 py-0.5 focus:outline-none"-->
          <!--              />-->
          <!--            </div>-->
          <!--          </div>-->

          <div class="border-t border-gray-300"></div>

          <!--          &lt;!&ndash; Balance Due &ndash;&gt;-->
          <!--          <div class="flex justify-between items-center">-->
          <!--            <span class="text-gray-700 font-semibold">Balance Due</span>-->
          <!--            <span class="text-gray-900 font-bold text-base">$0.00</span>-->
          <!--          </div>-->

        </div>
      </div>
      {{ invData }}
    </div>


  </div>
</template>

<style scoped>

</style>