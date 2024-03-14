import Image from "next/image"
import Link from "next/link"

const Sorteo = ({ sorteo }) => {
    return (
        <>
            <>
                <div class="bg-white rounded-2xl shadow-xl px-8 py-8 sm:px-8 lg:px-8">
                    <div class="mb-12 space-y-4">
                        <h3 class="text-2xl font-semibold text-purple-900">{sorteo.title}</h3>
                        <p class="mb-6">{sorteo.description}</p>
                      
                    </div>
                    <Link className="px-8 py-4 text-xs font-bold text-white uppercase transition-all duration-150 bg-purple-500 rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none ease" href="/login">Participar</Link>
                    <Image
                        height={600}
                        width={900}
                        alt={sorteo.title}
                        src="/wink.png" class="w-2/3 ml-auto -mb-8" loading="lazy" />
                </div>

            </>
        </>
    )
}

export default Sorteo
