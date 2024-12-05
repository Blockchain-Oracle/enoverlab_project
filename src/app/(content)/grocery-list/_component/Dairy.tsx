import { Star } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ChevronRight } from "lucide-react";



export default function Dairy() {
    const drinks = [
      {
        name: 'Butter',
        description: 'Lorem ipsum dolor sit consectetur adipiscing.',
        image: '/images/grocery-list/butter.png',
        rating: 5
      },
      {
        name: 'Youghurt',
        description: 'Lorem ipsum dolor sit consectetur adipiscing.',
        image: '/images/grocery-list/youghurt.png',
        rating: 5
      },
      {
        name: 'Cheese',
        description: 'Lorem ipsum dolor sit consectetur adipiscing.',
        image: '/images/grocery-list/cheese.png',
        rating: 5
      }
    ];

    return (
        <div className="bg-[#F8F9FB] py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-medium text-gray-700">Dairy</h2>
              <button className="text-gray-600 hover:text-green">See more</button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              {drinks.map((item) => (
                <div 
                  key={item.name}
                  className="bg-white rounded-2xl p-4 shadow-sm"
                >
                  <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                    
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-[#84C52A]">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                    <button className="w-[250px] rounded-full bg-green py-2 text-white hover:bg-green/90">
                      Shop Now
                    </button>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <button className="flex items-center justify-center rounded-lg bg-[#FFC244] p-2 text-white">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
