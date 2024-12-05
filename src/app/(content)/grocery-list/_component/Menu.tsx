export default function Menu() {
  const menuItems = [
    { name: 'Breakfast', active: true },
    { name: 'Lunch', active: false },
    { name: 'Dinner', active: false },
    { name: 'Snacks', active: false },
  ];

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex gap-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`rounded-full px-6 py-2 text-sm font-medium ${
                item.active 
                  ? 'bg-green text-white' 
                  : 'bg-[#F8F9FB] text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
