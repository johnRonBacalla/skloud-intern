import vine from '@vinejs/vine'

const UpdateTaskValidator = vine.create({
    params: vine.object({
        id: vine.number(),
    }),
    title: vine.string().optional(),
    description: vine.string().optional(),
    status: vine.enum(['pending', 'completed']).optional(),
})

export default UpdateTaskValidator