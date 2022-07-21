<template>
  <div>
    <div class="my-6 px-2 sm:mx-6 lg:mx-20">
      <div class="lg:px-20">
        <div class="text-3xl font-bold text-gray-900">
          Acesso antecipado ao beta aberto de MultVersus começa hoje
        </div>
        <div class="text-2md py-2 text-gray-600">Author: Luiz Claudio</div>
      </div>
      <div class="box-line mt-3 mb-12 flex">
        <div class="line-1"></div>
        <div class="line-2"></div>
      </div>
      <!-- <div>{{ $route.params }}</div> -->
      <div class="lg:px-20">
        node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id.vue?vue&type=template&id=13c8be35&
        node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id.vue?vue&type=template&id=13c8be35&
        node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id.vue?vue&type=template&id=13c8be35&
        <br />
        <br />
        node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id.vue?vue&type=template&id=13c8be35&
        node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id.vue?vue&type=template&id=13c8be35&
        <br />
        <br />
        node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id.vue?vue&type=template&id=13c8be35&
        <br />
        <br />
        node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id.vue?vue&type=template&id=13c8be35&
      </div>
      <div class="title mt-12 mb-3">COMENTARIOS</div>
      <div class="box-line mb-10 flex">
        <div class="line-1"></div>
        <div class="line-2"></div>
      </div>
      <div class="chat p-3 rounded-md">
        <div class="text-2md pb-2 font-semibold text-gray-800">
          Author: Luiz Claudio
        </div>
        <textarea
          name="chat"
          id="chat"
          class="input focus:outline-none p-1 rounded-sm"
        />
        <div class="w-full flex justify-end">
          <button
            role="button"
            aria-label="create my account"
            class="
              my-2
              text-sm
              font-semibold
              text-white
              focus:outline-none
              bg-purple-700
              rounded
              hover:bg-purple-600
              py-2
              px-4
              md:w-1/6
              xl:w-1/6
            "
          >
            COMENTAR
          </button>
        </div>
      </div>
      <div v-for="c in comments" :key="c" class="chat-2 my-8 p-3 rounded-md">
        <div class="text-2md pb-2 font-bold text-purple-600">
          Author: {{ c.author }}
        </div>
        <div class="rounded-sm text-gray-900">
          {{ c.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          author: "Luiz Claudio",
          body: "Otimo post, recomendo! Otimo post, recomendo! Otimo post, recomendo!",
        },
        {
          author: "Anonimo",
          body: "Otimo post, recomendo! Otimo post, recomendo! Otimo post, recomendo!",
        },
        {
          author: "Anonimo 2",
          body: "Otimo post, recomendo! Otimo post, recomendo! Otimo post, recomendo!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  min-height: 200px;
  background-color: rgb(0, 0, 0, 0.02);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  .input {
    min-width: 100%;
    min-height: 100px;
    max-height: 200px;
  }
}

.chat-2 {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  min-height: 100px;
}

.title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: hsl(256, 62%, 56%);
}
.box-line {
  .line-1 {
    height: 5px;
    background: hsl(256, 62%, 56%);
    width: 45px;
  }
  .line-2 {
    margin-top: 3px;
    height: 2px;
    background: hsl(0, 0%, 12%);
    width: 100%;
  }
}
</style>