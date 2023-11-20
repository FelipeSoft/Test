import { useNavigate, useParams, useSearchParams } from "react-router-dom"

export const GeneralAbout = () => {
    const params = useParams();   
    const navigate = useNavigate(); 
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: "asc" | "desc") => {
        searchParams.set("order", order);
        setSearchParams(searchParams);
    }

    const setFilter = (filter: string) => {
        searchParams.set("filter", filter);
        setSearchParams(searchParams);
    }

    const back = () => {
        navigate(-1);
    }

    return (
        <div>
            <div>Filtros: {searchParams.get("filter")}</div>
            <div>Ordem: {searchParams.get("order")}</div>
            <p onClick={back} style={{cursor: "pointer"}}>Voltar</p>
            <div>Página de {params.slug?.toUpperCase()} ( {params.slug?.length} letras )</div>

            <button onClick={() => setFilter("Testando12345678910")}>Filtrar</button>
            <button onClick={() => setOrder("desc")}>Ordenar</button>
        </div>
    )
}