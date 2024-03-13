import Link from "next/link"

const Sorteo = ({sorteo}) => {
  return (
   <>
           <>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <Link className='w-full' href={"/post/" + sorteo.id} >
                    <img
                    height={500}
                    width={500}
                    alt={sorteo.title}
                    src={`https://picsum.photos/seed/${sorteo.id}/500/500`} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" /></Link>
                <p className="bg-purple-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
                rounded-full uppercase inlineBlock">Sorteo</p>
                <Link href={"/post/" + sorteo.id} className="text-lg font-bold sm:text-xl md:text-2xl">{sorteo.title}</Link>
                <p className="text-sm text-black">{sorteo.description.substring(0,100).concat('...')}</p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Admin</a>
                    {/* <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">{
                        format(new Date(sorteo.createdAt), 'MMMM do yyyy, h:mm:ss a')
                    }</p> */}
                    <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                </div>
            </div>
        </>
   </>
  )
}

export default Sorteo