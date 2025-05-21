import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonial-data";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  // Reset timer when user interacts
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
  };

  // Render the star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="ri-star-fill"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="ri-star-half-fill"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line"></i>);
    }
    
    return stars;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Client <span className="gradient-text">Testimonials</span>
        </motion.h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="testimonial-slide"
              >
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-24 h-24 object-cover rounded-full border-4 border-primary-100 dark:border-primary-900/30"
                      />
                    </div>
                    <div>
                      <div className="flex text-yellow-400 mb-4">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      <blockquote className="text-lg md:text-xl italic mb-6 text-slate-700 dark:text-slate-300">
                        "{testimonials[currentIndex].text}"
                      </blockquote>
                      <div>
                        <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-primary">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Slider Controls */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              handlePrev();
              resetTimer();
            }}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <i className="ri-arrow-left-s-line text-2xl text-primary"></i>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              handleNext();
              resetTimer();
            }}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <i className="ri-arrow-right-s-line text-2xl text-primary"></i>
          </Button>
          
          {/* Slider Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleDotClick(index);
                  resetTimer();
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? "bg-primary" 
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
