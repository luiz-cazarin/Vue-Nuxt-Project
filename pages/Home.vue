<template>
  <div class="max-w mx-auto py-6 sm:px-6 lg:px-40">
    <div>
      <div class="title mx-3 my-1">Posts!</div>
      <div class="box-line mx-3 mt-2 mb-5 flex">
        <div class="line-1"></div>
        <div class="line-2"></div>
      </div>
      <div class="flex justify-center">
        <ul class="bg-white rounded-md w-full mx-3 text-gray-800">
          <li
            v-for="el in list"
            :key="el.id"
            class="list px-6 py-2 border-b border-gray-200 w-full"
            to="/Post"
          >
            <div class="card">
              <div class="title-card">
                {{ el.title }}
              </div>
              <div class="author-card">Author: {{ el.author }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "Acesso antecipado ao beta aberto de MultVersus começa hoje",
          author: "Luiz Claudio",
        },
        {
          title: "Titulo do post",
          author: "Santos",
        },
        {
          title: "Titulo do post",
          author: "Cazarin",
        },
        {
          title: "Titulo do post",
          author: "Junior",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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

.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px 0px;
  .title-card {
    font-weight: 700;
    font-size: 19px;
    margin-bottom: 16px;
  }
  .author-card {
    font-size: 16px;
    color: #808080;
  }
}

.list {
  cursor: pointer;
  &:hover {
    transition: 0.1s;
    background-color: rgb(228, 228, 228);
  }
}
</style>