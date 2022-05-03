import { useEffect, useState } from "react"

const useInventory = id => {
    const [inventoryItem, setInventoryItem] = useState({})
    useEffect(() => {
        const url = `https://stark-oasis-89448.herokuapp.com/info/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryItem(data))
    }, [id])
    return [inventoryItem]
}
export default useInventory