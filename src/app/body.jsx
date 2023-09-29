import Image from "next/image";


export default function Body() {
  return (
    <div>
      <Image className="fixed" src="/images/PLAY BLUR.svg" alt="" width={400} height={400} />
      <div className="bg-color-gris flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center pb-14" width={585} height={734}>
          <div className="w-345 h-210 flex justify-center items-center">
            <h1 className="tamaño-texto text-white font-bold">
              CREA{' '} <br />
              <span className="customtext fixed font-bold blur-sm">EXPONE</span>
              <span className="customtext">EXPONE</span> <br /> CONECTA
            </h1>
        </div>
        <div className="parrafo1">
          <p className="parrafo1 text-white">Sube y comparte tu música donde los artistas y productores conectan a través de sus habilidades.</p>
        </div>
        </div>
        <div>
          <Image src="/images/INTERFAZ PERS 1.svg" alt="person image" width={585} height={734} />
        </div>
      </div>
    </div>
  );
}