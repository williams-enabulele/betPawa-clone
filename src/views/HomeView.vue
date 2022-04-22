<template>
  <div class="container">
    <img
      src="../assets/images/banner1.jpg"
      class="img"
      alt="promotion-banner"
    />
  </div>
  <game/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Game from "../components/Game.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    "game": Game
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
