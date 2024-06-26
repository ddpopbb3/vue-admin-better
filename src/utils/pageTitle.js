import { title } from '@/config'

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  if (pageTitle) return `${pageTitle}-${title}`
  return `${title}`
}
