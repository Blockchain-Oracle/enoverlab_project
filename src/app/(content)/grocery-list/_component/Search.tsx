import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

export default function Search() {
  return (
    <div className="bg-[#F8F9FB] py-8">
      <div className="container mx-auto px-4">
        <div className="flex w-full justify-center">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-[500px] rounded-full  bg-green/40 px-6 py-4 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-green/50"
            />
            <button className="flex h-[52px] min-w-[120px] items-center justify-center gap-2 rounded-full bg-[#FFC244] text-white px-6 text-gray-600 shadow-md hover:bg-gray-50">
              <FilterListIcon />
              Filter
            </button>
            <button className="flex h-[52px] min-w-[140px] items-center justify-center gap-2 rounded-full bg-[#84C52A] text-white px-6 text-gray-600 shadow-md hover:bg-gray-50">
              <AddIcon />
              Add Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
