"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Gift,
  Home,
  Settings,
  User,
  LogOut,
  Bell,
  Calendar,
  Ticket,
  Camera,
  Edit,
  Shield,
  Key,
  CreditCard,
  Award,
} from "lucide-react"
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

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false)

  // Datos de perfil de ejemplo
  const [profileData, setProfileData] = useState({
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@example.com",
    phone: "+34 612 345 678",
    address: "Calle Principal 123, Madrid, España",
    bio: "Entusiasta de los sorteos y las nuevas experiencias. Me encanta participar en todo tipo de concursos y compartir mis premios con amigos y familiares.",
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
  })

  // Historial de actividad
  const activityHistory = [
    {
      id: 1,
      action: "Participación en sorteo",
      description: "Has participado en el sorteo 'MacBook Pro'",
      date: "2023-12-01T14:30:00",
    },
    {
      id: 2,
      action: "Premio ganado",
      description: "¡Felicidades! Has ganado el sorteo 'iPhone 14'",
      date: "2023-11-25T10:15:00",
    },
    {
      id: 3,
      action: "Actualización de perfil",
      description: "Has actualizado tu información de perfil",
      date: "2023-11-20T09:45:00",
    },
    {
      id: 4,
      action: "Participación en sorteo",
      description: "Has participado en el sorteo 'Viaje a Japón'",
      date: "2023-11-15T16:20:00",
    },
    {
      id: 5,
      action: "Inicio de sesión",
      description: "Has iniciado sesión desde un nuevo dispositivo",
      date: "2023-11-10T08:30:00",
    },
  ]

  // Premios ganados
  const premiosGanados = [
    {
      id: 1,
      title: "iPhone 14",
      date: "2023-11-25",
      image: "/placeholder.svg?height=100&width=200",
      status: "Entregado",
    },
    {
      id: 2,
      title: "Viaje a Japón",
      date: "2023-10-15",
      image: "/placeholder.svg?height=100&width=200",
      status: "Pendiente",
    },
  ]

  // Nivel de usuario
  const userLevel = {
    level: 3,
    points: 250,
    nextLevel: 500,
    progress: 50, // Porcentaje de progreso
    benefits: ["Acceso anticipado a sorteos", "Participaciones dobles", "Notificaciones prioritarias"],
  }

  // Función para manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value,
    })
  }

  // Función para manejar cambios en las notificaciones
  const handleNotificationChange = (type: "email" | "push" | "sms") => {
    setProfileData({
      ...profileData,
      notifications: {
        ...profileData.notifications,
        [type]: !profileData.notifications[type],
      },
    })
  }

  // Función para guardar cambios
  const handleSaveChanges = () => {
    setIsEditing(false)
    // Aquí iría la lógica para guardar los cambios en el backend
  }

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
                <SidebarMenuButton asChild isActive>
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
              <h1 className="text-2xl font-bold">Mi Perfil</h1>
              <p className="text-muted-foreground">Gestiona tu información personal</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <SidebarTrigger className="md:hidden" />
              <Avatar>
                <AvatarImage src="/placeholder.svg?text=CR" />
                <AvatarFallback>CR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src="/placeholder.svg?text=CR" />
                        <AvatarFallback className="text-2xl">CR</AvatarFallback>
                      </Avatar>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute bottom-0 right-0 rounded-full bg-background"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <h2 className="text-xl font-bold">{profileData.name}</h2>
                    <p className="text-muted-foreground">{profileData.email}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="bg-primary/10">
                        Nivel {userLevel.level}
                      </Badge>
                      <Badge variant="outline">Premium</Badge>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Puntos: {userLevel.points}</span>
                      <span>Siguiente nivel: {userLevel.nextLevel}</span>
                    </div>
                    <Progress value={userLevel.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {userLevel.progress}% completado para el siguiente nivel
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Beneficios de tu nivel</h3>
                    <ul className="space-y-2">
                      {userLevel.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Premios ganados</CardTitle>
                  <CardDescription>Tus sorteos ganados recientemente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {premiosGanados.map((premio) => (
                      <div key={premio.id} className="flex items-center gap-4">
                        <img
                          src={premio.image || "/placeholder.svg"}
                          alt={premio.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <h3 className="font-medium">{premio.title}</h3>
                          <p className="text-sm text-muted-foreground">{new Date(premio.date).toLocaleDateString()}</p>
                          <Badge variant={premio.status === "Entregado" ? "default" : "outline"} className="mt-1">
                            {premio.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Tabs defaultValue="informacion" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="informacion">Información</TabsTrigger>
                  <TabsTrigger value="actividad">Actividad</TabsTrigger>
                  <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
                </TabsList>

                <TabsContent value="informacion">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Información personal</CardTitle>
                        <CardDescription>Gestiona tu información personal y de contacto</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                        <Edit className="h-4 w-4 mr-2" />
                        {isEditing ? "Cancelar" : "Editar"}
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nombre completo</Label>
                            <Input
                              id="name"
                              name="name"
                              value={profileData.name}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={profileData.email}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={profileData.phone}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Dirección</Label>
                            <Input
                              id="address"
                              name="address"
                              value={profileData.address}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="bio">Biografía</Label>
                            <Textarea
                              id="bio"
                              name="bio"
                              value={profileData.bio}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                              rows={4}
                            />
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    {isEditing && (
                      <CardFooter className="flex justify-end">
                        <Button onClick={handleSaveChanges}>Guardar cambios</Button>
                      </CardFooter>
                    )}
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Preferencias de notificaciones</CardTitle>
                      <CardDescription>Configura cómo quieres recibir notificaciones</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Notificaciones por email</h3>
                            <p className="text-sm text-muted-foreground">
                              Recibe actualizaciones sobre sorteos y premios
                            </p>
                          </div>
                          <Switch
                            checked={profileData.notifications.email}
                            onCheckedChange={() => handleNotificationChange("email")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Notificaciones push</h3>
                            <p className="text-sm text-muted-foreground">Recibe alertas en tiempo real</p>
                          </div>
                          <Switch
                            checked={profileData.notifications.push}
                            onCheckedChange={() => handleNotificationChange("push")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Notificaciones SMS</h3>
                            <p className="text-sm text-muted-foreground">
                              Recibe mensajes de texto con actualizaciones importantes
                            </p>
                          </div>
                          <Switch
                            checked={profileData.notifications.sms}
                            onCheckedChange={() => handleNotificationChange("sms")}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="actividad">
                  <Card>
                    <CardHeader>
                      <CardTitle>Historial de actividad</CardTitle>
                      <CardDescription>Revisa tu actividad reciente en la plataforma</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {activityHistory.map((activity) => (
                          <div key={activity.id} className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              {activity.action.includes("Participación") ? (
                                <Ticket className="h-5 w-5 text-primary" />
                              ) : activity.action.includes("Premio") ? (
                                <Gift className="h-5 w-5 text-primary" />
                              ) : activity.action.includes("Actualización") ? (
                                <Edit className="h-5 w-5 text-primary" />
                              ) : (
                                <User className="h-5 w-5 text-primary" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{activity.action}</h3>
                                <span className="text-xs text-muted-foreground">
                                  {new Date(activity.date).toLocaleString("es-ES", {
                                    day: "numeric",
                                    month: "long",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="seguridad">
                  <Card>
                    <CardHeader>
                      <CardTitle>Seguridad de la cuenta</CardTitle>
                      <CardDescription>Gestiona la seguridad de tu cuenta</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Key className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">Cambiar contraseña</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                Actualiza tu contraseña para mantener tu cuenta segura
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Cambiar
                          </Button>
                        </div>

                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">Autenticación de dos factores</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                Añade una capa extra de seguridad a tu cuenta
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Activar
                          </Button>
                        </div>

                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <CreditCard className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">Métodos de pago</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                Gestiona tus métodos de pago para participar en sorteos
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Gestionar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

