const retrieveData = async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  return res.json();
};

const ServerComponent = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await retrieveData();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  console.log(data);
  return (
    <div>
      <h1>ServerComponent</h1>
    </div>
  );
};

export default ServerComponent;
