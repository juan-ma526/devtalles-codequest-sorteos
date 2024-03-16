import Menu from "./components/Menu"

export default function layout({children}) {
  return (
    <>

            <div className="flex bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-purple-600 selection:text-white">
                <div className="flex relative w-screen">
                    <Menu />
                    <div className="text-black px-2 mt-2 w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
  )
}
