# 📧 Guía de Configuración EmailJS - COMMIT Landing

## 🔑 Credenciales del Servicio

**Service ID:** `service_wcv0ltx`  
**Destino:** `martin.navarro.dev@gmail.com`

---

## 📝 Templates a Crear en EmailJS

### Template 1: Contacto Simple

**Template Name:** `contact_form`  
**Template ID:** (Se genera automáticamente, copiarlo después)

#### Variables del Template:
- `{{name}}` - Nombre completo del contacto
- `{{from_name}}` - Mismo que name (para compatibilidad)
- `{{from_email}}` - Email del contacto
- `{{message}}` - Mensaje del contacto
- `{{time}}` - Timestamp formateado
- `{{to_email}}` - Email destino (martin.navarro.dev@gmail.com)

#### HTML del Template:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>Un nuevo mensaje de contacto ha sido recibido desde COMMIT Landing.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #138bae; font-size: 14px">{{from_email}}</div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px; margin-top: 15px; color: #2c3e50;">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; padding: 10px; background-color: #f8f9fa; border-radius: 5px;">
    <p style="font-size: 12px; color: #666; margin: 0;">
      📧 Responder a: <a href="mailto:{{from_email}}" style="color: #138bae;">{{from_email}}</a>
    </p>
  </div>
  <div style="margin-top: 15px; text-align: center; color: #999; font-size: 11px;">
    <p>Enviado desde <strong>COMMIT Landing</strong> - Formulario de Contacto</p>
  </div>
</div>
```

---

### Template 2: Presupuesto

**Template Name:** `budget_request`  
**Template ID:** (Se genera automáticamente, copiarlo después)

#### Variables del Template:
- `{{name}}` - Nombre completo
- `{{from_name}}` - Mismo que name
- `{{from_email}}` - Email
- `{{phone}}` - Teléfono
- `{{company}}` - Empresa (puede ser "No especificada")
- `{{project_type}}` - Tipo de proyecto seleccionado
- `{{summary}}` - Resumen completo concatenado del presupuesto
- `{{time}}` - Timestamp formateado
- `{{to_email}}` - Email destino

#### HTML del Template:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div style="background: linear-gradient(135deg, #138bae 0%, #26bce9 100%); padding: 20px; border-radius: 8px 8px 0 0;">
    <h2 style="color: white; margin: 0; font-size: 24px;">💼 Nueva Solicitud de Presupuesto</h2>
    <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">COMMIT Landing - Budget Builder</p>
  </div>
  
  <div style="padding: 20px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
    <!-- Información del Cliente -->
    <div style="margin-bottom: 25px;">
      <h3 style="color: #138bae; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #138bae; padding-bottom: 5px;">
        👤 Información del Cliente
      </h3>
      <table role="presentation" style="width: 100%;">
        <tr>
          <td style="padding: 8px 0; color: #666; font-size: 14px; width: 120px;">
            <strong>Nombre:</strong>
          </td>
          <td style="padding: 8px 0; color: #2c3e50; font-size: 14px;">
            {{name}}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666; font-size: 14px;">
            <strong>Email:</strong>
          </td>
          <td style="padding: 8px 0; color: #2c3e50; font-size: 14px;">
            <a href="mailto:{{from_email}}" style="color: #138bae; text-decoration: none;">{{from_email}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666; font-size: 14px;">
            <strong>Teléfono:</strong>
          </td>
          <td style="padding: 8px 0; color: #2c3e50; font-size: 14px;">
            {{phone}}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666; font-size: 14px;">
            <strong>Empresa:</strong>
          </td>
          <td style="padding: 8px 0; color: #2c3e50; font-size: 14px;">
            {{company}}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666; font-size: 14px;">
            <strong>Fecha:</strong>
          </td>
          <td style="padding: 8px 0; color: #999; font-size: 13px;">
            {{time}}
          </td>
        </tr>
      </table>
    </div>

    <!-- Tipo de Proyecto -->
    <div style="margin-bottom: 25px;">
      <h3 style="color: #138bae; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #138bae; padding-bottom: 5px;">
        📱 Tipo de Proyecto
      </h3>
      <div style="background-color: #f0f9ff; padding: 15px; border-radius: 6px; border-left: 4px solid #138bae;">
        <p style="margin: 0; font-size: 16px; color: #2c3e50; font-weight: bold;">
          {{project_type}}
        </p>
      </div>
    </div>

    <!-- Resumen del Proyecto -->
    <div style="margin-bottom: 25px;">
      <h3 style="color: #138bae; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #138bae; padding-bottom: 5px;">
        📋 Resumen del Proyecto
      </h3>
      <div style="background-color: #f0f9ff; padding: 15px; border-radius: 6px; border-left: 4px solid #138bae;">
        <p style="margin: 0; font-size: 16px; color: #2c3e50; line-height: 1.6;">
          {{summary}}
        </p>
      </div>
    </div>

    <!-- Call to Action -->
    <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f0f9ff; border-radius: 6px;">
      <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;">
        Respondé rápido para no perder el contacto:
      </p>
      <a href="mailto:{{from_email}}?subject=Re: Presupuesto COMMIT - {{project_type}}" 
         style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #138bae 0%, #26bce9 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
        📧 Responder por Email
      </a>
      <span style="margin: 0 10px; color: #ccc;">o</span>
      <a href="https://wa.me/{{phone}}" 
         style="display: inline-block; padding: 12px 30px; background-color: #25D366; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
        💬 WhatsApp
      </a>
    </div>
  </div>

  <div style="margin-top: 15px; text-align: center; color: #999; font-size: 11px;">
    <p>Enviado desde <strong>COMMIT Landing</strong> - Budget Builder</p>
  </div>
</div>
```

---

## ⚙️ Configuración en .env.local

Después de crear los templates, copiá los IDs generados y creá el archivo `.env.local` con:

```bash
PUBLIC_EMAILJS_SERVICE_ID=service_wcv0ltx
PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_xxxxxxx  # Reemplazar con ID real
PUBLIC_EMAILJS_TEMPLATE_BUDGET=template_xxxxxxx   # Reemplazar con ID real
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui     # De tu cuenta EmailJS
```

---

## 🧪 Testing

1. **Verificar credenciales:** Revisar que todos los IDs estén correctos
2. **Test formulario simple:** Ir a `/contact` y enviar un mensaje de prueba
3. **Test Budget Builder:** Ir a `/presupuesto` y completar el flujo completo
4. **Test WhatsApp:** Probar ambos formularios con la opción WhatsApp
5. **Verificar emails:** Chequear que lleguen a `martin.navarro.dev@gmail.com`

---

## 📱 WhatsApp

**Número configurado:** +54 9 291 527-8982  
**Formato internacional:** 5492915278982

Los mensajes de WhatsApp incluyen toda la información relevante sin exponer email, teléfono completo ni apellido del usuario.

---

## ✅ Checklist de Deployment

- [ ] Templates creados en EmailJS
- [ ] Service conectado a Gmail
- [ ] Variables `.env.local` configuradas
- [ ] Build exitoso: `npm run build`
- [ ] Test formulario contacto
- [ ] Test Budget Builder
- [ ] Test botón WhatsApp
- [ ] Variables de entorno en Vercel/Netlify
- [ ] Verificar recepción de emails

---

*Última actualización: 20 de Enero 2026*
