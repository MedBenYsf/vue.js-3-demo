<template>
  <h1>Posts list! </h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h4>{{ post.id }}</h4>
      <p>{{ post.title }}</p>
    </li>
  </ul>
</template>

<script>
    import axios from 'axios';

    export default {
      name: 'Post',
      data: function() {
        return {
          posts: []
        }
      },
      mounted () {
        axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            this.posts = response.data;
          })
      }
    }
</script>

<style>
</style>
