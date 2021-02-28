<template>
  <header style="z-index: 10;" class="absolute">
    <!-- component -->
    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 w-full fixed">
      <div
        class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800"
      >
        <div
          class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <a
              href="#"
              class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >AkariNext Tools</a
            >
            <button
              class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              @click="open = !open"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row items-center"
          >
            <div
              class="text-sm font-semibold  flex items-center justify-center flex-shrink-0 md:ml-4 focus:text-gray-900 focus:outline-none focus:shadow-outline"
            >
              <!-- User avatar button -->
              <div class="">
                <button
                  v-click-away="onClickAway"
                  @click="MoreUser = !MoreUser"
                  class="flex flex-row text-gray-900 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline"
                >
                  <span class="sr-only">User menu</span>
                  <span v-if="!this.profile">ゲスト</span>
                  <span v-else>{{ this.profile["username"] }}</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    :class="{ 'rotate-180': MoreUser, 'rotate-0': !MoreUser }"
                    class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <img
                    v-if="this.profile"
                    class="w-6 rounded-full"
                    :src="this.profile['avatarUrl']"
                    alt="Ahmed Kamel"
                    style="display: inline-block; vertical-align: middle;"
                  />
                  <img
                    v-show="!this.profile"
                    class="w-6 rounded-full"
                    src="../assets/icon/guest-user.svg"
                    alt="Ahmed Kamel"
                    style="display: inline-block; vertical-align: middle;"
                  />
                </button>

                <!-- User dropdown menu -->
                <div
                  v-show="MoreUser"
                  class="absolute w-56 py-1 mb-4 bg-white rounded-md shadow-lg min-w-max ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
                  tabindex="-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-label="User menu"
                  style="left: 56%; z-index:11;"
                >
                  <a
                    href="#"
                    role="menuitem"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                  >
                    Your Profile
                  </a>
                  <router-link
                    to="/settings"
                    role="menuitem"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                  >
                    Settings
                  </router-link>
                  <router-link
                    v-show="!this.profile"
                    to="/login"
                    role="menuitem"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                    >Login
                  </router-link>
                  <a
                    v-on:click="logout()"
                    v-show="this.profile"
                    href="#"
                    role="menuitem"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                    >Logout
                  </a>
                </div>
              </div>
            </div>

            <a
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/"
              >Top</a
            >
            <a
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >About</a
            >
            <div class="relative">
              <button
                v-click-away="onMoreShowClickAway"
                @click="MoreShow = !MoreShow"
                class="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                <span>More</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  :class="{ 'rotate-180': MoreShow, 'rotate-0': !MoreShow }"
                  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                v-show="MoreShow"
                style="z-index:11;"
                class="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right"
              >
                <div
                  class="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700"
                >
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <router-link
                      class="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      to="/misskey"
                    >
                      <div
                        class="bg-teal-500 text-indigo-600 text-opacity-75 rounded-lg p-3"
                      >
                        <i class="uil uil-smile text-2xl"></i>
                      </div>
                      <div class="ml-3">
                        <p class="font-semibold">絵文字検索</p>
                        <p class="text-sm">
                          簡単に欲しい絵文字を見つけましょう
                        </p>
                      </div>
                    </router-link>
                    <router-link
                      class="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      to="/login"
                    >
                      <div
                        class="bg-teal-500 text-indigo-600 text-opacity-75 rounded-lg p-3"
                      >
                        <i class="uil uil-smile text-2xl"></i>
                      </div>
                      <div class="ml-3">
                        <p class="font-semibold">絵文字検索</p>
                        <p class="text-sm">
                          簡単に欲しい絵文字を見つけましょう
                        </p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      profile: null,
      open: false,
      MoreUser: false,
      MoreShow: false // eslint-disable-line
    };
  },
  created() {
    this.profile = JSON.parse(localStorage.getItem("profile"));
  },
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    },
    onClickAway() {
      this.MoreUser = false;
    },
    onMoreShowClickAway() {
      this.MoreShow = false;
    }
  }
};
</script>
