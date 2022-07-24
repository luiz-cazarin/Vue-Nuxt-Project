<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="w-full flex items-center px-2">
            <div class="flex-shrink-0">
              <nuxt-link to="/">
                <img
                  class="h-8 w-8"
                  src="https://cdn3d.iconscout.com/3d/free/thumb/vuejs-2-5645873-4695731.png"
                  alt="Vue"
                />
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <nuxt-link :to="{ name: 'index' }">
                  <a
                    class="
                      hover:bg-gray-900
                      text-white
                      block
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                    "
                    aria-current="page"
                    >Home</a
                  >
                </nuxt-link>
              </div>
            </div>
            <div class="w-full"></div>
            <div v-if="!auth">
              <nuxt-link :to="{ name: 'Login' }">
                <div class="hidden md:block">
                  <a
                    class="
                      text-gray-100
                      hover:bg-gray-700 hover:text-white
                      block
                      px-3
                      py-2
                      rounded-md
                    "
                    >Login</a
                  >
                </div>
              </nuxt-link>
            </div>
            <div v-else>
              <div class="hidden md:block">
                <button
                  @click="logout"
                  class="
                    text-gray-100
                    hover:bg-gray-700 hover:text-white
                    block
                    px-3
                    py-2
                    rounded-md
                  "
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="md:hidden" id="mobile-menu">
        <div class="px-3 pt-2 pb-3 space-y-1 sm:px-3">
          <nuxt-link class="mx-5" :to="{ name: 'index' }">
            <a
              class="
                hover:bg-gray-900
                text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              aria-current="page"
              >Home</a
            >
          </nuxt-link>
          <nuxt-link class="mx-5" :to="{ name: 'Login' }">
            <a
              class="
                text-gray-100
                hover:bg-gray-700 hover:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              >Login
            </a>
          </nuxt-link>
        </div>
      </div>
    </nav>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.auth = true;
    }
  },
  methods: {
    logout() {
      this.auth = false;
      localStorage.clear();
      this.$router.push("/");
      window.location.reload();
    },
  },
};
</script>
