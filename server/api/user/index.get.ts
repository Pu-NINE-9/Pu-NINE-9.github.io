import { db } from '~~/server/db'
import { userTable } from '~~/server/db/schema'
import { success } from '~~/server/utils/response'

// 接口必须加async，数据库查询是异步操作
export default defineEventHandler(async () => {
  // 查询user表全部数据
  const userList = await db.select().from(userTable)
  return success(userList)
})
