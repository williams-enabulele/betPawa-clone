<template>
  <div class="container">
    <img
      src="../assets/images/banner1.jpg"
      class="img"
      alt="promotion-banner"
    />
    <QuickLinks/>
    <game />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "../components/Game.vue";
import QuickLinks from "../components/QuickLinks.vue"

export default defineComponent({
  name: "HomeView",
  components: {
    game: Game,
    QuickLinks
  },

  data(){
    return {

    }
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.img {
  max-width: 100%;
  margin: 0 10px;
}
</style>
