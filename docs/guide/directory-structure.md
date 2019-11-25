# 目录结构

我们也遵循 **“约定优于配置”** 的原则，目录结构如下：

```
.
│
├── dist
│   ├── dtc.es.js
│   ├── dtc.es.min.js
│   ├── dtc.umd.js
│   ├── dtc.umd.min.js
│   ├── dtc.util.es.js
│   ├── dtc.util.es.min.js
│   ├── dtc.util.umd.js
│   ├── dtc.util.umd.min.js
│   ├── dtc.vis.es.js
│   ├── dtc.vis.es.min.js
│   ├── dtc.vis.umd.js
│   └── dtc.vis.umd.min.js
│
├── src
│   ├── _base
│   ├── util
│   │   ├── index.js
│   │   ├── array
│   │   │   └── index.js
│   │   ├── object
│   │   │   └── index.js
│   │   ├── common
│   │   │   └── index.js
│   │   ├── stroge
│   │   │   └── index.js
│   │   └── typeCheck
│   │       └── index.js
│   ├── vis
│   │   └── index.js
│   ├── index.js
│   └── .babelrc
│
├── .eslintrc
├── .gitignore
├── config.js
├── CHANGELOG.md
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── rollup.config.js
└── rollup.config.sub.js
```


- `config.js` 在项目构建中一些公共配置
- `rollup.config.js` **rollup**打包配置文件，默认的配置是`es`,你可以通过参数来控制命令的最终执行方式。
- `rollup.config.sub.js` 和 `rollup.config.js` 作用一样，唯一的区别是，该配置项能把打包以后的代码拆分成小的模块。
- `dist/dtc.es.min.js` 以`es`的方式打包的模块，你通过`npm`安装的话默认就是引入的它了。
- `dist/dtc.es.js` 以`es`的方式打包的模块，和 `dist/dtc.es.min.js` 的区别是它没有压缩过，默认也不是引入它。
- `src/inde.js` `src`目录存放的都是我们写的代码，没有经过压缩，并且有详尽的注释。`index.js`是**总入口**

::: warning Note
`dist`目录下的其它文件就不一一介绍了，因为我觉得你看文件的名字就知道它是什么意思了。需要说明的是如果按需引入的话请注意文件名。
:::

::: tip Note
没有介绍的文件或者文件夹就不一一介绍了，毕竟一看就知道什么意思了。
:::
