<template>
  <div class="container mx-auto">
    <div v-if="$fetchState.pending" class="flex justify-center mt-20">
      <div class="flex justify-center items-center">Loading...</div>
    </div>
    <div v-else class="my-6 px-2 sm:mx-6 lg:mx-20">
      <div class="lg:mx-20">
        <AlertDialog v-if="alert" :type="alertType" :message="alertMessage" />
        <div
          v-if="!editMode"
          class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 break-words"
        >
          {{ post.title }}
        </div>
        <div v-else>
          <textarea
            v-model="post.title"
            maxlength = "500"
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
      <div v-if="!editMode" class="lg:mx-20 py-10 break-words">
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
      <NewComment v-if="userAuth" @newComment="newComment" />
      <div v-else class="flex justify-center font-semibold py-2">Make login to comment</div>
      <CardComment :comments="comments" />
    </div>
  </div>
</template>

<script>
import NewComment from "../../components/Posts/NewComment.vue";
import CardComment from "../../components/Posts/CardComment.vue";
import DivisorLine from "../../components/Utils/DivisorLine.vue";
import AlertDialog from "../../components/Utils/AlertDialog.vue";
import api from "../../services/api";

export default {
  components: {
    NewComment,
    CardComment,
    DivisorLine,
    AlertDialog,
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
      alert: false,
      alertType: "",
      alertMessage: [],
      userAuth: false,
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.userAuth = true;
    }
  },
  async fetch() {
    if (this.$route.params.id !== undefined) {
      const resPost = await api({
        method: "GET",
        url: "/posts/" + this.$route.params.id,
      });
      this.post = {
        title: resPost.data.title,
        body: resPost.data.body,
      };
      const resUser = await api({
        method: "GET",
        url: "/users/" + resPost.data.user_id,
      });
      this.userName = resUser.data.name;
      const resComments = await api({
        method: "GET",
        url: `/posts/${this.$route.params.id}/comments`,
      });
      this.comments = resComments.data;
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    async deletePost() {
      await api({
        method: "delete",
        url: `/posts/${this.$route.params.id}`,
      });
      this.$router.push("/");
    },
    editPost() {
      this.editMode = true;
    },
    async savePost() {
      this.editMode = false;
      const res = await api({
        method: "patch",
        url: `/posts/${this.$route.params.id}`,
        data: this.post,
      });
      if (res.status === 200) {
        this.alertType = "success";
        this.alertMessage = "The post has been saved!";
        this.alert = true;
      } else {
        this.alertMessage = "Error saving post!";
      }
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = [];
      }, 1000);
    },
    async newComment(payload) {
      if (payload.body === null || payload.email === null || payload.name === null) {
        this.alertType = "error";
        this.alertMessage = "Error saving message!";
        this.alert = true;
      } else {
        const data = payload;
        data.postId = parseInt(this.$route.params.id);
        const res = await api({
          method: "post",
          url: `/posts/${data.postId}/comments`,
          data: data,
        });
        if (res.status == 201) {
          this.alertType = "success";
          this.alertMessage = "Message has created!";
          this.alert = true;
          const resComments = await api({
            method: "GET",
            url: `/posts/${this.$route.params.id}/comments`,
          });
          this.comments = resComments.data;
        }
      }
      setTimeout(() => {
        this.alert = false;
      }, 1000);
    },
  },
};
</script>
