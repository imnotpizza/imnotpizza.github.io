'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoSlideInterval?: number; // N초 간격 (밀리초)
  className?: string;
}

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          src={src || '/placeholder.svg'}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default function ImageCarousel({
  images,
  alt,
  autoSlideInterval = 5000, // 기본 5초
  className = '',
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // 무한 루프를 위한 확장된 이미지 배열 생성
  const extendedImages = [...images, ...images, ...images];
  const totalImages = images.length;
  const startIndex = totalImages; // 중간 섹션에서 시작

  // 다음 슬라이드로 이동 (항상 오른쪽으로)
  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // 이전 슬라이드로 이동 (오른쪽 방향 유지를 위해 뒤로 이동)
  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const targetIndex = startIndex + index;
    setCurrentIndex(targetIndex);
  };

  // 무한 루프 처리
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // 첫 번째 섹션에 도달하면 중간 섹션으로 점프
      if (currentIndex >= totalImages * 2) {
        setCurrentIndex(startIndex);
      }
      // 마지막 섹션에 도달하면 중간 섹션으로 점프
      else if (currentIndex < totalImages) {
        setCurrentIndex(startIndex + totalImages - 1);
      }
    }, 500); // transition duration과 맞춤

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, totalImages, startIndex]);

  // 초기 인덱스 설정
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  // 자동 슬라이드 설정
  useEffect(() => {
    if (images.length <= 1) return;

    const startAutoSlide = () => {
      intervalRef.current = setInterval(nextSlide, autoSlideInterval);
    };

    const stopAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (!isHovered) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }

    return () => stopAutoSlide();
  }, [isHovered, autoSlideInterval, images.length]);

  // 이미지가 1개 이하인 경우 단순 표시
  if (images.length <= 1) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <LazyImage
          src={images[0] || '/placeholder.svg'}
          alt={alt}
          className="w-full h-full"
        />
      </div>
    );
  }

  // 현재 표시되는 이미지의 실제 인덱스 계산
  const displayIndex = (currentIndex - startIndex + totalImages) % totalImages;

  return (
    <div
      className={`relative w-full h-full overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 이미지 컨테이너 */}
      <div
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <LazyImage
              src={image}
              alt={`${alt} ${(index % totalImages) + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* 네비게이션 버튼 */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8"
        onClick={prevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8"
        onClick={nextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* 인디케이터 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === displayIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* 이미지 카운터 */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {displayIndex + 1} / {images.length}
      </div>
    </div>
  );
}
