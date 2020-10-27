import axios from 'axios'

const baseURL = process.env.REACT_APP_URL_API

let remoteUser = ""

const service = axios.create({
	baseURL,
	timeout: 50000
})



service.interceptors.request.use(config => {
	if(remoteUser){
		config.headers['remoteUser'] = remoteUser ? remoteUser : "";
	}
	return config
}, err => {
	Promise.reject(error)
})

service.interceptors.response.use(
	response => response.data,
	err => {
		return Promise.reject(err)
	}
)

export default service;

