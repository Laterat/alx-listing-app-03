
import Link from 'next/link';

// const Header: React.FC=()=>{
//     const accommodationTypes = ["Rooms", "Mansion", "Countryside", "Villa", "Tropical",
//                              "New","Amazing pool","Beach house", "Island", "Camping", "Apartment",
//                              "House", "Lakefront", "Farm house", "Treehouse","Cabins",
//                              "Castles", "Lakeside" ];

//     return(
//           <header className="bg-white mb-10">  
//              <div className="">
//                     <div className="flex justify-between">            
//                           <div className="text-2xl font-bold text-blue-600">
//                               <Link href="/">StayFind</Link>
//                            </div>

                    
//                            <div className="flex-grow mx-6 hidden lg:block">
//                                   <input
//                                       type="text"
//                                       placeholder="Search destinations or properties"
//                                      className="w-full border rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                      />
                            
//                             </div>

//                             <div className="flex space-x-4">
//                                  <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
//                                         Sign in </button>
//                                  <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
//                                          Sign Up</button>
//                             </div>

//                      </div>
//                      <div>
//                              <nav className="hidden md:flex space-x-4">
//                                              {accommodationTypes.map((type) => (
//                                        <Link
//                                          key={type}
//                                            href={`/accommodation/${type.toLowerCase()}`}
//                                           className="text-gray-700 hover:text-blue-500 transition-colors"
//                                            > {type} </Link>
//                                          ))}
//                              </nav>

//                      </div>
//              </div>

//           </header>
//     );
// }

//export default Header;

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">LuxuryStays</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Rooms</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Mansions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Countryside</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Beachfront</a>
          </nav>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-700">Sign In</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Sign Up</button>
          </div>
        </div>
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations, properties..."
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;