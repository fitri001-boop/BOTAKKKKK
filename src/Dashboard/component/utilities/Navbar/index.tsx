import Link from "next/link"

const Navbar =() => {
    return(
        <header className=" flex justify-between p-5 text-white">
            <Link href="/" className="font-extrabold text-lg">BARUDAK WELL</Link>
            <div className="flex flex-row gap-10 items-center font-bold">
                <Link href="home">Home</Link>
                <Link href="about">About Us</Link>
                <Link href="contact">contact</Link>
            </div>
            <input type="text" 
                   placeholder="cari halaman..."
                   className=" bg-transparent border-2 rounded-2xl px-3 text-sm w-45" />
        </header>
    )
}

export default Navbar 