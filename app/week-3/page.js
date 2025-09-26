import DisplayItems from "./item-list";
export default function Page() {
  return (
    <main >
      <h1 className="text-4xl font-bold m-6  flex flex-col items-center">Shopping List</h1>
      <DisplayItems/>
    </main>
  );
}