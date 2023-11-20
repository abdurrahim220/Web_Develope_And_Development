import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const cartMenu = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('access-token');
    // {
    //     Headers:{
    //         authorization:`bearer ${token}`
    //     }
    // }

    //  todo 78.8 number jwt verify has to be done

    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)

            // console.log('res from axios', response)
            return response.data;
        },
        // queryKey: ['carts', user?.email],
        // queryFn: async ()=>{
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        //     // console.log('res from axios', response)
        //     return response.json();
        // },
    })


    return [carts, refetch];


};

export default cartMenu;