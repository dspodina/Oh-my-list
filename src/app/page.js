import Image from "next/image"
import AddButton from "./components/AddButton"
import ProductInput from "./components/ProductInput"
import GroceryList from "./components/GroceryList"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-row justify-between p-4">
        <div className="flex flex-col justify-center items-center">
         <Image
            src="/oh-my-list.svg"
            alt="Logo"
            width={480}
            height={100}
          />
          <ProductInput />
          <AddButton />
        </div>
        <div className="flex flex-col p-12 mr-12 mt-24 bg-white rounded-lg w-1/2">
          <GroceryList />
        </div>
      </div>
    </main>
  )
}
