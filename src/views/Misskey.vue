<template>
  <div class="w-full">
    <div class="h-2 bg-indigo"></div>
    <div class="flex items-center justify-center h-screen">
      <div class="container mx-24 bg-white rounded shadow-lg">
        <div class="px-12 py-6">
          <div class="text-center">
            <h1
              class="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full text-gray-600"
            >
              さぁ...ここから絵文字の検索を始めましょう
            </h1>
            <div class="w-full text-center">
              <form @submit.prevent="get_emoji">
                <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                  <input
                    name="domain"
                    v-model="domain"
                    placeholder="ne.akarinext.org"
                    class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    class="appearance-none bg-indigo text-white text-base font-semibold tracking-wide p-3 rounded shadow hover:bg-indigo-light bg-indigo-600 bg-opacity-75"
                  >
                    検索
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="emojilists"
      class="rounded-t-xl overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 p-10"
    >
      <div
        class="flex justify-center"
        style="position: absolute; left:0; right: 0; top: 90%;"
      >
        <svg
          class="animate-bounce w-6 h-6 text-amber-900 "
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>

  <div
    class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-7 auto-rows-max gap-5"
  >
    <div
      v-for="data in emojilists"
      :key="data"
      class="each mb-10 m-2 shadow-lg border-gray-800 relative rounded"
    >
      <div
        class="emoji-image w-full"
        v-lazy:background-image="data.url"
        style=" background-position: center; height: 10em; background-repeat: no-repeat; background-size: contain;"
      >
        <button class="register-button" style="position: absolute;">
          登録 +
        </button>
      </div>

      <div class="desc p-4 text-gray-800">
        <a
          href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
          target="_new"
          class="title font-bold block cursor-pointer hover:underline"
        ></a>
      </div>
      <div
        class="pb-5 uppercase text-center tracking-wide flex justify-around p-2"
      >
        <div class="posts">
          <p class="text-gray-400 text-sm">名前</p>
          <p class="text-lg text-blue-300 break-all">{{ data.name }}</p>
        </div>
        <div class="followers">
          <p class="text-gray-400 text-sm">ID</p>
          <p class="text-lg text-blue-300 break-all">{{ data.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Init from "../components/init.vue";
export default {
  mixins: [Init],
  data() {
    return {
      emojilists: null,
      domain: ""
    };
  },
  methods: {
    get_emoji() {
      const domain = this.domain;
      const params = { domain: domain };
      this.axios
        .post("/misskey/emoji/list", params)
        .then(res => {
          this.emojilists = res.data;
          this.finally();
        })
        .catch(err => {
          if (err.response.data["message"] === "invalid_instance_domain") {
            Init.toast_notification(this.$swal, {
              title: "エラー",
              text: "無効なドメインまたは接続できません",
              icon: "error"
            });
          }
        });
    },
    finally() {
      Init.toast_notification(this.$swal, {
        title: "取得に成功",
        icon: "success"
      });
    }
  }
};
</script>
