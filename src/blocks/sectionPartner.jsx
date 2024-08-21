import Bbs from "../assets/bbs.png";
import british from "../assets/british_airways.png";
import varta from "../assets/varta.png";
import weller from "../assets/weller.png";
import lenovo from "../assets/lenovo.png";
import lufthansa from "../assets/lufthansa.png";
export default function SectionPartner() {
  return (
    <section className="container grid grid-cols-6 p-4 pt-10 gap-10 justify-center items-center">
      <img src={varta} alt="" />
      <img src={lenovo} alt="" />
      <img src={Bbs} alt="" />
      <img src={weller} alt="" />
      <img src={british} alt="" />
      <img src={lufthansa} alt="" />
    </section>
  );
}
