import ItemList from "./item-list";
export default function Page() {
  return (
    <div>
      <title>week-3</title>
      <h1 className="flex flex-col items-center text-white border-slate-800 bg-slate-800 w-full max-w-xs m-4 p-2 ">Shopping List</h1>
      <ItemList/>
    </div>
  );
}