<template>
  <div>
    <div class="bg-gray-50">
      <div class="max-w-7xl py-6 px-4 sm:px-6">
        <div>
          <div class="text-2md pb-2 font-semibold text-gray-800">
            Author: {{ userName }}
          </div>
        </div>
        <div>
          <div class="mt-1">
            <textarea
              v-model="body"
              id="body"
              name="body"
              rows="4"
              maxlength="500"
              class="
                shadow-sm
                p-2
                mt-1
                block
                w-full
                max-h-40
                text-sm
                border
                focus:outline-none
                border-gray-300
                rounded-md
              "
              placeholder="Type here:"
            />
          </div>
        </div>
        <div class="w-full flex justify-end">
          <div class="mt-6">
            <div class="inline-flex rounded-md shadow">
              <button
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
                @click="newComment"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: null,
      user: null,
      userName: "",
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.user = user;
      this.userName = user.name;
    }
  },
  methods: {
    newComment() {
      const data = {
        name: this.user.name,
        email: this.user.email,
        body: this.body,
      };
      this.$emit("newComment", data);
      this.body = null;
    },
  },
};
</script>
