import axiosClient from './axios-client'

export const tagApi = {
	getAll() {
		return axiosClient.get('/tags')
	},
}
