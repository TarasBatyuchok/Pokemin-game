import './App.css';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import ImgPixelWorld from  "./assets/pixelWorld.jpg"
import  picachu from  "./assets/picachu.jpg"

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout
        title="Layout 1"
        descr="descr 1"
        urlBg={ImgPixelWorld}
      />
      <Layout title="Layout 2" colorBg="#e2e2e2" />
      <Layout
        title="Layout 3"
        descr="descr 3"
        urlBg={picachu}
      />
      <Footer />
    </>
  );
}

export default App;
