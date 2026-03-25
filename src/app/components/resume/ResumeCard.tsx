import { IconType } from "react-icons";

interface ResumeCardProps {
  role: string;
  institution: string;
  icon: IconType;
  date?: string;
  description: string;
}

export default function ResumeCard({
  role,
  institution,
  icon: Icon,
  date,
  description,
}: ResumeCardProps) {
  return (
    <div className="relative flex items-start gap-5 bg-slate-900 border border-slate-800 
      hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10
      p-5 sm:p-6 rounded-2xl transition-all duration-300 group">

      {/* Icon */}
      <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-600/10 border border-indigo-500/20 
        grid place-items-center group-hover:bg-indigo-600/20 transition-colors duration-300">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>

      <div className="flex-1 min-w-0">
        {/* Date badge */}
        {date && (
          <span className="inline-block mb-2 px-3 py-0.5 rounded-full bg-slate-800 
            border border-slate-700 text-gray-400 text-xs font-medium">
            {date}
          </span>
        )}

        {/* Role */}
        <h3 className="text-gray-100 text-base sm:text-lg font-semibold leading-snug
          group-hover:text-indigo-400 transition-colors duration-300">
          {role}
        </h3>

        {/* Institution */}
        <p className="text-indigo-400/80 text-sm font-medium mt-0.5 mb-3">
          {institution}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}