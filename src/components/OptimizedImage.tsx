import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface OptimizedImageData {
  src: string;
  srcSet: string;
  blurDataURL: string;
  width?: number;
  height?: number;
  title?: string;
}

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: OptimizedImageData;
  sizes?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function OptimizedImage({ 
  image, 
  sizes = "(max-width: 768px) 100vw, 50vw", 
  alt, 
  className,
  imgClassName,
  loading = 'lazy',
  fetchPriority,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [image.src]);

  return (
    <div 
      className={twMerge(
        "relative overflow-hidden bg-muted", 
        className
      )}
      style={{
        aspectRatio: image.width && image.height ? `${image.width} / ${image.height}` : undefined,
      }}
    >
      {/* Blur Placeholder */}
      <div 
        className={clsx(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-out",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{
          backgroundImage: `url(${image.blurDataURL})`,
          transform: 'scale(1.05)', // Prevent white edges during blur
          filter: 'blur(10px)',
        }}
      />
      
      {/* Actual Image */}
      <img
        ref={imgRef}
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        // @ts-ignore - React types might not fully support fetchpriority yet
        fetchpriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        className={twMerge(
          "absolute inset-0 w-full h-full transition-opacity duration-700 ease-out",
          isLoaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
        {...props}
      />
    </div>
  );
}
