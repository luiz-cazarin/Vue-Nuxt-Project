<template>
  <div>
    <div v-for="c in comments" :key="c.id" class="shadow-md my-8 p-3 rounded-md">
      <div class="text-2md pb-2 font-bold text-purple-600">
        Author: {{ c.name }}
      </div>
      <div class="rounded-sm text-gray-900">
        {{ c.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: []
  }
};
</script>


