/**
 * Animation semantic presets
 * Canonical source for system-level animation classes
 */

export const animation = {
  // Fade animations
  fade: "transition-opacity duration-200 ease-in-out",
  fadeIn: "animate-in fade-in duration-200",
  fadeOut: "animate-out fade-out duration-200",
  
  // Scale animations
  scale: "transition-transform duration-200 ease-in-out",
  scaleIn: "animate-in zoom-in-95 duration-200",
  scaleOut: "animate-out zoom-out-95 duration-200",
  scalePress: "active:scale-[0.98]",
  
  // Slide animations
  slideUp: "animate-in slide-in-from-bottom-2 duration-200",
  slideDown: "animate-in slide-in-from-top-2 duration-200",
  slideLeft: "animate-in slide-in-from-right-2 duration-200",
  slideRight: "animate-in slide-in-from-left-2 duration-200",
  slideOutUp: "animate-out slide-out-to-top-2 duration-200",
  slideOutDown: "animate-out slide-out-to-bottom-2 duration-200",
  
  // Pulse animation
  pulse: "animate-pulse",
  
  // General transitions
  transitionAll: "transition-all duration-200 ease-in-out",
  transitionColors: "transition-colors duration-200 ease-in-out",
  transitionTransform: "transition-transform duration-200 ease-in-out",
  transitionOpacity: "transition-opacity duration-200 ease-in-out",
  
  // Specific component transitions
  transitionButton: "transition-all",
  transitionInput: "transition-[color,box-shadow]",
} as const

