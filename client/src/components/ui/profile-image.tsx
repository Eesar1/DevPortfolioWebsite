import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ src, alt, className = "" }: ProfileImageProps) {
  const [imageUrl, setImageUrl] = useState<string>(src);

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur-lg"></div>
      <img 
        src={imageUrl} 
        alt={alt} 
        className={`w-64 h-64 md:w-80 md:h-80 object-cover rounded-full relative border-4 border-white dark:border-slate-800 ${className}`}
      />
    </div>
  );
}
