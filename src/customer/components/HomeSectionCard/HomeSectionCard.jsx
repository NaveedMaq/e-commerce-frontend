function HomeSectionCard() {
  return (
    <div className="mx-3 flex w-[15rem] cursor-pointer flex-col items-center  overflow-hidden rounded-lg border bg-white shadow-lg">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="h-full w-full object-cover object-top"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/f/z/l/m-white-formal-youthfirst-original-imagqjdfgwjfwgsb.jpeg?q=70"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">BRUTON</h3>
        <p className="mt-2 text-sm text-gray-500">
          Trendy Sports Running Running Shoes For Men
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
