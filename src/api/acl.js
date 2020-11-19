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

// 资源信息
export const getResourceList = (params) => {
	return Fetch({
		url: `/acl/resource/list`,
		method: 'get',
		params
	})
}
// 新增资源信息
export const addResource = (data) => {
	return Fetch({
		url: `/acl/resource/add`,
		method: 'post',
		data
	})
}
// 编辑资源信息
export const updateResource = (data) => {
	return Fetch({
		url: `/acl/resource/update`,
		method: 'post',
		data
	})
}

export const getMenuAcl = (params) => {
	return Fetch({
		url: '/acl/user/permission',
		method: 'get',
		params
	})
}

export const delRole = (id) => {
	return Fetch({
		url: '/acl/role/delete',
		method: 'post',
		data: {
			id
		}
	})
}


export const updateRole = (data) => {
	return Fetch({
		url: '/acl/role/update',
		method: 'post',
		data
	})
}


export const RolePermission = (id) => {
	return Fetch({
		url: `/acl/role/permission/${id}`,
		method: 'get'
	})
}