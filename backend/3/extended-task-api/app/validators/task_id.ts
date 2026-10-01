import vine from '@vinejs/vine'

const TaskIdValidator = vine.create({
    params: vine.object({
        id: vine.number(),
    }),
})

export default TaskIdValidator