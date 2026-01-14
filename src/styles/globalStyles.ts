import { css } from '@emotion/react';

export const globalStyles = css`
  /* Glassmorphism effect */
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* 3D card hover */
  .card-3d {
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    transform-style: preserve-3d;
  }

  .card-3d:hover {
    transform: translateY(-12px) scale(1.02);
  }

  /* Glow effect */
  .glow-green {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2);
  }

  .glow-green:hover {
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3);
  }

  /* Deep shadow */
  .shadow-deep {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06);
  }

  /* Gradient text */
  .gradient-text {
    background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Float animation */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  /* Shimmer effect */
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  .shimmer {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
  }
`;
