import './App.css';
import Layout from './componentes/Layout';

function App() {
  return (
    <Layout>
      <h2>Contenido Principal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        vero dolores asperiores. Minus fugit quod veritatis alias rerum
        obcaecati quaerat, blanditiis veniam, vero aliquid mollitia ab
        cupiditate nisi similique porro.
      </p>
      <img
        src="https://www.shutterstock.com/shutterstock/photos/1777205327/display_1500/stock-vector-dark-wide-banner-dark-carbon-fiber-texture-black-and-blue-texture-steel-background-web-design-1777205327.jpg"
        alt="Fondo de textura"
        style={{ maxWidth: '100%' }}
      />
    </Layout>
  );
}

export default App;