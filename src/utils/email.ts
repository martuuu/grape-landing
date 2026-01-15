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

// Enviar email de contacto
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_CONTACT;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS configuration missing');
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'martin.navarro.dev@gmail.com',
      }
    );
    return response;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

// Enviar email de presupuesto
export const sendBudgetEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  selections: {
    basics: string[];
    type: string;
    modules: string[];
  };
}) => {
  const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_BUDGET;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS configuration missing');
  }

  // Formatear selecciones para el email
  const basicsText = formData.selections.basics.length > 0 
    ? formData.selections.basics.join(', ') 
    : 'Ninguno';
  
  const modulesText = formData.selections.modules.length > 0 
    ? formData.selections.modules.join(', ') 
    : 'Ninguno';

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'No especificada',
        project_type: formData.selections.type,
        basics: basicsText,
        modules: modulesText,
        to_email: 'martin.navarro.dev@gmail.com',
      }
    );
    return response;
  } catch (error) {
    console.error('Error sending budget email:', error);
    throw error;
  }
};
