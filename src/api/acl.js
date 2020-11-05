import Fetch from './request'

export const getUser = (params) => {
	return Fetch({
		url: '/acl/user/rolelist',
		method: 'get',
		params
	})
}

export const userAdd = (data) => {
	return Fetch({
		url: '/acl/user/role/add',
		method: 'post',
		data
	})
}

export const userDetail = (id, params) => {
	return Fetch({
		url: `/acl/user/detail/${id}`,
		method: 'get',
		params
	})
}

export const getRoleList = (params) => {
	return Fetch({
		url: '/acl/role/list',
		method: 'get',
		params
	})
}

export const roleAdd = (data) => {
	return Fetch({
		url: '/acl/role/add',
		method: 'post',
		data
	})
}
export const roleDetail = (id, params) => {
	return Fetch({
		url: `/acl/role/detail/${id}`,
		method: 'get',
		params
	})
}

export const getResourceList = (params) => {
	return Fetch({
		url: `/acl/resource/list`,
		method: 'get',
		params
	})
}

export const getMenuAcl = (params) => {
	return Fetch({
		url: '/acl/user/permission',
		method: 'get',
		params
	})
}