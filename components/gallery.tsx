import Image from "next/image"

export function Gallery() {
  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ganador del viaje a París",
      title: "Viaje a París",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ganador del iPhone 15 Pro",
      title: "iPhone 15 Pro",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ganador del Tesla Model 3",
      title: "Tesla Model 3",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ganador del viaje a Japón",
      title: "Viaje a Japón",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ganador de la PS5",
      title: "PlayStation 5",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Ganador del MacBook Pro",
      title: "MacBook Pro",
    },
  ]

  return (
    <section className="py-16 md:py-24" id="galeria">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de Ganadores</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Conoce a las personas que ya han cumplido sus sueños con nuestros sorteos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">Ganador reciente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

