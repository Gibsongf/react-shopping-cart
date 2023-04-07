export class CreateLinkedList {
	constructor() {
		this.linkLst = {};
		this.size = 0;
		this.itemsName = [];
	}
	dataToNode(data) {
		return {
			value: data,
			NextNode: null,
		};
	}

	/* at(index) returns the node at the given index */
	iterationLinkList(lst, indx) {
		if (lst.NextNode === null || indx === 0) {
			return lst;
		} else {
			return this.iterationLinkList(lst.NextNode, indx - 1);
		}
	}
	/*  contains(value) returns true if the passed in value
        is in the list and otherwise returns false.*/

	deleteFromArrValues(value) {
		const deleted = this.itemsName.indexOf(value);
		this.itemsName.splice(deleted, 1);
	}
	deleteSpecificValue(value) {
		let toDelete = this.search(value);
		if (!Array.isArray(toDelete)) return;
		const prevObj = toDelete[3];
		const nextObj = toDelete[2].NextNode;
		prevObj.NextNode = nextObj;
		this.deleteFromArrValues(value);
		this.size -= 1;
	}
	/*  find(value) returns the index
        of the node containing value, or null if not found.*/
	search(value) {
		let hasIt = this.checkValue(this.linkLst, value);
		if (Array.isArray(hasIt)) {
			return hasIt;
		} else {
			return false;
		}
	}

	checkValue(lst, value, prevLst, indx = 0) {
		// console.log(value,lst.value.name);
		if (lst.value.name === value) {
			return [true, indx, lst, prevLst];
		}
		if (lst.NextNode === null) {
			return false;
		} else {
			indx++;
			return this.checkValue(lst.NextNode, value, lst, indx);
		}
	}

	toString() {
		let str = this.itemsName.map((v) => "(" + String(v) + ")").reverse();
		return str.join(" --> ");
	}

	/*  append(value) adds a new node
        containing value to the end of the list */
	append(data) {
		const node = this.dataToNode(data);
		this.itemsName.push(data.name);
		// this.itemsName.reverse();
		// this.itemsName.reverse();
		if (Object.values(this.linkLst).length < 1) {
			this.prepend(node);
		} else {
			let lastItem = this.iterationLinkList(this.linkLst, this.size);
			lastItem.NextNode = node;
			// this.tail = node;
			this.size += 1;
		}
	}
	/*  prepend(value) adds a new node containing
        value to the start of the list  */
	prepend(node) {
		if (Object.values(this.linkLst).length <= 1) {
			this.linkLst.value = node.value;
			this.linkLst.NextNode = null;
			this.size += 1;
		} else {
			node.NextNode = this.linkLst;
			this.linkLst = node;
			this.size += 1;
		}
	}
}


