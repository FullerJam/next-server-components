// ./app/@user/page.tsx

export default async function Page() {
  // Add an artificial delay to simulate data loading.
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  return (
    <main className="flex flex-col items-center justify-between p-24 bg-green-300">
      <div className="text-black">
        <p>User</p>
      </div>
    </main>
  );
}
