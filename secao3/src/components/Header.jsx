import image from '../assets/react-core-concepts.png'

const Header = (props) => {
   const {word} = props
   return <header>
   <img src={image} alt="Stylized atom" />
   <h1>React Essentials</h1>
   <p>{word} React concepts you will need for almost any app you are going to build!</p>
</header>
}

export default Header;