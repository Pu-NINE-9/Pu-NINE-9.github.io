<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { PieChart } from 'echarts/charts'
import {
  LegendComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import * as echarts from 'echarts/core'

echarts.use([
  PieChart,
  LegendComponent,
  CanvasRenderer
])

interface ChartDataItem {
  name: string
  value: number
  color?: string
}

const props = defineProps<{
  data: ChartDataItem[]
  title?: string
  radius?: [string, string]
}>()

const chartRef = ref<HTMLDivElement | null>(null)
let chartInstance: echarts.ECharts | null = null

const option = computed(() => ({
  legend: {
    orient: 'vertical',
    right: 10,
    top: 'center',
    textStyle: {
      color: '#ccc'
    }
  },
  series: [
    {
      name: props.title || '',
      type: 'pie',
      radius: props.radius || ['40%', '70%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 4,
        borderColor: '#0f3460',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold',
          color: '#ffd700'
        }
      },
      labelLine: {
        show: false
      },
      data: props.data.map(item => ({
        ...item,
        itemStyle: item.color ? { color: item.color } : undefined
      }))
    }
  ]
}))

const initChart = () => {
  if (chartRef.value && !chartInstance) {
    // 使用 requestAnimationFrame 延迟初始化，避免强制重排
    requestAnimationFrame(() => {
      if (chartRef.value && !chartInstance) {
        chartInstance = echarts.init(chartRef.value)
        chartInstance.setOption(option.value)
      }
    })
  }
}

const updateChart = () => {
  if (chartInstance) {
    requestAnimationFrame(() => {
      chartInstance?.setOption(option.value)
    })
  }
}

const handleResize = () => {
  // 使用 requestAnimationFrame 延迟 resize，避免强制重排
  requestAnimationFrame(() => {
    chartInstance?.resize()
  })
}

watch(() => props.data, updateChart, { deep: true })

onMounted(() => {
  initChart()
  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance?.dispose()
})
</script>

<template>
  <div ref="chartRef" class="pie-chart"></div>
</template>

<style scoped>
.pie-chart {
  width: 100%;
  height: 200px;
}
</style>