<template>
  <div class="fixed p-relative">
    <div class="mobile-nav">
      <span @click="openMenu()"><i class="fa-solid fa-bars"></i> Sport</span>
      <span>
        <ul>
          <li><router-link to="">Virtual</router-link></li>
          <li><router-link to="">Jackpot</router-link></li>
          <li><router-link to="">Games</router-link></li>
        </ul>
      </span>
      <span>
        <ul>
          <li @click="isClicked = !isClicked">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <li @click="isMobileMenu = !isMobileMenu">
            <a><i class="fa-solid fa-user-large"></i>Menu</a>
            <SubMenu v-if="isMobileMenu" />
          </li>
          <li>
            <router-link to=""
              ><span><i class="fa-solid fa-futbol"></i>0</span></router-link
            >
          </li>
        </ul>
      </span>
    </div>
    <div class="search" v-if="isClicked">
      <input type="search" placeholder="" />
      <button class="btn">Search</button>
    </div>
  </div>
  <div class="container">
    <div class="navbar p-relative">
      <router-link to="/" class="brand"> <span>bet</span>Pawa </router-link>
      <div class="input">
        <input
          type="search"
          placeholder="Search for events and tournaments..."
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <ul class="navs">
        <li class="nav-item">
          <router-link to="/signin">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link router-link to="/signup">
            <div class="btn">JOIN NOW</div>
          </router-link>
        </li>
        <li class="nav-item p-relative menu">
          <div class="center" @click="currentState = !currentState">
            <AccountIcon />MENU
          </div>
          <SubMenu v-if="currentState" />
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar p-relative" v-if="isMenu">
    <bpSidebar />
  </div>
</template>

<style lang="scss" scoped>


.navbar > ul {
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar > ul > li {
  margin-right: 15px;
}

.navbar > ul > li a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

.navs {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 8px 12px;
  line-height: 16px;
  border-radius: 0px;
  text-decoration: none solid rgb(37, 42, 45);
  display: inline-block;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  border: 0px none rgb(37, 42, 45);
  margin: 0px;
  cursor: pointer;
  user-select: none;
  color: rgb(37, 42, 45);
  background-color: rgb(156, 232, 0);
}

.nav-item {
  color: #fff;
}

.brand {
  font-family: metro;
  color: #9ce800;
  text-decoration: none;
  font-size: 28px;
  letter-spacing: -2px;
  user-select: none;
  cursor: pointer;
}

.brand > span {
  color: #fff;
}

::placeholder {
  width: 100%;
  color: rgb(99, 99, 99);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.p-relative {
  position: relative;
}

.sub-menu {
  font-size: 12px;
  width: 222px;
  background: #fff;
  position: absolute;
  right: -16px;
  top: 38px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 999;
}

.input > i {
  margin-right: 15px;
}

input[type="search"] {
  width: 400px;
  padding: 10px 45px 10px 10px;
  border: 0;
}

.fixed {
  background: #252a2d;
  width: 100%;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.212);
}

.mobile-nav {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: #f4f5f0;
  text-transform: uppercase;
  width: 100%;
  padding: 0 10px;
  font-size: 11px;
}

.mobile-nav > span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-nav > span:nth-child(1) > i {
  margin-right: 5px;
}

.mobile-nav > span:nth-child(3) > ul > li > a > i {
  margin-right: 5px;
}

.mobile-nav > span > ul {
  display: flex;
  list-style: none;
  color: #f4f5f0;
  flex-wrap: nowrap;
  padding: 0;
  justify-content: space-between;
  align-items: center;
}

.mobile-nav > span > ul > li {
  margin-right: 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}

.mobile-nav > span > ul > li > a > span {
  margin-right: 5px;
  background: #e6e7e2;
  padding: 5px 5px;
  color: #252a2d;
}

.mobile-nav > span > ul > li > a > span > i {
  margin-right: 5px;
}

a {
  color: #f4f5f0;
}

.search {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 15px;
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
  max-width: 100%;
}

.sidebar {
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  background: rgb(243, 243, 243);
  z-index: 500;
  overflow-y: scroll;
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}

.img {
  max-width: 100%;
  margin: 0 10px;
}

@media only screen and (max-width: 600px) {
  .input,
  .menu {
    display: none;
  }

  .fixed,
  .sidebar {
    display: block;
  }

  .container {
    //padding-left: 16px;
    padding-right: 16px;
    background: #252a2d;
    height: 77px;
    position: relative;
    max-width: 100%;
    align-items: center;
  }
  .navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 18px;
}
}

@media only screen and (min-width: 600px) {
  .input {
    display: flex;
    background: #fff;
    justify-content: center;
    align-items: center;
  }

  .menu {
    display: block;
  }

  .fixed,
  .sidebar {
    display: none;
  }
  .container {
    padding-left: 16px;
    padding-right: 16px;
    background: #252a2d;
    height: 77px;
    position: relative;
    max-width: 100%;
    align-items: center;
  }

  .navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
}
</style>

<script>
import { defineComponent } from "vue";
import AccountIcon from "vue-material-design-icons/Account.vue";
import SideBar from "./Sidebar.vue";
import SubMenu from "./SubMenu.vue";

export default defineComponent({
  name: "Header",
  components: {
    AccountIcon,
    bpSidebar: SideBar,
    SubMenu,
  },

  data() {
    return {
      currentState: false,
      isClicked: false,
      isMenu: false,
      isMobileMenu: false,
    };
  },

  methods: {
    isOpen() {
      this.opened != this.opened;
    },
    openMenu() {
      this.isMenu = !this.isMenu;
    },
  },
});
</script>
