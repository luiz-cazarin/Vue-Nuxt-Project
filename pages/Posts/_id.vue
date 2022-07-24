<template>
  <div class="container mx-auto">
    <div v-if="$fetchState.pending" class="flex justify-center mt-20">
      <div class="flex justify-center items-center">
        Loading...
      </div>
    </div>
    <div v-else class="my-6 px-2 sm:mx-6 lg:mx-20">
      <div class="lg:mx-20">
        <div
          v-if="!editMode"
          class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
        >
          {{ post.title }}
        </div>
        <div v-else>
          <textarea
            v-model="post.title"
            class="
              text-gray-900
              font-bold
              text-xl
              sm:text-2xl
              lg:text-3xl
              p-2
              block
              h-32
              w-full
              text-sm
              border
              focus:outline-none
              border-gray-300
              rounded-md
            "
          />
        </div>
        <div class="text-2md py-2 text-gray-600">Author: {{ userName }}</div>
      </div>
      <DivisorLine
        @deletePost="deletePost"
        @editPost="editPost"
        @savePost="savePost"
        :mode="editMode"
        :type="'button'"
      />
      <div v-if="!editMode" class="lg:mx-20 py-10">
        {{ post.body }}
      </div>
      <div v-else>
        <textarea
          v-model="post.body"
          class="
            shadow-sm
            p-2
            border
            w-full
            h-96
            focus:outline-none
            border-gray-300
            rounded-md
          "
        />
      </div>
      <DivisorLine :title="'COMENTARIOS'" />
      <NewComment @newComment="newComment" />
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
    return {
      editMode: false,
      post: {
        title: "",
        body: "",
      },
      userName: null,
      comments: [],
    };
  },
  async fetch() {
    const resPost = await api({
      method: "GET",
      url: "/posts/" + this.$route.params.id,
    });
    const resUser = await api({
      method: "GET",
      url: "/users/" + resPost.data.user_id,
    });
    const resComments = await api({
      method: "GET",
      url: `/posts/${this.$route.params.id}/comments`,
    });

    this.post = {
      title: resPost.data.title,
      body: resPost.data.body,
    };
    this.userName = resUser.data.name;
    this.comments = resComments.data;
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
      this.$router.push("/");
    },
    editPost() {
      this.editMode = true;
    },
    async savePost() {
      this.editMode = false;
      await api({
        method: "patch",
        url: `/posts/${this.$route.params.id}`,
        headers: {
          Authorization: `Bearer ${"6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"}`,
        },
        data: this.post,
      });
    },
    async newComment(payload) {
      const data = payload;
      data.postId = parseInt(this.$route.params.id);
      await api({
        method: "post",
        url: `/posts/${data.postId}/comments`,
        headers: {
          Authorization: `Bearer ${"6cce40afa14cbbdcca7c34aa019974ba94a130ad003d1a4bdf8dce053419b61c"}`,
        },
        data: data,
      });
    },
  },
};
</script>
