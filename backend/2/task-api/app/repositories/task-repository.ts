import Task from '#models/task'

type CreateTaskData = {
    title: string
    description: string
    status: 'pending' | 'completed'
}

type UpdatedTaskData = {
    title?: string
    description?: string
    status?: 'pending' | 'completed'
}

export default class TaskRepository {
    async create(data: CreateTaskData) {
        return await Task.create(data)
    }

    async showAll() {
        return await Task.query().orderBy('id', 'asc')
    }

    async show(id: number) {
        return await Task.findOrFail(id)
    }

    async delete(id: number){
        const task = await Task.findOrFail(id)
        await task.delete()
    }

    async patch(id: number, body: UpdatedTaskData){
        const task = await Task.findOrFail(id)
        task.merge(body)
        await task.save()
        return task
    }
}