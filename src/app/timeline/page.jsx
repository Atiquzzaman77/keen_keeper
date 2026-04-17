'use client';

import React, { useState } from 'react';
import { useTimeline } from '@/context/TimelineContext';
import { MessageSquare, Phone, Video, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const TimelinePage = () => {
    const { events } = useTimeline();
    const [filter, setFilter] = useState('All');

    // Filter Logic
    const filteredEvents = filter === 'All' 
        ? events 
        : events.filter(event => event.type.includes(filter));

    const getIcon = (type) => {
        if (type.includes('Text')) return <MessageSquare className="text-blue-500" />;
        if (type.includes('Voice')) return <Phone className="text-green-500" />;
        return <Video className="text-purple-500" />;
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Timeline</h1>
                        
                    </div>
                    <Link href="/" className="btn btn-ghost border-gray-300">Back to Dashboard</Link>
                </div>

                {/* Filter Dropdown */}
                <div className="flex justify-start mb-6">
                    <div className="relative w-full sm:w-48">
                        <select 
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#244D3F] focus:border-transparent font-medium cursor-pointer"
                        >
                            <option value="All">Filter Timeline</option>
                            <option value="Text">Text Messages</option>
                            <option value="Voice">Voice Calls</option>
                            <option value="Video">Video Calls</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <ChevronDown size={18} />
                        </div>
                    </div>
                </div>

                {/* Timeline List */}
                <div className="space-y-4">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <div key={event.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-emerald-200 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform">
                                        {getIcon(event.type)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">
                                            {event.type} with <span className="text-[#244D3F]">{event.friendName}</span>
                                        </h4>
                                        <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                                            <Clock size={12} /> {event.date}
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                            <div className="flex justify-center mb-4">
                                <Clock size={48} className="text-gray-200" />
                            </div>
                            <p className="text-gray-400">No activities found for &quot;{filter}&quot;</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;