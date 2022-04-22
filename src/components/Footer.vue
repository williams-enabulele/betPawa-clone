<template>
  <div class="footer-wrapper">
    <div class="cta-container">
      <div class="btn-join">JOIN NOW</div>
    </div>
    <div class="market-menu">
      <ul>
        <li>Football</li>
        <li>BasketBall</li>
        <li>Tennis</li>
      </ul>
    </div>
    <div class="row">
      <ul>
        <li><a href="">Facebook</a></li>
        <li><a href="">Instagram</a></li>
      </ul>
    </div>
    <div class="row">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Log In</a></li>
      </ul>
    </div>
    <div class="row">
      <ul>
        <li><a href="">Join Now</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Terms</a></li>
        <li><a href="">Rules</a></li>
        <li><a href="">Help</a></li>
        <li><a href="">Responsible Gambling</a></li>
      </ul>
    </div>
    <div class="row">
      <router-link to="/" class="brand"> <span>bet</span>Pawa </router-link>
    </div>
    <div class="row">
      <div class="jurisdiction m-5">
        <span class="p-5">
          <img class="img-sm" src="../assets/images/nig.png"
        /></span>
        <span class="p-5">Nigeria</span>
        <span class="p-5">Change</span>
      </div>
    </div>
    <div class="row">
      <p>betPawa.ng is offering licensed sports betting.</p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
export default defineComponent({
  name: "Footer",
  components: {
    MenuIcon,
  },
});
</script>
<style lang="scss" scoped>
.footer-wrapper {
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 12px;
  padding-bottom: 44px;
  background: #252a2d;


  .cta-container {
    padding: 10px 0px;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100vw;
    background: #fff;
  }

  .p-relative {
    position: relative;
  }

  .row {
    text-align: center;
    font-family: GothamNarrow;
  }
  .row > p {
    color: rgb(142, 147, 152);
    font-size: 12px;
  }
  .row > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }


  .row > ul li a {
    text-decoration: none;
    color: #fff;
    margin: 0 8px;
   
  }
  .btn-join {
    width: 105px;
    height: 38px;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    background: #252a2d;
    font-size: 14px;
    cursor: pointer;
  }

  .market-menu {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-items: center;
  }

  .market-menu > ul {
    font-family: GothamNarrow;
    font-size: 12px;
    color: #fff;
    list-style: none;
    display: flex;
    padding: 0;
  }

  .market-menu > ul li {
    margin: 0 7px;
  }

  .img-sm {
    width: 15px;
    padding-top: 5px;
  }
}

.m-5 {
  margin: 15px;
}
.p-5 {
  padding: 5px;
}

.jurisdiction {
  color: #fff;
  text-align: center;
}

.brand {
  font-family: metro;
  color: #9ce800;
  text-decoration: none;
  font-size: 28px;
  letter-spacing: -2px;
}
.brand > span {
  color: #fff;
}
</style>
