import type { HttpContext } from '@adonisjs/core/http'
import TaskRepository from "../repositories/task-repository.ts";
import taskValidator from '#validators/task'
import taskIdValidator from '#validators/task_id'
import updateTaskValidator from '#validators/update_task';


export default class TasksController {

    taskRepository = new TaskRepository()

    async store({ request, response }: HttpContext) {
        const data = await request.validateUsing(taskValidator)

        const task = await this.taskRepository.create(data)

        return response.status(201).json(task)
    }

    async showAll({ response }: HttpContext) {

        const data = await this.taskRepository.showAll()

        return response.status(200).json(data)
    }

    async delete({ request, response }: HttpContext) {
        const data = await request.validateUsing(taskIdValidator)

        await this.taskRepository.delete(data.params.id)
        return response.status(200).json({message: `Deleted Task no.${data.params.id} Successfully.`})
    }

    async show({ request, response }: HttpContext) {
        const data = await request.validateUsing(taskIdValidator)
        const task = await this.taskRepository.show(data.params.id)

        return response.status(200).json(task)
    }

    async patch({request, response}: HttpContext) {
        const { params, ...body } = await request.validateUsing(updateTaskValidator)
        const task = await this.taskRepository.patch(params.id, body)

        return response.status(200).json(task)
    }
}