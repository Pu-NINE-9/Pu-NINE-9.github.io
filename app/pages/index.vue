<template>
    <el-button @click="handleClick">button</el-button>
    <div>{{ userData ? userData : 'data right here' }}</div>
</template>

<script setup lang="ts">
import { useUserAPI } from '~/composables/useUserApi/index'

// 直接调用封装好的请求，无需导入
const { getUserList } = useUserAPI()
const userData = ref<any>(null)

const handleClick = async () => {
    const { code, data, msg } = await getUserList()
    console.log(code, data, msg)
    ElMessage.success(msg)
    userData.value = data
}

</script>
