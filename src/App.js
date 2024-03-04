import Footer from "./components/Footer";
import Formcontainer from "./components/Formcontainer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Formcontainer>
        <Home />
        <Footer />
      </Formcontainer>
    </>
  );
}

export default App;
