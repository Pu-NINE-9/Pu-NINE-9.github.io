// 用户类型，前后端统一约束
export interface User {
  id: number
  name: string
  age: number
}

// 后端统一返回格式
export interface ApiRes<T> {
  code: number
  data: T
  msg: string
}

// 封装用户相关接口请求
export const useUserAPI = () => {
  // TODO: 获取全部用户
  const getUserList = async () => {
    return await $fetch<ApiRes<User[]>>('/api/user')
  }

  return {
    getUserList,
  }
}
