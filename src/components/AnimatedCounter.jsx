import React,{ useEffect,useState} from 'react'
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({value,duration=1}) => {
    const [count, setCount] = useState(0);  
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
useEffect(() => {
  if (!inView) return;

  let start = 0;
  const increment = value / (duration * 60);

  const counter = setInterval(() => {
    start += increment;
    if (start >= value) {
      setCount(value);
      clearInterval(counter);
    } else {
      setCount(Math.floor(start));
    }
  }, 1000 / 60); // правильно: час виконання

  return () => clearInterval(counter); // очищає інтервал при демонтажі
}, [inView, value, duration]);
  return (
    <motion.div
     ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center">  {count.toLocaleString()}</motion.div>
  )
}

export default AnimatedCounter