<template>
  <div>
    <div
      v-if="title"
      class="text-purple-700 text-xl font-bold lg:text-3xl mx-3 mt-5"
    >
      {{ title }}
    </div>
    <div class="box-line mt-2 mb-5 flex items-center justify-items-center">
      <div class="h-1.5 bg-purple-700 w-14"></div>
      <div class="mt-1 w-full bg-black h-0.5"></div>
      <div v-if="type === 'button'" class="flex">
        <div v-if="!mode">
          <button
            @click="editPost"
            class="
              duration-100
              text-sm
              font-semibold
              leading-none
              text-white
              focus:outline-none
              bg-purple-700
              rounded
              hover:bg-purple-600
              py-2
              ml-2
              w-28
            "
          >
            Edit post
          </button>
        </div>
        <div v-else>
          <button
            @click="savePost"
            class="
              duration-100
              text-sm
              font-semibold
              leading-none
              text-white
              focus:outline-none
              bg-purple-700
              rounded
              hover:bg-purple-600
              py-2
              ml-2
              w-28
            "
          >
            Save post
          </button>
        </div>
        <button
          @click="deletePost"
          class="
            duration-100
            text-sm
            font-semibold
            leading-none
            text-white
            focus:outline-none
            bg-purple-700
            rounded
            hover:bg-purple-600
            py-2
            ml-2
            w-28
          "
        >
          Delete post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    type: "",
    mode: null,
  },
  data() {
    return {};
  },
  methods: {
    deletePost() {
      this.$emit("deletePost");
    },
    editPost() {
      this.$emit("editPost");
    },
    savePost() {
      this.$emit("savePost");
    },
  },
};
</script>
