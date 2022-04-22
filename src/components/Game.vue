<template>
  <div class="container">
    <div class="headline">
      <div class="wrap">
        <span><i class="fas fa-bolt"></i></span>
        pawaBoost
      </div>
      <i class="fa-solid fa-circle-info"></i>
    </div>
    <div class="date">
      <span></span>
      <span></span>
    </div>
    <div class="teams">
      <span></span>
      <span></span>
    </div>
    <div class="category"></div>
    <div class="market"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "Game",
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.wrap > span {
  margin-right: 10px;
}

.headline {
  height: 46px;
  background: #f4f5f0;
  display: flex;
  border-top: 1px solid #000;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-size: 22px;
}
</style>