import Image from "next/image";

export default function ComplementBody4() {
  return (
    <div>
      <div className="flex flex-col p-12 justify-center items-center">
        <div className="h-15 ">
          <h2 className="c3-t3 text-center">
            CONECTA TUS REDES Y EMPIEZA A COMPARTIR
          </h2>
        </div>
        <div className="text-customtext text-center text-gray-300 pl-14 pe-14 w-600">
          <p className="pl-14 pe-14">
            En la parte inferior de la página, podrás enlazar tus redes sociales
            preferidas y de contacto por lo tanto estarás generando un trafico
            constante y directo en todo momento.{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <Image
            src={"/images/redes+.svg"}
            alt="FILTER"
            width={1118}
            height={189}
          />
        </div>

        <div className="p-14 flex justify-center ">
          <p className="text-customtext text-center text-gray-300 w-600">
            En SYNCK, valoramos la simplicidad y la conectividad en la música.
            Nuestra función de compartir se basa en la eficiencia. Con un
            smartlink exclusivo, puedes compartir tu música con precisión.{" "}
          </p>
        </div>
      </div>

      <div>
        <div>
          <div className="flex justify-center">
            <Image
              src={"/images/Rectangle 30.svg"}
              alt="R30"
              width={1300}
              height={261}
            />
          </div>

          <div className="h-fatsit">
            <div>
              
              <h2 className="customtextc3t6">UN ESPACIO MÁS CERCANO Y PERSONAL</h2>
             
              <p className="text-customtext text-justify text-gray-300 w-646" >En SYNCK, no pretendemos ser una tienda de licencias de música. En cambio, queremos que nuestra plataforma sirva como un portafolio personalizado y un catálogo de tu música.</p>
              <p className="text-customtext text-justify text-gray-300 w-646" >Synck está diseñado para ser minimalista, sencillo y esencial, centrado en la reproducción, previsualización y difusión de tu música de manera rápida y efectiva.</p>
            </div>
            <Image
              className="fatdown absolute right-0 "
              src={"/images/rect 23.png"}
              alt="R30"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className="customtext">ÚNETE A NUESTRA COMUNIDAD</h2>
          <p>
            No solo encontrarás una plataforma para compartir tu música, sino
            también un espacio donde desatas tu potencial musical, conoces a
            otros apasionados y colaboras en proyectos para dar vida a tus
            creaciones.
          </p>
        </div>
        <div>
          <Image
            src={"/images/HYLLSDIS 1.svg"}
            alt="hylls"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div>
        <Image
          className=""
          src={"/images/Rectangle 27 linkredes.png"}
          alt="hylls"
          width={500}
          height={500}
        />
        <a className="" href="#">
          <Image
            src={"/images/discord.svg"}
            alt="hylls"
            width={50}
            height={50}
          />
        </a>
        <a className="" href="#">
          <Image
            src={"/images/twitter.svg"}
            alt="hylls"
            width={50}
            height={50}
          />
        </a>
        <a className="" href="#">
          <Image
            src={"/images/facebook.svg"}
            alt="hylls"
            width={50}
            height={50}
          />
        </a>
        <a className="" href="#">
          <Image
            src={"/images/youtube.svg"}
            alt="hylls"
            width={50}
            height={50}
          />
        </a>
        <a className="" href="#">
          <Image
            src={"/images/telegram.svg"}
            alt="hylls"
            width={50}
            height={50}
          />
        </a>
        <a className="" href="#">
          <Image
            src={"/images/instagram.svg"}
            alt="hylls"
            width={50}
            height={50}
          />
        </a>
      </div>
      <Image
        className=""
        src={"/images/polygon 8.png"}
        alt="hylls"
        width={500}
        height={500}
      />
      <Image
        className=""
        src={"/images/privacy.svg"}
        alt="hylls"
        width={500}
        height={500}
      />
    </div>
  );
}
