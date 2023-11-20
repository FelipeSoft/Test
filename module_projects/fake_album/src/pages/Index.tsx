import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Album } from "../components/album/index";
import { AlbumType } from "../types/AlbumType";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const [albums, setAlbums] = useState<Array<AlbumType>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const handleGetAlbums = async () => {
        setLoading(true);
        try {
            const data = await api.getAlbums();
            setAlbums(data);
        } catch (error) {
            console.log(error);
            setError("Erro ao carregar os álbuns!");
        }
        setLoading(false);
    }

    const handleRedirectToAlbum = (id: number) => {
        navigate(`/albums/${id}`);
    }

    useEffect(() => {
        handleGetAlbums();
    }, [])


    return (
        <>
            <Header />
                <Album.List>
                    {loading && <p className="text-black mb-4">Carregando...</p>}
                    {error ?? null}
                    {albums.map(element => {
                        return <Album.Child text={element.title} onClick={() => handleRedirectToAlbum(element.id)}/>
                    })}
                </Album.List>
            <Footer />
        </>
    )
}

export default Index;