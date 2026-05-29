const LearningTips = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-slate-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">
          📚 Study Daily
        </h2>

        <p>
          Practice at least 1 hour daily to improve
          your skills consistently.
        </p>
      </div>

      <div className="bg-slate-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">
          💻 Build Projects
        </h2>

        <p>
          Build real-world projects to strengthen
          your portfolio.
        </p>
      </div>

      <div className="bg-slate-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">
          🚀 Stay Consistent
        </h2>

        <p>
          Consistency is the key to becoming a great
          developer.
        </p>
      </div>
    </div>
  );
};

export default LearningTips;