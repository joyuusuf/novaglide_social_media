"use client"
import Social from "./Social";


export default function PostsContainer() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

      {/* Post 1 */}
      <Social
        date="1 day ago"
        text="Unlock your potential—every small step counts. Stay consistent, stay focused, and trust the process. Growth takes time, but every day is a new chance to be better than yesterday. ✨📈"
        hashtags={[
          "Motivation",
          "GrowthMindset",
          "DailyInspiration",
          "StayFocused",
          "LevelUp",
          "PositiveVibes",
          "KeepGoing",
          "SelfImprovement",
          "MindsetMatters",
          "SuccessJourney",
        ]}
      />

      {/* Post 2 */}
      <Social
        date="16 days ago"
        text="This is a sample paragraph with some #hashtags like #socialmedia and #marketing. Let’s find them!"
        hashtags={[]}
      />
    </div>
  );
}
