import { useState } from 'react';

interface Selections {
  basics: string[];
  type: string;
  modules: string[];
}

export default function BudgetBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<Selections>({
    basics: [],
    type: '',
    modules: [],
  });

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep === 2 && !selections.type) {
      alert('Por favor selecciona un tipo de proyecto');
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCheckboxChange = (name: 'basics' | 'modules', value: string, checked: boolean) => {
    setSelections(prev => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter(v => v !== value)
    }));
  };

  const handleRadioChange = (value: string) => {
    setSelections(prev => ({ ...prev, type: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData),
      selections
    };
    console.log('Budget request:', data);
    alert('¡Gracias! Nos pondremos en contacto contigo pronto con tu presupuesto personalizado.');
  };

  const summaryLabels = {
    basics: {
      branding: 'Branding',
      designs: 'Diseños UI/UX',
      domain: 'Dominio',
      cloud: 'Servicios Cloud'
    },
    type: {
      landing: 'Landing Page / Sitio Web',
      app: 'Aplicación Web/Móvil',
      both: 'Desarrollo 100% Personalizado (Landing + App)'
    },
    modules: {
      ecommerce: 'E-commerce',
      scheduling: 'Turnero/Agenda',
      admin: 'Panel Admin',
      medical: 'Historial Médico',
      events: 'Eventos',
      legal: 'Paquete Jurídico'
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="budget-builder-container">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-muted">Paso {currentStep} de 4</span>
            <span className="text-sm font-medium text-commit">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-commit transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step 1: Initial Setup */}
        {currentStep === 1 && (
          <div className="step-content space-y-6">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2">¿Qué tenés ya preparado?</h2>
              <p className="text-muted">Esto nos ayuda a entender desde dónde partimos y ajustar el presupuesto</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: 'branding', emoji: '🎨', title: 'Branding Definido', desc: 'Ya tengo logo, colores corporativos e identidad visual', color: 'commit' },
                { value: 'designs', emoji: '📐', title: 'Diseños UI/UX', desc: 'Tengo mockups o wireframes del proyecto', color: 'commit-light' },
                { value: 'domain', emoji: '🌐', title: 'Dominio Registrado', desc: 'Ya tengo un dominio (.com, .com.ar, etc.)', color: 'commit-lighter' },
                { value: 'cloud', emoji: '☁️', title: 'Servicios Cloud', desc: 'Tengo hosting, base de datos o servicios configurados', color: 'commit-dark' }
              ].map(option => (
                <label key={option.value} className="option-card cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    value={option.value}
                    checked={selections.basics.includes(option.value)}
                    onChange={(e) => handleCheckboxChange('basics', option.value, e.target.checked)}
                  />
                  <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    selections.basics.includes(option.value)
                      ? 'border-commit bg-commit/5 scale-[1.02]'
                      : 'border-gray-200 dark:border-gray-700 hover:border-commit/50 hover:bg-commit/5'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-commit/10 flex items-center justify-center text-2xl">
                        {option.emoji}
                      </div>
                      {selections.basics.includes(option.value) && (
                        <div className="text-commit text-2xl transition-transform duration-300 scale-110">✓</div>
                      )}
                    </div>
                    <h3 className="font-bold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Project Type */}
        {currentStep === 2 && (
          <div className="step-content space-y-6">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2">¿Qué tipo de proyecto necesitás?</h2>
              <p className="text-muted">Seleccioná la opción que mejor describa tu necesidad</p>
            </div>
            
            <div className="space-y-4">
              {[
                { value: 'landing', emoji: '📄', title: 'Landing Page / Sitio Web', desc: 'Una página de presentación para tu producto o servicio. Ideal para marketing, conversión y presencia online.' },
                { value: 'app', emoji: '📱', title: 'Aplicación Web/Móvil', desc: 'Un sistema completo con usuarios, base de datos y funcionalidades avanzadas. Para gestión interna o servicios digitales.' },
                { value: 'both', emoji: '🚀', title: 'Desarrollo 100% Personalizado (Landing + App)', desc: 'Una landing page para marketing y captación, más una aplicación para el servicio. La solución completa.' }
              ].map(option => (
                <label key={option.value} className="option-card cursor-pointer block">
                  <input 
                    type="radio" 
                    className="hidden" 
                    name="project-type" 
                    value={option.value}
                    checked={selections.type === option.value}
                    onChange={() => handleRadioChange(option.value)}
                  />
                  <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    selections.type === option.value
                      ? 'border-commit bg-commit/5 scale-[1.02]'
                      : 'border-gray-200 dark:border-gray-700 hover:border-commit/50 hover:bg-commit/5'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-lg ${option.value === 'both' ? 'bg-gradient-commit text-white' : 'bg-commit/10'} flex items-center justify-center flex-shrink-0 text-3xl`}>
                        {option.emoji}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1 text-lg">{option.title}</h3>
                        <p className="text-sm text-muted">{option.desc}</p>
                      </div>
                      {selections.type === option.value && (
                        <div className="text-commit text-2xl transition-transform duration-300 scale-110">✓</div>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Modules */}
        {currentStep === 3 && (
          <div className="step-content space-y-6">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2">¿Qué funcionalidades necesitás?</h2>
              <p className="text-muted">Seleccioná todos los módulos que tu proyecto requiera</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { value: 'ecommerce', emoji: '🛒', title: 'E-commerce' },
                { value: 'scheduling', emoji: '📅', title: 'Turnero/Agenda' },
                { value: 'admin', emoji: '⚙️', title: 'Panel Admin' },
                { value: 'medical', emoji: '🏥', title: 'Historial Médico' },
                { value: 'events', emoji: '🎉', title: 'Eventos' },
                { value: 'legal', emoji: '⚖️', title: 'Paquete Jurídico' }
              ].map(option => (
                <label key={option.value} className="option-card cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    value={option.value}
                    checked={selections.modules.includes(option.value)}
                    onChange={(e) => handleCheckboxChange('modules', option.value, e.target.checked)}
                  />
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    selections.modules.includes(option.value)
                      ? 'border-commit bg-commit/5'
                      : 'border-gray-200 dark:border-gray-700 hover:border-commit/50 hover:bg-commit/5'
                  }`}>
                    <div className="w-12 h-12 rounded-lg bg-commit/10 flex items-center justify-center mx-auto mb-3 text-2xl">
                      {option.emoji}
                    </div>
                    <span className="font-medium text-sm">{option.title}</span>
                    {selections.modules.includes(option.value) && (
                      <div className="text-commit text-xl mt-2 transition-transform duration-300 scale-110">✓</div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Summary */}
        {currentStep === 4 && (
          <div className="step-content space-y-6">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2">Resumen de tu proyecto</h2>
              <p className="text-muted">Revisá tu selección y solicitá tu presupuesto personalizado</p>
            </div>
            
            <div className="bg-gradient-to-br from-commit/5 to-commit-lighter/10 dark:from-commit-darkest/20 dark:to-gray-800/50 p-8 rounded-2xl space-y-6 border border-commit/20">
              <div>
                <h3 className="font-bold text-sm text-commit uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-commit rounded-full"></span>
                  Ya tenés preparado
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selections.basics.length > 0 ? (
                    selections.basics.map(id => (
                      <span key={id} className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium border border-commit/20 shadow-sm">
                        {summaryLabels.basics[id as keyof typeof summaryLabels.basics]}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-muted italic">Ninguna selección</span>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-sm text-commit uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-commit rounded-full"></span>
                  Tipo de Proyecto
                </h3>
                <div className="px-4 py-3 bg-white dark:bg-gray-700 rounded-lg inline-flex items-center gap-2 border border-commit/20 shadow-sm">
                  <span className="text-2xl">{selections.type === 'landing' ? '📄' : selections.type === 'app' ? '📱' : '🚀'}</span>
                  <span className="text-lg font-bold text-commit">
                    {selections.type ? summaryLabels.type[selections.type as keyof typeof summaryLabels.type] : 'No seleccionado'}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-sm text-commit uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-commit rounded-full"></span>
                  Funcionalidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selections.modules.length > 0 ? (
                    selections.modules.map(id => (
                      <span key={id} className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium border border-commit/20 shadow-sm">
                        {summaryLabels.modules[id as keyof typeof summaryLabels.modules]}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-muted italic">Ninguna selección</span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-4">Datos de contacto</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre completo" 
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
                  />
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Teléfono (opcional)" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
                />
                <textarea 
                  name="message" 
                  placeholder="Contanos más sobre tu proyecto..." 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
                />
                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-commit text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Solicitar Presupuesto
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-commit hover:text-commit transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300 dark:disabled:hover:border-gray-600 disabled:hover:text-current font-bold"
          >
            ← Anterior
          </button>
          
          {currentStep < totalSteps && (
            <button 
              onClick={nextStep}
              className="px-8 py-4 bg-gradient-commit text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Siguiente →
            </button>
          )}
        </div>
      </div>

      <style>{`
        .step-content {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
