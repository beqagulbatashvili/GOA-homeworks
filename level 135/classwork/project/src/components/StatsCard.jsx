import React from "react";

export default function StatsCard() {
    return (
            <div className="w-[220px] h-[160px] bg-blue-100 rounded-2xl flex flex-col items-center justify-center">
                <div className="w-11 h-11 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-lg font-bold">+</span>
                </div>
                <div className="text-2xl font-bold">714k</div>
                <div className="text-sm text-gray-600">Weekly Sales</div>
            </div>
    );
}
