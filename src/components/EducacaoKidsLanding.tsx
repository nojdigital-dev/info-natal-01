import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, ShieldCheck, 
  Zap, ChevronRight, Brain, BookOpen, Smile, Baby, Lock, HelpCircle, ArrowRight, ThumbsUp, Pencil, Puzzle
} from "lucide-react";
import EducacaoKidsUpsellModal from './EducacaoKidsUpsellModal';
import UtmifyScript from './UtmifyScript';

// Images (Placeholders for Kids Niche)
const heroImg = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop"; 
const testimonial1 = "https://randomuser.me/api/portraits/women/44.jpg";
const testimonial2 = "https://randomuser.me/api/portraits/women/68.jpg";
const testimonial3 = "https://randomuser.me/api/portraits/women/12.jpg";
const testimonial4 = "https://randomuser.me/api/portraits/men/32.jpg";

const EducacaoKidsLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 35 });
  const [todayDate, setTodayDate] = useState("");
  
  // UTM Helper
  const applyUtms = (url: string) => {
    try {
        const currentSearchParams = new URLSearchParams(window.location.search);
        const paramsString = currentSearchParams.toString();
        if (!paramsString) return url;
        const separator = url.indexOf("?") === -1 ? "?" : "&";
        return `${url}${separator}${paramsString}`;
    } catch (e) { return url; }
  };

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    const date = new Date();
    setTodayDate(date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }));

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Educação Kids - Grafismo Fonético</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Descubra a técnica americana que ensina crianças a ler até 5x mais rápido." />
        <style>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
          .btn-kid {
            box-shadow: 0 4px 0 #00000030;
            transition: all 0.1s;
          }
          .btn-kid:active {
            transform: translateY(4px);
            box-shadow: none;
          }
        `}</style>
      </Helmet>
      <UtmifyScript />
      
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        
        {/* Sticky Bar */}
        <div className="bg-yellow-400 text-blue-900 text-center py-2 px-2 font-black text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md flex justify-center items-center gap-2 uppercase tracking-wide border-b-4 border-yellow-500">
           🚀 Oferta Especial Liberada Hoje: {todayDate}
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-sky-400 to-sky-200 py-12 md:py-24 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 opacity-20 animate-spin-slow"><Star size={60} className="text-white"/></div>
          <div className="absolute bottom-10 right-10 opacity-20 animate-bounce"><Pencil size={80} className="text-yellow-300"/></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Text Content */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
                <Badge className="bg-white text-blue-600 hover:bg-blue-50 mb-6 px-4 py-2 text-sm font-bold border-2 border-blue-600 inline-flex items-center gap-2 shadow-lg rounded-full uppercase">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" className="w-5 h-auto shadow-sm" alt="USA"/> Método Americano
                </Badge>
                
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white drop-shadow-md tracking-tight">
                  Ensine Seu Filho a Ler <br/>
                  <span className="text-yellow-300 text-4xl md:text-6xl">Até 5x Mais Rápido</span> <br/>
                  <span className="bg-blue-800 text-white px-3 py-1 transform -rotate-1 inline-block mt-2 rounded-lg border-b-4 border-blue-950">SEM PRESSÃO!</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-blue-900 font-bold leading-relaxed max-w-lg md:max-w-none">
                  Com apenas <span className="bg-yellow-300 px-1">10 minutos por dia</span>. Ideal para crianças de 2 a 12 anos, TDAH ou Autismo. Resultados visíveis em poucas semanas!
                </p>
                
                <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
                    <Button 
                        onClick={scrollToPricing}
                        className="bg-green-500 hover:bg-green-400 text-white font-black text-xl md:text-2xl py-8 px-10 rounded-2xl btn-kid w-full md:w-fit uppercase flex items-center gap-3"
                    >
                        QUERO MEU FILHO LENDO <ArrowRight size={28} strokeWidth={4} />
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-blue-900 font-bold bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        <div className="flex text-yellow-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                        <span>+15.000 Famílias Ajudadas</span>
                    </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative order-1 md:order-2 flex justify-center">
                 <div className="relative w-[280px] md:w-[400px] aspect-square">
                    <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    <img 
                        src={heroImg} 
                        alt="Criança feliz lendo" 
                        className="relative rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 object-cover w-full h-full z-10"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-4 bg-white px-6 py-4 rounded-xl shadow-xl border-b-4 border-blue-600 animate-bounce-slow z-20">
                        <p className="font-black text-blue-600 text-2xl">10 min</p>
                        <p className="text-xs text-slate-500 font-bold uppercase">Por dia</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}}></div>
        </section>

        {/* Problem Section (Agitation) */}
        <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-8">
                    Muitos pais acham que <span className="text-red-500">"cada criança tem seu tempo"</span>. <br/>Até que...
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100">
                        <div className="text-4xl mb-4">😫</div>
                        <h3 className="font-bold text-red-700 mb-2">Sofrimento na Leitura</h3>
                        <p className="text-sm text-slate-600">As tarefas de casa viram um campo de guerra e choro.</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100">
                        <div className="text-4xl mb-4">📉</div>
                        <h3 className="font-bold text-red-700 mb-2">Notas Baixas</h3>
                        <p className="text-sm text-slate-600">O desempenho escolar cai porque ela não entende o que lê.</p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100">
                        <div className="text-4xl mb-4">😢</div>
                        <h3 className="font-bold text-red-700 mb-2">Baixa Autoestima</h3>
                        <p className="text-sm text-slate-600">Ela se sente "menos inteligente" que os coleguinhas.</p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border-2 border-blue-100">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">A Verdade que Ninguém te Conta</h3>
                    <p className="text-slate-700 leading-relaxed">
                        O problema não é o seu filho. É a <strong>falta de estímulo fonético</strong> na fase certa. <br/>
                        O cérebro precisa reconhecer padrões, sons e movimentos antes de ler. O nosso Kit faz exatamente isso: cria a base neurológica para a leitura fluir naturalmente.
                    </p>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-yellow-400 relative">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">Por que o Kit Funciona?</h2>
                    <p className="text-blue-900/80 font-bold text-lg">O segredo está no <span className="bg-white px-2 rounded text-blue-900 border-2 border-blue-900">Grafismo Fonético</span></p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-blue-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Brain size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Conexões Cerebrais</h3>
                                <p className="text-slate-600">Ao traçar linhas e curvas associadas a sons, a criança fortalece as áreas do cérebro responsáveis pela leitura.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-green-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600"><Pencil size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Coordenação Motora</h3>
                                <p className="text-slate-600">Prepara a mãozinha para a escrita cursiva e bastão, melhorando a caligrafia desde cedo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-purple-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Smile size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Sem Pressão</h3>
                                <p className="text-slate-600">As atividades parecem brincadeira. A criança aprende se divertindo, sem perceber que está estudando.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-b-8 border-red-500 transform hover:-translate-y-1 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-100 p-3 rounded-full text-red-600"><Puzzle size={32}/></div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Inclusivo</h3>
                                <p className="text-slate-600">Metodologia visual e prática, altamente recomendada para crianças com TDAH, Autismo ou dislexia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(130%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>

        {/* Bonus Section */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <Badge className="bg-red-100 text-red-600 font-bold mb-4 px-4 py-1 text-sm border border-red-200">
                        🎁 PRESENTE ESPECIAL
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                        Leve 6 Bônus Exclusivos <br/><span className="text-green-600">Totalmente de Graça!</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { title: "Alfabeto com Imagens", price: "37,00", color: "bg-blue-100 text-blue-600" },
                        { title: "Quebra-Cabeça Alfabeto", price: "47,00", color: "bg-green-100 text-green-600" },
                        { title: "Formando Palavras", price: "57,00", color: "bg-purple-100 text-purple-600" },
                        { title: "Alfabeto com Relógio", price: "39,00", color: "bg-yellow-100 text-yellow-600" },
                        { title: "Alfabeto Traçado", price: "27,00", color: "bg-pink-100 text-pink-600" },
                        { title: "Alfabeto com Carinhas", price: "49,00", color: "bg-orange-100 text-orange-600" },
                    ].map((bonus, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-4 border-2 border-slate-100 hover:border-blue-300 transition-colors text-center">
                            <div className={`w-12 h-12 ${bonus.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                                <Star size={24} fill="currentColor"/>
                            </div>
                            <h3 className="font-bold text-slate-800 text-sm md:text-base mb-2">{bonus.title}</h3>
                            <p className="text-xs text-slate-400 line-through">Vendido por R$ {bonus.price}</p>
                            <p className="text-sm font-bold text-green-600 uppercase">Hoje: Grátis</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-center text-slate-800 mb-10">
                    O que Pais e Professores dizem:
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <TestimonialCard 
                        img={testimonial1}
                        name="Mariana Costa"
                        role="Mãe de Gêmeos"
                        text="Meus pequenos estavam travados na leitura. Com o Grafismo Fonético, foi como mágica. Em 2 semanas já estavam juntando as sílabas sozinhos!"
                    />
                    <TestimonialCard 
                        img={testimonial2}
                        name="Profa. Helena"
                        role="Pedagoga"
                        text="Uso em sala de aula e recomendo para todos os pais. É o melhor material de apoio que já encontrei. As crianças amam as atividades."
                    />
                    <TestimonialCard 
                        img={testimonial3}
                        name="Fernanda Lima"
                        role="Mãe Atípica"
                        text="Meu filho tem TDAH e nunca parava quieto para estudar. As atividades são tão visuais e rápidas que ele faz sem reclamar. Evoluiu muito!"
                    />
                    <TestimonialCard 
                        img={testimonial4}
                        name="Ricardo Alves"
                        role="Pai do Davi"
                        text="Vale cada centavo. Só de ver a alegria dele conseguindo ler as placas na rua já pagou o investimento. Muito obrigado!"
                    />
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-blue-600 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Escolha o Melhor para seu Filho</h2>
                    <p className="text-blue-100 text-lg">Acesso vitalício e imediato por um valor simbólico.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    
                    {/* Basic Plan (Trigger Upsell) */}
                    <div className="bg-white rounded-3xl p-6 border-4 border-blue-200 opacity-90 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-slate-500 text-center uppercase tracking-wide">Kit Básico</h3>
                        <div className="text-center my-6">
                            <span className="text-sm text-slate-400 line-through">De R$ 97,00</span>
                            <div className="text-4xl font-black text-slate-800">R$ 17,00</div>
                        </div>
                        <ul className="space-y-3 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Arquivos em PDF</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Grafismo Fonético</li>
                            <li className="flex items-center gap-2 text-red-400"><Lock size={16}/> Sem Bônus Exclusivos</li>
                        </ul>
                        <Button 
                            onClick={() => setIsUpsellModalOpen(true)}
                            variant="outline"
                            className="w-full py-6 text-slate-600 border-2 border-slate-200 font-bold hover:bg-slate-50"
                        >
                            QUERO O BÁSICO
                        </Button>
                    </div>

                    {/* Complete Plan (Hero) */}
                    <div className="bg-white rounded-3xl p-8 border-4 border-yellow-400 shadow-2xl relative transform md:scale-105">
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-md whitespace-nowrap border-2 border-white">
                            🏆 Mais Completo
                        </div>
                        <h3 className="text-2xl font-black text-blue-600 text-center uppercase tracking-wide">Kit Completo + Bônus</h3>
                        <div className="text-center my-6 bg-blue-50 py-4 rounded-xl border border-blue-100">
                            <span className="text-sm text-slate-400 line-through">De R$ 197,00</span>
                            <div className="text-6xl font-black text-green-600 tracking-tighter">R$ 25,00</div>
                            <span className="text-xs font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded-full">Pagamento Único</span>
                        </div>
                        <ul className="space-y-3 mb-8 text-sm font-bold text-slate-700">
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> Kit Grafismo Completo</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> +100 Atividades PDF</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> TODOS OS 6 BÔNUS</li>
                            <li className="flex items-center gap-2"><div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-600"/></div> Suporte Pedagógico</li>
                        </ul>
                        <Button 
                            onClick={() => window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=kids-complete-25')}
                            className="w-full bg-green-500 hover:bg-green-400 text-white font-black text-xl py-8 rounded-xl shadow-[0_4px_0_rgb(21,128,61)] btn-kid animate-pulse"
                        >
                            QUERO O KIT COMPLETO
                        </Button>
                        <p className="text-center text-xs text-slate-400 mt-4 flex justify-center gap-2">
                            <Lock size={12}/> Compra Segura • Acesso Imediato
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 border-2 border-dashed border-blue-200 p-8 rounded-3xl bg-blue-50/50">
                <div className="shrink-0">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-xl">
                        <ShieldCheck size={64} className="text-green-500"/>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-slate-800 mb-2">Garantia Incondicional de 7 Dias</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Se você sentir que o material não ajudou seu filho, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
                    </p>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-slate-50">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-black text-center text-slate-800 mb-8">Perguntas Frequentes</h2>
                <Accordion type="single" collapsible className="space-y-2">
                    <FAQItem q="O material é físico ou digital?" a="É 100% digital (PDF). Você recebe no e-mail, baixa e imprime quantas vezes quiser." />
                    <FAQItem q="Para qual idade é indicado?" a="Ideal para crianças de 2 a 12 anos, ou qualquer criança em fase de alfabetização ou com dificuldades." />
                    <FAQItem q="Serve para autistas ou TDAH?" a="Sim! O método visual e prático é altamente recomendado por especialistas para crianças atípicas." />
                    <FAQItem q="Como acesso o material?" a="O acesso chega no seu e-mail imediatamente após a confirmação do pagamento." />
                </Accordion>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-12 text-center border-t-8 border-yellow-400">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center gap-2 mb-4 font-bold text-xl">
                    <Baby /> Educação Kids
                </div>
                <p className="text-sm opacity-80 mb-4">Copyright © {new Date().getFullYear()} – Editora Inove. Todos os direitos reservados.</p>
                <div className="flex justify-center gap-4 text-xs opacity-60">
                    <span>Políticas de Privacidade</span>
                    <span>Termos de Uso</span>
                </div>
            </div>
        </footer>

        <EducacaoKidsUpsellModal 
            isOpen={isUpsellModalOpen}
            onClose={() => setIsUpsellModalOpen(false)}
            onConfirm={() => {
                window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=kids-offer-20'); // Link Upsell R$ 20
            }}
            onReject={() => {
                window.location.href = applyUtms('https://pay.lowify.com.br/checkout?product_id=kids-basic-17'); // Link Basic R$ 17
            }}
        />

      </div>
    </>
  );
};

// Subcomponents
const TestimonialCard = ({ img, name, role, text }: { img: string, name: string, role: string, text: string }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
        <img src={img} alt={name} className="w-12 h-12 rounded-full border-2 border-blue-200" />
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-bold">{role}</span>
            </div>
            <div className="flex text-yellow-400 text-xs mb-2"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
            <p className="text-xs md:text-sm text-slate-600 italic">"{text}"</p>
        </div>
    </div>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => (
    <AccordionItem value={q} className="bg-white border border-slate-200 rounded-lg px-4">
        <AccordionTrigger className="font-bold text-slate-700 hover:text-blue-600 hover:no-underline text-left text-sm md:text-base">{q}</AccordionTrigger>
        <AccordionContent className="text-slate-600 text-sm">{a}</AccordionContent>
    </AccordionItem>
);

export default EducacaoKidsLanding;