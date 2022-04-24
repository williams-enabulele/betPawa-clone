<template>
  <div class="container">
    <div class="links">
      <p>Not logged in</p>
      <ul>
        <li><a href="">Join Now</a></li>
        <li>or</li>
        <li><a href="">Login</a></li>
      </ul>
    </div>
    <Tab />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";

export default defineComponent({
  name: "RightSidebar",
  components: {
    Tab,
  },
});
</script>

<style  lang="scss" scoped>
.container {
  width: 100%;
  background: #fefefe;
  border-left: 1px solid #000;
  height: 100%;

  .links {
    display: flex;
    font-size: 12px;
    margin: 0 8px;
    margin-bottom: 15px;
  }

  .links > ul {
    padding: 0 10px;
    display: flex;
    color: aliceblue;
  }
  .links > ul > li {
    margin: 0 2px;
    list-style: none;
  }
  .links > ul > li a {
    text-decoration: none;
  }
}
</style>