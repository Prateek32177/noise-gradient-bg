import React, { useState, useEffect } from "react";
import { NoiseGradientBackground } from "@/components/ui/noise-gradient-background";

// Define the specific types for vignetteIntensity
type VignetteIntensity = "medium" | "strong" | "light" | "none";

// Define the type for theme props to match NoiseGradientBackgroundProps
type ThemeProps = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  noiseOpacity?: number;
  microNoiseOpacity?: number;
  primaryBlur?: number;
  secondaryBlur?: number;
  tertiaryBlur?: number;
  noiseSize?: number;
  microNoiseSize?: number;
  vignetteIntensity?: VignetteIntensity;
  theme?:
    | "green"
    | "zinc"
    | "white"
    | "purple"
    | "blue"
    | "yellow"
    | "red"
    | "custom"
    | "gray";
};

// Theme configurations
const themes = [
  {
    name: "Purple Haze",
    description: "Default elegant purple theme",
    props: {
      primaryColor: "purple-300/20",
      secondaryColor: "purple-500/15",
      tertiaryColor: "purple-500/10",
      theme: "purple",
    } as ThemeProps,
  },
  {
    name: "Ocean Blue",
    description: "Calming blue gradients",
    props: {
      primaryColor: "blue-300/20",
      secondaryColor: "blue-500/15",
      tertiaryColor: "indigo-500/10",
      noiseOpacity: 50,
      vignetteIntensity: "strong" as VignetteIntensity,
      theme: "blue",
    } as ThemeProps,
  },
  {
    name: "Sunset Glow",
    description: "Warm orange and yellow tones",
    props: {
      primaryColor: "yellow-300/30",
      secondaryColor: "amber-500/20",
      tertiaryColor: "orange-500/15",
      primaryBlur: 90,
      secondaryBlur: 70,
      vignetteIntensity: "light" as VignetteIntensity,
      theme: "yellow",
    } as ThemeProps,
  },
  {
    name: "Forest Depth",
    description: "Rich green environment",
    props: {
      primaryColor: "emerald-300/20",
      secondaryColor: "green-500/15",
      tertiaryColor: "teal-600/10",
      noiseOpacity: 40,
      microNoiseOpacity: 30,
      theme: "green",
    } as ThemeProps,
  },
  {
    name: "Vibrant Sunrise",
    description: "Energetic reds and oranges",
    props: {
      primaryColor: "rgba(255, 100, 50, 0.2)",
      secondaryColor: "rgba(255, 50, 100, 0.15)",
      tertiaryColor: "rgba(200, 50, 255, 0.1)",
      primaryBlur: 100,
      microNoiseSize: 64,
      theme: "red",
    } as ThemeProps,
  },
  {
    name: "Cosmic Blend",
    description: "Space-inspired blue and purple",
    props: {
      primaryColor: "#3b82f680",
      secondaryColor: "#8b5cf640",
      tertiaryColor: "#ec489930",
      vignetteIntensity: "strong" as VignetteIntensity,
      theme: "custom",
    } as ThemeProps,
  },
  {
    name: "Northern Lights",
    description: "Aurora borealis inspired",
    props: {
      primaryColor: "hsla(160, 80%, 60%, 0.2)",
      secondaryColor: "hsla(200, 70%, 50%, 0.15)",
      tertiaryColor: "hsla(280, 80%, 60%, 0.1)",
      noiseOpacity: 30,
      theme: "custom",
    } as ThemeProps,
  },
  {
    name: "Mixed Fusion",
    description: "Combination of Tailwind and custom colors",
    props: {
      primaryColor: "violet-400/30",
      secondaryColor: "rgba(123, 31, 162, 0.2)",
      tertiaryColor: "#4a1d9e20",
      noiseOpacity: 45,
      theme: "custom",
    } as ThemeProps,
  },
  {
    name: "Emerald Mist",
    description: "Soft emerald gradients with gentle blur",
    props: {
      primaryColor: "emerald-200/30",
      secondaryColor: "emerald-400/20",
      tertiaryColor: "emerald-600/15",
      noiseOpacity: 35,
      primaryBlur: 85,
      vignetteIntensity: "medium" as VignetteIntensity,
      theme: "green",
    } as ThemeProps,
  },
  {
    name: "Dark Elegance",
    description: "Sophisticated dark theme with subtle noise",
    props: {
      primaryColor: "zinc-800/50",
      secondaryColor: "zinc-900/40",
      tertiaryColor: "black/30",
      noiseOpacity: 30,
      microNoiseOpacity: 20,
      vignetteIntensity: "strong" as VignetteIntensity,
      theme: "zinc",
    } as ThemeProps,
  },
  {
    name: "Ethereal White",
    description: "Minimal white noise gradient for clean interfaces",
    props: {
      primaryColor: "white/20",
      secondaryColor: "white/15",
      tertiaryColor: "white/10",
      noiseOpacity: 20,
      microNoiseOpacity: 15,
      vignetteIntensity: "light" as VignetteIntensity,
      theme: "white",
    } as ThemeProps,
  },
];

export default function NoiseGradientShowcase() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showThemeInfo, setShowThemeInfo] = useState(true);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!autoplayEnabled) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplayEnabled]);

  const toggleThemeInfo = () => setShowThemeInfo(!showThemeInfo);
  const toggleAutoplay = () => setAutoplayEnabled(!autoplayEnabled);

  const goToTheme = (index: number) => {
    if (index === currentThemeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentThemeIndex(index);
      setIsTransitioning(false);
    }, 1000);
  };

  const currentTheme = themes[currentThemeIndex];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <NoiseGradientBackground {...currentTheme.props} />

      <div
        className={`relative z-10 min-h-screen flex flex-col items-center justify-center transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-white mb-6">Noise Gradient</h1>
          <p className="text-2xl text-white/80 mb-12">
            Beautiful, customizable background effects for your next project
          </p>

          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-white mb-2">
              {currentTheme.name}
            </h2>
            {showThemeInfo && (
              <p className="text-xl text-white/70 mb-8">
                {currentTheme.description}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {themes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => goToTheme(index)}
                  className={`h-3 w-12 rounded-full transition-all duration-300 ${
                    index === currentThemeIndex
                      ? "bg-white scale-110"
                      : "bg-white/30 scale-100 hover:bg-white/50"
                  }`}
                  title={theme.name}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={toggleThemeInfo}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md"
            >
              {showThemeInfo ? "Hide Info" : "Show Info"}
            </button>
            <button
              onClick={toggleAutoplay}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md"
            >
              {autoplayEnabled ? "Pause Autoplay" : "Resume Autoplay"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
