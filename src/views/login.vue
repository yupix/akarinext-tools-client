<template>
  <!-- component -->
  <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        class="p-4 py-6 text-white bg-indigo-600 bg-opacity-75 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div class="my-3 text-4xl font-bold tracking-wider text-center">
          <a href="#">AkariNext Tools</a>
        </div>
        <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
          ログイン / ユーザー登録をしてより一層便利な機能を利用しましょう！
        </p>
        <p class="mt-6 text-sm text-center text-gray-300">
          利用規約を<a href="#" class="underline">こちら</a>からご覧ください。
        </p>
      </div>
      <div class="p-5 bg-white md:flex-1">
        <h3 class="my-4 text-2xl font-semibold text-gray-700">
          アカウントにログイン
        </h3>
        <form @submit.prevent="Login" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label class="text-sm font-semibold text-gray-500"
              >Instance Domain
              <input
                v-model="login_instance"
                type="text"
                name="login_instance"
                placeholder="ne.akarinext.org"
                autofocus
                required
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            /></label>
          </div>
          <div>
            <button
              type="submit"
              class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-600 bg-opacity-75 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              ログイン
            </button>
          </div>
        </form>
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
      login_instance: null,
      result: null
    };
  },
  methods: {
    Login() {
      localStorage.setItem("login_instance", this.login_instance);
      const params = { domain: this.login_instance };
      this.axios
        .post("/login", params)
        .then(res => {
          this.result = res.data;
          this.LoginWindow();
        })
        .catch(err => {
          if (err.response.data["message"] === "invalid_instance_domain") {
            Init.toast_notification(this.$swal, {
              title: "無効なドメインです",
              text: "このドメインは存在しません",
              icon: "error"
            });
          } else if (err.response.data["message"] === "request_timeout") {
            //タイムアウト
            Init.toast_notification(this.$swal, {
              title: "タイムアウトしました",
              icon: "error"
            });
          }
        });
    },
    LoginWindow() {
      //const url = "child.vue";
      window.open(this.result["url"], "", "width=400,height=500");
      const reuslt = this.result;
      const axios = this.axios;
      const self = this;
      const loop = setInterval(function() {
        const params = { uuid: reuslt["uuid"] };
        axios
          .post("/auth/wait", params)
          .then(res => {
            const wait_result = res.data;
            if (res === 500) {
              clearInterval(loop);
            }
            if (wait_result["status"] === "success") {
              localStorage.setItem("account", wait_result["token"]);
              const get_profile_params = { i: wait_result["token"] };
              axios.post("/user/i", get_profile_params).then(user_res => {
                localStorage.setItem("profile", JSON.stringify(user_res.data));
              });
              self.finally(loop);
            }
          })
          // eslint-disable-next-line no-unused-vars
          .catch(err => {
            clearInterval(loop);
          });
      }, 5000); // eslint-disable-line
    },
    finally(loop) {
      clearInterval(loop);
      Init.toast_notification(this.$swal, {
        title: "ログインに成功",
        icon: "success"
      }).then(() => {
        location.reload();
      });
    }
  }
};
</script>
