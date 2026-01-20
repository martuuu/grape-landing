# ✅ Checklist de Activación - EmailJS COMMIT Landing

## 📋 SETUP EMAILJS (15-20 minutos)

### 1. Cuenta EmailJS
- [ ] Ir a https://www.emailjs.com/
- [ ] Sign Up con Gmail: `martin.navarro.dev@gmail.com`
- [ ] Verificar email de confirmación
- [ ] Login exitoso

---

### 2. Servicio de Email
- [ ] Dashboard → Email Services
- [ ] Add New Service → Gmail
- [ ] Connect Account y autorizar Gmail
- [ ] Verificar Service ID: `service_wcv0ltx`
- [ ] Service activo (verde)

---

### 3. Template: Contacto Simple
- [ ] Dashboard → Email Templates
- [ ] Create New Template
- [ ] Nombre: `contact_form`
- [ ] Subject: `Nuevo contacto desde COMMIT Landing - {{name}}`
- [ ] Copiar HTML de `docs/EMAILJS-SETUP.md` (Template 1)
- [ ] To Email: `martin.navarro.dev@gmail.com`
- [ ] Test Template (botón de prueba)
- [ ] Save
- [ ] **Copiar Template ID:** `_________________`

---

### 4. Template: Presupuesto
- [ ] Create New Template
- [ ] Nombre: `budget_request`
- [ ] Subject: `Nueva solicitud de presupuesto - {{project_type}}`
- [ ] Copiar HTML de `docs/EMAILJS-SETUP.md` (Template 2)
- [ ] To Email: `martin.navarro.dev@gmail.com`
- [ ] Test Template
- [ ] Save
- [ ] **Copiar Template ID:** `_________________`

---

### 5. Public Key
- [ ] Account → API Keys
- [ ] **Copiar Public Key:** `_________________`

---

### 6. Variables de Entorno - LOCAL
- [ ] Crear archivo `.env.local` en raíz
- [ ] Copiar contenido:
```bash
PUBLIC_EMAILJS_SERVICE_ID=service_wcv0ltx
PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_xxxxx  # Tu ID del paso 3
PUBLIC_EMAILJS_TEMPLATE_BUDGET=template_xxxxx   # Tu ID del paso 4
PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx         # Tu key del paso 5
```
- [ ] Guardar archivo

---

## 🧪 TESTING LOCAL

### Desarrollo
- [ ] `npm run dev`
- [ ] Abrir http://localhost:4321

### Formulario de Contacto
- [ ] Ir a `/contact`
- [ ] Completar formulario:
  - Nombre: Test Contacto
  - Email: tu@email.com
  - Mensaje: Probando integración EmailJS
- [ ] Seleccionar "Email"
- [ ] Click "Contact us"
- [ ] Ver mensaje "Enviando..."
- [ ] Ver mensaje verde de éxito
- [ ] **Revisar inbox:** martin.navarro.dev@gmail.com
- [ ] Email recibido ✅

### WhatsApp - Contacto
- [ ] Completar formulario nuevamente
- [ ] Seleccionar "WhatsApp"
- [ ] Click "Contact us"
- [ ] Se abre WhatsApp ✅
- [ ] Mensaje pre-cargado correcto ✅

### Budget Builder - Email
- [ ] Ir a `/presupuesto`
- [ ] Step 1: Completar datos
  - Nombre: Juan Pérez
  - Email: juan@email.com
  - Teléfono: +54 9 11 1234-5678
  - Empresa: Test Company
- [ ] Click "Siguiente"
- [ ] Step 2: Seleccionar "Aplicación Web"
- [ ] Click "Siguiente"
- [ ] Step 3: Marcar 2-3 opciones de preparación
- [ ] Click "Siguiente"
- [ ] Step 4: Marcar 3-4 módulos
- [ ] Agregar comentario: "Proyecto de prueba"
- [ ] Click "Enviar por Email"
- [ ] Ver mensaje "Enviando..."
- [ ] Ver mensaje verde con ✅
- [ ] **Revisar inbox:** martin.navarro.dev@gmail.com
- [ ] Email con todas las secciones recibido ✅

### Budget Builder - WhatsApp
- [ ] Completar flujo nuevamente
- [ ] Click "Enviar por WhatsApp"
- [ ] Se abre WhatsApp ✅
- [ ] Mensaje estructurado con bullets ✅
- [ ] No incluye email ni teléfono completo ✅

---

## 🚀 DEPLOY A PRODUCCIÓN

### Variables de Entorno - Vercel
- [ ] Login en Vercel
- [ ] Ir a tu proyecto
- [ ] Settings → Environment Variables
- [ ] Add Variable:
  - Name: `PUBLIC_EMAILJS_SERVICE_ID`
  - Value: `service_wcv0ltx`
  - Environments: Production, Preview, Development
