import React from "react";
import { useCountUp } from "react-countup";

const State = () => {

  const userRef = React.useRef(null);
  useCountUp({
    ref: userRef,
    start: 0,
    end: 118,
    delay: 0.5,
    duration: 3,
  });


  const adminRef = React.useRef(null);
  useCountUp({
    ref: adminRef,
    start: 0,
    end: 88,
    delay: 0.5,
    duration: 3,
  });


  const ownerRef = React.useRef(null);
  useCountUp({
    ref: ownerRef,
    start: 0,
    end: 75,
    delay: 0.5,
    duration: 3,
  });

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center gap-8 px-4 py-12">
      {/* Users */}
      <div className="flex flex-col items-center text-center">
        <h4 className="text-lg md:text-xl font-medium text-gray-700">
          ユーザー (Yūzā)
        </h4>
        <h2
          className="text-4xl md:text-6xl font-bold text-blue-600"
          ref={userRef}
        ></h2>
      </div>

      {/* Admin */}
      <div className="flex flex-col items-center text-center">
        <h4 className="text-lg md:text-xl font-medium text-gray-700">
          管理者 (Kanrisya)
        </h4>
        <h2
          className="text-4xl md:text-6xl font-bold text-green-600"
          ref={adminRef}
        ></h2>
      </div>

      {/* Owner */}
      <div className="flex flex-col items-center text-center">
        <h4 className="text-lg md:text-xl font-medium text-gray-700">
          所有者 (Shoyūsha)
        </h4>
        <h2
          className="text-4xl md:text-6xl font-bold text-purple-600"
          ref={ownerRef}
        ></h2>
      </div>
    </div>
  );
};

export default State;
