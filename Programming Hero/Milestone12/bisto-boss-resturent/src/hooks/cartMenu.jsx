import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from '@tanstack/react-query'


const cartMenu = () => {
    const { user } = useContext(AuthContext);

    // const token = localStorage.getItem('access-token');

    const { refetch, data : carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            console.log('res from axios', response)
            return response.json();
        },
    })


    return [carts,refetch];


};

export default cartMenu;