<template>
  <div class="container mx-auto">
    <div class="my-6 px-2 sm:mx-6 lg:mx-20">
      <div class="lg:mx-20">
        <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          {{ post.title }}
        </div>
        <div class="text-2md py-2 text-gray-600">Author: {{ userName }}</div>
      </div>
      <DivisorLine @deletePost="deletePost" :type="'button'" />
      <div class="lg:mx-20 py-10">
        {{ post.body }}
      </div>
      <DivisorLine :title="'COMENTARIOS'" />
      <NewComment :userId="post.user_id" @newComment="newComment" />
      <CardComment :comments="comments" />
    </div>
  </div>
</template>

<script>
import NewComment from "../../components/Posts/NewComment.vue";
import CardComment from "../../components/Posts/CardComment.vue";
import DivisorLine from "../../components/Utils/DivisorLine.vue";
import api from "../../services/api";

export default {
  components: {
    NewComment,
    CardComment,
    DivisorLine,
  },
  data() {
    return {};
  },
  async asyncData(context) {
    var resPost = await api({
      method: "GET",
      url: "/posts/" + context.params.id,
    });
    var resUser = await api({
      method: "GET",
      url: "/users/" + resPost.data.user_id,
    });
    var resComments = await api({
      method: "GET",
      url: `/posts/${context.params.id}/comments`,
    });

    const userName = resUser.data.name;
    const comments = resComments.data;

    const post = {
      title: resPost.data.title,
      body: resPost.data.body,
    };

    return {
      post,
      userName,
      comments,
    };
  },
  methods: {
    async deletePost() {
      await api({
        method: "delete",
        url: `/posts/${this.$route.params.id}`,
        headers: {
          Authorization: `Bearer ${"6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"}`,
        },
      });
    },
    async newComment(payload) {
      let data = {
        body: payload.comment,
        name: "String",
        email: "luiz2@gmail.com",
        postId: this.$route.params.id,
      };
      await api({
        method: "post",
        url: `/posts/${this.$route.params.id}/comments`,
        headers: {
          Authorization: `Bearer ${"6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"}`,
        },
        data: data,
      });
    },
  },
};
</script>
