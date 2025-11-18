import { BookOpen, Calendar, CheckCircle2, Clock3, GraduationCap } from "lucide-react";

const upcomingClasses = [
  {
    title: "Data Structures",
    start: "Today · 09:00",
    location: "Room 214",
    instructor: "Dr. Patel",
  },
  {
    title: "Modern Art History",
    start: "Today · 13:30",
    location: "Studio 4",
    instructor: "Prof. Lane",
  },
  {
    title: "Applied Physics Lab",
    start: "Tomorrow · 08:15",
    location: "Lab A",
    instructor: "Dr. Nguyen",
  },
];

const assignments = [
  {
    title: "CS310 · Project proposal",
    due: "Due in 2 days",
    status: "In progress",
  },
  {
    title: "ART205 · Mood board",
    due: "Due tomorrow",
    status: "Needs review",
  },
  {
    title: "PHY221 · Lab report",
    due: "Due in 5 days",
    status: "Draft saved",
  },
];

const courseProgress = [
  { name: "Data Structures", progress: 76 },
  { name: "Art History", progress: 58 },
  { name: "Physics Lab", progress: 92 },
  { name: "Creative Writing", progress: 40 },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.16),transparent_50%)]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-12">
        <header className="flex flex-wrap items-end justify-between gap-6 rounded-3xl border border-white/5 bg-white/5 px-8 py-10 backdrop-blur-2xl">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
              Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
              Welcome back, Maya
            </h1>
            <p className="mt-3 max-w-xl text-base text-slate-300">
              You are on track this week. Keep a steady pace and review the
              notes for Data Structures before tomorrow’s quiz.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-300 sm:w-64">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.35)]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                <span>Week 08</span>
                <span>Spring 2025</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Focus time</p>
                  <p className="text-2xl font-semibold text-white">13h 45m</p>
                </div>
                <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  +12% vs last week
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.45)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                  GPA
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">3.86</p>
              </div>
              <GraduationCap className="size-9 text-slate-200" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">
              Excellent academic standing. Maintain at least 2h of daily review to stay ahead.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/25 via-sky-500/10 to-transparent p-6 shadow-[0_15px_40px_rgba(56,189,248,0.35)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-200">
                  Credits
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">46 / 64</p>
              </div>
              <BookOpen className="size-9 text-slate-100" />
            </div>
            <div className="mt-6 h-2 rounded-full bg-white/10">
              <div className="h-full w-[72%] rounded-full bg-white/80" />
            </div>
            <p className="mt-4 text-sm text-slate-200">
              On pace to complete all required credits this semester.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.45)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                  Attendance
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">96%</p>
              </div>
              <CheckCircle2 className="size-9 text-emerald-300" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">
              Marked as present for 23 of 24 sessions this term. Keep the streak going.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-black/50 p-7 shadow-[0_25px_60px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Upcoming schedule</h2>
                <p className="text-sm text-slate-400">Plan out the next 24 hours.</p>
              </div>
              <Calendar className="size-8 text-slate-300" />
            </div>
            <div className="mt-6 space-y-4">
              {upcomingClasses.map((session) => (
                <div
                  key={`${session.title}-${session.start}`}
                  className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{session.title}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {session.location} · {session.instructor}
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium text-slate-200">
                    {session.start}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-black/40 to-black/60 p-6 shadow-[0_25px_60px_rgba(16,185,129,0.35)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-200">
                    Focus streak
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">5 days</p>
                </div>
                <Clock3 className="size-8 text-emerald-200" />
              </div>
              <p className="mt-5 text-sm text-emerald-100">
                Tomorrow’s goal: complete the CS310 proposal draft before 20:00.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-white">Quick notes</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  Meet with design group at 16:30 in the studio commons.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Send follow-up email to internship mentor about review session.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  Upload physics lab data set before Friday midnight.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_25px_60px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Assignments</h2>
                <p className="text-sm text-slate-400">Stay ahead of approaching deadlines.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {assignments.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-black/60 px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.status}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-200">
                    {item.due}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/50 p-7 shadow-[0_25px_60px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Course progress</h2>
              <BookOpen className="size-7 text-slate-300" />
            </div>
            <div className="mt-6 space-y-5">
              {courseProgress.map((course) => (
                <div key={course.name}>
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span>{course.name}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
          <span>
            Updated ·
            {" "}
            {new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
          </span>
          <span>Student dashboard</span>
        </footer>
      </main>
    </div>
  );
}
