import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from '@tanstack/react-query'


const cartMenu = () => {
    const { user } = useContext(AuthContext);

    const token = localStorage.getItem('access-token');

    const { refetch, data : cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`carts?email=${user.email}`)
            console.log('res from axios', response)
            return response.data;
        },
    })


    return [cart,refetch];


};

export default cartMenu;