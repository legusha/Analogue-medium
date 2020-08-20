export default {
  postEdit (store, to, from, next) {
    const isHasId = to.params?.id
    if (isHasId) {
      const radix = 10
      const id = parseInt(to.params.id, radix) || false // if not parse to integer,expected false instead NaN
      const post = store.getters.posts.find(post => post.id === id)
      const isId = id === 0 ? true : id
      if (isId && post) {
        store.commit('setCurrentPost', post)
        next()
        return
      }
      next({ name: 'Posts' })
      return
    }
    next({ name: 'Posts' })
  },
  postCreate (store, to, from, next) {
    const defaultPost = store.getters.newPost
    store.commit('setCurrentPost', defaultPost)
    next()
  }
}
