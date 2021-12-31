import axios from 'axios'


const baseURL = "https://hagiakinh-api.herokuapp.com";
// const baseURL = "http://127.0.0.1:8000"

const axiosClient = axios.create({
	baseURL: `${baseURL}/api/`,
	headers: {
		'Content-Type': 'application/json',
	},
})

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response: any) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data
	},
	function (error: Error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error)
	}
)

export default axiosClient
