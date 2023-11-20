import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Album } from "../components/album";
import { PhotoType } from "../types/PhotoType";

const Photo = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [photo, setPhoto] = useState<PhotoType | null>(null);

    const { slug } = useParams();
    const navigate = useNavigate();

    const handleGetPhoto = async (id: number) => {
        setLoading(true);
        try {
            const data = await api.getPhotoById(id);
            setPhoto(data);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    const handleBack = () => {
        navigate(-1);
    } 

    useEffect(() => {
        if(slug){
            handleGetPhoto(parseInt(slug));
        } else {
            setError("Erro ao carregar a foto!");
        }
    }, [])

    return (
        <div>
            <Header/>
            <div className="container mx-auto">
                <button className="py-2 px-4 bg-black text-white mt-4" onClick={handleBack}>Back</button>
                {error ?? null}
                <p className="text-black mb-4">{loading && "Carregando..."}</p>
                <h1 className="text-2xl mb-4">{photo?.title}</h1>
                {!loading && <img className="mb-4" src={photo?.url} />}
            </div>
            <Footer />
        </div>
    )
}

export default Photo;