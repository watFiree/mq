export const sortByCustomOrder = <T>(arrayToSort: T[], arrayWithOrder: T[]): T[] => {
  return arrayWithOrder.filter((a) => arrayToSort.includes(a));
};

export const ObjectKeys = Object.keys as <T extends {}>(yourObject: T) => Array<keyof T>;
