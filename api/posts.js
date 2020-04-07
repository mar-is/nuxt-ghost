import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '703166c75e05d18c9d1883a1a7',
  version: 'v3'
})

export async function getAllPosts() {
  try {
    const response = await api.posts.browse({ limit: 'all' })
    console.log(response)
    return response
  } catch (error) {
    return error
  }
}
