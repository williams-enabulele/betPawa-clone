<template>
  <div class="sub-menu">
            <ul>
              <li><router-link to="/signup">JOIN NOW</router-link></li>
              <li><router-link to="/signin">LOGIN</router-link></li>
              <li><router-link to="/deposit">DEPOSIT</router-link></li>
              <li><router-link to="/why-join">WHY JOIN?</router-link></li>
              <li><router-link to="/help">HELP</router-link></li>
              <li><router-link to="">DOWNLOAD APP</router-link></li>
            </ul>
          </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({
    name: "SubMenu"
})
</script>

<style>
.sub-menu > ul {
  list-style: none;
  padding: 0;
  text-align: left;
  font-family: GothamNarrow;
  line-height: 15px;
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}

.sub-menu > ul > li {
  padding: 16px 16px 16px 18px;
  border-bottom: 1px solid #f4f5f0;
  cursor: pointer;
  user-select: none;
}

.sub-menu > ul > li > a {
  color: #252a2d !important;
}
</style>