import axios from 'axios'
import get from 'lodash/get'

const getAllHero = () => (
  axios.get('https://hahow-recruit.herokuapp.com/heroes')
    .then((res) => (res.status === 200 ? get(res, 'data', []) : { message: 'cannot get hero', status: res.status }))
    .catch((err) => ({ message: 'cannot get hero', status: err.status }))
)

const getHeroById = (heroId) => (
  axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
    .then((res) => res)
    .catch((err) => err)
)

const patchHero = (heroId, values) => (
  axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, values)
    .then((res) => res)
    .catch((err) => err)
)

export {
  getAllHero,
  getHeroById,
  patchHero,
}
