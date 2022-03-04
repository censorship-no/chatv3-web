<template>
  <div>
    <Header></Header>
    <div class="bg-white py-8 sm:py-20">
      <div class="container px-3 sm:px-0">
        <p class="text-lg">{{ $t("about.info") }}</p>
        <p class="text-lg">{{ $t("about.sites") }}</p>
        <p
          class="
            flex
            gap-3
            text-center
            justify-center
            my-8
          "
        >
          <a
            class="
            min-w-[200px]
              sm:text-xl
              border-2 border-gray-600
              p-3
              sm:p-6
              rounded-lg
              text-gray-600
              hover:border-[#e53323] hover:text-[#e53323]
            "
            href="https://moscow.chatv3.ru/"
            >{{ $t("cities.moscow") }}</a
          >
          <!-- <a
            class="
              sm:text-xl
              border-2 border-gray-600
              p-3
              sm:p-6
              rounded-lg
              text-gray-600
              hover:border-[#e53323] hover:text-[#e53323]
            "
            href="https://odessa.dcomm.net.ua"
            >{{ $t("cities.odessa") }}</a
          >
          <a
            class="
              sm:text-xl
              border-2 border-gray-600
              p-3
              sm:p-6
              rounded-lg
              text-gray-600
              hover:border-[#e53323] hover:text-[#e53323]
            "
            href="https://kharkiv.dcomm.net.ua"
            >{{ $t("cities.kharkiv") }}</a
          > -->
        </p>
        <p class="text-gray-400 text-center">{{ $t("about.local") }}</p>
      </div>
    </div>
    <main class="container px-3 sm:px-0">
      <div>
        <h3 class="text-3xl font-bold my-8 sm:my-20">
          {{ $t("rubric.messaging") }}
        </h3>
        <div v-for="item in messaging" :key="item.id">
          <AppItem :data="item" />
        </div>
        <h3 class="text-3xl font-bold my-8 sm:my-20"">
          {{ $t("rubric.browsing") }}
        </h3>
        <div v-for="item in browsing" :key="item.id">
          <AppItem :data="item" />
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    locales: ["ru"],
  },
  name: "IndexPage",
  computed: {
    messaging() {
      return this.$store.state.items.messaging.filter((item) => {
        return item.show === true;
      });
    },
    browsing() {
      return this.$store.state.items.browsing.filter((item) => {
        return item.show === true;
      });
    },
  },
};
</script>
