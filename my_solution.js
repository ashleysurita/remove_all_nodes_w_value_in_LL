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
    if(!head) return null
    
    const holder = new ListNode(null, head)
    let curr = holder
    while(curr){
        if(curr.next && curr.next.value === target) curr.next = curr.next.next  
        else curr = curr.next
    }
    return holder.next
}

// Test Cases
var LL1 = new ListNode(4, new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
console.log(arrayify(removeNodes(null, 1))) // []
console.log(arrayify(removeNodes(LL1, 1))) // [4, 2, 3, 2, 2] 
console.log(arrayify(removeNodes(LL1, 2))) // [4, 3]
console.log(arrayify(removeNodes(LL1, 3))) // [4]
console.log(arrayify(removeNodes(LL1, 4))) // []
