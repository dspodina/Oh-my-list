import AddButton from "./components/AddButton"
import ProductInput from "./components/ProductInput"
import GroceryList from "./components/GroceryList"


export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <div className="text-3xl tracking-wide font-extralight py-0 mb-10 max-w-md text-center">
              <h2>Let's get ready for grocery shopping!</h2>
            </div>
            <ProductInput />
            <AddButton />
          </div>
          <div className="container bg-white rounded-lg min-w-500px w-1/3 mt-[-70px] mb-24">
            <GroceryList />
          </div>
        </div>
      </div>
    </main>
  )
}
