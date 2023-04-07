class LinkedList {
	constructor() {
		this.linkLst = {};
		this.size = 0;
		this.arrOfValues = [];
	}
	/* at(index) returns the node at the given index */
	dataToNode (data) {
		return {
			value: data,
			NextNode: null,
		};
	}
	iterationLinkList(lst, indx) {
		if (lst.NextNode === null || indx === 0) {
			return lst;
		} else {
			return this.iterationLinkList(lst.NextNode, indx - 1);
		}
	}
	/*  contains(value) returns true if the passed in value
        is in the list and otherwise returns false.*/
	contains(value) {
		let hasIt = this.checkValue(this.linkLst, value);
		if (Array.isArray(hasIt)) {
			return hasIt[0];
		} else {
			return hasIt;
		}
	}
	deleteFromArrValues(value) {
		const deleted = this.arrOfValues.indexOf(value);
		this.arrOfValues.splice(deleted, 1);
	}
	deleteSpecificValue(value) {
		let toDelete = this.find(value);
		if (!Array.isArray(toDelete)) return;
		const prevObj = toDelete[3];
		const nextObj = toDelete[2].NextNode;
		prevObj.NextNode = nextObj;
		this.deleteFromArrValues(value);
	}
	/*  find(value) returns the index
        of the node containing value, or null if not found.*/
	find(value) {
		let hasIt = this.checkValue(this.linkLst, value);
		/* console.log(hasIt); */
		if (Array.isArray(hasIt)) {
			return hasIt;
		} else {
			return false;
		}
	}

	checkValue(lst, value, prevLst, indx = 0) {
		/* console.log(value, lst, prevLst); */
		if (lst.value === value) {
			return [true, indx, lst, prevLst];
		}
		if (lst.NextNode === null) {
			return false;
		} else {
			indx++;
			console.log(lst);
			return this.checkValue(lst.NextNode, value, lst, indx);
		}
	}
	removeArrValue() {
		this.arrOfValues = this.arrOfValues.filter((value) => {
			return value !== this.tail.value;
		});
	}
	/*  toString represents your LinkedList objects as strings, so you can print them out and
        preview them in the console. The format should be:
        ( value ) -> ( value ) -> ( value ) -> null */
	toString() {
		let str = this.arrOfValues.map((v) => "(" + String(v) + ")").reverse();
		return str.join(" --> ");
	}
	/* pop removes the last element from the list*/
	pop() {
		let newTail = this.iterationLinkList(this.linkLst, this.size - 2);
		this.removeArrValue();
		this.tail = newTail;
		newTail.NextNode = null;
	}
	/*  append(value) adds a new node
        containing value to the end of the list */
	append(data) {
		const node = this.dataToNode(data)
		this.arrOfValues.reverse();
		this.arrOfValues.push(node.value);
		this.arrOfValues.reverse();
		if (Object.values(this.linkLst).length < 1) {
			this.prepend(node);
		} else {
			let oldTail = this.iterationLinkList(this.linkLst, this.size);
			oldTail.NextNode = node;
			this.tail = node;
			this.size += 1;
		}
	}
	/*  prepend(value) adds a new node containing
        value to the start of the list  */
	prepend(node) {
		this.arrOfValues.push(node.value);
		if (Object.values(this.linkLst).length <= 1) {
			this.linkLst.value = node.value;
			this.linkLst.NextNode = null;
			this.tail = node;
			this.size += 1;
		} else {
			node.NextNode = this.linkLst;
			this.linkLst = node;
			this.head = node;
			this.size += 1;
		}
	}
}

function node(name) {
	return {
		value: name,
		NextNode: null,
	};
}
