"use client";

type SkillCategory = {
    title: string;
    skills: string[];
    color: string;
    border: string;
};

const categories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vite", "Tailwind"],
        color: "text-blue-300",
        border: "border-blue-500/30 bg-blue-500/10",
    },
    {
        title: "Backend",
        skills: ["Node.js", "PHP", "Laravel", "Express.js", "Sequelize", "API REST"],
        color: "text-green-300",
        border: "border-green-500/30 bg-green-500/10",
    },
    {
        title: "Mobile",
        skills: ["Flutter", "Dart", "Kotlin", "Java"],
        color: "text-violet-300",
        border: "border-violet-500/30 bg-violet-500/10",
    },
    {
        title: "Data & Cloud",
        skills: ["MySQL", "SQL Server", "SQLite", "PostgreSQL", "MongoDB", "Firebase", "Firestore", "Storage"],
        color: "text-orange-300",
        border: "border-orange-500/30 bg-orange-500/10",
    },
];

export default function Skills() {
    return (
        <section className="w-full flex justify-center px-4 py-16">
            <div className="max-w-5xl w-full text-center">

                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    Skills
                </h2>

                <div className="mt-4 mx-auto h-[2px] w-16 bg-cyan-400/60 rounded-full" />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className={`p-6 rounded-2xl border ${category.border} backdrop-blur transition hover:scale-[1.02]`}
                        >
                            <h3 className={`font-medium text-lg mb-4 ${category.color}`}>
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1 text-sm rounded-full border ${category.border} ${category.color}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}