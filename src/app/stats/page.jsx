'use client';

import React from 'react';
import { useTimeline } from '@/context/TimelineContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function StatsPage() {
    const { events } = useTimeline();

    
    const statsData = [
        { name: 'Text Messages', value: events.filter(e => e.type.includes('Text')).length, color: '#3b82f6' },
        { name: 'Voice Calls', value: events.filter(e => e.type.includes('Voice')).length, color: '#10b981' },
        { name: 'Video Calls', value: events.filter(e => e.type.includes('Video')).length, color: '#8b5cf6' },
    ];

    const totalEvents = events.length;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Friendship Analytics</h1>

                
                <div className="flex flex-col gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    
                    
                    <p className='font-semibold text-xl text-gray-700'>By Interaction Type</p>
                    
                    <div className="h-64 w-full">
                        {totalEvents > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={statsData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {statsData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend verticalAlign="bottom" height={36}/>
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400 italic">
                                No data available to display chart
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}