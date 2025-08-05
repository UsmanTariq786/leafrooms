import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import Home1 from "@/Components/Home1";
import Home2 from "@/Components/Home2";
import Home3 from "@/Components/Home3";
import Host from "@/Components/Host";
import NavBar from "@/Components/NavBar";
import TextSlidet from "@/Components/TextSlidet";


export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <Home1/>
      <Home2/>
      <Home3/>
      <Card/>
      <TextSlidet/>
      <Host/>
       
     </div>
  );
}
