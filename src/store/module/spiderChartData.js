const spiderChartData = {
  state: () => ({
    // 要让point位于圆心，应该设置的偏移量
    pointOriginalPositionLeft: 271,
    pointOriginalPositionTop: 245,
    // 雷达图中的各个指标的相关量
    qualityAndCategory: [
      {id: 1, quality: 850, category: 1},
      {id: 2, quality: 745, category: 2},
      {id: 3, quality: 690, category: 3},
      {id: 4, quality: 858, category: 4},
      {id: 5, quality: 754, category: 5},
      {id: 6, quality: 658, category: 6},
      {id: 7, quality: 900, category: 7},
      {id: 8, quality: 599, category: 8},
    ],
    colorSpider: [
      {id: 1, quality: 530, category: 1},
      {id: 2, quality: 520, category: 2},
      {id: 3, quality: 500, category: 3},
      {id: 4, quality: 377, category: 4},
      {id: 5, quality: 420, category: 5},
      {id: 6, quality: 490, category: 6},
      {id: 7, quality: 350, category: 7},
      {id: 8, quality: 298, category: 8},
    ]
  }),
}
export default spiderChartData;