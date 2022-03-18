export const HomeCard = (home: Home) => (
  <div className="w-full p-4 mb-1 overflow-hidden bg-white border rounded shadow-xl">
    <div className="flex justify-between w-full pb-3">
      <div className="flex flex-row justify-between w-full">
        <span className="text-sm font-bold">{home.address}</span>
        <span className="text-sm font-bold text-blue-900">{home.price}</span>
      </div>
      <span className="px-2 rounded cursor-pointer hover:bg-gray-300"><i className="pt-2 text-lg fas fa-ellipsis-h"></i></span>
    </div>
    <img className="w-full h-48 bg-cover" src={home.picture} alt="home picture" />
    <div className="pb-2">
      <div className="pt-2">
        <i className="cursor-pointer far fa-heart"></i>
        <span className="text-sm font-medium text-gray-400">{home.owner}</span>
      </div>
      <div className="pt-1">
        <div className="mb-2 text-sm">
          <span className="mr-2 font-medium">Surface:</span> {home.surface}
        </div>
      </div>
    </div>
  </div>
);