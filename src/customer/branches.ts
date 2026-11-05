import { salesBranches } from '../data/sales/branches';
// Khu vực và tồn món minh họa; thay bằng API chi nhánh khi triển khai thật.
export const branches = salesBranches.slice(0, 3).map((branch, i) => ({
  ...branch,
  area: ['Quận 1', 'Quận 3', 'Bình Thạnh'][i],
  unavailable: [[3, 8], [1, 6], [7, 12]][i],
}));
export type Branch = typeof branches[number];
export function isAvailable(branch: Branch | null, productId: number): boolean {
  if (!branch) return false;
  const ingredients = productId === 101 ? [1] : productId === 102 ? [7] : [productId];
  return ingredients.every(id => !branch.unavailable.includes(id));
}
