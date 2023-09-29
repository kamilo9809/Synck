import Image from "next/image";


export default function Body() {
  return (
    <div>

      {/*imagen blur de reproduccion*/}
      <Image className="fixed" src="/images/PLAY BLUR.svg" alt="" width={400} height={400} />

      {/*justifica y centra 2 texto y foto*/}
      <div className="bg-color-gris flex flex-row items-center justify-around">

        {/*justifica y centra texto 50% de la pantalla*/}
        <div className="flex flex-col items-center justify-center">

          {/*titulo*/}
          <div className="w-345 h-210 flex justify-center items-center">
            <h1 className="tamaño-texto text-white font-bold">
              CREA{' '} <br />
              <span className="customtext fixed font-bold blur-sm">EXPONE</span>
              <span className="customtext">EXPONE</span> <br /> CONECTA
            </h1>
        </div>
        {/*parrafo*/}
        <div className="parrafo1 mt-4 text-center">
          <p className="parrafo1 text-white">Sube y comparte tu música donde los artistas y productores conectan a través de sus habilidades.</p>
        </div>
        </div>
        <div>
          <Image src="/images/INTERFAZ PERS 1.svg" alt="person image" width={585} height={734} />
        </div>
      </div>
      {/*texto y foto fin*/}

    </div>
  );
}