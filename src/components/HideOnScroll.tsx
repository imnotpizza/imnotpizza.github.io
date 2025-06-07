import { useEffect, useRef, useState, ReactNode } from 'react';

interface HideOnScrollProps {
  children: ReactNode;
}

export default function HideOnScroll({ children }: HideOnScrollProps) {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
