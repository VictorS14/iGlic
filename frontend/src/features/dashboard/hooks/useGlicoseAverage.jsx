import { useQuery } from "@tanstack/react-query";

export const useGlicoseAverage = (userId, selected) => {
    return useQuery({
        queryKey: ['media', userId, selected],
        queryFn: async () => {
            if(selected === "Hoje") {
                const res = await fetch(`http://localhost:3000/glicose/average?userId=${userId}`)
                if(!res.ok) throw new Error("Erro ao buscar média")
                return res.json();
            } 
            const days = selected.split(" ")[0];
            const res = await fetch(`http://localhost:3000/glicose/average-period?userId=${userId}&days=${days}`)
            if(!res.ok) throw new Error("Erro ao buscar média")
            return res.json();

        }
    }) 
}