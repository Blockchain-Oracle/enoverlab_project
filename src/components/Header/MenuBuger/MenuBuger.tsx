export default function MenuBuger() {
  return (
    <button aria-label="Open Menu" className="p-2" type="button">
      <BugerIcon />
    </button>
  );
}

const BugerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-green hover:cursor-pointer hover:text-green/75"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
