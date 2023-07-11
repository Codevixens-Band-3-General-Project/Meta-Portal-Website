function Divider() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 border-t border-gray-500">
        <span className="h-1 w-4 bg-gray-500"></span>
      </div>
    </div>
  );
}

function PageDivider() {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="w-2/5 border-t border-gray-500    ">
        <span className="h-1 w-15 bg-gray-500"></span>
      </div>
      <div className="flex flex-row justify-between gap-x-4 px-5">
        <div className="bg-[#e7e5e505] rounded-full w-1/8 border-2 border-[#ffffff79] p-1"></div>
        <div className="bg-[#e7e5e505] rounded-lg w-44 border-2 border-[#ffffff79] px-12 py-1"></div>
        <div className="bg-[#e7e5e505] rounded-full w-1/8 border-2 border-[#ffffff79] p-1"></div>
      </div>
      <div className="w-2/5 border-t border-gray-500 ">
        <span className="h-1 w-15 bg-gray-500"></span>
      </div>
    </div>
  );
}

export { Divider, PageDivider };
