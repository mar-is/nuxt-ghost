import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'https://gstdemo.themeix.com',
  key: 'ba9e8ab17de12aff30607f9f64 ',
  version: 'v3'
})

export async function getAllPosts() {
  try {
    const response = await api.posts.browse({ limit: 'all' })
    return response
  } catch (error) {
    return error
  }
}
