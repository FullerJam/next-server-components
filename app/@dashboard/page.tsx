// ./app/@dashboard/page.tsx

export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => {
    throw new Error("something went wrong...");
  });

  return (
    <main className="flex flex-col items-center justify-between p-24 bg-orange-300">
      <div className="text-black">
        <p>Dashboard</p>
      </div>
    </main>
  );
}
