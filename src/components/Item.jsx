export default function Item({ name, price }) {
  return (
    <>
      <div className="w-[20vw]  flex flex-col justify-center items-center border-4 border-black rounded-2xl p-2 ">
        <div className="flex justify-around items-center w-full ">
          <h1 className="text-3xl">{name}</h1>
          <h2 className="text-1xl">{price}Rs</h2>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/41PTh1Khx8L.jpg"
          alt=""
          className="w-23"
        />
        <button className="bg-yellow-300 rounded-md text-white p-1 mt-2 border-1 border-black">
          add to cart
        </button>
      </div>
    </>
  );
}
