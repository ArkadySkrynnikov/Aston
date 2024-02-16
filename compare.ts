class TreeNode {
    left: TreeNode;
    right: TreeNode;
    value: number;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.value = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function compare(first: TreeNode | null, second: TreeNode | null): boolean {
    if (first === null && second === null) return true
    if (first === null || second === null) return false
    if (first.value !== second.value) return false
    return compare(first.left, second.left) && compare(first.right, second.right)
}