import Header from "../Header/Header"

type Props = {
  children: React.ReactNode
}

const Main = ({ children }:Props) => {
  return (
    <main className="w-full h-full bg-gray-900 flex flex-col justify-start items-center gap-1 flex-nowrap">
    <Header />
    {children}
    </main>
  )
}

export default Main