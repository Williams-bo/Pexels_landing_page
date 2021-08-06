<template>
  <div>
    <div class="bg-hero-pattern bg-cover flex justify-center items-center h-bg">
      <l />
      <lk />
    </div>
    <div>
      <lp />
    </div>
    <div>
      <divcomponent />
    </div>
  </div>
</template>

<script>
import Divcomponent from "../components/divcomponent.vue";
export default {
  name: "Landing",
  components: { divcomponent: Divcomponent }
};
</script>
