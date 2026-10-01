import Task from '#models/task'

type CreateTaskData = {
    title: string
    description: string
    status: 'pending' | 'completed'
    userId: number
}

type UpdatedTaskData = {
    title?: string
    description?: string
    status?: 'pending' | 'completed' 
    userId?: number
}

export default class TaskRepository {
    private findOwned(id: number, userId: number) {
        return Task.query()
        .where('id', id)
        .where('userId', userId)
        .firstOrFail()
    }

    async create(data: CreateTaskData) {
        return await Task.create(data)
    }

    async showAll(userId: number) {
        return await Task.query().where('userId', userId).orderBy('id', 'asc')
    }

    async show(id: number, userId: number) {
        return this.findOwned(id, userId)
    }

    async delete(id: number, userId: number){
        const task = await this.findOwned(id, userId)

        await task.delete()
    }

    async patch(id: number, body: UpdatedTaskData, userId: number){
        const task = await this.findOwned(id, userId)

        task.merge(body)
        await task.save()
        return task
    }
}