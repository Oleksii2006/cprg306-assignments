import ItemList from "./item-list";
export default function Page() {
  return (
    <main >
      <title>week-3</title>
      <h1 className="text-4xl font-bold m-6  flex flex-col items-center">Shopping List</h1>
      <ItemList/>
    </main>
  );
}