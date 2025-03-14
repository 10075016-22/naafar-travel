"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, Home, Settings, User, LogOut, Bell, Calendar, Ticket, Check, Trash2, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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

export default function NotificacionesPage() {
  // Estado para manejar notificaciones leídas/no leídas
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "¡Nuevo sorteo disponible!",
      description: "Participa en el sorteo de un MacBook Pro antes de que se agoten las plazas.",
      date: "2023-12-01T10:30:00",
      read: false,
      type: "sorteo",
    },
    {
      id: 2,
      title: "Recordatorio: Sorteo próximo a finalizar",
      description: "El sorteo del Viaje a Nueva York finaliza en 48 horas. ¡No pierdas tu oportunidad!",
      date: "2023-12-02T14:15:00",
      read: false,
      type: "recordatorio",
    },
    {
      id: 3,
      title: "Actualización de términos y condiciones",
      description:
        "Hemos actualizado nuestros términos y condiciones. Por favor, revísalos antes de participar en nuevos sorteos.",
      date: "2023-12-03T09:45:00",
      read: false,
      type: "sistema",
    },
    {
      id: 4,
      title: "¡Felicidades! Has ganado un sorteo",
      description: "Enhorabuena, has ganado el sorteo del iPhone 14. Contactaremos contigo para la entrega.",
      date: "2023-11-25T16:20:00",
      read: true,
      type: "ganador",
    },
    {
      id: 5,
      title: "Promoción especial para usuarios premium",
      description: "Como usuario premium, tienes acceso anticipado al próximo sorteo de un Tesla Model 3.",
      date: "2023-11-20T11:10:00",
      read: true,
      type: "promocion",
    },
    {
      id: 6,
      title: "Confirmación de participación",
      description: "Tu participación en el sorteo del Viaje a Maldivas ha sido confirmada. ¡Buena suerte!",
      date: "2023-11-15T08:30:00",
      read: true,
      type: "confirmacion",
    },
    {
      id: 7,
      title: "Resultado del sorteo PlayStation 5",
      description: "El sorteo de la PlayStation 5 ha finalizado. Consulta los resultados en tu área de usuario.",
      date: "2023-11-10T17:45:00",
      read: true,
      type: "resultado",
    },
  ])

  // Función para marcar una notificación como leída
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  // Función para marcar todas las notificaciones como leídas
  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  // Función para eliminar una notificación
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  // Función para obtener el icono según el tipo de notificación
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "sorteo":
        return <Gift className="h-5 w-5 text-primary" />
      case "recordatorio":
        return <Bell className="h-5 w-5 text-yellow-500" />
      case "sistema":
        return <Settings className="h-5 w-5 text-blue-500" />
      case "ganador":
        return <Gift className="h-5 w-5 text-green-500" />
      case "promocion":
        return <Ticket className="h-5 w-5 text-purple-500" />
      case "confirmacion":
        return <Check className="h-5 w-5 text-green-500" />
      case "resultado":
        return <Calendar className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  // Filtrar notificaciones no leídas
  const unreadNotifications = notifications.filter((notification) => !notification.read)

  // Filtrar notificaciones leídas
  const readNotifications = notifications.filter((notification) => notification.read)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900" style={{ width: '100%' }}>
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
                <SidebarMenuButton asChild isActive>
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
              <h1 className="text-2xl font-bold">Notificaciones</h1>
              <p className="text-muted-foreground">Gestiona tus notificaciones y alertas</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
                {unreadNotifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadNotifications.length}
                  </span>
                )}
              </Button>
              <SidebarTrigger className="md:hidden" />
              <Avatar>
                <AvatarImage src="/placeholder.svg?text=U" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {unreadNotifications.length} no leídas
              </Badge>
              <Badge variant="outline" className="text-sm">
                {notifications.length} total
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={markAllAsRead} disabled={unreadNotifications.length === 0}>
                Marcar todas como leídas
              </Button>
            </div>
          </div>

          <Tabs defaultValue="no-leidas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="no-leidas">No leídas ({unreadNotifications.length})</TabsTrigger>
              <TabsTrigger value="todas">Todas ({notifications.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="no-leidas">
              {unreadNotifications.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground text-center">No tienes notificaciones sin leer</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {unreadNotifications.map((notification) => (
                    <Card key={notification.id} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div>
                              <h3 className="font-medium">{notification.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {new Date(notification.date).toLocaleString("es-ES", {
                                  day: "numeric",
                                  month: "long",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => markAsRead(notification.id)}>
                              <Check className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                  Marcar como leída
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => deleteNotification(notification.id)}>
                                  Eliminar
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="todas">
              {notifications.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground text-center">No tienes notificaciones</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <Card key={notification.id} className={notification.read ? "" : "border-l-4 border-l-primary"}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div
                              className={`w-10 h-10 rounded-full ${notification.read ? "bg-gray-100 dark:bg-gray-800" : "bg-primary/10"} flex items-center justify-center mt-1`}
                            >
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div>
                              <h3 className={`font-medium ${notification.read ? "text-muted-foreground" : ""}`}>
                                {notification.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {new Date(notification.date).toLocaleString("es-ES", {
                                  day: "numeric",
                                  month: "long",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <Button variant="ghost" size="icon" onClick={() => markAsRead(notification.id)}>
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            <Button variant="ghost" size="icon" onClick={() => deleteNotification(notification.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  )
}

