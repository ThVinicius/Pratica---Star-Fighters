import joi from 'joi'

const create = joi.object({
  firstUser: joi.string().trim().required(),
  secondUser: joi.string().trim().required()
})

export default { create }
