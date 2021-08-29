import { IArticle } from './interface';

export const articles: IArticle[] = [
  {
    name: '使用装饰器来模拟请求延迟和请求进度更新',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/decorator-in-angular.pdf',
    date: '2021-08-28',
    description: '通过装饰器来提高代码复用能力',
  },
  {
    name: '在 Angular 项目中实现 Data Mocking 的几种方式',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/serveral-data-mocking-methods-in-angular.pdf',
    date: '2021-07-03',
    description: '用好依赖注入',
  },
  {
    name: '求两个偏序集的最大交集',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/posets-1.pdf',
    date: '2021-05-22',
    description: '使用排序和双指针技巧．',
  },
  {
    name: 'Git 原理',
    file: 'https://markdown-blog-phi.vercel.app/posts/git-internals',
    date: '2021-05-18',
    description: '一切皆 objects.',
  },
  {
    name: '使用贝叶斯方法进行推断',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/bayesian-demo-1.pdf',
    date: '2021-04-10',
    description: '学习和理解朴素贝叶斯方法．',
  },
  {
    name: '推荐系统初探（二）',
    description: '进行推荐并且评估模型的性能．',
    date: '2021-03-29',
    file: 'https://markdown-blog-phi.vercel.app/posts/recommender-system-2',
  },
  {
    name: '推荐系统初探（一）',
    description: '找出前 n 个最相近的用户．',
    date: '2021-03-28',
    file: 'https://markdown-blog-phi.vercel.app/posts/recommender-system-1',
  },
  {
    name: '拥抱 tailwindcss',
    file: 'https://markdown-blog-phi.vercel.app/posts/welcome-tailwindcss',
    date: '2021-03-22',
    description: '本站已经完成了到 tailwindcss 的改造．',
  },
  {
    name: '实现 Pretty URL',
    file: 'https://markdown-blog-phi.vercel.app/posts/implement-pretty-url',
    description: '我为这个站点实现 Pretty URL.',
    date: '2021-03-17',
  },
  {
    name: '服务器被入侵',
    file: 'https://markdown-blog-phi.vercel.app/posts/measures-after-an-abuse-warning',
    description: '应对举措以及收获．',
    date: '2021-03-15',
  },
  {
    name: '用 Markdown 写作',
    description: '重拾 Markdown.',
    date: '2021-03-13',
    file: 'https://markdown-blog-phi.vercel.app/posts/writing-in-markdown',
  },
  {
    name: 'nginx -s stop',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/nginx-stop.pdf',
    date: '2021-03-10',
    description: '博客架构升级改造．',
  },
  {
    name: 'R 软件 macOS 中文绘图',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/r-cjk-font-rendering.pdf',
    date: '2021-03-07',
    description: '解决 R 在 macOS 下中文乱码问题．',
  },
  {
    name: '缓存配置案例',
    date: '2021-03-05',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/proxy-case-study-1.pdf',
    description: '通过一个案例分析缓存失效原因．',
  },
  {
    name: '用 Celery 实现多台设备的协同工作',
    date: '2021-02-19',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/celery-intro.pdf',
    description: '用 Celery 使多台设备协同工作．',
  },
  {
    name: '向量函数的导数以及神经网络',
    date: '2021-02-07',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/vector-valued-function.pdf',
    description: '向量函数和雅克比矩阵．',
  },
  {
    name: '主成分分析教程',
    date: '2021-02-03',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/pca-tutorial.pdf',
    description: '从线代角度讲解主成分分析．',
  },
  {
    name: '统计学习方法的学习总结',
    date: '2021-02-02',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/statistical-learning-methods.pdf',
    description: '统计学习三要素、正则化以及常见学习策略．',
  },
  {
    name: '三维物体的投影计算',
    date: '2021-01-30',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/cube.pdf',
    description: '画出三维物体被看到的样子．',
  },
  {
    name: '几个向量化计算的小技巧',
    date: '2021-01-27',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/vectorization-computing-intro.pdf',
    description: '向量化计算能大幅提升Flops．',
  },
  {
    name: '将多个矩阵方程的求解并行化',
    date: '2021-01-27',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/parallelization-of-solving-matrix-equations.pdf',
    description: '重复利用已有的算力同时求解多个矩阵方程．',
  },
  {
    name: '用 GPU 加速运行《生命游戏》',
    date: '2021-01-23',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/automata-cuda.pdf',
    description: '在 GPU 上实现元胞自动机的一个例子．',
  },
  {
    name: '神经网络教程',
    date: '2021-01-22',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/neuralnet.pdf',
    description: '梯度下降和误差逆传播其实就是复合函数的求导．',
  },
  {
    name: '支持向量机的简单实现',
    date: '2021-01-19',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/svm-intro.pdf',
    description: '从线性分类器到核方法．',
  },
  {
    name: '基于 LSA 的文本索引技术初探',
    date: '2021-01-17',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/semantic-indexing.pdf',
    description: '利用奇异值分解技术实现更加准确的文本检索．',
  },
  {
    name: '在 GPU 上实现遗传算法',
    date: '2021-01-17',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/gpu-tsp.pdf',
    description: '同时演化每一个个体，在 GPU 中这不难做到．',
  },
  {
    name: 'SVD 方法应用于矩阵近似',
    date: '2021-01-13',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/svd-matrix-approximation.pdf',
    description: '初步理解奇异值分解技术．',
  },
  {
    name: '并行化计算尝试',
    date: '2021-01-12',
    file: 'https://blog-data-nextjs.vercel.app/api/pdfs/gpu-accel.pdf',
    description: '直观感受并行化计算加速效果．',
  },
  {
    name: 'DP: 以 House Robber 问题为例',
    date: '2020-08-30',
    file: 'https://markdown-blog-phi.vercel.app/posts/dynamic-programming-intro',
    description: '动规就是计算结果的复用．',
  },
  {
    name: 'Maximum Subarray 问题',
    date: '2020-08-23',
    file: 'https://markdown-blog-phi.vercel.app/posts/solving-maximum-subarray',
    description: '不妨先转化之．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/merge-two-sorted-array',
    name: '合并两个已排序数组',
    date: '2020-08-22',
    description: '为一个简单的问题找到多种解法．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/longest-common-prefix-n-ary-tree-solution',
    name: 'LCP 问题与数据结构',
    date: '2020-08-18',
    description: '算法和数据结构之间千丝万楼的关系．',
  },
  {
    name: '图片旋转问题',
    file: 'https://markdown-blog-phi.vercel.app/posts/leetcode-rotate-image',
    date: '2020-08-17',
    description: '原地操作就可以不用申请额外的内存了．',
  },
  {
    name: '生成括号组合',
    file: 'https://markdown-blog-phi.vercel.app/posts/generate-parentheses-base-on-desicion-procedures',
    date: '2020-08-14',
    description: '可能是一种直观的解法．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/4sum-problem-branch-and-bound-solution',
    name: '4Sum 问题分支定界求解',
    date: '2020-08-11',
    description: '4Sum 问题和分支定界思想．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/implementing-a-rubkis-cube-in-mathematica',
    name: '在 Mathematica 中模拟魔方',
    date: '2020-05-09',
    description: '魔方的可视化．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/eight-queen-problem',
    name: '8 皇后问题：启发式解法',
    date: '2020-04-16',
    description: '解方程、遗传算法和启发式解法．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/linux-tools-recommendation-1',
    name: 'Linux 命令行工具推荐',
    date: '2020-04-14',
    description: '命令行界面操作起来是非常高效和方便的．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/sudoku-mathematical-formulation',
    name: '解数独与解方程',
    date: '2020-04-13',
    description: '解数独和解方程有什么关系？',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/openssl-certificates',
    name: 'TLS 证书：签发与验证',
    date: '2020-04-08',
    description: '几乎找不到另外一种比 HTTP 更广泛的协议．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/symlink-vs-harlink',
    name: '符号链接和硬链接',
    date: '2020-04-01',
    description: '什么时候用硬链接？什么时候用软连接？',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/traceroute-introduction',
    name: 'traceroute 介绍：原理和实验',
    date: '2020-03-30',
    description: '打印本机到目标主机之间的节点．',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/cdn-deployment',
    date: '2020-03-25',
    name: 'CDN 部署过程：原理和实践',
    description: '尝试部署了一下 CloudCone 的 CDN.',
  },
  {
    file: 'https://markdown-blog-phi.vercel.app/posts/correct-time-in-cloudcone-vps',
    name: '修复 CloudCone VPS 时间同步问题',
    date: '2020-03-18',
    description: '一步步发现问题并且解决问题',
  },
  {
    name: 'Crontab 案例',
    file: 'https://markdown-blog-phi.vercel.app/posts/crontab-tutorial',
    description: 'crontab 用来设置定时任务',
    date: '2020-03-16',
  },
].map((item) => ({
  title: item.name,
  created: 0,
  modified: 0,
  description: item.description,
  url: item.file,
  date: item.date,
}));
