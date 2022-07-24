<template>
  <div class="relative">
    <div v-if="type === 'success'" class="fixed top-0 right-0 rounded-md bg-green-500 text-md px-6 m-2 py-2 text-white">{{message}}</div>
    <div v-if="type === 'error'" class="fixed top-0 right-0 rounded-md bg-red-500 text-md px-6 m-2 py-2 text-white">{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: "",
    message: "",
  },
};
</script>
