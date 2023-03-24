<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/Home/MyNews" href="./home-news.html">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/Home/MyMessage" href="./home-message.html">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>

<style>
</style>