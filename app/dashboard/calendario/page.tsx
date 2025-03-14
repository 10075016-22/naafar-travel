"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Gift,
  Home,
  Settings,
  User,
  LogOut,
  Bell,
  CalendarIcon,
  Ticket,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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

// Función para generar días del mes
const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1)
  const days = []
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

// Función para obtener días de la semana en español
const getDayName = (day: number) => {
  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
  return days[day]
}

// Función para obtener nombre del mes en español
const getMonthName = (month: number) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  return months[month]
}

export default function CalendarioPage() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  // Eventos de ejemplo para el calendario
  const events = [
    {
      id: 1,
      title: "Sorteo MacBook Pro",
      date: new Date(2023, 11, 15), // Diciembre 15, 2023
      type: "sorteo",
      status: "participando",
    },
    {
      id: 2,
      title: "Sorteo Viaje a Nueva York",
      date: new Date(2023, 11, 20), // Diciembre 20, 2023
      type: "sorteo",
      status: "participando",
    },
    {
      id: 3,
      title: "Sorteo Tesla Model 3",
      date: new Date(2024, 0, 10), // Enero 10, 2024
      type: "sorteo",
      status: "participando",
    },
    {
      id: 4,
      title: "Nuevo sorteo disponible",
      date: new Date(2023, 11, 5), // Diciembre 5, 2023
      type: "notificacion",
    },
    {
      id: 5,
      title: "Recordatorio: Último día para participar",
      date: new Date(2023, 11, 10), // Diciembre 10, 2023
      type: "recordatorio",
    },
    {
      id: 6,
      title: "Anuncio de ganadores",
      date: new Date(2023, 11, 25), // Diciembre 25, 2023
      type: "anuncio",
    },
  ]

  // Función para navegar al mes anterior
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  // Función para navegar al mes siguiente
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  // Obtener días del mes actual
  const daysInMonth = getDaysInMonth(currentYear, currentMonth)

  // Obtener el primer día de la semana del mes
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  // Crear array con días vacíos para alinear el calendario
  const blanks = Array(firstDayOfMonth).fill(null)

  // Combinar días vacíos y días del mes
  const calendarDays = [...blanks, ...daysInMonth]

  // Función para verificar si hay eventos en una fecha específica
  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Función para obtener el color de badge según el tipo de evento
  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "sorteo":
        return "bg-primary"
      case "notificacion":
        return "bg-blue-500"
      case "recordatorio":
        return "bg-yellow-500"
      case "anuncio":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  // Eventos del día seleccionado (por defecto hoy)
  const [selectedDate, setSelectedDate] = useState(today)
  const selectedDateEvents = getEventsForDate(selectedDate)

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
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard/calendario">
                    <CalendarIcon className="h-5 w-5" />
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
              <h1 className="text-2xl font-bold">Calendario</h1>
              <p className="text-muted-foreground">Gestiona tus fechas importantes</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={prevMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h2 className="text-xl font-bold">
                      {getMonthName(currentMonth)} {currentYear}
                    </h2>
                    <Button variant="outline" size="icon" onClick={nextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setCurrentMonth(today.getMonth())
                        setCurrentYear(today.getFullYear())
                        setSelectedDate(today)
                      }}
                    >
                      Hoy
                    </Button>
                    <Select defaultValue="month">
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Vista" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="month">Mes</SelectItem>
                        <SelectItem value="week">Semana</SelectItem>
                        <SelectItem value="day">Día</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Días de la semana */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                    <div key={day} className="text-center font-medium text-sm py-2">
                      {getDayName(day)}
                    </div>
                  ))}
                </div>

                {/* Días del mes */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    if (!day) {
                      return <div key={`blank-${index}`} className="p-2"></div>
                    }

                    const isToday = day.toDateString() === today.toDateString()
                    const isSelected = day.toDateString() === selectedDate.toDateString()
                    const dayEvents = getEventsForDate(day)
                    const hasEvents = dayEvents.length > 0

                    return (
                      <div
                        key={`day-${index}`}
                        className={`p-1 min-h-[80px] border rounded-md cursor-pointer transition-colors ${
                          isToday ? "bg-primary/10 border-primary" : ""
                        } ${isSelected ? "ring-2 ring-primary" : ""} hover:bg-gray-100 dark:hover:bg-gray-800`}
                        onClick={() => setSelectedDate(day)}
                      >
                        <div className="flex justify-between items-start p-1">
                          <span className={`text-sm font-medium ${isToday ? "text-primary" : ""}`}>
                            {day.getDate()}
                          </span>
                          {hasEvents && (
                            <div className="flex flex-wrap gap-1 justify-end">
                              {dayEvents.length <= 2 ? (
                                dayEvents.map((event) => (
                                  <div
                                    key={event.id}
                                    className={`w-2 h-2 rounded-full ${getEventBadgeColor(event.type)}`}
                                  ></div>
                                ))
                              ) : (
                                <>
                                  <div
                                    className={`w-2 h-2 rounded-full ${getEventBadgeColor(dayEvents[0].type)}`}
                                  ></div>
                                  <span className="text-xs text-muted-foreground">+{dayEvents.length - 1}</span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        {hasEvents && dayEvents.length === 1 && (
                          <div className="mt-1 px-1">
                            <p className="text-xs truncate">{dayEvents[0].title}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {selectedDate.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}
                </CardTitle>
                <CardDescription>
                  {selectedDateEvents.length === 0
                    ? "No hay eventos programados para este día"
                    : `${selectedDateEvents.length} evento${selectedDateEvents.length > 1 ? "s" : ""}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedDateEvents.length > 0 ? (
                    selectedDateEvents.map((event) => (
                      <div key={event.id} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className={`w-3 h-3 rounded-full mt-1 ${getEventBadgeColor(event.type)}`}></div>
                        <div className="flex-1">
                          <h3 className="font-medium">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {event.date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                          </p>
                          {event.type === "sorteo" && (
                            <Badge variant="outline" className="mt-2">
                              {event.status}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-6">
                      <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground text-center">No hay eventos programados para este día</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        <Plus className="h-4 w-4 mr-2" />
                        Añadir recordatorio
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Próximos sorteos</CardTitle>
                <CardDescription>Sorteos programados para los próximos días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events
                    .filter((event) => event.type === "sorteo" && event.date >= today)
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .slice(0, 3)
                    .map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <CalendarIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {event.date.toLocaleDateString("es-ES", { day: "numeric", month: "long" })}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

