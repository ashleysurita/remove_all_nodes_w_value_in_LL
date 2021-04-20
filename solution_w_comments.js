class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

/*
Create a placeholder node (sometimes called a sentinel node). This is just a blank node whose next pointer points to the head of the list. Create a curr pointer that starts at this placeholder. Iterate through the list and whenever curr.next's value is equal to the target value, remove the next node. When you remove a node, you must not move the current pointer in case the next node also should be removed. If you need some extra help, there are some videos at the end you can follow along.

    if head is null, return null
    create a new 'holder' node to create a new list from
    create a placeholder to keep track of the last node in the new LL
    loop through the list, check if the value equal target
        if it does, skip
        if it doesn't, create new node and append it to current holder, move current holder to new node
    return new LL

*/

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
    
    const newLL = new ListNode()
    let curr = newLL
    let toAdd = head
    
    while(toAdd){
        if(toAdd.value !== target){
            const node = new ListNode(toAdd.value)
            curr.next = node
            curr = node
        }
        toAdd = toAdd.next
    }
    
    return newLL.next
}

// Test Cases
var LL1 = new ListNode(4, new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
// console.log(arrayify(removeNodes(null, 1))) // []
console.log(arrayify(removeNodes(LL1, 1))) // [4, 2, 3, 2, 2]
LL1 = removeNodes(LL1, 1)
console.log(arrayify(removeNodes(LL1, 2))) // [4, 3]
LL1 = removeNodes(LL1, 2)
console.log(arrayify(removeNodes(LL1, 3))) // [4]
LL1 = removeNodes(LL1, 3)
console.log(arrayify(removeNodes(LL1, 4))) // []
