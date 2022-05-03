import { useEffect, useState } from "react"

const useItems = () => {
    const [allItems, setAllItems] = useState([])
    useEffect(() => {
        fetch('https://stark-oasis-89448.herokuapp.com/info')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    return [allItems, setAllItems]
}
export default useItems