# 🚀 Guía Rápida - 5 Minutos para Activar Emails

## ⚡ Pasos para Activar el Sistema de Emails

### 1️⃣ Crear Cuenta EmailJS (2 min)

1. Ir a https://www.emailjs.com/
2. Sign Up con Gmail: `martin.navarro.dev@gmail.com`
3. Verificar email

---

### 2️⃣ Configurar Servicio (1 min)

1. En el dashboard, ir a **Email Services**
2. Click **Add New Service**
3. Seleccionar **Gmail**
4. Click **Connect Account** y autorizar tu Gmail
5. **Service ID:** Ya está configurado como `service_wcv0ltx`

---

### 3️⃣ Crear Template de Contacto (2 min)

1. Ir a **Email Templates**
2. Click **Create New Template**
3. Nombre: `contact_form`
4. **Subject:** `Nuevo contacto desde COMMIT Landing - {{name}}`
5. **Content:** Copiar el HTML completo de `docs/EMAILJS-SETUP.md` (Template 1)
6. **To Email:** `martin.navarro.dev@gmail.com`
7. Click **Save**
8. **Copiar el Template ID** (algo como `template_xyz1234`)

---

### 4️⃣ Crear Template de Presupuesto (2 min)

1. Click **Create New Template** nuevamente
2. Nombre: `budget_request`
3. **Subject:** `Nueva solicitud de presupuesto - {{project_type}}`
4. **Content:** Copiar el HTML completo de `docs/EMAILJS-SETUP.md` (Template 2)
5. **To Email:** `martin.navarro.dev@gmail.com`
6. Click **Save**
7. **Copiar el Template ID**

---

### 5️⃣ Obtener Public Key (30 seg)

1. Ir a **Account** en el menú
2. Buscar **API Keys**
3. **Copiar tu Public Key** (algo como `abc123XYZ...`)

---

### 6️⃣ Configurar Variables (1 min)

1. Crear archivo `.env.local` en la raíz del proyecto
2. Copiar y completar:

```bash
PUBLIC_EMAILJS_SERVICE_ID=service_wcv0ltx
PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_xyz1234  # Tu ID del paso 3
PUBLIC_EMAILJS_TEMPLATE_BUDGET=template_abc5678   # Tu ID del paso 4
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui      # Tu key del paso 5
```

---

### 7️⃣ Verificar que Funciona (2 min)

```bash
# 1. Desarrollo local
npm run dev

# 2. Abrir http://localhost:4321/contact

# 3. Enviar un email de prueba:
#    - Nombre: Test
#    - Email: tu@email.com
#    - Mensaje: "Probando integración"
#    - Seleccionar "Email"
#    - Click Enviar

# 4. Revisar inbox: martin.navarro.dev@gmail.com
#    (Puede tardar 10-30 segundos)

# 5. Probar Budget Builder en /presupuesto
```

---

### 8️⃣ Deploy a Producción (3 min)

**Vercel:**
```bash
# 1. Ir a Vercel Dashboard
# 2. Ir a tu proyecto → Settings → Environment Variables
# 3. Agregar las 4 variables del paso 6
# 4. Redeploy
```

**Netlify:**
```bash
# 1. Ir a Netlify Dashboard
# 2. Ir a tu site → Site settings → Environment variables
# 3. Agregar las 4 variables del paso 6
# 4. Trigger deploy
```

---

## ✅ Checklist Final

- [ ] Cuenta EmailJS creada
- [ ] Gmail conectado
- [ ] Template "contact_form" creado
- [ ] Template "budget_request" creado
- [ ] Public Key copiada
- [ ] `.env.local` configurado localmente
- [ ] Test local exitoso
- [ ] Variables en Vercel/Netlify
- [ ] Deploy realizado
- [ ] Test en producción exitoso

---

## 🆘 Troubleshooting

### "EmailJS configuration missing"
**Solución:** Verificá que `.env.local` exista y tenga las 4 variables

### "Error sending email"
**Solución:** 
1. Verificá los Template IDs en EmailJS dashboard
2. Asegurate que el servicio de Gmail esté activo
3. Revisá que el Public Key sea correcto

### El email no llega
**Solución:**
1. Revisá la carpeta Spam
2. Verificá el "To Email" en los templates de EmailJS
3. Chequeá Usage Stats en EmailJS dashboard (puede estar en límite)

### WhatsApp no abre
**Solución:**
1. Verificá que estés en mobile o que tengas WhatsApp Web
2. El número está hardcodeado correctamente: 5492915278982

---

## 📞 Número de WhatsApp Configurado

**Formato completo:** +54 9 291 527-8982  
**Formato internacional (URL):** 5492915278982

---

## 💡 Tips

1. **Plan Gratuito EmailJS:** 200 emails/mes (suficiente para empezar)
2. **Templates HTML:** Están completos en `docs/EMAILJS-SETUP.md`, solo copiar/pegar
3. **Testing:** Usá emails de prueba antes de publicar el sitio
4. **Spam:** Los primeros emails pueden ir a spam, marcá como "No spam"
5. **Límites:** Si llegás a 200 emails/mes, considerá upgrade o Formspree

---

## 🎯 Próximos Pasos

Después de activar emails:

1. ✅ Testear ambos formularios
2. ✅ Configurar respuestas automáticas en Gmail (opcional)
3. ✅ Monitorear primeros contactos
4. ✅ Ajustar templates si es necesario
5. ✅ Configurar Google Analytics para trackear conversiones

---

**Tiempo total estimado:** 15-20 minutos  
**Dificultad:** Fácil  
**Resultado:** Sistema de contacto profesional funcionando 🚀

---

*¿Problemas? Revisá la documentación completa en `docs/EMAILJS-SETUP.md`*
