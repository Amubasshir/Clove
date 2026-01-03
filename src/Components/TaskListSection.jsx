import React from 'react';

const TaskListSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 font-outfit">
      {/* Import Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }`}
      </style>

      <div className="max-w-6xl mx-auto">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          {/* Left Title */}
          <h2 className="text-5xl md:text-[3.5rem] leading-[1.1] font-extrabold text-black tracking-tight ">
            Pick Your Task, Get Paid Instantly.
          </h2>

          {/* Right Description & Button */}
          <div className="max-w-md flex flex-col items-start md:items-end text-left md:text-right">
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              Choose from over 30+ categories including creative design and community moderation. Follow simple instructions and watch your balance grow.
            </p>
            <button className="bg-[#4B9CFF] hover:bg-blue-600 text-white px-10 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer">
              Explore Task
            </button>
          </div>
        </div>

        {/* --- 2. TABLE / CARD SECTION --- */}
        <div className="relative mt-12">

          {/* 
             FLOATING TABS (The Blue Labels) 
             Positioned absolutely or with negative margin to sit on top of the card
          */}
          <div className="flex justify-between px-10 mb-[-20px] relative z-10 max-w-5xl mx-auto">
            {/* Task Tab */}
            <div className="w-[30%]">
              <div className="bg-[#4B9CFF] text-white font-bold tracking-widest uppercase text-sm py-2 px-6 rounded-t-2xl inline-block shadow-sm cursor-pointer">
                T a s k
              </div>
            </div>
            {/* Description Tab */}
            <div className="w-[50%] pl-4 hidden md:block">
              <div className="bg-[#4B9CFF] text-white font-bold tracking-widest uppercase text-sm py-2 px-6 rounded-t-2xl inline-block shadow-sm cursor-pointer">
                D e s c r i p t i o n
              </div>
            </div>
            {/* Payment Tab */}
            <div className="w-[20%] text-right hidden md:block">
              <div className="bg-[#4B9CFF] text-white font-bold tracking-widest uppercase text-sm py-2 px-6 rounded-t-2xl inline-block shadow-sm mr-8 cursor-pointer">
                P a y m e n t
              </div>
            </div>
          </div>

          {/* 
             MAIN CONTAINER CARD 
             The big white box with border
          */}
          <div className="bg-white border border-gray-200 rounded-[40px] p-4 md:p-8 pt-12 shadow-sm">
            
            <div className="flex flex-col gap-5">
              
              {/* --- ROW 1: Design A Meme (White) --- */}
              <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-[30px] p-6 bg-white hover:border-blue-200 transition-colors cursor-pointer">
                {/* Col 1 */}
                <div className="w-full md:w-[30%] mb-2 md:mb-0 ">
                  <span className="text-xl font-bold text-black">Design A Meme</span>
                </div>
                {/* Col 2 */}
                <div className="w-full md:w-[50%] mb-2 md:mb-0 ">
                  <span className="text-gray-500 font-normal">Create a funny meme for r/funny</span>
                </div>
                {/* Col 3 */}
                <div className="w-full md:w-[20%] text-left md:text-right md:pr-8 ">
                  <span className="text-2xl font-extrabold text-black">$20</span>
                  <span className="text-gray-500 text-sm ml-1">per post</span>
                </div>
              </div>

              {/* --- ROW 2: Post To Reddit (BLUE HIGHLIGHT) --- */}
              <div className="flex flex-col md:flex-row items-center bg-[#4B9CFF] text-white rounded-[30px] p-8 shadow-xl shadow-blue-200 transform md:scale-[1.02] relative z-20 border-none cursor-pointer">
                {/* Col 1 */}
                <div className="w-full md:w-[30%] mb-2 md:mb-0">
                  <span className="text-xl font-bold">Post To Reddit</span>
                </div>
                {/* Col 2 */}
                <div className="w-full md:w-[50%] mb-2 md:mb-0">
                  <span className="text-blue-100 font-normal">Make this post on r/woosh subreddit</span>
                </div>
                {/* Col 3 */}
                <div className="w-full md:w-[20%] text-left md:text-right md:pr-8">
                  <span className="text-2xl font-extrabold">$1</span>
                </div>
              </div>

              {/* --- ROW 3: Moderation (White) --- */}
              <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-[30px] p-6 bg-white hover:border-blue-200 transition-colors cursor-pointer">
                {/* Col 1 */}
                <div className="w-full md:w-[30%] mb-2 md:mb-0">
                  <span className="text-xl font-bold text-black">Moderation</span>
                </div>
                {/* Col 2 */}
                <div className="w-full md:w-[50%] mb-2 md:mb-0">
                  <span className="text-gray-500 font-normal">Approve/reject other users' work</span>
                </div>
                {/* Col 3 */}
                <div className="w-full md:w-[20%] text-left md:text-right md:pr-8">
                  <span className="text-2xl font-extrabold text-black">$0.05</span>
                  <span className="text-gray-500 text-sm ml-1">per action</span>
                </div>
              </div>

              {/* --- ROW 4: Write A Comment --- */}
