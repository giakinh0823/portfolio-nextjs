import { Param } from '../models'
import axiosClient from './axios-client'

export const blogApi = {
	getAll(params: Param) {
		return axiosClient.get('/blogs', { params })
	},
	getBySlug(slug: string) {
		return axiosClient.get(`/blogs/${slug}`)
	},
	createBlog(data: any) {
		return axiosClient.post('/blogs', data)
	}
}
