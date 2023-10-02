import Image from "next/image";

export default function ComplementBody3() {
  return (
    <div>
      <div className="c3-tp">
        <h2 className="title-complement3 py-8">
          CUANDO CARGAS TU TRACK, TIENES LA POSIBILIDAD DE <br /> PERSONALIZAR
          CADA DETALLE
        </h2>
        <p className="ptitle-complement3 pt-8">
          Asigna el título, tonalidad, género y BPM,{" "}
          <span className="spanptitlec3">
            lo mínimo y necesario para subir al instante.
          </span>{" "}
          <br /> Luego añade una portada reflejando aquello que quieras
          transmitir.
        </p>
        <div className="flex justify-center items-center">
          <Image
            className="imgc3t absolute"
            src={"/images/TRACKS.svg"}
            alt="tracklist"
            width={1261}
            height={709}
          />
        </div>
      </div>
      <div>
        <div className="c3-tp2">
          <h2 className="customtextc3">CUSTOMIZA TU ESPACIO</h2>
          <p className="ptitle-complement4 pt-8">
            SYNCK de igual forma te permite personalizar tu <br />
            espacio. Ya sea editando la paleta de colores, <br /> decorando a tu
            gusto, al igual que, posicionar un <br /> logo y nombre,{" "}
            <span className="text-white text-xl font-semibold font-Poppins">
              reflejando tu identidad y estilo.
            </span>{" "}
          </p>
          <div className="flex justify-center items-center">
            <Image
              className="imgc3tct3 absolute"
              src={"/images/CUSTOM.svg"}
              alt="custom"
              width={1979.589}
              height={1113.366}
            />
          </div>
        </div>
        <div>
          <div className="c3-tp2">
            <div className="flex justify-center">
              <h2 className="c3-t3">DALE AL PLAY</h2>
            </div>
            <div className="flex justify-center">
              <p className="text-white text-center font-poppins font-semibold text-xl w-[1005px] h-[150px] flex-shrink-0">
                La interfaz de SYNCK es llamativa y única,{" "}
                <span className="font-normal">
                  verás como la barra de tiempo actúa con el desenfoque y
                  opacidad sobre el cover art del respectivo track. De igual
                  forma, el formato de reproducción y exploración actuará en
                  forma de carrousel lo cual lo hará mucho
                </span>{" "}
                más ameno y satisfactorio.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image
                className="imgc3tct4 absolute"
                src={"/images/threeperson.svg"}
                alt="threeperson"
                width={930}
                height={606}
              />
              <Image
                className="imgc3tct5 absolute"
                src={"/images/rombodif.svg"}
                alt="rombo"
                width={608}
                height={605}
              />
              <Image
                className="imgc3tct6 absolute"
                src={"/images/polygon 11.svg"}
                alt="polygon 11"
                width={1637}
                height={636}
              />
            </div>
          </div>
          <div>
            <div className="c3-tp2">
              <div className="flex justify-center items-center">
                <h2 className="customtextc3t4">
                  BUSCA EL NOMBRE DE UN TRACK ES ESPECÍFICO FILTRA POR EL GÉNERO
                  QUE DESEES
                </h2>
              </div>
              <div className="flex justify-center items-center">
                <p className="customtextc3t5">Navegación directa y sencilla.</p>
              </div>
              <div className="flex  items-center">
                <Image
                  className="imgsearch  "
                  src={"/images/SEARCH PERS 1.png"}
                  alt="SEARCH"
                  width={848}
                  height={364}
                />
              </div>
              <div className="flex justify-end items-center">
                <Image
                  className="imgfilterpers absolute"
                  src={"/images/FILTER PERS 1.png"}
                  alt="FILTER"
                  width={733}
                  height={377}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="c3-tp2">
              <h2 className="customtextc3t6">MANTEN LA INSPIRACIÓN FLUYENDO</h2>
              <p className="p-customtextc3t6">
                Si eres un artista y llevas un tiempo para empezar a
                estructurar,
                <span className="span-customtextc3t6">
                  {" "}
                  usa el looping avanzado que te permitirá seleccionar una
                  región específica dentro del track
                </span>
                , como por ejemplo un verso, o el mismo estribillo;{" "}
                <span>
                  Esto facilita la composición y revisión las creaciones sin
                  esfuerzo.
                </span>
              </p>

              <div className="flex justify-center items-center">
                <Image
                  className="imglooping absolute"
                  src={"/images/LOOPING PERS 1.png"}
                  alt="FILTER"
                  width={1058}
                  height={595}
                />
              </div>
            </div>
            <div></div>
            {/*hasta aca lleva se lleva el diseño de manera oficial*/}
          </div>
        </div>
      </div>
    </div>
  );
}
