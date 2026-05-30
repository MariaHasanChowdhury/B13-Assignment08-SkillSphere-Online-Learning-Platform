"use client";
const InstructorCard = ({ instructor }) => {
  return (
    <div className="card bg-slate-800 shadow-xl p-6 text-center">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-500"
        onError={(e) => {
          e.target.src =
            "https://ui-avatars.com/api/?name=" +
            encodeURIComponent(instructor.name);
        }}
      />

      <h2 className="text-xl font-bold">
        {instructor.name}
      </h2>

      <p className="text-gray-400">
        {instructor.skill}
      </p>
    </div>
  );
};

export default InstructorCard;