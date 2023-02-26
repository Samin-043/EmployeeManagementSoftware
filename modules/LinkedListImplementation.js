

/*to define each node*/
class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
}


/*to link with each node and make a list*/
class LinkedList{

    head = null;
    constructor(head) {
        this.head = head;
        this.size = 0;
    }

    /*........Insert node end of the list.......*/
    add(element) {
        let new_node = new Node(element);

        var current_node;

        if (this.head == null) {
            this.head = new_node;
        }
        else {
            current_node = this.head;
            while (current_node.link) {
                current_node = current_node.link;
            }
            current_node.link = new_node;
        }
        this.size++;
    }


    delete(element) {
        let find_node = this.head;
        let prev_node = null;

        var check = false;

        while (find_node) {
            if (find_node.data === element) {
                if (prev_node == null) {
                    this.head = find_node.link;
                }
                else {
                    prev_node.link = find_node.link;
                }
                check = true;
                break;
            }
            prev_node = find_node;
            find_node = find_node.link;
        }
        if (check == true) {
            this.size--;
        }
    }


    search(element) {
        let element_find = this.head;
        let check = false;
        
        while (element_find) {
            console.log(element_find.data);
            if (element_find.data === element) {
                check = true;
            }
            element_find = element_find.link;
        }

        if (check === false) {
            return check;
        }
        else {
            return check;
        }
    }

    
    printLinkedList() {
        let element = this.head;
        while (element) {
            console.log(element.data);
            element = element.link;
        }
    }

    /*........Insert node begginig of the list.......*/
    insertionLinkedList(value) {
        let new_node = new node(value);
        new_node.link = this.head;
        this.head = new_node;
    }
    

    updateLinkedListValue(element,other_element){
        let element_find = this.head;
        let check = false;
        
        while (element_find) {
            console.log(element_find.data);
            if (element_find.data === element) {
                element_find.data=other_element;
                check = true;
            }
            element_find = element_find.link;
        }
    }

}



export {LinkedList};






