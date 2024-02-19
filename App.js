import SafeContainer from "./src/components/SafeContainer";
import Home from "./src/screens/Home";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";

export default function App() {
  return (
    <>
      <SafeContainer>
        {/* <Sobre/> */}
        {/* <Home /> */}
        <Privacidade />
      </SafeContainer>
    </>
  );
}
