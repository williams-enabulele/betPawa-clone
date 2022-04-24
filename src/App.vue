<template>
  <div>
    <bpheader />
    <div class="spaced">
      <bpsidebar class="left" />
      <router-view />
      <bprightbar class="right" />
    </div>

    <bpfooter />
  </div>
</template>

<style lang="scss">
@import "./assets/css/main.css";
#app {
  font-family: Gotham, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media only screen and (max-width: 600px) {
  .right,
  .left {
    display: none !important;
  }
  .spaced {
    display: grid;
    grid-template-columns: 100%;
  }
}
@media only screen and (min-width: 600px) {
  .right,
  .left {
    display: block;
  }
  .spaced {
    display: grid;
    grid-template-columns: 1.2fr 4fr 2fr;
    border-bottom: 1px solid #000;
  }
}
</style>
<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/Sidebar.vue";
import RightSideBarVue from "./components/RightSideBar.vue";

export default {
  name: "app",
  components: {
    bpheader: Header,
    bpfooter: Footer,
    bpsidebar: SideBar,
    bprightbar: RightSideBarVue,
  },
};
</script>
