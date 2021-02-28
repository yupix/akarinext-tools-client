<template>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div class="h-full">
    <div class="block md:flex">
      <div
        class="w-full flex-initial	md:w-5/5 p-8 bg-white lg:ml-4 lg:mr-4 shadow-md"
      >
        <form action="/misskey/i/update/" method="POST">
          <div class="rounded  shadow p-6">
            <span class="text-xl font-semibold block">絵文字に関する情報</span>
            <span class="text-gray-600 py-5"
              >絵文字の登録を行う際に必要な情報です</span
            >
            <div class="py-4">
              <label for="about" class="font-semibold text-gray-700 block pb-1"
                >インスタンスURL</label
              >
              <input
                name="instance_url"
                class="border-1  rounded-r px-4 py-2 w-full"
                type="text"
                value="ne.akarinext.org"
              />
            </div>
            <button
              type="submit"
              class="appearance-none bg-indigo text-white text-base font-semibold tracking-wide p-3 rounded shadow hover:bg-indigo-light bg-blue-400 bg-opacity-75 px-10"
            >
              保存
            </button>
          </div>
        </form>
      </div>

      <div
        class="w-full flex-initial	md:w-2/5 p-8 bg-white lg:m-4 lg:mr-4 shadow-md"
      >
        <div class="rounded  shadow p-6">
          <div class="pb-5">
            <div class="w-full p-8 mx-2 flex justify-center">
              <img
                class="w-20 rounded-full"
                alt="Ahmed Kamel"
                style="display: inline-block; vertical-align: middle;"
              />
            </div>
            <div class="flex justify-between">
              <span class="text-xl font-semibold block">プロフィール</span>
              <a
                href="#"
                class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                >Edit</a
              >
            </div>

            <span class="text-gray-600"
              >お使いのインスタンスのアカウント情報です</span
            >
          </div>
          <div>
            <div class="flex justify-between">
              <span class="text-xl font-semibold block">機密情報</span>
              <a
                href="#"
                class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                >Edit</a
              >
            </div>

            <span class="text-gray-600"
              >この情報は秘匿性の高い情報が含まれています。開く際は周りの環境などにご注意ください。</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
