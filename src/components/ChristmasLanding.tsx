import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Gift, Star, TreePine, Download, Clock, ShieldCheck, 
  Heart, Zap, Snowflake, Lock, ChevronRight, PartyPopper, Gamepad2, Palette
} from "lucide-react";

const ChristmasLanding = () => {
  // Timer ajustado para 10 minutos
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 10, seconds: 0 });
  const [todayDate, setTodayDate] = useState("");

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    // Format today's date
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    setTodayDate(date.toLocaleDateString('pt-BR', options));

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* Top Notification Bar */}
      <div className="bg-yellow-400 text-red-900 text-center py-2 px-4 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md">
        🎅 OFERTA VÁLIDA APENAS HOJE: {todayDate.toUpperCase()}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-12 md:py-24 px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
           <Snowflake className="absolute top-10 left-[10%] animate-bounce" size={30} />
           <Snowflake className="absolute top-40 right-[15%] animate-pulse" size={20} />
           <TreePine className="absolute bottom-0 left-0 text-green-900" size={100} />
           <TreePine className="absolute bottom-0 right-0 text-green-900" size={80} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="bg-white text-red-700 hover:bg-slate-100 mb-6 px-6 py-2 text-base md:text-lg font-bold shadow-lg transform -rotate-2">
            🎄 O Natal já começou!
          </Badge>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            A Lembrancinha Perfeita <br/>
            <span className="text-yellow-300">Pronta para Imprimir</span> <br className="md:hidden" />
            <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-lg transform -rotate-3 border-2 border-yellow-400 text-2xl md:text-5xl ml-2 shadow-xl mt-2 md:mt-0">
              (+ BÔNUS)
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Surpreenda neste Natal sem gastar muito e sem perder tempo. <br className="hidden md:block"/>
            Baixe, imprima e monte em minutos!
          </p>
          <div className="flex flex-col w-full md:w-auto px-4">
            <Button 
              onClick={scrollToPricing}
              className="bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 font-black text-lg md:text-xl py-8 w-full md:w-auto md:px-12 rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              QUERO GARANTIR AGORA <ChevronRight size={24} />
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-base text-yellow-200 opacity-90 font-medium">
             <ShieldCheck size={16} /> OFERTA LIMITADA • <Zap size={16} /> Entrega Imediata
          </div>
        </div>
      </section>

      {/* Benefits / Social Proof Teaser */}
      <section className="py-8 md:py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 text-left text-slate-600">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0"><Clock size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Economize Tempo</p>
                        <p className="text-sm">Não enfrente filas de shoppings</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Heart size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Feito com Amor</p>
                        <p className="text-sm">Presente com significado</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 shrink-0"><Download size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Acesso Imediato</p>
                        <p className="text-sm">Receba no WhatsApp/Email agora</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-2">O que você vai receber?</h2>
          <p className="text-center text-slate-600 mb-8">Tudo o que você precisa para um Natal inesquecível</p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Gift className="text-red-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Cartão Árvore</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Design exclusivo para colocar chocolate Bis ou Batom. A lembrancinha mais econômica e amada!</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <PartyPopper className="text-green-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Bambolê "Feliz Natal"</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Guirlanda criativa de papel para decorar presentes, árvore ou porta.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Clock className="text-blue-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Calendários 2025</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Modelos editáveis temáticos. Um presente útil para o ano todo.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <TreePine className="text-yellow-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Decoração de Porta</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Tags e itens para maçanetas que trazem o clima de Natal.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">Famílias que amaram! ⭐⭐⭐⭐⭐</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <TestimonialCard 
                    name="Mariana Souza" 
                    text="Salvou meu Natal! Imprimi para os professores do meu filho e todos amaram. Super barato de fazer."
                />
                <TestimonialCard 
                    name="Carla Dias" 
                    text="Os arquivos vêm perfeitos. A qualidade é ótima e o passo a passo ajuda muito."
                />
                <TestimonialCard 
                    name="Patrícia Lima" 
                    text="Comprei o pacote completo pelos bônus e valeu cada centavo. As crianças adoraram os jogos."
                />
            </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-16 px-4 bg-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
                <span className="bg-yellow-400 text-red-900 font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg">Apenas no Plano Completo</span>
                <h2 className="text-2xl md:text-5xl font-extrabold mt-6 mb-4 leading-tight">RECEBA AINDA <br/>3 BÔNUS EXCLUSIVOS</h2>
                <p className="text-red-200 text-base md:text-lg">Totalizando R$ 93,00 em presentes para você</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <BonusCard 
                    icon={<CookieIcon />}
                    title="RECEITAS DIVERTIDAS"
                    subtitle="DE NATAL"
                    desc="Receitas natalinas para fazer com as crianças: biscoitos, chocolate quente e cupcakes!"
                    price="37,00"
                />
                <BonusCard 
                    icon={<Gamepad2 size={36} />}
                    title="JOGOS NATALINOS"
                    subtitle="PARA IMPRIMIR"
                    desc="Caça ao tesouro, bingo de Natal, jogo da memória. Imprima e brinque!"
                    price="29,00"
                />
                <BonusCard 
                    icon={<Palette size={36} />}
                    title="PACK DE DECORAÇÃO"
                    subtitle="NATALINA"
                    desc="Moldes DIY, cartões personalizáveis, etiquetas para presentes e muito mais!"
                    price="27,00"
                />
            </div>
            
            <div className="mt-12 text-center flex flex-col items-center w-full">
                <p className="text-lg md:text-2xl font-bold text-yellow-300 animate-pulse mb-6 px-4">
                    TOTAL EM BÔNUS: R$ 93,00 — HOJE É GRÁTIS! 🎁
                </p>
                <div className="w-full px-4 md:w-auto">
                    <Button 
                    onClick={scrollToPricing} 
                    className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black text-lg md:text-xl py-8 w-full md:px-12 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.6)] transform transition hover:scale-105"
                    >
                        QUERO OS BÔNUS TAMBÉM! 🎁
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section with Countdown */}
      <section id="pricing" className="py-12 md:py-16 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          
          {/* Pitch & Countdown */}
          <div className="text-center mb-10">
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl shadow-xl mb-8 transform hover:scale-105 transition-transform">
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-red-100">⏰ ESTA OFERTA EXPIRA EM:</div>
                <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white drop-shadow-md">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                Escolha Seu Plano e <br/><span className="text-red-600">Transforme Seu Natal</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            
            {/* Basic Plan (R$ 10) - Smaller & Dark Green Button */}
            <Card className="order-2 md:order-1 border border-slate-200 shadow-sm bg-white hover:border-slate-300 transition-all flex flex-col relative overflow-hidden group mt-0 md:mt-8">
              <CardHeader className="text-center pb-4 border-b border-slate-100 bg-slate-50">
                <CardTitle className="text-lg md:text-xl font-bold text-slate-600">Kit Lembrancinha</CardTitle>
                <CardDescription className="text-xs md:text-sm">Para quem quer apenas o básico</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-2">R$ 10<span className="text-lg">,00</span></div>
                
                <ul className="text-left space-y-3 mb-6 mt-4">
                  <Feature text="+150 Dinâmicas Natalinas em PDF" />
                  <Feature text="Acesso imediato" />
                  <Feature text="Garantia de 7 dias" />
                  <li className="text-slate-400 text-xs md:text-sm opacity-60 flex items-center gap-2"><div className="w-5 flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div></div> Sem bônus inclusos</li>
                  <li className="text-slate-400 text-xs md:text-sm opacity-60 flex items-center gap-2"><div className="w-5 flex justify-center"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div></div> Sem materiais editáveis</li>
                </ul>
                
                <Button className="w-full bg-green-800 hover:bg-green-900 text-white font-bold text-base md:text-lg py-6 shadow-sm" size="lg">
                  COMPRAR KIT BÁSICO
                </Button>
                <div className="mt-4 flex justify-center opacity-70"><PagamentoSeguro /></div>
              </CardContent>
            </Card>

            {/* Premium Plan (R$ 27) - Larger & More Prominent */}
            <Card className="order-1 md:order-2 border-4 border-yellow-400 shadow-2xl relative bg-white flex flex-col z-10 overflow-visible transform scale-105 md:scale-100 md:-translate-y-4 mb-4 md:mb-0">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 rounded-t-lg"></div>
              
              {/* Badge positioned absolutely, ensuring no clipping with overflow-visible */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full text-center z-20">
                <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-8 py-2 text-xs md:text-sm font-bold uppercase tracking-wide shadow-lg border-2 border-white whitespace-nowrap">
                  🎅 Recomendado • Mais Completo
                </Badge>
              </div>

              <CardHeader className="text-center pb-4 pt-12 border-b border-red-50 bg-red-50/50 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-black text-red-600 uppercase tracking-tight">Pacote Natal Completo</CardTitle>
                <CardDescription className="text-red-800 font-medium text-sm">Você leva TUDO + Bônus</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">De <span className="line-through text-red-400">R$ 120,00</span> por apenas:</div>
                <div className="text-5xl md:text-6xl font-black text-green-600 mb-2 tracking-tight drop-shadow-sm">R$ 27<span className="text-2xl font-bold text-green-700">,00</span></div>
                <div className="text-xs text-green-700 font-medium bg-green-100 inline-block px-3 py-1 rounded-full mb-6 mx-auto">Pagamento único • Acesso Vitalício</div>
                
                <ul className="text-left space-y-3 mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <Feature text="Passo a passo ilustrado de cada dinâmica" highlighted />
                  <Feature text="Lista de materiais necessários" highlighted />
                  <Feature text="Acesso imediato após a compra" highlighted />
                  <Feature text="Garantia incondicional de 7 dias" highlighted />
                  <Feature text="Arquivos Editáveis inclusos" highlighted />
                  
                  <div className="my-3 border-t border-slate-200"></div>
                  
                  <Feature text="BÔNUS 1: Receitas Divertidas" yellow />
                  <Feature text="BÔNUS 2: Jogos Natalinos" yellow />
                  <Feature text="BÔNUS 3: Pack de Decoração" yellow />
                </ul>
                
                <Button className="w-full bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 font-black text-lg md:text-xl py-8 shadow-xl rounded-lg animate-pulse hover:animate-none transform transition hover:-translate-y-1 active:border-b-0 active:translate-y-1">
                  QUERO O PACOTE COMPLETO
                </Button>
                <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck size={14} className="text-green-600" /> Risco Zero • Garantia de 7 Dias
                </p>
                <div className="mt-4 flex justify-center"><PagamentoSeguro /></div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800 flex items-center justify-center gap-2">
            <span className="text-red-600">?</span> Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          <FAQItem 
            question="Como vou acessar o material após a compra?" 
            answer="Assim que seu pagamento for confirmado, você receberá um e-mail automático com o link de acesso à nossa área de membros ou link direto de download (dependendo da plataforma). É imediato!" 
          />
          <FAQItem 
            question="Quais formas de pagamento são aceitas?" 
            answer="Aceitamos PIX (liberação imediata), cartão de crédito e boleto bancário. No cartão, a liberação também é na hora." 
          />
          <FAQItem 
            question="Preciso de algum material especial para as atividades?" 
            answer="Não! A maioria das atividades utiliza materiais simples que você já tem em casa, como tesoura, cola, lápis de cor e papel A4." 
          />
          <FAQItem 
            question="As atividades são adequadas para fazer em família?" 
            answer="Sim! O objetivo principal é unir a família. Temos atividades para as crianças fazerem sozinhas e outras para a família toda participar junto." 
          />
          <FAQItem 
            question="Como funciona a garantia de 7 dias?" 
            answer="É simples: se por qualquer motivo você não gostar do material, basta nos enviar um e-mail dentro de 7 dias e devolvemos 100% do seu dinheiro. Sem perguntas." 
          />
          <FAQItem 
            question="Para qual idade as atividades são mais adequadas?" 
            answer="Nosso kit é versátil! Temos atividades perfeitas para crianças de 3 a 10 anos, mas até os adultos se divertem montando as decorações e jogando os jogos em família." 
          />
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t-4 border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-6 text-slate-300">
            <ShieldCheck /> Site Seguro
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Natal Criativo. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-600">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        </div>
      </footer>
    </div>
  );
};

