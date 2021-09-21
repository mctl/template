export default {
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  // disableTypeCheck: true, // 禁用类型检查
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
};
