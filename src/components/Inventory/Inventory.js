
import { useParams } from 'react-router-dom';
import useInventory from '../../Hooks/UseInventory';


const Inventory = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>this is inventory:{id}</h1>
        </div>
    );
};

export default Inventory;