// --- Subcomponents ---

const Feature = ({ text, highlighted = false, yellow = false }: { text: string, highlighted?: boolean, yellow?: boolean }) => {
  let bgClass = 'bg-slate-200 text-slate-500';
  let textClass = 'text-slate-600';

  if (highlighted) {
    bgClass = 'bg-green-100 text-green-600';
    textClass = 'font-semibold text-slate-800';
  }
  
  if (yellow) {
    bgClass = 'bg-yellow-400 text-red-900 shadow-sm';
    textClass = 'font-bold text-red-900 bg-yellow-100 px-2 py-0.5 rounded w-full';
  }

  return (
    <li className={`flex items-start md:items-center gap-3 text-sm ${yellow ? 'mb-2' : ''}`}>
      <div className={`mt-0.5 md:mt-0 min-w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${bgClass}`}>
          <Check size={12} strokeWidth={4} />
      </div>
      <span className={`${textClass} leading-snug`}>{text}</span>
    </li>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <AccordionItem value={question} className="border border-slate-200 rounded-lg px-4 bg-white shadow-sm">
        <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-red-600 hover:no-underline py-4 leading-snug">
            {question}
        </AccordionTrigger>
        <AccordionContent className="text-slate-600 pb-4">
            {answer}
        </AccordionContent>
    </AccordionItem>
);

const TestimonialCard = ({ name, text }: { name: string, text: string }) => (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm relative">
        <div className="flex justify-center mb-4 text-yellow-400 gap-1">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
        </div>
        <p className="text-slate-700 italic mb-4 leading-relaxed">"{text}"</p>
        <p className="font-bold text-slate-900 text-sm">- {name}</p>
    </div>
);

const BonusCard = ({ icon, title, subtitle, desc, price }: any) => (
    <div className="bg-red-900/80 backdrop-blur-sm border-2 border-red-400/80 shadow-[0_0_15px_rgba(239,68,68,0.4)] rounded-xl p-6 text-center hover:bg-red-900 transition-colors transform hover:-translate-y-1">
        <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-300 border border-red-400/30">
            {icon}
        </div>
        <h3 className="font-bold text-lg leading-tight text-white">{title}</h3>
        <h4 className="font-bold text-lg leading-tight text-yellow-300 mb-3">{subtitle}</h4>
        <p className="text-sm text-red-100 mb-4 h-16 leading-snug">{desc}</p>
        <div className="border-t border-red-500/50 pt-4">
            <span className="text-red-300 line-through text-sm block">R$ {price}</span>
            <span className="text-white font-bold text-lg bg-red-600 px-3 py-1 rounded-lg inline-block mt-1 shadow-sm">HOJE É GRÁTIS!</span>
        </div>
    </div>
);

const PagamentoSeguro = () => (
    <div className="flex items-center gap-2 opacity-80 scale-90">
        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
        <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
        <div className="flex flex-col text-[10px] leading-tight text-slate-500 text-left ml-1">
            <span className="font-bold flex items-center gap-1"><Lock size={8} /> Pagamento</span>
            <span>100% Seguro</span>
        </div>
    </div>
);

const CookieIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
);

export default ChristmasLanding;