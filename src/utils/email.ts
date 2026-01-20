// EmailJS Configuration and Helper Functions
import emailjs from '@emailjs/browser';

// Inicializar EmailJS con la clave pública
export const initEmailJS = () => {
  const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  } else {
    console.warn('EmailJS public key not found. Please configure environment variables.');
  }
};

// Generar timestamp formateado
const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toLocaleString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Enviar email de contacto
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID || 'service_wcv0ltx';
  const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_CONTACT;
  
  if (!serviceId) {
    throw new Error('PUBLIC_EMAILJS_SERVICE_ID no está configurado');
  }
  
  if (!templateId) {
    throw new Error('PUBLIC_EMAILJS_TEMPLATE_CONTACT no está configurado. Por favor, creá el template en EmailJS y agregá el ID en .env');
  }

  console.log('Enviando email de contacto con:', {
    serviceId,
    templateId,
    name: formData.name,
    email: formData.email,
  });

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: getCurrentTimestamp(),
        to_email: 'martin.navarro.dev@gmail.com',
      }
    );
    console.log('Email enviado exitosamente:', response);
    return response;
  } catch (error) {
    console.error('Error detallado enviando email:', error);
    throw error;
  }
};

// Enviar email de presupuesto
export const sendBudgetEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  basics: string[];
  modules: string[];
  comments?: string;
}) => {
  const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID || 'service_wcv0ltx';
  const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_BUDGET;
  
  if (!serviceId) {
    throw new Error('PUBLIC_EMAILJS_SERVICE_ID no está configurado');
  }
  
  if (!templateId) {
    throw new Error('PUBLIC_EMAILJS_TEMPLATE_BUDGET no está configurado. Por favor, creá el template en EmailJS y agregá el ID en .env');
  }

  // Generar resumen concatenado
  let summary = `${formData.name}`;
  if (formData.company) {
    summary += ` de ${formData.company}`;
  }
  summary += ` quiere desarrollar ${formData.projectType}.`;
  
  if (formData.basics.length > 0) {
    summary += ` Cuenta con: ${formData.basics.join(', ')}.`;
  }
  
  if (formData.modules.length > 0) {
    summary += ` Le interesan los módulos: ${formData.modules.join(', ')}.`;
  }
  
  if (formData.comments) {
    summary += ` Comentarios adicionales: ${formData.comments}`;
  }

  console.log('Enviando email de presupuesto con:', {
    serviceId,
    templateId,
    name: formData.name,
    email: formData.email,
    projectType: formData.projectType,
  });

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'No especificada',
        project_type: formData.projectType,
        summary: summary,
        time: getCurrentTimestamp(),
        to_email: 'martin.navarro.dev@gmail.com',
      }
    );
    console.log('Email de presupuesto enviado exitosamente:', response);
    return response;
  } catch (error) {
    console.error('Error detallado enviando email de presupuesto:', error);
    throw error;
  }
};

// Generar mensaje de WhatsApp para contacto simple
export const generateContactWhatsAppMessage = (formData: {
  name: string;
  message: string;
}): string => {
  const firstName = formData.name.split(' ')[0]; // Solo el primer nombre
  return encodeURIComponent(
    `Hola, mi nombre es *${firstName}*. Me comunico para realizarles la siguiente consulta:\n\n` +
    `${formData.message}\n\n` +
    `Desde ya, muchas gracias.`
  );
};

// Generar mensaje de WhatsApp para presupuesto
export const generateBudgetWhatsAppMessage = (formData: {
  name: string;
  company?: string;
  projectType: string;
  basics: string[];
  modules: string[];
  comments?: string;
}): string => {
  const firstName = formData.name.split(' ')[0];
  
  let message = `Hola, mi nombre es *${firstName}*`;
  if (formData.company) {
    message += ` y represento a *${formData.company}*`;
  }
  message += `. Me comunico para solicitar un presupuesto:\n\n`;
  
  message += `*Tipo de proyecto:*\n`;
  message += `${formData.projectType}\n\n`;
  
  if (formData.basics.length > 0) {
    message += `*¿Qué tengo preparado?*\n`;
    formData.basics.forEach(item => {
      message += `• ${item}\n`;
    });
    message += `\n`;
  }
  
  if (formData.modules.length > 0) {
    message += `*Funcionalidades que necesito:*\n`;
    formData.modules.forEach(item => {
      message += `• ${item}\n`;
    });
    message += `\n`;
  }
  
  if (formData.comments) {
    message += `*Comentarios adicionales:*\n`;
    message += `${formData.comments}\n\n`;
  }
  
  message += `Quedo atento a su respuesta. Desde ya, muchas gracias.`;
  
  return encodeURIComponent(message);
};

// Abrir WhatsApp con mensaje pre-cargado
export const openWhatsApp = (message: string) => {
  const phone = '5492915278982'; // +54 9 291 527-8982
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
};
