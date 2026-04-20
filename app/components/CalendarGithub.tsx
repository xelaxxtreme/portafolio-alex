"use client";
import { useEffect, useState } from "react";

function GithubCalendarSkeleton() {
    const skeletonWeeks = Array.from({ length: 52 });

    return (
        <div className="w-full flex justify-center overflow-x-auto">
            <div className="flex gap-1">
                {skeletonWeeks.map((_, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        {Array.from({ length: 7 }).map((_, j) => (
                            <div
                                key={j}
                                className="w-3 h-3 rounded bg-slate-700 animate-pulse"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CalendarGithub() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("/api/github")
            .then((res) => res.json())
            .then(setData);
    }, []);

    if (!data) return <GithubCalendarSkeleton />;

    const weeks =
        data.data.user.contributionsCollection.contributionCalendar.weeks;

    const getColor = (count: number) => {
        if (count === 0) return "#161b22";
        if (count < 3) return "#0e4429";
        if (count < 6) return "#006d32";
        if (count < 10) return "#26a641";
        return "#39d353";
    };

    return (
        <div className="w-full flex justify-center overflow-x-auto">
            <div className="flex gap-1">
                {weeks.map((week: any, i: number) => (
                    <div key={i} className="flex flex-col gap-1">
                        {week.contributionDays.map((day: any, j: number) => (
                            <div
                                key={j}
                                title={`${day.date}: ${day.contributionCount}`}
                                className="w-3 h-3 rounded transition-colors duration-300"
                                style={{
                                    background: getColor(day.contributionCount),
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}