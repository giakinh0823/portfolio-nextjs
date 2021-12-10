import axiosClient from './axios-client'

export const topicApi = {
	getAll() {
		return axiosClient.get('/topics')
	},
}
