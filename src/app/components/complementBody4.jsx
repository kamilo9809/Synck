import Image from "next/image";

export default function ComplementBody4() {
  return (
    <div>
      <div>
        <h2 className="customtext">CONECTA TUS REDES Y EMPIEZA A COMPARTIR</h2>
      </div>
      <div>
        <p>
          En la parte inferior de la página, podrás enlazar tus redes sociales
          preferidas y de contacto por lo tanto estarás generando un trafico
          constante y directo en todo momento.{" "}
        </p>
      </div>
      <div>
        <Image
          src={"/images/redes+.svg"}
          alt="FILTER"
          width={500}
          height={500}
        />
        <p>
          En SYNCK, valoramos la simplicidad y la conectividad en la música.
          Nuestra función de compartir se basa en la eficiencia. Con un
          smartlink exclusivo, puedes compartir tu música con precisión.{" "}
        </p>
      </div>
      <div>
        <div>
          <Image
            src={"/images/Rectangle 30.svg"}
            alt="R30"
            width={500}
            height={500}
          />
          <Image
            src={"/images/vaconel rect 23.png"}
            alt="R30"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src={"/images/Rectangle 21.svg"}
            alt="R21"
            width={500}
            height={500}
          />
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
