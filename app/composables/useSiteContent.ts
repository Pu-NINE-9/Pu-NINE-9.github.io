import { useI18n } from 'vue-i18n'
import { works } from '../data/works'

export function useSiteContent() {
  const { t, te, locale } = useI18n()
  const projects = computed(() =>
    works.map((work) => ({
      ...work,
      title: te(`works.${work.id}.title`) ? t(`works.${work.id}.title`) : work.title,
      description: te(`works.${work.id}.description`) ? t(`works.${work.id}.description`) : work.description,
      content: work.content?.map((text, i) =>
        te(`works.${work.id}.content${i + 1}`) ? t(`works.${work.id}.content${i + 1}`) : text
      )
    }))
  )
  const copy = (zh: string, en: string, ja?: string, ko?: string) =>
    ({ 'zh-CN': zh, 'en-US': en, 'ja-JP': ja ?? en, 'ko-KR': ko ?? en })[locale.value] ?? zh
  return { projects, t, locale, copy }
}
