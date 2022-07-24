<template>
  <div>
    <div class="bg-gray-50 mx-3 my-1">
      <div class="max-w-7xl py-6 px-4 sm:px-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
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
  </div>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    async createPost() {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        user_id: user.id,
        title: this.title,
        body: this.body,
      };
      console.log(data);
      const res = await api({
        method: "post",
        url: `/users/${user.id}/posts`,
        headers: {
          Authorization: `Bearer ${"6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"}`,
        },
        data: data,
      });
      this.title = null;
      this.body = null;
      window.location.reload();
    },
  },
};
</script>
