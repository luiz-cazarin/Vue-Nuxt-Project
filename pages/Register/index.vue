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
    <AlertDialog v-if="alert" :type="alertType" :message="alertMessage" />
    <div class="flex flex-col items-center justify-center">
      <div class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
        <div class="w-full flex items-center justify-center pb-7">
          <p class="text-2xl font-extrabold leading-6 text-gray-800">
            Register
          </p>
        </div>
        <div>
          <div class="text-sm font-medium leading-none text-gray-800">Name</div>
          <input
            v-model="user.name"
            required
            aria-label="enter name"
            role="input"
            type="text"
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
            Email
          </div>
          <div class="relative flex items-center justify-center">
            <input
              v-model="user.email"
              required
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
        </div>
        <div class="mt-6 w-full">
          <div class="text-sm font-medium leading-none text-gray-800">
            Password
          </div>
          <div class="relative flex items-center justify-center">
            <input
              v-model="user.password"
              required
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
        <div class="mt-6 w-full">
          <fieldset data-role="controlgroup">
            <legend class="text-sm font-medium leading-none pb-3 text-gray-800">
              Choose your gender
            </legend>
            <input
              v-model="user.gender"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked
            />
            <label for="male">Male</label>
            <input
              v-model="user.gender"
              class="ml-2"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label for="female">Female</label>
          </fieldset>
        </div>
        <div class="mt-8">
          <button
            @click="registerUser"
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
            Register
          </button>
        </div>
        <div class="flex justify-center">
          <div class="mt-3">
            <nuxt-link to="/Login">
              <a
                class="
                  text-sm
                  font-semibold
                  text-gray-500
                  hover:text-purple-900
                "
              >
                Back to login
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
      title: "Register",
    };
  },
  components: {
    AlertDialog,
  },
  layout: "auth",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        gender: "",
        status: "active",
      },
      alert: false,
      alertType: null,
      alertMessage: null,
    };
  },
  methods: {
    async registerUser() {
      if (
        this.user.name !== "" &&
        this.user.email !== "" &&
        this.user.password !== "" &&
        this.user.gender !== ""
      ) {
        await api({
          method: "post",
          url: "/users",
          headers: {
            Authorization: `Bearer ${"6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"}`,
          },
          data: this.user,
        });
        this.alertType = "success";
        this.alertMessage = "User registered successfully!";
      } else {
        this.alertType = "error";
        this.alertMessage = "Error registering user!";
      }
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    },
  },
};
</script>
