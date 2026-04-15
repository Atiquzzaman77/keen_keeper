import Image from 'next/image';
import React from 'react';

// Static Friends Data
const friendsData = [
  {
    "id": 1,
    "name": "Arif Ahmed",
    "picture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    "email": "arif.dev@example.com",
    "days_since_contact": 25,
    "status": "overdue",
    "tags": ["College", "Tech Enthusiast"],
    "bio": "A brilliant software engineer who helped me during my first React project. We usually discuss system design and open-source contributions.",
    "goal": 14,
    "next_due_date": "2026-04-05"
  },
  {
    "id": 2,
    "name": "Sabrina Khan",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    "email": "sabrina.k@example.com",
    "days_since_contact": 3,
    "status": "on-track",
    "tags": ["Close Friend", "Traveler"],
    "bio": "Childhood best friend. She is passionate about photography and often shares her travel stories from around Bangladesh.",
    "goal": 7,
    "next_due_date": "2026-04-20"
  },
  {
    "id": 3,
    "name": "Tanvir Hossain",
    "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    "email": "tanvir.h@example.com",
    "days_since_contact": 12,
    "status": "almost due",
    "tags": ["Gym Buddy", "Neighbor"],
    "bio": "A fitness enthusiast who keeps me motivated. We used to go to the same gym in Dinajpur before he moved to Dhaka.",
    "goal": 14,
    "next_due_date": "2026-04-18"
  },
  {
    "id": 4,
    "name": "Rashedul Islam",
    "picture": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200",
    "email": "rashed.islam@example.com",
    "days_since_contact": 45,
    "status": "overdue",
    "tags": ["Work", "Mentor"],
    "bio": "My first professional mentor. He taught me the importance of clean code and project management. Haven't spoken to him in a while.",
    "goal": 30,
    "next_due_date": "2026-03-01"
  },
  {
    "id": 5,
    "name": "Nabila Rahman",
    "picture": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    "email": "nabila.r@example.com",
    "days_since_contact": 5,
    "status": "on-track",
    "tags": ["University", "Artist"],
    "bio": "An incredibly talented digital illustrator. We often collaborate on UI/UX projects where she handles the visual assets.",
    "goal": 21,
    "next_due_date": "2026-05-02"
  },
  {
    "id": 6,
    "name": "Sajid Hasan",
    "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    "email": "sajid.hasan@example.com",
    "days_since_contact": 9,
    "status": "almost due",
    "tags": ["Gaming", "Close Friend"],
    "bio": "Competitive CS:GO player. We spent countless nights gaming together during the lockdown. He lives in Chittagong now.",
    "goal": 10,
    "next_due_date": "2026-04-17"
  },
  {
    "id": 7,
    "name": "Mehzabin Mim",
    "picture": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    "email": "mim.mehzabin@example.com",
    "days_since_contact": 60,
    "status": "overdue",
    "tags": ["High School", "Old Friend"],
    "bio": "A very kind person from my high school days. She is now pursuing a career in medicine. Definitely need to reconnect.",
    "goal": 30,
    "next_due_date": "2026-02-15"
  },
  {
    "id": 8,
    "name": "Imtiaz Rahim",
    "picture": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    "email": "imtiaz.r@example.com",
    "days_since_contact": 2,
    "status": "on-track",
    "tags": ["Family", "Brotherly"],
    "bio": "More like a brother than a cousin. He is also learning web development and we often share interesting articles from Medium.",
    "goal": 7,
    "next_due_date": "2026-04-21"
  }
];

const Friends = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold text-[#1F2937]">Your Friends</h2>
                    </div>
                    <span className="text-sm font-medium text-gray-400">Total: {friendsData.length}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {friendsData.map((friend) => (
                        <div key={friend.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full group">
                            
                            
                            <div className="flex flex-col items-center justify-center mb-4">
                                <div className="relative group-hover:scale-105 transition-transform duration-300">
                                    <Image 
                                        loading="eager" 
                                        src={friend.picture} 
                                        alt={friend.name} 
                                        width={100} 
                                        height={100} 
                                        className="rounded-full w-24 h-24 object-cover border-4 border-[#244D3F]/10 shadow-inner"
                                    />
                                </div>
                            </div>
                            
                            <div className='text-center mb-3'>
                                <h2 className='font-bold text-xl text-[#1F2937]'>{friend.name}</h2>
                                <p className='text-gray-400 text-sm'>{friend.days_since_contact}d ago</p>
                            </div>

                            <div className='text-center flex flex-wrap justify-center gap-2 mb-4'>
                                {friend.tags.map((tag, i) => (
                                    <span 
                                        className='badge bg-green-50 text-[#244D3F] border border-green-100 text-[10px] px-3 py-2 rounded-full font-medium' 
                                        key={i}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            
                            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-center items-center">
                                <div className="flex flex-col">
                                    <span className={`text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full text-center ${
                                        friend.status === 'overdue' ? 'bg-red-50 text-red-500' : 
                                        friend.status === 'almost due' ? 'bg-yellow-50 text-yellow-600' : 
                                        'bg-green-50 text-green-600'
                                    }`}>
                                        {friend.status.replace('-', ' ')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Friends;