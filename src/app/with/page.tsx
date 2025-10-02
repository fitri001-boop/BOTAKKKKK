import Image from "next/image";

const Alma = () => {
  return (
    <div>
      {/* Latar belakang abu-abu */}
      <div className="h-screen w-screen bg-cover absolute bg-[#e6e6e6]" />

     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-200 h-100 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 overflow-hidden">
        
        {/* Light spot atas */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-pink-400 rounded-full blur-md" />
        
        {/* Light spot kiri */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[4px] h-[80px] bg-pink-400 rounded-full blur-md" />
        
        {/* Light spot kanan */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[4px] h-[80px] bg-white-400 rounded-full blur-md" />
        
        {/* Light spot bawah */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-pink-400 rounded-full blur-md" />
      </div>

     

      {/* Gambar di atas kotak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/mee.png"
          alt="..."
          width={300}
          height={300}
          className="h-70 w-50 drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Alma;
