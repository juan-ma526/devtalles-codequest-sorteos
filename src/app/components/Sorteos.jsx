import Footer from "./Footer"
import Header from "./Header"
import Sorteo from "./Sorteo"

const Sorteos = ({sorteos}) => {
  return (
    <>
            <Header />
            <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
                <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
          max-w-7xl">
                    <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                        {
                            sorteos.map((sorteo) =>  <Sorteo key={sorteo.id} sorteo={sorteo} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default Sorteos