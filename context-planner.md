Contexto de Proyecto: Event Planning SaaS (MVP)
Este documento define la arquitectura, stack tecnológico y hoja de ruta para el desarrollo de una plataforma SaaS de gestión de eventos (Wedding Planner / Eventos Corporativos).

1. Objetivo del Proyecto
Desarrollar un sistema SaaS Multi-tenant que centralice la gestión de eventos para organizadores (Panel de Control) y ofrezca una experiencia digital fluida para los invitados (Sitios de Evento). El enfoque inicial es la velocidad de desarrollo aprovechando un template comprado y la escalabilidad lógica mediante el uso del protocolo MCP.

2. Stack Tecnológico
Frontend (La prioridad inicial)
Framework: Next.js 15 (App Router) - TypeScript

UI Library: Template comprado (Materialize) + Tailwind CSS.

Deploy: Vercel / Netlify.

Funciones: Renderiza tanto el Panel Admin (Privado) como las Landings de Eventos (Públicas).

Backend (Fase 2)
Framework: NestJS - TypeScript

Database: PostgreSQL.

ORM: Prisma.

Storage: MinIO / AWS S3 (para fotos y contratos).

Arquitectura Lógica: Uso de MCP (Model Context Protocol) como capa de abstracción para herramientas de lógica compleja (ej: SeatingPlanner, BudgetCalculator).

3. Arquitectura del Repositorio
Estructura de repositorio unificado (no Monorepo estricto con Turborepo, sino dos aplicaciones claras):

/event-planner-repo
├── frontend/          # Next.js App (Admin + Landings)
│   ├── src/app/admin  # Rutas privadas del Panel de Control
│   └── src/app/event  # Rutas públicas dinámicas (Landings de invitación)
├── backend/           # NestJS API (API REST + MCP Tools)
└── docker/            # Configuración de DB y MinIO
4. Plan de Ejecución (Roadmap)
FASE 1: Frontend First & UI Definition (INICIO INMEDIATO)
Objetivo: Levantar el template, personalizar la marca y definir las interfaces clave de negocio antes de conectar datos reales.

Setup Inicial:

Inicializar proyecto Next.js.

Migrar/Instalar el Template Materialize comprado dentro de la carpeta frontend/.

Limpieza: Eliminar módulos innecesarios del template (e-commerce).

Branding & Theming:

Ajustar paleta de colores, tipografías y logos para la identidad del SaaS.

Configurar el Layout principal del Admin Panel y eliminar los restantes.

Maquetación de Módulos Core (Mock Data):

Dashboard: Vista principal con métricas dummy.

Organizador de Mesas (Seating UI): Crear la interfaz visual (drag & drop si es posible) para asignar invitados a mesas. Hacerlo didactico y con informacion sugerida por hover-cards con info de los invitados que hacemos hover, como nombre, apellido, vinculo, etc.

Gestor de Invitados: Tabla para cargar/editar invitados y ver estados de RSVP. Hacer checkin a traves de QR con el celular. 

Editor de Landings: Interfaz para que el planner configure la "Historia", fotos y colores de la landing del evento. Aca tiene que estar toda la informacion que se muestra en la landing del evento.

Landing de Evento (Public View): Maquetar la página /event/[slug] que verán los invitados (Hero, RSVP Form, Mapa). Lo ideal es SUPER basica y con el minimo de funcionalidades.

FASE 2: Backend Core & Infraestructura
Objetivo: Dar vida a la UI con datos reales y persistencia.

Infraestructura Local: Configurar docker-compose.yml con PostgreSQL y MinIO.

NestJS Setup: Inicializar proyecto backend/.

Base de Datos: Definir esquema Prisma (Event, Guest, Table, Planner). Importante: Soporte Multi-tenant (todo filtrado por eventId).

API Básica: Endpoints CRUD para los módulos maquetados en Fase 1.

FASE 3: Integración & Lógica MCP
Objetivo: Conectar Front con Back e implementar la lógica de negocio avanzada.

Integración: Conectar los formularios del Frontend a la API de NestJS.

MCP Implementation:

Crear módulo interno de MCP en NestJS.

Implementar Tools: SeatingLogic (algoritmo simple de asignación), InvitationSender (lógica de emails).

RSVP Real: Habilitar el flujo de confirmación de invitados real (Landing -> API -> DB).

5. Funcionalidades Clave del MVP (Alcance)
Gestión de Eventos: Crear, editar y configurar fecha/lugar.

Invitados y RSVP: Carga masiva, link único de invitación, confirmación online.

Landing Page del Evento: Página web autogenerada para cada evento con información, mapa y formulario.

Organización de Mesas: Interfaz visual para distribuir invitados.

Timeline: Agenda del día del evento visible para planner e invitados.

Instrucción para la IA: "Comienza asistiéndome con la FASE 1. Necesito ayuda para configurar el entorno de Next.js e integrar los assets del template comprado. Prioricemos limpiar la UI y dejar listos los componentes visuales para el 'Organizador de Mesas' y la 'Lista de Invitados'."