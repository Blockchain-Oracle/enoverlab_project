"use client";

export default function MenuBuger() {
  return (
    <div className="text-green hover:text-green/60">
      <span className="relative block h-0.5 w-6 bg-current transition-all">
        <span className="absolute -top-2 block h-0.5 w-6 bg-current transition-all"></span>
        <span className="absolute top-2 block h-0.5 w-6 bg-current transition-all"></span>
      </span>
    </div>
  );
}
