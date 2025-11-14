import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

/**
 * MESSAGES SECTION
 * Displays recent messages submitted through the contact form
 * 
 * NOTE: This is a template with dummy data. Once Firebase is integrated,
 * this component will fetch and display real messages using:
 * - Firebase Firestore to retrieve messages
 * - Real-time updates when new messages are submitted
 * - Proper date formatting and sorting
 * 
 * TODO: Integrate with Firebase using fetch GET method
 */

const MessagesSection = () => {
  // Dummy data for template demonstration
  // TODO: Replace with Firebase Firestore query
  const recentMessages = [
    {
      id: "1",
      name: "Juan Pérez",
      company: "Tech Solutions",
      email: "juan@techsolutions.com",
      phone: "+52 123 456 7890",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interesado en sus servicios.",
      date: "2024-11-11",
      status: "nuevo",
    },
    {
      id: "2",
      name: "María López",
      company: "Innovate Inc",
      email: "maria@innovate.com",
      phone: "+52 987 654 3210",
      message: "Quisiera más información sobre los planes empresariales disponibles.",
      date: "2024-11-10",
      status: "leído",
    },
    {
      id: "3",
      name: "Carlos García",
      company: "Digital Agency",
      email: "carlos@digital.com",
      phone: "+52 555 123 4567",
      message: "Excelente servicio, me gustaría agendar una reunión para discutir detalles.",
      date: "2024-11-09",
      status: "respondido",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      nuevo: { text: "Nuevo", className: "bg-primary text-primary-foreground" },
      leído: { text: "Leído", className: "bg-secondary text-secondary-foreground" },
      respondido: { text: "Respondido", className: "bg-muted text-muted-foreground" },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.nuevo;

    return <Badge className={config.className}>{config.text}</Badge>;
  };

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Mensajes Recientes
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Últimos mensajes recibidos a través del formulario de contacto
          </p>
        </div>

        {/* Messages Table */}
        <Card className="border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">
              Historial de Mensajes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Nombre</TableHead>
                    <TableHead className="font-semibold">Empresa</TableHead>
                    <TableHead className="font-semibold">Correo</TableHead>
                    <TableHead className="font-semibold">Teléfono</TableHead>
                    <TableHead className="font-semibold">Mensaje</TableHead>
                    <TableHead className="font-semibold">Fecha</TableHead>
                    <TableHead className="font-semibold">Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentMessages.map((message) => (
                    <TableRow key={message.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{message.name}</TableCell>
                      <TableCell>{message.company}</TableCell>
                      <TableCell>
                        <a
                          href={`mailto:${message.email}`}
                          className="text-primary hover:underline"
                        >
                          {message.email}
                        </a>
                      </TableCell>
                      <TableCell>
                        <a
                          href={`tel:${message.phone.replace(/\s/g, "")}`}
                          className="text-primary hover:underline"
                        >
                          {message.phone}
                        </a>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{message.message}</TableCell>
                      <TableCell>{message.date}</TableCell>
                      <TableCell>{getStatusBadge(message.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {recentMessages.map((message) => (
                <Card key={message.id} className="border-border">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-card-foreground">{message.name}</p>
                          <p className="text-sm text-muted-foreground">{message.company}</p>
                        </div>
                        {getStatusBadge(message.status)}
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Correo: </span>
                          <a href={`mailto:${message.email}`} className="text-primary hover:underline">
                            {message.email}
                          </a>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Teléfono: </span>
                          <a href={`tel:${message.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                            {message.phone}
                          </a>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Mensaje: </span>
                          <p className="text-card-foreground mt-1">{message.message}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Fecha: </span>
                          <span className="text-card-foreground">{message.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State - Show when no messages (for future Firebase integration) */}
            {recentMessages.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  No hay mensajes recientes
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Los mensajes aparecerán aquí cuando sean enviados a través del formulario
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card about Firebase Integration */}
        <Card className="mt-6 border-primary/20 bg-accent">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Nota:</strong> Esta sección mostrará automáticamente los mensajes enviados
              a través del formulario de contacto una vez que Firebase esté conectado. Los datos se actualizarán en tiempo real.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MessagesSection;
