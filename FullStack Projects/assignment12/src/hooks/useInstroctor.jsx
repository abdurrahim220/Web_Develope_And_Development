import { useQuery } from "@tanstack/react-query";


const useInstroctor = () => {
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('instructor.json');
            return res.json();
        }
    })

    return [menu, loading, refetch]
};

export default useInstroctor;