import Container from "@mui/material/Container";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import "./App.css";
import "./assets/fonts/index.css";
import { Footer } from "./components/footer";
import { ConnectWallet } from "./components/connect";
import ScrollToTop from "./components/scrollToTop";
import { HowItWorks } from "./components/howItWorks";
import { Advantages } from "./components/advantages";

function App() {
  document.title = "EthBomb - Welcome";
  return (
    // <div style={{}}>
    <Container
      sx={{
        position: "relative",
      }}
    >
      <main>
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <ConnectWallet />
        <Advantages />
      </main>
      <Footer />
      <ScrollToTop />
    </Container>
    // </div>
  );
}

export default App;
