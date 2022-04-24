<template>
<div class="quick-links">
    <ul>
        <li><a router-link to=""><span>Icon</span>virtual</a></li>
        <span></span>
        <li><a router-link to=""><span>Icon</span>games</a></li>
          <span></span>
        <li><a router-link to=""><span>Icon</span>jackpot</a></li>
          <span></span>
        <li><a router-link to=""><span>Icon</span>pawa6</a></li>
    </ul>
</div>
  
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    name: "QuickLinks"
})
</script>

<style>

.quick-links>ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 20px 20px;
    margin: 0;
    text-transform: uppercase;
}

.quick-links>ul>span{
    border-right: 1px solid #000;
    height: 30px;
}

.quick-links>ul>li>a>span{
    display: block;
}

@media only screen and (max-width: 600px) {
  .quick-links {
    display: block;
  }
}
@media only screen and (min-width: 600px) {
  .quick-links {
    display: none;
  }
}
</style>