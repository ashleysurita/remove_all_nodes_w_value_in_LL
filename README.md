# remove_all_nodes_w_value_in_LL

### Problem:
```
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function removeNodes(head, target) { 
    // Write your code here.
    return new ListNode()
}

// Test Cases
var LL1 = new ListNode(4, new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
console.log(arrayify(removeNodes(null, 1))) // []
console.log(arrayify(removeNodes(LL1, 1))) // [4, 2, 3, 2, 2] 
console.log(arrayify(removeNodes(LL1, 2))) // [4, 3]
console.log(arrayify(removeNodes(LL1, 3))) // [4]
console.log(arrayify(removeNodes(LL1, 4))) // []
```
