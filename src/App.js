import './App.css';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Menu />
        <main className='container'>
          <h2>Contenido Principal</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vero dolores asperiores. Minus fugit quod veritatis alias rerum obcaecati quaerat, blanditiis veniam, vero aliquid mollitia ab cupiditate nisi similique porro.</p>
          <img src='https://www.shutterstock.com/shutterstock/photos/1777205327/display_1500/stock-vector-dark-wide-banner-dark-carbon-fiber-texture-black-and-blue-texture-steel-background-web-design-1777205327.jpg'/>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
