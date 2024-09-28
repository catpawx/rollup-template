import { add, addAsync } from './count'
import type { Method } from './type'
// 入口文件
const test: Method = 'get'
console.log('🚀🚀🚀======>>>test', test)

const res = add(1, 2)
console.log('🚀🚀🚀======>>>add', res)

const testAsync = async () => {
  const res = await addAsync(1, 2)
  console.log('🚀🚀🚀======>>>testAsync', res)
}

testAsync()
