'use client'

import { useState, useEffect } from 'react'

interface PerformanceMetrics {
  fps: number
  memory: number
  loadTime: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: 0,
    loadTime: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const loadTime = performance.now()
    
    let frameCount = 0
    let lastTime = performance.now()
    
    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        setMetrics(prev => ({ ...prev, fps }))
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(measureFPS)
    }
    
    measureFPS()
    
    if ('memory' in performance) {
      const memory = (performance as any).memory
      setMetrics(prev => ({
        ...prev,
        memory: Math.round(memory.usedJSHeapSize / 1048576),
        loadTime: Math.round(loadTime),
      }))
    }
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible)
      }
    }
    
    window.addEventListener('keypress', handleKeyPress)
    
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>FPS: {metrics.fps}</div>
        <div>Memory: {metrics.memory}MB</div>
        <div>Load: {metrics.loadTime}ms</div>
        <div className="text-gray-400">Ctrl+Shift+P to toggle</div>
      </div>
    </div>
  )
}