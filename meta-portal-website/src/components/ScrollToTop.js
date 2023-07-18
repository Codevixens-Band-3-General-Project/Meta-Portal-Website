import React, { useState, useEffect } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';



const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (scrollTop > windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

//   return (
//     <>
//       {isVisible && (
//         <div
//           className="fixed bottom-5 right-5 bg-gray-800 p-2 rounded-full cursor-pointer flex flex-col items-center text-white hover:text-purple-500"
//           onClick={scrollToTop}
//         >
//           <span className="text-xs font-bold tracking-wide uppercase mb-1">Scroll to Top</span>
//           <FontAwesomeIcon icon={faChevronUp} className="text-black text-2xl transition-colors duration-300 hover:text-purple-500" />
//         </div>
//       )}
//     </>
//   );

  return (
    <>
      {isVisible && (
        <div>
        <div className="fixed bottom-5 right-5 bg-black p-2 w-12 h-12 rounded-full cursor-pointer drop-shadow-[0_1px_1.3px_#cc00ff]" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp}className="text-white text-2xl"/>
        </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;