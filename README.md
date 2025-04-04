# 🌌 Noise Gradient Background

![npm version](https://img.shields.io/npm/v/noise-gradient-bg)
![license](https://img.shields.io/npm/l/noise-gradient-bg)
![downloads](https://img.shields.io/npm/dm/noise-gradient-bg)

A beautiful, highly customizable noise gradient background component for React applications. Create stunning, immersive backgrounds with minimal effort.

<p align="center">
<img width="1200" alt="noise-gradient-bg" src="https://github.com/user-attachments/assets/c5762003-9278-4009-9533-f304e118d2ca" />
</p>

## ✨ Features

- 🎨 Easily customizable gradient colors
- 🔄 Multiple noise overlay patterns
- 🌫️ Adjustable blur and opacity
- 🔆 Built-in vignette effect
- 🧩 Compatible with Tailwind CSS
- 📱 Fully responsive
- 🚀 Lightweight with zero dependencies
- 🔧 TypeScript support

## 📦 Installation

```bash
# npm
npm install noise-gradient-bg

# yarn
yarn add noise-gradient-bg

# pnpm
pnpm add noise-gradient-bg
```

## 🚀 Quick Start

```jsx
import { NoiseGradientBackground } from 'noise-gradient-bg';

function App() {
  return (
    <NoiseGradientBackground 
      primaryColor="purple-500/20"
      secondaryColor="indigo-500/15"
    >
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-white">
          Your content goes here
        </h1>
      </div>
    </NoiseGradientBackground>
  );
}
```

## 📝 Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `primaryColor` | `string` | `"purple-300/20"` | Primary gradient color. Accepts Tailwind classes or custom colors (HEX, RGB, RGBA, HSL) |
| `secondaryColor` | `string` | `"purple-500/15"` | Secondary gradient color. Accepts Tailwind classes or custom colors |
| `tertiaryColor` | `string` | `"purple-500/10"` | Optional tertiary gradient color. Accepts Tailwind classes or custom colors |
| `noiseSize` | `number` | `256` | Controls the large noise pattern size in pixels |
| `microNoiseSize` | `number` | `128` | Controls the micro noise pattern size in pixels |
| `noiseOpacity` | `number` | `60` | Controls the opacity of the main noise overlay (0-100) |
| `microNoiseOpacity` | `number` | `40` | Controls the opacity of the micro noise overlay (0-100) |
| `primaryBlur` | `number` | `80` | Controls primary blur amount in pixels |
| `secondaryBlur` | `number` | `60` | Controls secondary blur amount in pixels |
| `tertiaryBlur` | `number` | `40` | Controls tertiary blur amount in pixels |
| `vignetteIntensity` | `"none" \| "light" \| "medium" \| "strong"` | `"medium"` | Controls the vignette intensity |
| `className` | `string` | | Additional CSS classes to add to the container |

## 🎨 Examples

### Tailwind Color Classes

```jsx
<NoiseGradientBackground 
  primaryColor="blue-500/30"
  secondaryColor="purple-500/20"
  tertiaryColor="pink-500/10"
  noiseOpacity={50}
  vignetteIntensity="light"
/>
```

### Custom Colors

```jsx
<NoiseGradientBackground 
  primaryColor="rgba(59, 130, 246, 0.3)" // blue
  secondaryColor="rgba(139, 92, 246, 0.2)" // purple
  tertiaryColor="rgba(236, 72, 153, 0.1)" // pink
  primaryBlur={100}
  secondaryBlur={80}
  tertiaryBlur={60}
/>
```

### Dark Theme

```jsx
<NoiseGradientBackground 
  primaryColor="zinc-800/50"
  secondaryColor="zinc-900/40"
  tertiaryColor="black/30"
  noiseOpacity={30}
  vignetteIntensity="strong"
/>
```

### Minimal Setup

```jsx
<NoiseGradientBackground />
```

## 📱 Responsive Design

The component is fully responsive and will adapt to any container size. You can also use it with Tailwind's responsive utilities:

```jsx
<NoiseGradientBackground 
  className="opacity-50 md:opacity-70 lg:opacity-100"
  primaryColor="blue-500/30 md:blue-600/40 lg:blue-700/50"
/>
```

## 🧩 Usage with Next.js

For Next.js applications, consider placing the component in your layout file:

```jsx
// app/layout.js or _app.js
import { NoiseGradientBackground } from 'noise-gradient-bg';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NoiseGradientBackground
          primaryColor="purple-500/20"
          secondaryColor="indigo-500/15"
        />
        {children}
      </body>
    </html>
  );
}
```

## 🔧 Tailwind CSS Setup

This component works best with Tailwind CSS. Make sure your `tailwind.config.js` includes:

```js
module.exports = {
  content: [
    // ...
    './node_modules/noise-gradient-bg/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}
```

## 📄 For any issues

Create a issue in this [Repository](https://github.com/Prateek32177/noise-gradient-bg)
