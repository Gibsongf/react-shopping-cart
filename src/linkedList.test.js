import { CreateLinkedList } from "./linkedList";

const ll = new CreateLinkedList();
const shopItem = { name: "Frantic Sword", value: 100, description: "txt" };
const shopItem2 = { name: "Dagger of Profit", value: 100, description: "txt" };

test("Append value", () => {
	ll.append(shopItem);
	expect(ll.itemsName.length).toBe(1);
	ll.append(shopItem2);
	expect(ll.itemsName.length).toBe(2);
});
test("Delete specific item by name", () => {
	ll.deleteSpecificValue("Dagger of Profit");
	expect(ll.linkLst.value.name).toBe("Frantic Sword");
	expect(ll.linkLst.NextNode).toBe(null);
	expect(ll.itemsName.length).toBe(1);
});
