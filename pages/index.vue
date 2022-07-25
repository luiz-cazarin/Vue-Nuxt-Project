<template>
  <div class="container mx-auto min-h-full">
    <main>
      <div class="max-w mx-auto py-6 sm:px-6 lg:px-40">
        <div>
          <DivisorLine class="mx-2" :title="'Posts!'" />
          <div v-if="!auth" class="font-semibold py-5 flex justify-center">
            Make login to create a post!
          </div>
          <!-- new post -->
          <CreatePost v-if="auth" @updateListPost="updateListPost" />
          <!-- post list -->
          <div v-if="$fetchState.pending" class="flex justify-center">
            Loading...
          </div>
          <div v-else class="flex justify-center">
            <ul
              v-if="hasPost"
              class="bg-white rounded-md w-full mx-3 text-gray-800"
            >
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
                  break-words
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
            <div v-else class="text-xl pt-5 font-semibold">
              There are no posts
            </div>
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
      url: "/posts",
    });
    this.posts = resPosts.data;
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.auth = true;
    }
  },
  computed: {
    hasPost() {
      if (this.posts.length > 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async updateListPost() {
      const resPosts = await api({
        method: "GET",
        url: "/posts",
      });
      this.posts = resPosts.data;
    },
  },
});
</script>
