'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import {
    ArrowLeft, Mail, Calendar, Trash,
    MessageSquare, Phone, Video,
    Archive
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useTimeline } from '@/context/TimelineContext'; 


const friendsData = [
    { "id": 1, "name": "Arif Ahmed", "picture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", "email": "arif.dev@example.com", "days_since_contact": 25, "status": "overdue", "tags": ["College", "Tech Enthusiast"], "bio": "A brilliant software engineer who helped me during my first React project.", "goal": 14, "next_due_date": "2026-04-05" },
    { "id": 2, "name": "Sabrina Khan", "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", "email": "sabrina.k@example.com", "days_since_contact": 3, "status": "on-track", "tags": ["Close Friend", "Traveler"], "bio": "Childhood best friend. She is passionate about photography.", "goal": 7, "next_due_date": "2026-04-20" },
    { "id": 3, "name": "Tanvir Hossain", "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", "email": "tanvir.h@example.com", "days_since_contact": 12, "status": "almost due", "tags": ["Gym Buddy", "Neighbor"], "bio": "A fitness enthusiast who keeps me motivated.", "goal": 14, "next_due_date": "2026-04-18" },
    { "id": 4, "name": "Rashedul Islam", "picture": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200", "email": "rashed.islam@example.com", "days_since_contact": 45, "status": "overdue", "tags": ["Work", "Mentor"], "bio": "My first professional mentor. He taught me clean code.", "goal": 30, "next_due_date": "2026-03-01" },
    { "id": 5, "name": "Nabila Rahman", "picture": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", "email": "nabila.r@example.com", "days_since_contact": 5, "status": "on-track", "tags": ["University", "Artist"], "bio": "An incredibly talented digital illustrator.", "goal": 21, "next_due_date": "2026-05-02" },
    { "id": 6, "name": "Sajid Hasan", "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", "email": "sajid.hasan@example.com", "days_since_contact": 9, "status": "almost due", "tags": ["Gaming", "Close Friend"], "bio": "Competitive CS:GO player. Lockdown gaming partner.", "goal": 10, "next_due_date": "2026-04-17" },
    { "id": 7, "name": "Mehzabin Mim", "picture": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200", "email": "mim.mehzabin@example.com", "days_since_contact": 60, "status": "overdue", "tags": ["High School", "Old Friend"], "bio": "Pursuing a career in medicine. Old high school friend.", "goal": 30, "next_due_date": "2026-02-15" },
    { "id": 8, "name": "Imtiaz Rahim", "picture": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", "email": "imtiaz.r@example.com", "days_since_contact": 2, "status": "on-track", "tags": ["Family", "Brotherly"], "bio": "More like a brother than a cousin. Learning web development together.", "goal": 7, "next_due_date": "2026-04-21" }
];

const FriendDetails = ({ params }) => {
    const { friendId } = React.use(params);
    const router = useRouter();
    const { addEvent } = useTimeline(); 

    const friend = friendsData.find(f => f.id === parseInt(friendId));

    if (!friend) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Friend Not Found!</h2>
                    <Link href="/" className="btn btn-primary mt-4">Back to Home</Link>
                </div>
            </div>
        );
    }

    const handleAction = (actionType) => {
        
        addEvent(friend.name, actionType);

        
        toast.success(`${actionType} initiated for ${friend.name}!`, {
            style: {
                borderRadius: '12px',
                background: '#244D3F',
                color: '#fff',
                fontWeight: 'bold'
            },
            icon: '✅',
        });

        
        
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <Toaster position="top-center" />

            <div className="max-w-6xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#244D3F] mb-6 transition-all font-medium group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center grow">
                            <div className="relative mb-2">
                                <Image
                                    src={friend.picture}
                                    alt={friend.name}
                                    width={128}
                                    height={128}
                                    className="rounded-full w-32 h-32 object-cover border-4 border-[#244D3F]/5 shadow-xl"
                                />
                                <span className={`absolute bottom-2 right-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase border-2 border-white shadow-sm ${friend.status === 'overdue' ? 'bg-red-500 text-white' :
                                    friend.status === 'almost due' ? 'bg-amber-400 text-white' :
                                    'bg-emerald-500 text-white'
                                    }`}>
                                    {friend.status}
                                </span>
                            </div>

                            <h2 className="font-bold text-2xl text-gray-800 mb-1">{friend.name}</h2>
                            <p className="text-gray-400 text-sm mb-5 flex items-center gap-1.5">
                                <Mail size={14} /> {friend.email}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {friend.tags.map((tag, i) => (
                                    <span key={i} className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-gray-50 p-5 rounded-xl w-full">
                                <p className="text-gray-600 text-sm italic leading-relaxed">
                                    &quot;{friend.bio}&quot;
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <button className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center gap-3 text-gray-600 font-semibold">
                                <Calendar size={18} className="text-blue-500" /> Snooze 2 weeks
                            </button>
                            <button className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-center gap-3 text-gray-600 font-semibold">
                                <Archive size={18} className="text-blue-500" />Archive
                            </button>
                            <button className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-red-50 flex items-center justify-center gap-3 text-red-500 font-semibold">
                                <Trash size={18} /> Delete Contact
                            </button>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                                <div className="text-4xl font-bold text-[#244D3F] mb-1">{friend.days_since_contact}</div>
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Days Since</div>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                                <div className="text-4xl font-bold text-[#244D3F] mb-1">{friend.goal}</div>
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Goal Period</div>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                                <div className="text-xl font-bold text-[#244D3F] mb-2">{friend.next_due_date}</div>
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Next Due</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                           <div className='flex justify-between items-center'>
                             <h3 className="text-xl font-bold text-gray-800 mb-2">Relationship Goals</h3>
                             <button className='btn btn-ghost btn-sm border-gray-200'>Edit</button>
                           </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Connect Every <b>{friend.goal} days</b>
                            </p>
                        </div>

                        
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 grow">
                            <div className="max-w-xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Check-In</h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button
                                        onClick={() => handleAction('Text Message')}
                                        className="flex flex-col items-center gap-3 bg-base-200 hover:bg-[#244D3F] hover:text-white p-6 rounded-xl border border-gray-200 transition-all group"
                                    >
                                        <MessageSquare size={24} />
                                        <span className="font-semibold text-sm">Text</span>
                                    </button>
                                    <button
                                        onClick={() => handleAction('Voice Call')}
                                        className="flex flex-col items-center gap-3 bg-base-200 hover:bg-[#244D3F] hover:text-white p-6 rounded-xl border border-gray-200 transition-all group"
                                    >
                                        <Phone size={24} />
                                        <span className="font-semibold text-sm">Call</span>
                                    </button>
                                    <button
                                        onClick={() => handleAction('Video Call')}
                                        className="flex flex-col items-center gap-3 bg-base-200 hover:bg-[#244D3F] hover:text-white p-6 rounded-xl border border-gray-200 transition-all group"
                                    >
                                        <Video size={24} />
                                        <span className="font-semibold text-sm">Video</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;