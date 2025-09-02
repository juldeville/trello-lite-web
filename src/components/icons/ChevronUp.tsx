function ChevronUp({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="rounded-full p-2 hover:bg-base-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-4 cursor-pointer rounded-full hover:bg-base-200"
        onClick={() => handleClick()}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
    </div>
  );
}

export default ChevronUp;
