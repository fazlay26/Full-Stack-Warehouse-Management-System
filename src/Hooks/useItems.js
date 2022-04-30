import { useEffect, useState } from "react"

const useItems = () => {
    const [allItems, setAllItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    return [allItems, setAllItems]
}
export default useItems