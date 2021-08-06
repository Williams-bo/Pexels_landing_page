<template>
  <div class="min-h-screen px-7">
    <div
      style="max-width: 84rem"
      class="flex text-gray-800 mx-auto my-3 items-center"
    >
      <div class="text-lg font-bold">Free Stock Photos</div>
      <div class="ml-auto text-sm font-bold">Trending</div>
    </div>
    <div
      style="max-width: 84rem"
      class="box-border mx-auto sm:masonry-2-col md:masonry-2-col lg:masonry before:box-inherit after:box-inherit"
    >
      <button
        style="margin-bottom: 20.3px"
        class="bg-gray-200 break-inside hover:opacity-90"
        v-for="(url, index) in pexelsImages"
        :key="index"
      >
        <img
          :src="url"
          :class="dynamicHeight(index)"
          class="object-cover w-full"
        />
      </button>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
import Divcomponent from "../components/divcomponent.vue";
export default {
  name: "Landing",
  data: function() {
    return {
      default: 0,
      pexelsImages: []
    };
  },
  methods: {
    dynamicHeight(index) {
      index = Number(index);
      if (index % 4 == 0) {
        return "h-top";
      } else if (index % 2 == 0) {
        return "h-72";
      } else {
        return "h-bot";
      }
    },
    async getImages() {
      // GET request for remote image in node.js
      var response = await axios({
        method: "get",
        url: "https://api.pexels.com/v1/search?query=nature&per_page=56",
        headers: {
          Authorization: `Bearer ${process.env.NUXT_ENV_API_KEY}`
        }
      }).then(function(response) {
        return response.data;
      });

      return response;
    },
    customHeight(num) {
      if ([0, 2, 4].includes(num)) {
        return "h-top";
      } else {
        return "h-bot";
      }
    },
    customHeightOne(num) {
      if ([1, 3, 5].includes(num)) {
        return "h-top";
      } else {
        return "h-bot";
      }
    }
  },

  async created() {
    var result = await this.getImages();
    console.log("RES", result);
    for (let data of result.photos) {
      this.pexelsImages.push(data.src.original);
    }
  }
};
</script>
