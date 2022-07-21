<template>
  <div
    class="
      min-h-screen
      bg-gradient-to-tl
      from-purple-900
      to-indigo-800
      w-full
      py-16
      px-4
    "
  >
    <div class="flex flex-col items-center justify-center">
      <div class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
        <div class="w-full flex items-center justify-center pb-7">
          <p class="text-2xl font-extrabold leading-6 text-gray-800">
            Register
          </p>
        </div>
        <div>
          <lable class="text-sm font-medium leading-none text-gray-800">
            Name
          </lable>
          <input
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
          <lable class="text-sm font-medium leading-none text-gray-800">
            Email
          </lable>
          <div class="relative flex items-center justify-center">
            <input
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
          <lable class="text-sm font-medium leading-none text-gray-800">
            Password
          </lable>
          <div class="relative flex items-center justify-center">
            <input
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
          <nuxt-link to="/">
            <button
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
          </nuxt-link>
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
                Login
              </a>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
};
</script>

<style>
</style>