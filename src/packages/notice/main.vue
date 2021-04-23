<template>
  <div>
    <div v-for="(item, index) in lists">
      <div>{{item.title}}</div>
      <div>{{item.content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notice',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    add (_notice) {
      let id = _notice.id = +new Date()
      this.lists.push(_notice)
      const duration = _notice.duration || 1
      setTimeout(() => {
        this.remove(id)
      }, duration * 1000)
    },
    remove(id) {
      for (let i = 0; i< this.lists.length; i++) {
        if (this.lists[i].id === id) {
          this.lists.splice(i, 1)
          break;
        }
      }
    }
  }
}
</script>