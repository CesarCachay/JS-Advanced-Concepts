function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let index = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    // if arr1Item is less than arr2Item
    if (!arr2Item || arr1Item < arr2Item) {
      // if that works then, we are going to push the first item which is arr1Item to the first arg called arr1
      mergedArray.push(arr1Item);
      // After that first push now, arr1Item becomes can be iterated as many items contain the first arg called arr1
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[index];
      index++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([2, 5, 9, 12], [0, 49, 54]));
