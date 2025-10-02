import ItemList from "./item-list";
export default function Page() {
  return (
    <div>
      <title>week-3</title>
      <h1 className="text-white text-4xl font-bold m-6  flex flex-col items-center">Shopping List</h1>
      <ItemList/>
    </div>
  );
}