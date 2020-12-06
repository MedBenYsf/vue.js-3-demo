<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{name: 'Home'}">Home</router-link>
    <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'Posts'}">Post
            <span class="sr-only">(current)</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
        </li>
        </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>

    export default {
    name: 'Menu'
    }
</script>

<style>
</style>
