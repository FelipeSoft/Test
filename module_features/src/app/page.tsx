"use client"

import { images } from "./data/images";
import { Image } from "./components/Image";
import { ImageList } from "./components/ImageList";
import { Modal } from "./components/Modal";
import { useState } from "react";

const Page = () => {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState('');

    const openModal = (identifier: number) => {
        for(let i in images){
            if(images[i].id === identifier){
                setImage(images[i].path);
                setModal(true);
            }
            continue;
        }
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className="container max-w-2xl mx-auto flex flex-col items-center justify-center flex-grow min-h-screen overflow-y-auto">
            <h1 className="text-2xl font-bold mb-10">Galeria de Fotos</h1>
            <ImageList>
                {images.map((element) => (
                    <Image
                        onClick={() => openModal(element.id)}
                        key={element.id}
                        path={element.path}
                    />
                ))}
            </ImageList>
            {modal && <Modal onClick={closeModal} path={image} />}
        </div>

    );
}

export default Page;

