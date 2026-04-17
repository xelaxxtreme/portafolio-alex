"use client";
import { useEffect, useState } from "react";

function GithubCalendarSkeleton() {
    const skeletonDays = Array.from({ length: 7 * 52 }); // semanas * días

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 12px)",
                gap: "4px",
            }}
        >
            {skeletonDays.map((_, i) => (
                <div
                    key={i}
                    style={{
                        width: 12,
                        height: 12,
                        borderRadius: 2,
                        background: "#2d333b",
                        animation: "pulse 1.5s infinite ease-in-out",
                    }}
                />
            ))}

            <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
        </div>
    );
}

export default function CalendarGithub() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("/api/github")
            .then(res => res.json())
            .then(setData);
    }, []);

    if (!data) return <GithubCalendarSkeleton />;

    const days =
        data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
            (week: any) => week.contributionDays
        );

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 12px)",
                gap: "4px",
            }}
        >
            {days.map((day: any, i: number) => (
                <div
                    key={i}
                    title={`${day.date}: ${day.contributionCount}`}
                    style={{
                        width: 12,
                        height: 12,
                        borderRadius: 2,
                        transition: "background 0.3s ease",
                        background:
                            day.contributionCount > 0 ? "#39d353" : "#161b22",
                    }}
                />
            ))}
        </div>
    );
}