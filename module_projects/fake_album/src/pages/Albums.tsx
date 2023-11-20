import { useEffect, useState } from "react";
import { AlbumType } from "../types/AlbumType";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { Album } from "../components/album/index";
import { AlbumChild } from "../components/album/AlbumChild";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PhotoType } from "../types/PhotoType";

const Albums = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [album, setAlbum] = useState<AlbumType | null>(null);
    const [photos, setPhotos] = useState<Array<PhotoType>>([]);

    const { slug } = useParams();
    const navigate = useNavigate();

    const handleGetAlbum = async (id: number) => {
        try {
            const data = await api.getAlbumById(id);
            setAlbum(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleGetPhotos = async (id: number) => {
        setLoading(true);
        try {
            const data = await api.getAllPhotosOfAnAlbumById(id);
            setPhotos(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const handleBack = () => {
        navigate(-1);
    } 

    const handleRedirectToPhoto = (id: number) => {
        navigate(`/photos/${id}`)
    }

    useEffect(() => {
        if(slug) {
            handleGetAlbum(parseInt(slug));
            handleGetPhotos(parseInt(slug));
        } else {
            setError("Erro ao carregar o álbum!")
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <button className="py-2 px-4 bg-black text-white mt-4" onClick={handleBack}>Back</button>
                {error ?? null}
                <h1 className="text-2xl my-4">{album?.title}</h1>
                <p className="text-black mb-4">{loading && "Carregando..."}</p>
                {!loading && 
                <div className="grid grid-cols-5 gap-4 mb-4">
                    {photos.map(element => {
                        return <Album.Photo onClick={() => handleRedirectToPhoto(element.id)} url={element.url} />
                    })}
                </div>}
            </div>
            <Footer />
        </div>
    )
}

export default Albums;