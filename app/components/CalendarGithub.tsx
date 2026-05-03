"use client";
import { useEffect, useState } from "react";

function GithubCalendarSkeleton() {
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <h2 className="text-white text-xl font-semibold">
                Actividad en GitHub
            </h2>

            <div className="w-full overflow-hidden">
                <div className="flex gap-[3px] justify-center">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-[3px]">
                            {Array.from({ length: 7 }).map((_, j) => (
                                <div
                                    key={j}
                                    className="aspect-square w-2 sm:w-2.5 md:w-3 rounded bg-slate-700 animate-pulse"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CalendarGithub() {
    const [data, setData] = useState<any>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        fetch("/api/github")
            .then((res) => res.json())
            .then(setData);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!data) return <GithubCalendarSkeleton />;

    const allWeeks =
        data.data.user.contributionsCollection.contributionCalendar.weeks;

    // 👇 mostramos solo el último tercio en mobile
    const weeks = isMobile
        ? allWeeks.slice(Math.floor(allWeeks.length * (2 / 3)))
        : allWeeks;

    const getColor = (count: number) => {
        if (count === 0) return "#161b22";
        if (count < 3) return "#0e4429";
        if (count < 6) return "#006d32";
        if (count < 10) return "#26a641";
        return "#39d353";
    };

    return (
        <div className="w-full flex flex-col items-center gap-6 mt-12">

            {/* Título */}
            <h2 className="text-white text-2xl font-semibold tracking-tight">
                Actividad en GitHub
            </h2>

            {/* Calendario */}
            <div className="w-full overflow-x-auto">
                <div className="flex gap-[3px] justify-center min-w-max px-2">
                    {weeks.map((week: any, i: number) => (
                        <div key={i} className="flex flex-col gap-[3px]">
                            {week.contributionDays.map((day: any, j: number) => (
                                <div
                                    key={j}
                                    title={`${day.date}: ${day.contributionCount}`}
                                    className="aspect-square w-4 sm:w-3 md:w-3.5 lg:w-4 rounded transition-all duration-200 hover:scale-125"
                                    style={{
                                        background: getColor(day.contributionCount),
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}