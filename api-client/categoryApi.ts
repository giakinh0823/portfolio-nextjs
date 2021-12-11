import axiosClient from './axios-client'

export const categoryApi = {
	getAll() {
		return axiosClient.get('/categorys')
	},
}
