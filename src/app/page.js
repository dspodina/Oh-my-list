import AddButton from "./components/AddButton"
import ProductInput from "./components/ProductInput"
import GroceryList from "./components/GroceryList"


export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
        <div className="mb-12 flex flex-col justify-center lg:justify-start items-center lg:items-start">
            <h2 className="text-3xl font-extralight py-0 mb-10 max-w-sm lg:max-w-md text-center lg:text-left">
              Let's get ready for grocery shopping!
            </h2>
            <ProductInput />
            <AddButton />
          </div>
          <div className="bg-white drop-shadow-md rounded-lg w-[300px] md:w-1/3 lg:mt-[-70px] mb-20 mx-auto">
            <GroceryList />
          </div>
        </div>
      </div>
    </main>
  )
}

// import AddButton from "./components/AddButton";
// import ProductInput from "./components/ProductInput";
// import GroceryList from "./components/GroceryList";

// export default function Home() {
//   return (
//     <main>
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           <div className="mb-12 flex flex-col justify-center lg:justify-start items-center lg:items-start">
//             <h2 className="text-3xl font-light py-0 mb-10 max-w-sm lg:max-w-md text-center">
//               Let's get ready for grocery shopping!
//             </h2>
//             <ProductInput />
//             <AddButton />
//           </div>
//           <div className="bg-white shadow-md rounded-lg w-full md:w-1/2 lg:w-1/3 mt-[-70px] mb-20 mx-auto lg:mx-0">
//             <GroceryList />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

