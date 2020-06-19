var remaningLength = function(head, k) {
    
    var count = 0;
    
    while(head !== null && count != k) {
        count++;
        head = head.next;
    } 
    
    if(count === k) {
        return true
    }
    else
        return false;
};
 
 
var reverseKGroup = function(head, k) {
    
    var length = remaningLength(head,k);
    
    if(!length) {
        return head;
    }
    
    var current = head;
    var previous = null;
    var current_next = null;
    var count = 0;
    
    
    
    while(current != null && count !=k) {
        current_next = current.next;
        current.next = previous;
        previous = current;
        current = current_next;
        count++;
    }
    
    head.next = reverseKGroup(current,k);
    
    return previous;
};
