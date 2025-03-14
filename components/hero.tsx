"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Parallax effect for the image
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * 0.1}px)`
      }

      // Fade effect for the text
      if (textRef.current) {
        textRef.current.style.opacity = `${1 - scrollY * 0.003}`
        textRef.current.style.transform = `translateY(${scrollY * 0.2}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" id="sorteos">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={textRef} className="transition-all duration-300 ease-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary">Gana premios</span> increíbles
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Participa en nuestros sorteos exclusivos y llévate premios que cambiarán tu vida. ¡Nuevo sorteo cada
              semana!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/participar">Participar ahora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#sorteos-actuales">Ver sorteos</Link>
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative h-[400px] md:h-[500px] floating">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"></div>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Último sorteo"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl object-cover h-full w-full"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Viaje a Maldivas</h3>
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  ¡ACTIVO!
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Termina en: 5 días 12 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

