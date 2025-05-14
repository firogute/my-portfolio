import { useEffect, useRef, useState } from "react";

export default function ScrollResetComponent() {
  const ref = useRef();
  const [visible, setVisible] = useState(true); // true by default since it's initially visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0, // FULL visibility
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold">I'm a cool box</h2>
    </div>
  );
}
