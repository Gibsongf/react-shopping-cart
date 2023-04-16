
import { useState } from "react"
import { CreateLinkedList } from "../linkedList"
const Cart = () => {
    const ll = new CreateLinkedList();
    const [stateLst, setLinkList] = useState(ll.linkLst);
    const[totalPrice,setTotal] = useState([])
	const[allItemQuantity,setItemQuantity] = useState([])
    
}