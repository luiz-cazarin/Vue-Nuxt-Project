<template>
  <div
    class="
      min-h-screen
      bg-gradient-to-tl
      from-purple-900
      to-indigo-700
      w-full
      py-16
      px-4
    "
  >
    <AlertDialog v-if="alert" :type="'error'" :message="'User not found!'" />
    <div class="flex flex-col items-center justify-center">
      <div class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
        <div class="w-full flex items-center justify-center pb-7">
          <p class="text-2xl font-extrabold leading-6 text-gray-800">Login</p>
        </div>
        <div>
          <div class="text-sm font-medium leading-none text-gray-800">
            Email
          </div>
          <input
            v-model="email"
            aria-label="enter email adress"
            role="input"
            type="email"
            class="
              bg-gray-200
              border
              rounded
              focus:outline-none
              text-xs
              font-medium
              leading-none
              text-gray-800
              py-3
              w-full
              pl-3
              mt-2
            "
          />
        </div>
        <div class="mt-6 w-full">
          <div class="text-sm font-medium leading-none text-gray-800">
            Password
          </div>
          <div class="relative flex items-center justify-center">
            <input
              v-model="password"
              aria-label="enter Password"
              role="input"
              type="password"
              class="
                bg-gray-200
                border
                rounded
                focus:outline-none
                text-xs
                font-medium
                leading-none
                text-gray-800
                py-3
                w-full
                pl-3
                mt-2
              "
            />
          </div>
        </div>
        <div class="mt-8">
          <button
            @click="login"
            role="button"
            aria-label="create my account"
            class="
              text-sm
              font-semibold
              leading-none
              text-white
              focus:outline-none
              bg-purple-800
              border
              rounded
              hover:bg-purple-700
              py-4
              w-full
            "
          >
            Login
          </button>
        </div>
        <div class="flex justify-center">
          <div class="mt-3">
            <nuxt-link to="/Register">
              <a
                class="
                  text-sm
                  font-semibold
                  text-gray-500
                  hover:text-purple-900
                "
              >
                Create my account
              </a>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import AlertDialog from "../../components/Utils/AlertDialog.vue";
export default {
  head() {
    return {
      title: "Login",
    };
  },
  components: {
    AlertDialog,
  },
  layout: "auth",
  data() {
    return {
      email: null,
      password: null,
      alert: false,
    };
  },
  methods: {
    async login() {
      if (this.email !== null && this.password !== null) {
        const user = {
          email: this.email,
          password: this.password,
        };
        const res = await api({
          method: "GET",
          url: `/users?email=${user.email}`,
        });
        if (res.data.length === 0) {
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 2000);
        } else {
          localStorage.setItem("user", JSON.stringify(res.data[0]));
          localStorage.setItem(
            "token",
            "6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"
          ); // default token, could not authenticate via (gorest.co.in)
          this.$router.push("/");
        }
      }
    },
  },
};
</script>