<div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-[30px] p-6 bg-white hover:border-blue-200 transition-colors cursor-pointer">
  <div className="w-full md:w-[30%] mb-2 md:mb-0">
    <span className="text-xl font-bold text-black">Write A Comment</span>
  </div>
  <div className="w-full md:w-[50%] mb-2 md:mb-0">
    <span className="text-gray-500">Post a relevant comment on a discussion thread</span>
  </div>
  <div className="w-full md:w-[20%] text-left md:text-right md:pr-8">
    <span className="text-2xl font-extrabold text-black">$0.50</span>
    <span className="text-gray-500 text-sm ml-1">per comment</span>
  </div>
</div>

{/* --- ROW 5: Like & Upvote --- */}
<div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-[30px] p-6 bg-white hover:border-blue-200 transition-colors cursor-pointer">
  <div className="w-full md:w-[30%] mb-2 md:mb-0">
    <span className="text-xl font-bold text-black">Like & Upvote</span>
  </div>
  <div className="w-full md:w-[50%] mb-2 md:mb-0">
    <span className="text-gray-500">Upvote selected posts or comments</span>
  </div>
  <div className="w-full md:w-[20%] text-left md:text-right md:pr-8">
    <span className="text-2xl font-extrabold text-black">$0.10</span>
    <span className="text-gray-500 text-sm ml-1">per action</span>
  </div>
</div>

{/* --- ROW 6: Social Share --- */}
<div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-[30px] p-6 bg-white hover:border-blue-200 transition-colors cursor-pointer">
  <div className="w-full md:w-[30%] mb-2 md:mb-0">
    <span className="text-xl font-bold text-black">Social Share</span>
  </div>
  <div className="w-full md:w-[50%] mb-2 md:mb-0">
    <span className="text-gray-500">Share a post on social media platforms</span>
  </div>
  <div className="w-full md:w-[20%] text-left md:text-right md:pr-8">
    <span className="text-2xl font-extrabold text-black">$1.50</span>
    <span className="text-gray-500 text-sm ml-1">per share</span>
  </div>
</div>

{/* --- ROW 7: Content Review --- */}
<div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-[30px] p-6 bg-white hover:border-blue-200 transition-colors cursor-pointer">
  <div className="w-full md:w-[30%] mb-2 md:mb-0">
    <span className="text-xl font-bold text-black">Content Review</span>
  </div>
  <div className="w-full md:w-[50%] mb-2 md:mb-0">
    <span className="text-gray-500">Check posts for quality and policy compliance</span>
  </div>
  <div className="w-full md:w-[20%] text-left md:text-right md:pr-8">
    <span className="text-2xl font-extrabold text-black">$0.75</span>
    <span className="text-gray-500 text-sm ml-1">per review</span>
  </div>
</div>

{/* --- ROW 8: Short Survey --- */}
<div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-[30px] p-6 bg-white hover:border-blue-200 transition-colors cursor-pointer">
  <div className="w-full md:w-[30%] mb-2 md:mb-0">
    <span className="text-xl font-bold text-black">Short Survey</span>
  </div>
  <div className="w-full md:w-[50%] mb-2 md:mb-0">
    <span className="text-gray-500">Answer a few quick questions</span>
  </div>
  <div className="w-full md:w-[20%] text-left md:text-right md:pr-8">
    <span className="text-2xl font-extrabold text-black">$2</span>
    <span className="text-gray-500 text-sm ml-1">per survey</span>
  </div>
</div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TaskListSection;