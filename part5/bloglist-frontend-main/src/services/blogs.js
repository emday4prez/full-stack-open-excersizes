import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
let config

const setToken = newToken => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token },
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl, config)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (objectToUpdate) => {
  const request = await axios.put(`${baseUrl}/${objectToUpdate.id}`, objectToUpdate, config)
  return request.then(response => response.data)
}

export default { update, create, getAll, setToken }