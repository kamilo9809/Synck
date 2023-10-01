import Image from "next/image";

export default function ComplementBody1(){
    return(
        <div className=" flex flex-col justify-center items-center ">
        <div className="h-customBoxText flex flex-col justify-end items-center">

        <h2 className="customtext title2">BIENVENIDOS A SYNCK</h2>
        <br />
        <p className="parrafo2 text-center text-gray-300">Una revolucionaria plataforma web y móvil diseñada para <span className="font-bold text-white">artistas y productores</span>  tanto amateurs como experimentados que desean compartir sus creaciones musicales de manera sencilla, atractiva y efectiva.</p>
        <br />
        <br />
        </div>
          <div className="flex h-customButton flex-col justify-end items-center hover:bg-gray-700 hover:text-white">
        <button className="confgbutton text-xl font-semibold">Leer más</button>
        </div>
        <Image src="/images/PLAY_BIG_ACT.png" alt="play big" width={1436} height={465} />
        
      </div>
    );
}