- [ ] Add Variable:
  - Name: `PUBLIC_EMAILJS_TEMPLATE_CONTACT`
  - Value: (Tu template ID del paso 3)
  - Environments: Production, Preview, Development
- [ ] Add Variable:
  - Name: `PUBLIC_EMAILJS_TEMPLATE_BUDGET`
  - Value: (Tu template ID del paso 4)
  - Environments: Production, Preview, Development
- [ ] Add Variable:
  - Name: `PUBLIC_EMAILJS_PUBLIC_KEY`
  - Value: (Tu public key del paso 5)
  - Environments: Production, Preview, Development
- [ ] Save

### O Variables de Entorno - Netlify
- [ ] Login en Netlify
- [ ] Ir a tu site
- [ ] Site settings → Environment variables
- [ ] Add a variable:
  - Key: `PUBLIC_EMAILJS_SERVICE_ID`
  - Value: `service_wcv0ltx`
- [ ] Add a variable:
  - Key: `PUBLIC_EMAILJS_TEMPLATE_CONTACT`
  - Value: (Tu template ID)
- [ ] Add a variable:
  - Key: `PUBLIC_EMAILJS_TEMPLATE_BUDGET`
  - Value: (Tu template ID)
- [ ] Add a variable:
  - Key: `PUBLIC_EMAILJS_PUBLIC_KEY`
  - Value: (Tu public key)
- [ ] Save

### Deploy
- [ ] Push a main/master branch
- [ ] O Trigger manual deploy
- [ ] Build exitoso ✅
- [ ] Deployment completo ✅

---

## ✅ TESTING EN PRODUCCIÓN

### Formulario de Contacto
- [ ] Ir a tu-dominio.com/contact
- [ ] Enviar por Email
- [ ] Email recibido ✅
- [ ] Enviar por WhatsApp
- [ ] WhatsApp abre ✅

### Budget Builder
- [ ] Ir a tu-dominio.com/presupuesto
- [ ] Completar flujo completo
- [ ] Enviar por Email
- [ ] Email con todas las secciones ✅
- [ ] Completar nuevamente
- [ ] Enviar por WhatsApp
- [ ] WhatsApp con mensaje estructurado ✅

### Mobile Testing
- [ ] Abrir desde smartphone
- [ ] Test formulario contacto
- [ ] Test Budget Builder
- [ ] WhatsApp abre desde mobile app ✅

---

## 📊 POST-DEPLOY

### Analytics
- [ ] Google Analytics configurado (opcional)
- [ ] Eventos de conversión configurados (opcional)
- [ ] EmailJS Usage Stats monitoreado

### Optimización
- [ ] Lighthouse audit
  - Performance: ___/100
  - Accessibility: ___/100
  - Best Practices: ___/100
  - SEO: ___/100
- [ ] Test en diferentes navegadores
  - Chrome ✅
  - Firefox ✅
  - Safari ✅
  - Edge ✅

### Gmail
- [ ] Configurar filtro para emails de COMMIT Landing (opcional)
- [ ] Configurar respuesta automática (opcional)
- [ ] Marcar como "No spam" si es necesario

---

## 📝 DOCUMENTACIÓN

### Archivos de Referencia
- [ ] Leer `docs/QUICK-START-EMAILJS.md`
- [ ] Leer `docs/EMAILJS-SETUP.md`
- [ ] Leer `EMAILJS-MVP-READY.md`

### Troubleshooting
- [ ] Si falla, revisar console del navegador
- [ ] Verificar que todas las variables estén bien copiadas
- [ ] Revisar Usage Stats en EmailJS (puede estar en límite)
- [ ] Testear templates individuales en EmailJS dashboard

---

## 🎉 FINALIZACIÓN

### Confirmación
- [ ] Sistema de emails funcionando al 100%
- [ ] Formulario de contacto operativo
- [ ] Budget Builder operativo
- [ ] WhatsApp funcionando
- [ ] Emails llegando a destino
- [ ] Sin errores en console
- [ ] Lighthouse > 90 en todas las métricas

### Celebrar 🎊
- [ ] Tomar screenshot de primer email recibido
- [ ] Compartir con el equipo
- [ ] Monitorear primeros contactos reales

---

## 📞 DATOS FINALES

**Email destino:** martin.navarro.dev@gmail.com  
**WhatsApp:** +54 9 291 527-8982  
**Service ID:** service_wcv0ltx  
**Template Contact ID:** `_________________` (completar)  
**Template Budget ID:** `_________________` (completar)  
**Public Key:** `_________________` (completar)

---

## ⏱️ TIEMPO ESTIMADO

- Setup EmailJS: 10 minutos
- Testing local: 5 minutos
- Deploy: 3 minutos
- Testing producción: 5 minutos

**TOTAL:** ~25 minutos

---

*Checklist creado: 20 de Enero 2026*  
*Última actualización: [Fecha del último deploy]*
