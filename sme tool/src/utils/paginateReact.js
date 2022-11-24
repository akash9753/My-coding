const getPageIndexOptions = function (
  maxNumberOfOptions,
  pageIndex,
  pageCount,
  pageSize
) {
  const options = [];
  const pivot = Math.ceil(maxNumberOfOptions / 2);
  const lastPageIndex = Math.ceil(pageCount/pageSize);

  if (lastPageIndex <= maxNumberOfOptions) {
    while (options.length < lastPageIndex) options.push(options.length + 1);
  } else if (pageIndex < pivot) {
    while (options.length < maxNumberOfOptions)
      options.push(options.length + 1);
  } else if (pageIndex > lastPageIndex - pivot) {
    while (options.length < maxNumberOfOptions)
      options.unshift(lastPageIndex - options.length + 1);
  } else {
    for (
      let i = pageIndex - (pivot - 1);
      options.length < maxNumberOfOptions;
      i++
    ) {
      options.push(i + 1);
    }
  }
  return options;
};

export default getPageIndexOptions;
