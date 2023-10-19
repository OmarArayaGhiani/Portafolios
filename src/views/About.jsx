//dependencies
import {useState} from "react"

//css
import "../css/about.css"

//icons
import {GiMiningHelmet, GiBookshelf, GiViolin} from "react-icons/gi"
import {FaReact, FaHandPeace} from "react-icons/fa"
import {BiLogoPostgresql} from "react-icons/bi"

const About = () => {
  const [showText1, setShowText1] = useState(false)
  const [showText2, setShowText2] = useState(false)
  const [showText3, setShowText3] = useState(false)
  const [showText4, setShowText4] = useState(false)
  const [showText5, setShowText5] = useState(false)
  const [hiddenSection1, setHiddenSection1] = useState(true)
  const [hiddenSection2, setHiddenSection2] = useState(true)
  const [hiddenSection3, setHiddenSection3] = useState(true)
  const [hiddenSection4, setHiddenSection4] = useState(true)
  const [hiddenSection5, setHiddenSection5] = useState(true)
  const [button, setButton] = useState("Ver más")
  const [about, setAbout] = useState(true)
  const [animation, setAnimation] = useState(true)

  const showMore1 = () => {
    setAbout(!about)
    setShowText1(!showText1)
    setHiddenSection2(!hiddenSection2)
    setHiddenSection3(!hiddenSection3)
    setHiddenSection4(!hiddenSection4)
    setHiddenSection5(!hiddenSection5)
    if (button === "Ver más") {
      setAnimation(false)
      setButton("Ver menos")
    }
    if (button === "Ver menos") {
      setAnimation(true)
      setButton("Ver más")
    }
  }

  const showMore2 = () => {
    setAbout(!about)
    setShowText2(!showText2)
    setHiddenSection1(!hiddenSection1)
    setHiddenSection3(!hiddenSection3)
    setHiddenSection4(!hiddenSection4)
    setHiddenSection5(!hiddenSection5)
    if (button === "Ver más") {
      setAnimation(false)
      setButton("Ver menos")
    }
    if (button === "Ver menos") {
      setAnimation(true)
      setButton("Ver más")
    }
  }

  const showMore3 = () => {
    setAbout(!about)
    setShowText3(!showText3)
    setHiddenSection1(!hiddenSection1)
    setHiddenSection2(!hiddenSection2)
    setHiddenSection4(!hiddenSection4)
    setHiddenSection5(!hiddenSection5)
    if (button === "Ver más") {
      setAnimation(false)
      setButton("Ver menos")
    }
    if (button === "Ver menos") {
      setAnimation(true)
      setButton("Ver más")
    }
  }

  const showMore4 = () => {
    setAbout(!about)
    setShowText4(!showText4)
    setHiddenSection1(!hiddenSection1)
    setHiddenSection2(!hiddenSection2)
    setHiddenSection3(!hiddenSection3)
    setHiddenSection5(!hiddenSection5)
    if (button === "Ver más") {
      setAnimation(false)
      setButton("Ver menos")
    }
    if (button === "Ver menos") {
      setAnimation(true)
      setButton("Ver más")
    }
  }

  const showMore5 = () => {
    setAbout(!about)
    setShowText5(!showText5)
    setHiddenSection1(!hiddenSection1)
    setHiddenSection2(!hiddenSection2)
    setHiddenSection3(!hiddenSection3)
    setHiddenSection4(!hiddenSection4)
    if (button === "Ver más") {
      setAnimation(false)
      setButton("Ver menos")
    }
    if (button === "Ver menos") {
      setAnimation(true)
      setButton("Ver más")
    }
  }

  return (
    <div className={about ? "about-grid" : "about-flex about-animation"}>
      <div
        className={`${
          hiddenSection1 ? "no-hidden-section" : "hidden-section"
        } ${animation ? "about-animation" : "about-animation-none"}`}
      >
        <FaHandPeace className="icon" />
        <div className="resp-about">
          <p className="p-tittle">Hola! Soy Sergio</p>
          {button === "Ver más" ? (
            <button onClick={showMore1}>{button}</button>
          ) : null}
        </div>
        <p className={showText1 ? "p-about" : "p-none"}>
          Mi nombre es Sergio. Soy de la ciudad de Copiapó, Chile. Inicié en el
          mundo del desarrollo web hace tan solo 1 año en la academia Desafio
          Latam, donde estudié la carrera de Desarrollo Fullstack JavaScript.
        </p>
        {button === "Ver menos" ? (
          <button onClick={showMore1}>{button}</button>
        ) : null}
      </div>

      <div
        className={`${
          hiddenSection2
            ? "no-hidden-section flex-reverse"
            : "hidden-section flex-reverse"
        } ${animation ? "about-animation" : "about-animation-none"}`}
      >
        <GiMiningHelmet className="icon" />
        <div className="resp-about">
          <p className="p-tittle">Mi ocupación actual</p>
          {button === "Ver más" ? (
            <button onClick={showMore2}>{button}</button>
          ) : null}
        </div>
        <p className={showText2 ? "p-about" : "p-none"}>
          Actualmente me dedico al rubro de la minería, donde trabajo como
          técnico en instrumentación y automatización industrial, donde mis
          principales tareas son mantenimiento de equipos de instrumentación,
          controladores lógicos programables, sistemas de visualizacion HMI,
          entre otras actividades.
        </p>
        {button === "Ver menos" ? (
          <button onClick={showMore2}>{button}</button>
        ) : null}
      </div>

      <div
        className={`${
          hiddenSection3 ? "no-hidden-section" : "hidden-section"
        } ${animation ? "about-animation" : "about-animation-none"}`}
      >
        <GiBookshelf className="icon" />
        <div className="resp-about">
          <p className="p-tittle">Mis estudios</p>
          {button === "Ver más" ? (
            <button onClick={showMore3}>{button}</button>
          ) : null}
        </div>
        <p className={showText3 ? "p-about" : "p-none"}>
          Estudiar desarrollo en la academia Desafio Latam se ha convertido en
          algo apasionante, a lo cual he dedicado mucha energía para seguir
          mejorando cada día. Actualmente sigo estudiando de manera
          independiente.
        </p>
        {button === "Ver menos" ? (
          <button onClick={showMore3}>{button}</button>
        ) : null}
      </div>

      <div
        className={`${
          hiddenSection4
            ? "no-hidden-section flex-reverse"
            : "hidden-section flex-reverse"
        } ${animation ? "about-animation" : "about-animation-none"}`}
      >
        <div className="icon icon-flex">
          <FaReact />
          <BiLogoPostgresql />
        </div>
        <div className="resp-about">
          <p className="p-tittle">Mis aptitudes</p>
          {button === "Ver más" ? (
            <button onClick={showMore4}>{button}</button>
          ) : null}
        </div>
        <p className={showText4 ? "p-about" : "p-none"}>
          Dentro de mis aptitudes de desarrollo actualmente se encuentran HTML,
          CSS, React y base de datos con Postgres SQL
        </p>
        {button === "Ver menos" ? (
          <button onClick={showMore4}>{button}</button>
        ) : null}
      </div>

      <div
        className={`${
          hiddenSection5
            ? "no-hidden-section centered-element"
            : "hidden-section"
        } ${animation ? "about-animation" : "about-animation-none"}`}
      >
        <GiViolin className="icon" />
        <div className="resp-about">
          <p className="p-tittle">Música</p>
          {button === "Ver más" ? (
            <button onClick={showMore5}>{button}</button>
          ) : null}
        </div>
        <p className={showText5 ? "p-about" : "p-none"}>
          Pero como no todo es desarrollo, también debo agregar que me encanta
          la música y en estos momentos me encuentro estudiando violín, aún soy
          novato en eso, pero voy mejorando cada día.
        </p>
        {button === "Ver menos" ? (
          <button onClick={showMore5}>{button}</button>
        ) : null}
      </div>
    </div>
  )
}

export default About
