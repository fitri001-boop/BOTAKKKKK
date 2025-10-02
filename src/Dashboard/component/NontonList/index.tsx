import Image from "next/image"
import Link from "next/link";

const NontonList= ({name, images, id}: { name: string; images: string }) => {
    return(
            <Link href={`/${id}`}className="cursor-pointer">
                <Image src={images} alt="image" width={350} height={350}/>
                <h3 className="font-bold md:text-xl text-md p-4">{name}</h3>
            </Link>
    )
}
export default NontonList