<template>
  <ul class="tab-menu">
    <li class="title" :class="{ active: isActive }" @click="changeTab()">
      Sport
      <span><i class="fa fa-futbol" aria-hidden="true"></i> 0</span>
    </li>
    <li class="title" :class="{ active: !isActive }" @click="changeTab()">
      Virtual
      <span><i class="fa fa-television" aria-hidden="true"></i>0</span>
    </li>
  </ul>

  <div class="flex" v-if="isActive">
    <label class="label">Booking code</label>
    <div class="form">
      <input type="text" placeholder="Enter booking code" />
      <button class="btn-action">LOAD</button>
    </div>
    <p class="block">Betslip is empty</p>
    <span class="imgsize"> <img src="..\assets\images\empty.png" /></span>
    <button class="btn-full">LEARN HOW TO PLACE BET</button>
  </div>
  <div class="flex" v-if="!isActive">
    <p class="block">Betslip is empty</p>
    <img src="..\assets\images\empty.png" />
    <button class="btn-full">LEARN HOW TO PLACE BET</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Tab",

  data() {
    return {
      isActive: true,
    };
  },

  methods: {
    changeTab() {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style lang="scss" scoped>
.tab-menu {
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  user-select: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tab-menu > li {
  font-size: 14px;
  border-top: 1px solid #f4f5f0;
  width: 100%;
  padding: 15px 0;
}

.tab-menu > li > span {
  padding: 5px;
  background: #e6e7e2;
}

.tab-menu > li > span > i {
  margin-right: 5px;
}

.form {
  display: flex;
  max-width: 100%;
  white-space: nowrap;
  margin: 0 15px;
}

.label {
  display: flex;
  align-items: flex-start;
  padding: 15px 15px;
}

.active {
  background: #f4f5f0;
}

p {
  display: block;
}

input[type="text"] {
  width: 100%;
  padding: 8px 15px;
  margin: 0;
}

.btn-action {
  padding: 10px 0px;
  border: 0;
  background: #252a2d;
  color: #fff;
  width: 79px;
  font-family: Gotham;
  margin-left: 5px;
}

.btn-full {
  max-width: 100%;
  padding: 10px 9px;
  border: 0;
  background: #252a2d;
  color: #fff;
  margin-right: 20px;
  font-family: Gotham;
  margin: 20px 10px;
}

.flex {
  display: flex;
  flex-direction: column;
}

img {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}

span.imgsize {
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>
