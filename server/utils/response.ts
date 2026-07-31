// 成功返回
export function success<T>(data: T, msg = "查询成功") {
  return {
    code: 200,
    data,
    msg
  }
}
