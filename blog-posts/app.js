const { createApp } = Vue

createApp({

  data() {
    return {
      newTitle: '',
      newContent: '',
      posts: [
        {
          title: "My First Post",
          content: "Welcome to my Vue blog!"
        }
      ]
    }
  },

  methods: {
    addPost() {

      if (!this.newTitle || !this.newContent) return

      this.posts.unshift({
        title: this.newTitle,
        content: this.newContent
      })

      this.newTitle = ''
      this.newContent = ''
    }
  }

}).mount('#app')