<template>
  <div class="container mx-auto min-h-full">
    <main>
      <div class="max-w mx-auto py-6 sm:px-6 lg:px-40">
        <div>
          <DivisorLine class="mx-2" :title="'Posts!'" />
          <!-- new post -->
          <CreatePost v-if="auth" />
          <!-- post list -->
          <div v-if="$fetchState.pending" class="flex justify-center">
            Loading...
          </div>
          <div v-else class="flex justify-center">
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
import CreatePost from "../components/CreatePost.vue";
import api from "../services/api";
export default Vue.extend({
  name: "IndexPage",
  components: {
    DivisorLine,
    CreatePost,
  },
  data() {
    return {
      auth: false,
      posts: [],
    };
  },
  async fetch() {
    const resPosts = await api({
      method: "GET",
      url: "/posts?_limit=3",
    });
    this.posts = resPosts.data;
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.auth = true;
    }
  },
});
</script>
