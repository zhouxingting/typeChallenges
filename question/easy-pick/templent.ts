type MyPick<T, K extends keyof T> = {
  [p in K]: T[p];
};

/**
 * 类比js进行ts的学习
 * @param target
 * @param k
 */
const test = (T: any, k: any) => {
  let obj: any = {};
  k.forEach((p: any) => {
    if (p in T) {
      obj[p] = T[p];
    }
  });
  return obj;
};

/**
 * 类型约束：K必须是T的键值中的数值
 * 循环K，返回对应值T[p]
 * 这样就达到了pick的目的
 * keyof T：是union联合类型
 */
