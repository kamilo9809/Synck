export default function Home() {

  function Cancion(){
    return<div>
      <h1>hola mundon</h1>
      <Cancion titulo="la cucaracha" descripcion="ya no puede caminar" />
    </div>;
  }




  return (
    <main className="container mx auto p-4 h-screen flex item-center justify-center">
        <h1>esto va a ser un ejemplo de props</h1>
        <canciones titulo="la cucaracha" descripcion="la cucaracha la cucaracha ya no puede caminar" />
    </main>
  )
}

