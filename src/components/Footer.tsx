import { appConfig } from "@/config/app";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{appConfig.company_name}</h3>
            <p className="text-background/80 leading-relaxed mb-6">
              A ferramenta completa para controlar suas finanças e alcançar a liberdade 
              financeira que você sempre sonhou.
            </p>
            <div className="text-background/60 text-sm">
              © 2024 {appConfig.company_name}. Todos os direitos reservados.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`${appConfig.app_url}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors duration-200"
                >
                  Acessar App
                </a>
              </li>
              <li>
                <a 
                  href="#plans"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/80 hover:text-background transition-colors duration-200 cursor-pointer"
                >
                  Planos e Preços
                </a>
              </li>
              <li>
                <a 
                  href={appConfig.terms_url || "#"}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a 
                  href={appConfig.privacy_url || "#"}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3 text-background/80">
              <li>Atendimento 24/7</li>
              <li>WhatsApp: (11) 9 9999-9999</li>
              <li>Email: suporte@{appConfig.company_name.toLowerCase().replace(' ', '')}.com</li>
              <li className="pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Sistema online e funcionando</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            Desenvolvido com ❤️ para ajudar você a alcançar seus objetivos financeiros
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;