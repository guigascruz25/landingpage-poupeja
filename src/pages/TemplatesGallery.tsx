import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const TemplatesGallery = () => {
  const templates = [
    {
      id: "template1",
      name: "Template 1",
      title: "Azul Profissional",
      description: "Paleta azul com sombras suaves e design elegante",
      color: "#4F46E5",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      id: "template2",
      name: "Template 2",
      title: "Emerald Luxury",
      description: "Verde esmeralda sofisticado com efeitos premium",
      color: "#10B981",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: "template3",
      name: "Template 3",
      title: "Blue Modern",
      description: "Azul moderno com design clean e interativo",
      color: "#0EA5E9",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: "template4",
      name: "Template 4",
      title: "Black Matte",
      description: "Preto fosco com toques de roxo e design ousado",
      color: "#1a1a1a",
      gradient: "from-gray-900 to-purple-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            🎨 Galeria de Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore os 4 templates disponíveis e escolha o que melhor combina com sua marca.
            Cada template possui sua própria identidade visual única.
          </p>
        </div>

        {/* Grid de Templates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {templates.map((template, index) => (
            <Link
              key={template.id}
              to={`/${template.id}`}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Color Header */}
              <div
                className={`h-32 bg-gradient-to-br ${template.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium">
                  {template.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {template.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {template.description}
                </p>

                {/* Color Indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-lg shadow-md"
                    style={{ backgroundColor: template.color }}
                  ></div>
                  <span className="text-sm text-gray-500 font-mono">
                    {template.color}
                  </span>
                </div>

                {/* Button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Clique para visualizar
                  </span>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                    <Eye className="w-5 h-5" />
                    Visualizar
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            💡 Como usar em produção
          </h3>
          <p className="text-blue-800 leading-relaxed">
            Para definir o template que será exibido no site em produção, edite o arquivo{" "}
            <code className="bg-blue-100 px-2 py-1 rounded font-mono text-sm">
              .env
            </code>{" "}
            e configure a variável{" "}
            <code className="bg-blue-100 px-2 py-1 rounded font-mono text-sm">
              VITE_TEMPLATE_VARIANT
            </code>{" "}
            com o valor desejado: <strong>template1</strong>, <strong>template2</strong>,{" "}
            <strong>template3</strong> ou <strong>template4</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplatesGallery;
