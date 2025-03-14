"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Gift,
  Home,
  Settings,
  User,
  LogOut,
  Bell,
  Calendar,
  Ticket,
  Moon,
  Sun,
  Globe,
  Shield,
  CreditCard,
  Trash2,
  Mail,
  Phone,
  Key,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export default function ConfiguracionPage() {
  // Estado para las configuraciones
  const [config, setConfig] = useState({
    theme: "system",
    language: "es",
    notifications: {
      email: true,
      push: true,
      sms: false,
      newSorteos: true,
      results: true,
      promotions: true,
    },
    privacy: {
      profileVisibility: "public",
      showParticipations: true,
      showWins: true,
    },
  })

  // Función para cambiar el tema
  const handleThemeChange = (theme: string) => {
    setConfig({
      ...config,
      theme,
    })
  }

  // Función para cambiar el idioma
  const handleLanguageChange = (language: string) => {
    setConfig({
      ...config,
      language,
    })
  }

  // Función para cambiar las notificaciones
  const handleNotificationChange = (type: string) => {
    setConfig({
      ...config,
      notifications: {
        ...config.notifications,
        [type]: !config.notifications[type as keyof typeof config.notifications],
      },
    })
  }

  // Función para cambiar la privacidad
  const handlePrivacyChange = (type: string, value: any) => {
    setConfig({
      ...config,
      privacy: {
        ...config.privacy,
        [type]: value,
      },
    })
  }

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
                <SidebarMenuButton asChild isActive>
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
              <h1 className="text-2xl font-bold">Configuración</h1>
              <p className="text-muted-foreground">Personaliza tu experiencia en la plataforma</p>
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

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
              <TabsTrigger value="privacidad">Privacidad</TabsTrigger>
              <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Apariencia</CardTitle>
                    <CardDescription>Personaliza la apariencia de la plataforma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <Label>Tema</Label>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                          <Button
                            variant={config.theme === "light" ? "default" : "outline"}
                            className="flex flex-col items-center justify-center h-24 gap-2"
                            onClick={() => handleThemeChange("light")}
                          >
                            <Sun className="h-6 w-6" />
                            <span>Claro</span>
                          </Button>
                          <Button
                            variant={config.theme === "dark" ? "default" : "outline"}
                            className="flex flex-col items-center justify-center h-24 gap-2"
                            onClick={() => handleThemeChange("dark")}
                          >
                            <Moon className="h-6 w-6" />
                            <span>Oscuro</span>
                          </Button>
                          <Button
                            variant={config.theme === "system" ? "default" : "outline"}
                            className="flex flex-col items-center justify-center h-24 gap-2"
                            onClick={() => handleThemeChange("system")}
                          >
                            <Settings className="h-6 w-6" />
                            <span>Sistema</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Idioma y región</CardTitle>
                    <CardDescription>Configura el idioma y la región de la plataforma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="language">Idioma</Label>
                        <Select value={config.language} onValueChange={handleLanguageChange}>
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Selecciona un idioma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="de">Deutsch</SelectItem>
                            <SelectItem value="it">Italiano</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="region">Región</Label>
                        <Select defaultValue="es">
                          <SelectTrigger id="region">
                            <SelectValue placeholder="Selecciona una región" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="es">España</SelectItem>
                            <SelectItem value="mx">México</SelectItem>
                            <SelectItem value="ar">Argentina</SelectItem>
                            <SelectItem value="co">Colombia</SelectItem>
                            <SelectItem value="cl">Chile</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="notificaciones">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias de notificaciones</CardTitle>
                  <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Canales de notificación</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary" />
                            <div>
                              <h4 className="font-medium">Email</h4>
                              <p className="text-sm text-muted-foreground">
                                Recibe notificaciones por correo electrónico
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={config.notifications.email}
                            onCheckedChange={() => handleNotificationChange("email")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Bell className="h-5 w-5 text-primary" />
                            <div>
                              <h4 className="font-medium">Notificaciones push</h4>
                              <p className="text-sm text-muted-foreground">Recibe notificaciones en tu navegador</p>
                            </div>
                          </div>
                          <Switch
                            checked={config.notifications.push}
                            onCheckedChange={() => handleNotificationChange("push")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary" />
                            <div>
                              <h4 className="font-medium">SMS</h4>
                              <p className="text-sm text-muted-foreground">
                                Recibe notificaciones por mensaje de texto
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={config.notifications.sms}
                            onCheckedChange={() => handleNotificationChange("sms")}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Tipos de notificaciones</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Nuevos sorteos</h4>
                            <p className="text-sm text-muted-foreground">
                              Notificaciones sobre nuevos sorteos disponibles
                            </p>
                          </div>
                          <Switch
                            checked={config.notifications.newSorteos}
                            onCheckedChange={() => handleNotificationChange("newSorteos")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Resultados de sorteos</h4>
                            <p className="text-sm text-muted-foreground">
                              Notificaciones sobre los resultados de sorteos en los que participas
                            </p>
                          </div>
                          <Switch
                            checked={config.notifications.results}
                            onCheckedChange={() => handleNotificationChange("results")}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Promociones y ofertas</h4>
                            <p className="text-sm text-muted-foreground">
                              Notificaciones sobre promociones especiales y ofertas
                            </p>
                          </div>
                          <Switch
                            checked={config.notifications.promotions}
                            onCheckedChange={() => handleNotificationChange("promotions")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacidad">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración de privacidad</CardTitle>
                  <CardDescription>Controla quién puede ver tu información y actividad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="profileVisibility">Visibilidad del perfil</Label>
                      <Select
                        value={config.privacy.profileVisibility}
                        onValueChange={(value) => handlePrivacyChange("profileVisibility", value)}
                      >
                        <SelectTrigger id="profileVisibility">
                          <SelectValue placeholder="Selecciona la visibilidad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Público</SelectItem>
                          <SelectItem value="private">Privado</SelectItem>
                          <SelectItem value="friends">Solo amigos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Mostrar participaciones</h4>
                          <p className="text-sm text-muted-foreground">
                            Permitir que otros usuarios vean en qué sorteos has participado
                          </p>
                        </div>
                        <Switch
                          checked={config.privacy.showParticipations}
                          onCheckedChange={(value) => handlePrivacyChange("showParticipations", value)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Mostrar premios ganados</h4>
                          <p className="text-sm text-muted-foreground">
                            Permitir que otros usuarios vean qué premios has ganado
                          </p>
                        </div>
                        <Switch
                          checked={config.privacy.showWins}
                          onCheckedChange={(value) => handlePrivacyChange("showWins", value)}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Datos y cookies</h3>
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-3">
                            <Shield className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h4 className="font-medium">Política de privacidad</h4>
                              <p className="text-sm text-muted-foreground">
                                Revisa nuestra política de privacidad y cómo usamos tus datos
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Ver
                          </Button>
                        </div>
                        <div className="flex items-start justify-between">
                          <div className="flex gap-3">
                            <Globe className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <h4 className="font-medium">Configuración de cookies</h4>
                              <p className="text-sm text-muted-foreground">
                                Gestiona las cookies y el seguimiento en el sitio
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Configurar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cuenta">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de la cuenta</CardTitle>
                    <CardDescription>Gestiona los detalles de tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <User className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium">Cambiar correo electrónico</h4>
                            <p className="text-sm text-muted-foreground">
                              Actualiza la dirección de correo electrónico asociada a tu cuenta
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Cambiar
                        </Button>
                      </div>
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <Key className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium">Cambiar contraseña</h4>
                            <p className="text-sm text-muted-foreground">Actualiza la contraseña de tu cuenta</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Cambiar
                        </Button>
                      </div>
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <CreditCard className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <h4 className="font-medium">Métodos de pago</h4>
                            <p className="text-sm text-muted-foreground">
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

                <Card>
                  <CardHeader>
                    <CardTitle>Suscripción</CardTitle>
                    <CardDescription>Gestiona tu plan de suscripción</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Plan Premium</h3>
                          <p className="text-sm text-muted-foreground">Renovación: 15 de enero de 2024</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Cambiar plan
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Historial de facturación</h3>
                          <p className="text-sm text-muted-foreground">Ver tus facturas y pagos anteriores</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver historial
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">Zona de peligro</CardTitle>
                    <CardDescription>Acciones irreversibles para tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <Trash2 className="h-5 w-5 text-destructive mt-1" />
                          <div>
                            <h4 className="font-medium">Eliminar cuenta</h4>
                            <p className="text-sm text-muted-foreground">
                              Elimina permanentemente tu cuenta y todos tus datos
                            </p>
                          </div>
                        </div>
                        <Button variant="destructive" size="sm">
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  )
}

