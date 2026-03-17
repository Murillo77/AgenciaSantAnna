import type { ReactNode } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
}

const delayClasses = {
  0: '',
  1: 'delay-100',
  2: 'delay-200',
  3: 'delay-300',
} as const

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const { ref, isVisible } = useFadeIn()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isVisible ? delayClasses[delay] : ''} ${className}`}
    >
      {children}
    </div>
  )
}
