"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Gift, Home, Settings, User, LogOut, Bell, Calendar, Ticket, Search, Filter, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

export default function MisSorteosPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const participandoSorteos = [
    {
      id: 101,
      title: "MacBook Pro",
      endDate: "2023-12-15",
      image: "/placeholder.svg?height=100&width=200",
      participants: 1245,
      maxParticipants: 2000,
      probability: "12%",
      ticketNumber: "A-45678",
    },
    {
      id: 102,
      title: "Viaje a Nueva York",
      endDate: "2023-12-20",
      image: "/placeholder.svg?height=100&width=200",
      participants: 876,
      maxParticipants: 1000,
      probability: "8%",
      ticketNumber: "B-23456",
    },
    {
      id: 103,
      title: "Tesla Model 3",
      endDate: "2024-01-10",
      image: "/placeholder.svg?height=100&width=200",
      participants: 3245,
      maxParticipants: 5000,
      probability: "5%",
      ticketNumber: "C-78901",
    },
  ]

  const ganadosSorteos = [
    {
      id: 201,
      title: "Viaje a Japón",
      date: "2023-10-15",
      image: "/placeholder.svg?height=100&width=200",
      prize: "Viaje para 2 personas a Tokio",
      status: "Entregado",
      ticketNumber: "D-12345",
    },
    {
      id: 202,
      title: "iPhone 14",
      date: "2023-08-20",
      image: "/placeholder.svg?height=100&width=200",
      prize: "iPhone 14 Pro Max 256GB",
      status: "Entregado",
      ticketNumber: "E-67890",
    },
  ]

  const historicoSorteos = [
    {
      id: 301,
      title: "Samsung Galaxy S23",
      date: "2023-07-10",
      image: "/placeholder.svg?height=100&width=200",
      result: "No ganado",
      winner: "Juan Pérez",
      ticketNumber: "F-13579",
    },
    {
      id: 302,
      title: "PlayStation 5",
      date: "2023-06-15",
      image: "/placeholder.svg?height=100&width=200",
      result: "No ganado",
      winner: "María González",
      ticketNumber: "G-24680",
    },
    {
      id: 303,
      title: "Viaje a Cancún",
      date: "2023-05-20",
      image: "/placeholder.svg?height=100&width=200",
      result: "No ganado",
      winner: "Pedro Rodríguez",
      ticketNumber: "H-97531",
    },
    {
      id: 304,
      title: "iPad Pro",
      date: "2023-04-25",
      image: "/placeholder.svg?height=100&width=200",
      result: "No ganado",
      winner: "Ana Martínez",
      ticketNumber: "I-86420",
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
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
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
              <h1 className="text-2xl font-bold">Mis Sorteos</h1>
              <p className="text-muted-foreground">Gestiona tus participaciones en sorteos</p>
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

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Buscar sorteos..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filtrar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los sorteos</SelectItem>
                <SelectItem value="active">Activos</SelectItem>
                <SelectItem value="ended">Finalizados</SelectItem>
                <SelectItem value="won">Ganados</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="participando" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="participando">Participando</TabsTrigger>
              <TabsTrigger value="ganados">Ganados</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
            </TabsList>

            <TabsContent value="participando">
              <div className="grid gap-6">
                {participandoSorteos.map((sorteo) => (
                  <Card key={sorteo.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={sorteo.image || "/placeholder.svg"}
                          alt={sorteo.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">{sorteo.title}</h3>
                            <Badge className="w-fit">Participando</Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Fecha de sorteo</p>
                              <p className="font-medium">{new Date(sorteo.endDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Nº de participación</p>
                              <p className="font-medium">{sorteo.ticketNumber}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Probabilidad</p>
                              <p className="font-medium">{sorteo.probability}</p>
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>{sorteo.participants} participantes</span>
                              <span>{Math.round((sorteo.participants / sorteo.maxParticipants) * 100)}%</span>
                            </div>
                            <Progress value={(sorteo.participants / sorteo.maxParticipants) * 100} />
                          </div>
                          <div className="flex justify-end">
                            <Button variant="outline" size="sm">
                              Ver detalles
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ganados">
              <div className="grid gap-6">
                {ganadosSorteos.map((sorteo) => (
                  <Card key={sorteo.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={sorteo.image || "/placeholder.svg"}
                          alt={sorteo.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold">{sorteo.title}</h3>
                            <Badge variant="default" className="w-fit bg-green-600">
                              ¡Ganado!
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Fecha de sorteo</p>
                              <p className="font-medium">{new Date(sorteo.date).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Nº de participación</p>
                              <p className="font-medium">{sorteo.ticketNumber}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Estado</p>
                              <p className="font-medium">{sorteo.status}</p>
                            </div>
                          </div>
                          <div className="mb-4">
                            <p className="text-sm text-muted-foreground">Premio</p>
                            <p className="font-medium">{sorteo.prize}</p>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              Ver certificado
                            </Button>
                            <Button size="sm">Ver detalles</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="historico">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de participaciones</CardTitle>
                  <CardDescription>Sorteos en los que has participado anteriormente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {historicoSorteos.map((sorteo) => (
                      <div
                        key={sorteo.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex gap-4 mb-4 sm:mb-0">
                          <img
                            src={sorteo.image || "/placeholder.svg"}
                            alt={sorteo.title}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div>
                            <h3 className="font-medium">{sorteo.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(sorteo.date).toLocaleDateString()}
                            </p>
                            <p className="text-sm">
                              <span className="text-muted-foreground">Nº: </span>
                              {sorteo.ticketNumber}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge variant="outline" className="mb-2">
                            {sorteo.result}
                          </Badge>
                          <p className="text-sm text-muted-foreground">Ganador: {sorteo.winner}</p>
                          <Button variant="ghost" size="sm" className="mt-2">
                            <span>Detalles</span>
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  )
}

