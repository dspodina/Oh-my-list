import AddButton from "./components/AddButton"
import ProductInput from "./components/ProductInput"
import GroceryList from "./components/GroceryList"


export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="flex flex-col items-center mb-12">
            <div className="text-3xl tracking-wide font-extralight py-0 mb-10 max-w-md text-center">
              <h2>Let's get ready for grocery shopping!</h2>
            </div>
            <ProductInput />
            <AddButton />
          </div>
          <div className="bg-white drop-shadow-md divide-x rounded-lg lg:w-1/3 lg:mt-[-70px] mb-40 mx-4">
            <GroceryList />
          </div>
        </div>
      </div>
    </main>
  )
}
