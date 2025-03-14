"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Home, Settings, User, LogOut, Bell, Calendar, Ticket } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const activeSorteos = [
    {
      id: 1,
      title: "Viaje a Maldivas",
      endDate: "2023-12-15",
      image: "/placeholder.svg?height=100&width=200",
      participants: 1245,
      maxParticipants: 2000,
    },
    {
      id: 2,
      title: "iPhone 15 Pro",
      endDate: "2023-12-10",
      image: "/placeholder.svg?height=100&width=200",
      participants: 876,
      maxParticipants: 1000,
    },
    {
      id: 3,
      title: "PlayStation 5",
      endDate: "2023-12-20",
      image: "/placeholder.svg?height=100&width=200",
      participants: 543,
      maxParticipants: 800,
    },
  ]

  const misSorteos = [
    {
      id: 101,
      title: "MacBook Pro",
      status: "Participando",
      date: "2023-11-30",
    },
    {
      id: 102,
      title: "Viaje a Japón",
      status: "Ganado",
      date: "2023-10-15",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Gift className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Naafar Travel</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/sorteos">
                    <Ticket className="h-5 w-5" />
                    <span>Mis Sorteos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/calendario">
                    <Calendar className="h-5 w-5" />
                    <span>Calendario</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/notificaciones">
                    <Bell className="h-5 w-5" />
                    <span>Notificaciones</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/perfil">
                    <User className="h-5 w-5" />
                    <span>Perfil</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/configuracion">
                    <Settings className="h-5 w-5" />
                    <span>Configuración</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <LogOut className="h-5 w-5" />
                    <span>Cerrar sesión</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Bienvenido de nuevo, Usuario</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <SidebarTrigger className="md:hidden" />
              <Avatar>
                <AvatarImage src="/placeholder.svg?text=U" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="pb-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Sorteos Activos</CardDescription>
                    <CardTitle className="text-3xl">3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">+2 desde el mes pasado</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Mis Participaciones</CardDescription>
                    <CardTitle className="text-3xl">2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">+1 desde el mes pasado</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Premios Ganados</CardDescription>
                    <CardTitle className="text-3xl">1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">+1 desde el mes pasado</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Puntos Acumulados</CardDescription>
                    <CardTitle className="text-3xl">250</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">+75 desde el mes pasado</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sorteos Activos</CardTitle>
                    <CardDescription>Sorteos disponibles para participar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activeSorteos.map((sorteo) => (
                        <div key={sorteo.id} className="flex gap-4">
                          <img
                            src={sorteo.image || "/placeholder.svg"}
                            alt={sorteo.title}
                            className="w-20 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{sorteo.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Finaliza: {new Date(sorteo.endDate).toLocaleDateString()}
                                </p>
                              </div>
                              <Button size="sm" variant="outline">
                                Participar
                              </Button>
                            </div>
                            <div className="mt-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span>{sorteo.participants} participantes</span>
                                <span>{Math.round((sorteo.participants / sorteo.maxParticipants) * 100)}%</span>
                              </div>
                              <Progress value={(sorteo.participants / sorteo.maxParticipants) * 100} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mis Sorteos</CardTitle>
                    <CardDescription>Sorteos en los que has participado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {misSorteos.map((sorteo) => (
                        <div key={sorteo.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{sorteo.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(sorteo.date).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge variant={sorteo.status === "Ganado" ? "default" : "outline"}>{sorteo.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </SidebarProvider>
  )
}

