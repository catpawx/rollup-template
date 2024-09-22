// rollup.config.js 配置文件
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/devLib.umd.js', // 输出文件
      format: 'umd', // 输出格式
      name: 'DevLib', // 全局变量名
      sourcemap: true,
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs()],
}
