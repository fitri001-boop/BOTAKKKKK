import Image from "next/image";
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className="min-h-screen bg-[#FEF3E5] flex flex-col items-center justify-center">
      {/* Blok Tulisan */}
      <div className="flex">
        <h1 className="font-extrabold text-9xl ml-3">P</h1>
        <h1 className="font-extrabold text-9xl ml-3">O</h1>
        <h1 className="font-extrabold text-9xl ml-3">R</h1>
        <h1 className="font-extrabold text-9xl ml-3">t</h1>
        <h1 className="font-extrabold text-9xl ml-3">o</h1>
        <h1 className="font-extrabold text-9xl ml-3">f</h1>
        <h1 className="font-extrabold text-9xl ml-3">O</h1>
        <h1 className="font-extrabold text-9xl ml-3">L</h1>
        <h1 className="font-extrabold text-9xl ml-3">i</h1>
        <h1 className="font-extrabold text-9xl ml-3">o</h1>
      </div>

      {/* Blok Gambar */}
      <Image src="/sip sip.png" alt="..." width={300} height={300} className="inline-block align-middle"/>
    </div>
  );
};

export default Home;
