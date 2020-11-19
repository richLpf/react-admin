import axios from 'axios'

const baseURL = process.env.REACT_APP_URL_API

let remoteUser = "dev"

const service = axios.create({
	baseURL,
	timeout: 50000
})

service.interceptors.request.use(config => {
	if(remoteUser){
		config.headers['remote_user'] = remoteUser ? remoteUser : "dev";
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

