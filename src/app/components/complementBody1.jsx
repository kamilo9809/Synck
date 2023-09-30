import Image from "next/image";

export default function ComplementBody1(){
    return(
        <div className="flex flex-col justify-center items-center">
        <h2 className="customtext tamaño-texto">BIENVENIDOS A SYNCK</h2>
        <p className="parrafo2 text-center text-gray-300">Una revolucionaria plataforma web y móvil diseñada para artistas y productores tanto amateurs como experimentados que desean compartir sus creaciones musicales de manera sencilla, atractiva y efectiva.</p>
        <button>Leer mas</button>
        <Image src="/images/PLAY BIG 2.png" alt="play big" width={6038} height={486} />
      </div>
    );
}