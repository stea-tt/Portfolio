import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const HackBackground = () => {
  const [hacks, setHacks] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateHacks();
    generateMeteors();

    const handleResize = () => {
      generateHacks();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateHacks = () => {
    const numberOfHacks = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newHacks = [];

    for (let i = 0; i < numberOfHacks; i++) {
      newHacks.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setHacks(newHacks);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hacks.map((hack) => (
        <div
          key={hack.id}
          className="hack animate-pulse-subtle"
          style={{
            width: hack.size + "px",
            height: hack.size + "px",
            left: hack.x + "%",
            top: hack.y + "%",
            opacity: hack.opacity,
            animationDuration: hack.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
