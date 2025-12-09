import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, Star, TreePine, Download, Clock, ShieldCheck, Heart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ChristmasLanding = () => {
  // Rola suavemente para a seção de preços
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-700 to-red-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           {/* Pattern simulado com CSS ou SVG poderia ir aqui */}
           <div className="absolute top-10 left-10"><TreePine size={64} /></div>
           <div className="absolute bottom-10 right-10"><Gift size={64} /></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="bg-green-600 hover:bg-green-700 text-white mb-6 px-4 py-1 text-lg border-none">
            🎄 O Natal já começou!
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Lembrancinhas de Natal Criativas <br/>
            <span className="text-yellow-300">Prontas para Imprimir</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto">
            Surpreenda quem você ama com presentes carinhosos e econômicos. Baixe, imprima e monte em casa hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-8 py-6 rounded-full shadow-lg transform transition hover:scale-105"
            >
              Quero Garantir Agora
            </Button>
            <span className="text-sm font-medium text-red-200 flex items-center gap-1">
              <Clock size={16} /> Acesso imediato em PDF
            </span>
          </div>
        </div>
      </section>

      {/* Problema / Solução */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-12">Não deixe para a última hora! 🎁</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Sem tempo a perder</h3>
              <p className="text-slate-600">Esqueça a correria em lojas lotadas. Você recebe os arquivos agora e resolve seus presentes em minutos.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Carinho nos detalhes</h3>
              <p className="text-slate-600">Presentes feitos à mão têm muito mais valor sentimental. Demonstre gratidão de forma única.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Econômico e Prático</h3>
              <p className="text-slate-600">Arquivos em alta qualidade (PDF). Imprima quantas vezes quiser na sua impressora ou na gráfica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso (Showcase) */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            O que você vai receber?
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Kits completos com design profissional, prontos para recortar e montar.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ShowcaseCard 
              icon={<Gift className="text-red-500" size={32} />}
              title="Cartão Árvore"
              description="Perfeito para colocar um chocolate Bis ou Batom. Uma lembrancinha doce e barata."
            />
            <ShowcaseCard 
              icon={<div className="text-green-600 border-2 border-green-600 rounded-full p-1"><div className="w-4 h-4 bg-green-600 rounded-full"></div></div>}
              title="Bambolê Feliz Natal"
              description="Uma guirlanda criativa de papel para decorar presentes ou pendurar na árvore."
            />
            <ShowcaseCard 
              icon={<Clock className="text-blue-500" size={32} />}
              title="Calendários Temáticos"
              description="Calendários 2025 editáveis com tema natalino. Útil o ano todo!"
            />
            <ShowcaseCard 
              icon={<TreePine className="text-green-700" size={32} />}
              title="Decoração de Porta"
              description="Itens decorativos para maçanetas que trazem o clima de Natal para qualquer ambiente."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-red-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">
            Escolha seu Kit de Natal
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            
            {/* Basic Plan */}
            <Card className="border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-slate-700">Kit Lembrancinha</CardTitle>
                <CardDescription>O essencial para presentear</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-extrabold text-slate-900 mb-2">R$ 10,00</div>
                <div className="text-sm text-slate-500 mb-6">Pagamento único</div>
                
                <ul className="text-left space-y-3 mb-8">
                  <Feature text="Cartão Árvore para Chocolate" />
                  <Feature text="Arquivo em PDF Alta Resolução" />
                  <Feature text="Tutorial de montagem simples" />
                  <Feature text="Acesso Vitalício" />
                </ul>
                
                <Button className="w-full bg-slate-900 hover:bg-slate-800" size="lg">
                  Comprar Kit Básico
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan - Featured */}
            <Card className="border-2 border-red-500 shadow-2xl relative bg-white transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-red-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wide">
                  Mais Vendido
                </Badge>
              </div>
              <CardHeader className="text-center pb-2 pt-8">
                <CardTitle className="text-2xl font-bold text-red-600">Pacote Natal Completo</CardTitle>
                <CardDescription>A melhor opção para família e vendas</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-extrabold text-slate-900 mb-2">R$ 27,00</div>
                <div className="text-sm text-slate-500 mb-6">De <span className="line-through">R$ 47,90</span> por apenas R$ 27</div>
                
                <ul className="text-left space-y-3 mb-8">
                  <Feature text="Cartão Árvore para Chocolate" highlighted />
                  <Feature text="Bambolê “Feliz Natal”" highlighted />
                  <Feature text="Calendários Editáveis 2025" highlighted />
                  <Feature text="Decoração de Porta Natalina" highlighted />
                  <Feature text="Bônus: Tags para presentes" />
                  <Feature text="Direito de uso para revenda (impressos)" />
                </ul>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-12 shadow-lg animate-pulse hover:animate-none">
                  QUERO O PACOTE COMPLETO
                </Button>
                <p className="text-xs text-slate-500 mt-3 flex items-center justify-center gap-1">
                  <ShieldCheck size={12} /> Compra 100% Segura
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Como recebo os arquivos?</AccordionTrigger>
            <AccordionContent>
              Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar todos os arquivos em PDF e materiais editáveis imediatamente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Posso editar os arquivos?</AccordionTrigger>
            <AccordionContent>
              O pacote completo (R$ 27,00) inclui os calendários editáveis. Os demais itens vão em PDF prontos para imprimir para garantir a formatação correta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Preciso de uma impressora profissional?</AccordionTrigger>
            <AccordionContent>
              Não! Os arquivos foram preparados para serem impressos em qualquer impressora caseira. Recomendamos usar papel fotográfico ou papel cartão (180g) para um melhor acabamento.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-4">&copy; {new Date().getFullYear()} Natal Criativo. Todos os direitos reservados.</p>
          <p>Dúvidas? Entre em contato pelo suporte.</p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const ShowcaseCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-red-200 transition-colors">
    <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-slate-800">{title}</h3>
    <p className="text-sm text-slate-600">{description}</p>
  </div>
);

const Feature = ({ text, highlighted = false }: { text: string, highlighted?: boolean }) => (
  <li className="flex items-start gap-2 text-sm">
    <Check className={`min-w-5 h-5 ${highlighted ? 'text-green-600' : 'text-slate-400'}`} />
    <span className={highlighted ? 'font-medium text-slate-900' : 'text-slate-600'}>{text}</span>
  </li>
);

export default ChristmasLanding;