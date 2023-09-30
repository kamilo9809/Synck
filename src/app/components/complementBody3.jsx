import Image from "next/image";

export default function ComplementBody3(){
    return(
        <div>
        <h3>SYNCK ajustará automáticamente la calidad de descarga, protegiendo tus creaciones y evitando el uso indebido.</h3>
        <div>
        <h2 className="tamaño-texto customtext" >CUANDO CARGAS TU TRACK, TIENES LA POSIBILIDAD DE PERSONALIZAR CADA DETALLE</h2>
        <p>Asigna el título, tonalidad, género y BPM, lo mínimo y necesario para subir al instante.Luego añade una portada reflejando aquello que quieras transmitir.</p>
        <Image src={'/images/TRACKS.svg'} alt="tracklist" width={500} height={500} />
        </div>
        <div>
            <div>
                <h2 className="customtext">CUSTOMIZA TU ESPACIO</h2>
                <p>SYNCK de igual forma te permite personalizar tu espacio. Ya sea editando la paleta de colores, decorando a tu gusto, al igual que, posicionar un logo y nombre, reflejando tu identidad y estilo.    </p>
                <Image src={'/images/CUSTOM.svg'} alt="custom" width={500} height={500} />           
            </div>
            <div>
                <h2>DALE AL PLAY</h2>
                <p>La interfaz de SYNCK es llamativa y única, verás como la barra de tiempo actúa con el desenfoque y opacidad sobre el cover art del respectivo track. De igual forma, el formato de reproducción y exploración actuará en forma de carrousel lo cual lo hará mucho más ameno y satisfactorio.</p>
                <div>
                <Image src={'/images/threeperson.svg'} alt="threeperson" width={500} height={500} />           
                <Image src={'/images/rombodif.svg'} alt="rombo" width={500} height={500} />           
                <Image src={'/images/polygon 11.svg'} alt="polygon 11" width={500} height={500} />           
                </div>

                <div>
                    <h2 className="customtext">BUSCA EL NOMBRE DE UN TRACK ES ESPECÍFICOO FILTRA POR EL GÉNERO QUE DESEES</h2>
                    <p>Navegación directa y sencilla.</p>
                    <div>
                    <Image src={'/images/SEARCH PERS 1.png'} alt="SEARCH" width={500} height={500} />           
                    <Image src={'/images/FILTER PERS 1.png'} alt="FILTER" width={500} height={500} />           
                    </div>
                </div>

                <div>
                    <h2 className="customtext">MANTEN LA INSPIRACIÓN FLUYENDO</h2>
                    <p>Si eres un artista y llevas un tiempo para empezar a estructurar, usa el looping avanzado que te permitirá seleccionar una región específica dentro del track, como por ejemplo un verso, o el mismo estribillo; Esto facilita la composición y revisión las creaciones sin esfuerzo.</p>
                </div>
                <div>
                    <Image src={'/images/LOOPING PERS 1.png'} alt="FILTER" width={500} height={500} />           
                </div>
                <div>
                    <div>
                        <h2 className="customtext" >CONECTA TUS REDES</h2>
                    </div>
                    <p>En la parte inferior de la página, podrás enlazar tus redes sociales preferidas y de contacto por lo tanto estarás generando un trafico constante y directo en todo momento. </p>
                </div>
                <div>
                <Image src={'/images/redes+.svg'} alt="FILTER" width={500} height={500} />           
                </div>
                <div>
                    <div>
                        <Image src={'/images/Rectangle 30.svg'} alt="R30" width={500} height={500} />           
                        <Image src={'/images/vaconel rect 23.png'} alt="R30" width={500} height={500} />           
                    </div>
                    <div>
                        <Image src={'/images/Rectangle 21.svg'} alt="R21" width={500} height={500} />           
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="customtext" >ÚNETE A NUESTRA COMUNIDAD</h2>
                        <p>No solo encontrarás una plataforma para compartir tu música, sino también un espacio donde desatas tu potencial musical, conoces a otros apasionados y colaboras en proyectos para dar vida a tus creaciones.</p>
                    </div>
                    <div>
                    <Image src={'/images/HYLLSDIS 1.svg'} alt="hylls" width={500} height={500} />           
                    </div>
                </div>

                <div>
                    <Image className="" src={'/images/Rectangle 27 linkredes.png'} alt="hylls" width={500} height={500}/>
                    <a className="" href="#"><Image src={'/images/discord.svg'} alt="hylls" width={50} height={50} /></a>
                    <a className="" href="#"><Image src={'/images/twitter.svg'} alt="hylls" width={50} height={50} /></a>
                    <a className="" href="#"><Image src={'/images/facebook.svg'} alt="hylls" width={50} height={50} /></a>
                    <a className="" href="#"><Image src={'/images/youtube.svg'} alt="hylls" width={50} height={50} /></a>
                    <a className="" href="#"><Image src={'/images/telegram.svg'} alt="hylls" width={50} height={50} /></a>
                    <a className="" href="#"><Image src={'/images/instagram.svg'} alt="hylls" width={50} height={50} /></a>
                </div>
                    <Image className="" src={'/images/polygon 8.png'} alt="hylls" width={500} height={500}/>
                    <Image className="" src={'/images/privacy.svg'} alt="hylls" width={500} height={500}/>


                <div>
                    
                </div>


                
            </div>
        </div>
        
        
        </div>
    );
}