import vine from '@vinejs/vine'

const TaskValidator = vine.create(
    vine.object({
        title: vine.string(),
        description: vine.string(),
        status: vine.enum(['pending', 'completed']),
    })
)

export default TaskValidator