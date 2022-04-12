
<template>
  <div
    class="
      rounded-lg
      bg-red-100
      border border-primary
      grid grid-cols-12
      p-8
      gap-6
    "
  >
    <div class="col-span-12 lg:col-span-4 flex items-start">
      <img src="/icons/clone.svg" class="mr-3 w-10" alt="" />
      <span class="text-2xl font-bold">{{ $t("alert.title") }}</span>
    </div>
    <div class="col-span-12 lg:col-span-4">
      <p class="text-sm">{{ $t("alert.descr") }}</p>
    </div>
    <div class="col-span-12 lg:col-span-4 flex">
      <div>
        <div class="mb-1 text-sm sm:min-w-[90px] min-w-[80px]">
          {{ $t("alert.buttons.servers") }}
        </div>

        <ButtonGroups>
          <div
            id="linkMatrix"
            class="
              px-1
              min-h-[30px]
              inline-block
              text-xs
              border border-gray-300
              bg-white
              py-1
              shadow-sm
              rounded
              text-primary
              underline
              text-center
              focus:outline-none
            "
          >
            #dcommsp2p:matrix.moscow.chatv3.ru
          </div>
          <Button @click.native="copyDivToClipboard('linkMatrix')">
            <span class="flex flex-nowrap">
              <img src="/icons/copy.svg" class="w-4 mr-1 cursor-pointer" alt=""
            /></span>
          </Button>
        </ButtonGroups>
        <Button link="https://github.com/censorship-no/dcomms" class="mt-2">{{
          $t("alert.buttons.repo")
        }}</Button>
        <!-- <Button
          link="https://chat.kyiv.dcomm.net.ua/#/room/#dcomms:matrix.debian.social"
          class="mb-2"
          >{{ $t("alert.buttons.servers") }}</Button
        > -->
      </div>
    </div>
  </div>
</template>

<script>
import copy from "~/mixins/copy.js";

export default {
  name: "ReplicateSection",
  mixins: [copy],
};
</script>
