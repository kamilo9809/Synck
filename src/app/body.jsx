
import Image from "next/image";


export default function Body(){

    return(
        <div>
          <div className="bg-color-gris flex flex-row">
          <Image className="fixed" src="/images/PLAY BLUR.svg" alt="" width={400} height={400} />  
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-white ">CREA EXPONE CONECTA</h2>                   
              <p className="text-white">Sube y comparte tu música donde los artistas y productores conectan a través de sus habilidades. </p>            
            </div>
            <div>
             <Image src="/images/INTERFAZ PERS 1.svg" alt="person image" width={585} height={734} />
            </div>
          </div>
        </div>
    );
} 