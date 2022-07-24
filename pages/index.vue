<template>
  <div class="container mx-auto min-h-full">
    <main>
      <div class="max-w mx-auto py-6 sm:px-6 lg:px-40">
        <div>
          <DivisorLine class="mx-2" :title="'Posts!'" />
          <div class="bg-gray-50 mx-3 my-1">
            <div class="max-w-7xl py-6 px-4 sm:px-6">
              <div>
                <label
                  for="title"
                  class="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <div class="mt-1">
                  <input
                    v-model="title"
                    id="title"
                    name="title"
                    type="text"
                    class="
                      shadow-sm
                      p-2
                      mt-1
                      block
                      w-full
                      sm:text-sm
                      border
                      focus:outline-none
                      border-gray-300
                      rounded-md
                    "
                    placeholder="Title"
                  />
                </div>
              </div>
              <div>
                <label
                  for="body"
                  class="block text-sm mt-4 font-medium text-gray-700"
                >
                  Body
                </label>
                <div class="mt-1">
                  <textarea
                    v-model="body"
                    id="body"
                    name="body"
                    rows="8"
                    class="
                      shadow-sm
                      p-2
                      mt-1
                      block
                      w-full
                      sm:text-sm
                      border
                      focus:outline-none
                      border-gray-300
                      rounded-md
                    "
                    placeholder="Digite aqui!"
                  />
                </div>
              </div>
              <div class="mt-6">
                <div class="inline-flex rounded-md shadow">
                  <a
                    class="
                      px-4
                      py-2
                      font-medium
                      rounded-md
                      text-white
                      bg-purple-600
                      hover:bg-purple-700
                      cursor-pointer
                      duration-100
                    "
                    @click="createPost"
                  >
                    Create Post
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <ul class="bg-white rounded-md w-full mx-3 text-gray-800">
              <li
                v-for="el in posts"
                :key="el.id"
                class="
                  px-6
                  py-2
                  border-b border-gray-200
                  w-full
                  hover:bg-gray-200
                  duration-100
                "
              >
                <nuxt-link :to="`Posts/${el.id}`">
                  <div class="py-4">
                    <div class="font-bold text-lg my-3">
                      {{ el.title }}
                    </div>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DivisorLine from "../components/Utils/DivisorLine.vue";
import api from "../services/api";
export default Vue.extend({
  name: "IndexPage",
  components: {
    DivisorLine,
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  async asyncData() {
    const resPosts = await api({
      method: "GET",
      url: "/posts",
    });
    const posts = resPosts.data;
    return {
      posts: posts,
    };
  },
  methods: {
    createPost() {
      console.log("new POST...");
      api;
    },
  },
});
</script>
