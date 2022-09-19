<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="content">
      <Post
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :author="post.author"
        :content="post.content"
        @like="onPostLike">
      </Post>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue"

export default {
  name: 'App',
  components: {
    Post
  },
  data() {
    return {
      posts: [
        { id: 0, author: 'John Foo', title: 'Basic JS', content: 'Possimus est voluptas maiores. Repudiandae odio ut ipsum et. Quam qui quibusdam expedita sed voluptatibus nihil voluptatem. Esse ea et officia exercitationem rem consequatur tempore illo aut. Id amet maiores magni repudiandae. Dolorum perspiciatis dolores aperiam ullam aut adipisci.' },
        { id: 1, author: 'Admin', title: 'Advanced JS', content: 'Illum fugit sint ut qui et voluptates voluptas vel aut. Facere soluta delectus.' },
        { id: 2, title: 'Why JS?', content: 'Accusamus eligendi quisquam quis quibusdam qui. Pariatur placeat voluptatem ea.' },
      ]
    }
  },
  methods: {
    onPostLike(title, like) {
      if (like) {
        console.log(`like on ${title}`)
      } else {
        console.log(`dislike on ${title}`)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
