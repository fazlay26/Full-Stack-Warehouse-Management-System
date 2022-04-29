import { useEffect, useState } from "react"

const useInventory = id => {
    const [inventoryItem, setInventoryItem] = useState({})
    useEffect(() => {
        const url = `http://localhost:3000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInventoryItem(data)
            })
    }, [id])
    return [inventoryItem]
}
export default useInventory