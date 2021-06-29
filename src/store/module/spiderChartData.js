const spiderChartData = {
  state: () => ({
    // 要让point位于圆心，应该设置的偏移量
    pointOriginalPositionLeft: 271,
    pointOriginalPositionTop: 245,
    // 雷达图中的各个指标的相关量
    qualityAndCategory: [
      {id: 1, quality: 500, category: 1},
      {id: 2, quality: 600, category: 2},
      {id: 3, quality: 880, category: 3},
      {id: 4, quality: 220, category: 4},
      {id: 5, quality: 420, category: 5},
      {id: 6, quality: 905, category: 6},
      {id: 7, quality: 394, category: 7},
      {id: 8, quality: 910, category: 8},
    ]
  }),
}
export default spiderChartData;