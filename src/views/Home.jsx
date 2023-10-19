//img
import photo from "../img/photo.jpeg"

//css
import "../css/home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <p className="p-home">Hola! Soy Sergio</p>
        <p className="p-home">Desarrolador Fullstack Javascript</p>
      </div>
      <img className="img-home" src={photo} alt="Foto de perfil" />
    </div>
  )
}

export default Home
