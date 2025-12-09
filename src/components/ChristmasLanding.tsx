import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Gift, Star, TreePine, Download, Clock, ShieldCheck, 
  Heart, Zap, Snowflake, Lock, ChevronRight, PartyPopper, Printer, Scissors, MessageCircle, Users, Smile, PlayCircle
} from "lucide-react";
import UpsellModal from './UpsellModal';

const ChristmasLanding = () => {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);
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
           <Snowflake className="absolute top-10 left-[10%] animate-bounce text-white" size={30} />
           <Snowflake className="absolute top-40 right-[15%] animate-pulse text-blue-100" size={20} />
           <Star className="absolute top-20 left-[20%] text-yellow-300 animate-pulse" size={15} /> 
           <Star className="absolute top-60 right-[10%] text-yellow-300 animate-pulse" size={25} /> 
           <Gift className="absolute bottom-40 left-[5%] text-white rotate-12 opacity-60" size={40} />
           <Gift className="absolute top-32 right-[5%] text-yellow-200 -rotate-12 opacity-40" size={30} />
           <TreePine className="absolute bottom-0 left-0 text-green-900" size={100} />
           <TreePine className="absolute bottom-0 right-0 text-green-900" size={80} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-center md:text-left">
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
              <p className="text-lg md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                Surpreenda neste Natal sem gastar muito com presentes caros. <br className="hidden md:block"/>
                Baixe, imprima e monte lembrancinhas lindas em minutos!
              </p>
            </div>

            {/* Right Column: Video + CTA */}
            <div className="flex flex-col items-center">
              {/* Video Placeholder */}
              <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] bg-slate-900/50 rounded-2xl border-4 border-white/50 shadow-2xl flex items-center justify-center mb-6 cursor-pointer group">
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                  <PlayCircle size={64} className="text-white/70 group-hover:text-white/90 transition-colors" />
                  <p className="absolute bottom-4 text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded">Assista ao vídeo!</p>
              </div>

              <div className="flex flex-col w-full md:w-auto px-4">
                <Button 
                  onClick={scrollToPricing}
                  className="bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 font-black text-lg md:text-xl py-8 w-full md:w-auto md:px-12 rounded-full shadow-2xl transform transition flex items-center justify-center gap-2 animate-scale-pulse hover:scale-110 active:scale-95"
                >
                  QUERO GARANTIR AGORA <ChevronRight size={24} />
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs md:text-base text-yellow-200 opacity-90 font-medium">
                <ShieldCheck size={16} /> OFERTA LIMITADA • <Zap size={16} /> Entrega Imediata
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Social Proof Teaser */}
      <section className="py-8 md:py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 text-left text-slate-600">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0"><Scissors size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Fácil de Montar</p>
                        <p className="text-sm">Basta imprimir, recortar e colar</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Heart size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Presente Econômico</p>
                        <p className="text-sm">Gaste pouco e encante a todos</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 shrink-0"><Printer size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Imprima em Casa</p>
                        <p className="text-sm">Ou na gráfica mais próxima</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEW: Why Choose Section (Dark Green) */}
      <section className="py-16 px-4 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-yellow-400">
                Por Que Escolher Nossas Lembrancinhas?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-green-800 p-8 rounded-2xl border border-green-700 hover:border-yellow-400/50 transition-colors text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-300">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Economia Real</h3>
                    <p className="text-green-100 leading-relaxed">
                        Presenteie todos os amigos, familiares e colegas sem estourar o orçamento. Nossas lembrancinhas custam centavos para imprimir!
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-green-800 p-8 rounded-2xl border border-green-700 hover:border-yellow-400/50 transition-colors text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-red-400">
                        <Heart size={32} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Feito com Amor</h3>
                    <p className="text-green-100 leading-relaxed">
                        Nada tem mais valor do que um presente feito à mão. Mostre que você se importa dedicando seu tempo para montar cada mimo.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-green-800 p-8 rounded-2xl border border-green-700 hover:border-yellow-400/50 transition-colors text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-300">
                        <Star size={32} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">Praticidade Total</h3>
                    <p className="text-green-100 leading-relaxed">
                        Tudo pronto para você usar. Sem complicações, sem perder tempo criando arte. É só baixar, imprimir e montar!
                    </p>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <Button 
                onClick={scrollToPricing} 
                className="bg-red-600 hover:bg-red-500 text-white font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg animate-scale-pulse hover:scale-110 whitespace-normal h-auto"
                >
                    QUERO TRANSFORMAR MEU NATAL! 🎄
                </Button>
            </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-2">O que você vai receber?</h2>
          <p className="text-center text-slate-600 mb-8">Modelos prontos para você imprimir e presentear</p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Gift className="text-red-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Cartão Árvore de Chocolate</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">O molde perfeito para encaixar um Bis ou Batom. A lembrancinha mais barata e amada do Natal!</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <PartyPopper className="text-green-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Guirlanda "Feliz Natal"</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Uma lembrancinha decorativa em formato de bambolê/guirlanda para enfeitar a árvore ou a porta.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Clock className="text-blue-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Calendários 2025</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Calendários temáticos prontos. Um mimo útil que todo mundo gosta de ganhar.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <TreePine className="text-yellow-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Mimos de Porta</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Tags decorativas para maçanetas. Um detalhe simples que transforma o ambiente.</p>
                </div>
            </div>
          </div>

          {/* Big Checklist */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Check className="text-green-600" /> Resumo do Pacote Completo:
            </h3>
            <div className="grid md:grid-cols-2 gap-y-3 gap-x-8">
                <ChecklistItem text="Mais de 50 Moldes de Lembrancinhas" />
                <ChecklistItem text="Opções para todas as idades (crianças e adultos)" />
                <ChecklistItem text="Usam apenas papel, tesoura e cola (itens de casa)" />
                <ChecklistItem text="Formato digital: baixe e imprima quando quiser" />
                <ChecklistItem text="Presenteie todo mundo sem gastar uma fortuna" />
                <ChecklistItem text="Instruções de montagem simples!" />
                <ChecklistItem text="Separadas por categorias (caixinhas, cartões, tags)" />
                <ChecklistItem text="Acesso imediato após a compra" />
                <ChecklistItem text="Garantia incondicional de 7 dias" />
                <li className="flex items-start gap-2 text-slate-700 bg-yellow-50 p-2 rounded-lg -ml-2">
                    <div className="mt-1 min-w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 text-red-900 shadow-sm">
                        <Gift size={12} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-red-800">+3 BÔNUS EXCLUSIVOS (Jogos, Receitas e Decoração)</span>
                </li>
            </div>
          </div>

        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-16 px-4 bg-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
                <span className="bg-yellow-400 text-red-900 font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg">Apenas no Plano Completo</span>
                <h2 className="text-2xl md:text-5xl font-extrabold mt-6 mb-4 leading-tight">ALÉM DAS LEMBRANCINHAS, <br/>RECEBA 3 BÔNUS EXCLUSIVOS</h2>
                <p className="text-red-200 text-base md:text-lg">Para tornar seu Natal ainda mais divertido</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <BonusCard 
                    imageSrc="/images/bonus-receitas.png"
                    title="RECEITAS DIVERTIDAS"
                    subtitle="DE NATAL"
                    desc="Receitas natalinas para fazer com as crianças: biscoitos, chocolate quente e cupcakes!"
                    price="37,00"
                />
                <BonusCard 
                    imageSrc="/images/bonus-jogos.png"
                    title="JOGOS NATALINOS"
                    subtitle="PARA IMPRIMIR"
                    desc="Caça ao tesouro, bingo de Natal, jogo da memória. Imprima e brinque na noite de Natal!"
                    price="29,00"
                />
                <BonusCard 
                    imageSrc="/images/bonus-decoracao.png"
                    title="PACK DE DECORAÇÃO"
                    subtitle="EXTRA"
                    desc="Mais moldes DIY, cartões personalizáveis e etiquetas para presentes!"
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
                    className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black text-lg md:text-xl py-6 md:py-8 w-full md:px-12 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.6)] transform transition animate-scale-pulse hover:scale-110 whitespace-normal h-auto leading-tight"
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
                Escolha Seu Plano e <br/><span className="text-red-600">Garanta Suas Lembrancinhas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            
            {/* Basic Plan (R$ 10) */}
            <Card className="order-1 border border-slate-200 shadow-sm bg-white hover:border-slate-300 transition-all flex flex-col relative overflow-hidden group">
              <CardHeader className="text-center pb-4 border-b border-slate-100 bg-slate-50">
                <CardTitle className="text-lg md:text-xl font-bold text-slate-600">Kit Lembrancinha Básico</CardTitle>
                <CardDescription className="text-xs md:text-sm">Apenas os arquivos essenciais</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-2">R$ 10<span className="text-lg">,00</span></div>
                
                <ul className="text-left space-y-3 mb-6 mt-4">
                  <Feature text="Moldes de Cartão Porta-Bombom" />
                  <Feature text="Arquivos em PDF prontos para imprimir" />
                  <Feature text="Acesso imediato" />
                </ul>
                
                <Button 
                  onClick={() => setIsUpsellModalOpen(true)}
                  className="w-full bg-green-800 hover:bg-green-900 text-white font-bold text-base md:text-lg py-6 shadow-sm animate-scale-pulse hover:scale-110" size="lg">
                  COMPRAR KIT BÁSICO
                </Button>
                <div className="mt-4 flex justify-center opacity-70"><PagamentoSeguro /></div>
              </CardContent>
            </Card>

            {/* Premium Plan (R$ 19,90) */}
            <Card className="order-2 border-4 border-yellow-400 shadow-2xl relative bg-white flex flex-col z-10 overflow-visible">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 rounded-t-lg"></div>
              
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full text-center z-20">
                <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-8 py-2 text-xs md:text-sm font-bold uppercase tracking-wide shadow-lg border-2 border-white whitespace-nowrap">
                  🎅 Recomendado • Mais Completo
                </Badge>
              </div>

              <CardHeader className="text-center pb-4 pt-12 border-b border-red-50 bg-red-50/50 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-black text-red-600 uppercase tracking-tight">Pacote Natal Completo</CardTitle>
                <CardDescription className="text-red-800 font-medium text-sm">Lembrancinhas + Jogos + Bônus</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">De <span className="line-through text-red-400">R$ 120,00</span> por apenas:</div>
                <div className="text-5xl md:text-6xl font-black text-green-600 mb-2 tracking-tight drop-shadow-sm">R$ 19<span className="text-2xl font-bold text-green-700">,90</span></div>
                <div className="text-xs text-green-700 font-medium bg-green-100 inline-block px-3 py-1 rounded-full mb-6 mx-auto">Pagamento único • Acesso Vitalício</div>
                
                <ul className="text-left space-y-3 mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <Feature text="TODOS os moldes de lembrancinhas" highlighted />
                  <Feature text="Arquivos Editáveis (Canva/PDF)" highlighted />
                  <Feature text="Instruções de papel e impressão" highlighted />
                  <Feature text="Garantia de 7 dias" highlighted />
                  
                  <div className="my-3 border-t border-slate-200"></div>
                  
                  <Feature text="BÔNUS 1: Receitas Divertidas" yellow />
                  <Feature text="BÔNUS 2: Jogos Natalinos em Família" yellow />
                  <Feature text="BÔNUS 3: Pack de Decoração Extra" yellow />
                </ul>
                
                <Button className="w-full bg-green-500 hover:bg-green-400 text-white border-b-4 border-green-700 font-black text-lg md:text-xl py-8 shadow-xl rounded-lg animate-scale-pulse hover:scale-110 transform transition active:border-b-0 active:translate-y-1">
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

      {/* Prova Social 2 */}
      <section className="py-16 px-4 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-lg md:text-xl shadow-lg mb-10 transform -rotate-1">
                Famílias que amaram! ⭐⭐⭐⭐⭐
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
                 <EnhancedTestimonial 
                    name="Amanda R."
                    role="Mãe e Empreendedora"
                    text="Achei que eram só umas lembrancinhas, mas o pacote é MUITO completo. A qualidade dos arquivos é impecável, tudo muito bem organizado. Facilitou demais a minha vida!"
                    observation="Veio muito mais coisa do que eu esperava! Só os moldes de caixinhas já valeram a pena, e tem lembrancinha que vou conseguir usar até no Natal de 2026. Incrível!"
                    initials="AR"
                    color="bg-red-100 text-red-600"
                 />
                 <EnhancedTestimonial 
                    name="Juliana F."
                    role="Professora"
                    text="Comprei o pacote completo e valeu muito a pena. Só os jogos já pagam o valor! Meus alunos adoraram as lembrancinhas."
                    initials="JF"
                    color="bg-blue-100 text-blue-600"
                 />
                 <EnhancedTestimonial 
                    name="Carla Dias"
                    role="Avó"
                    text="Os arquivos vêm no tamanho certinho. Só imprimi na gráfica rápida e recortei em casa. Economizei muito nos presentes dos netos."
                    initials="CD"
                    color="bg-green-100 text-green-600"
                 />
                 <EnhancedTestimonial 
                    name="Patrícia Lima"
                    role="Mãe de 3"
                    text="Fiz os cartões porta-bombom para a família toda. Todo mundo elogiou a criatividade. O material é lindo!"
                    initials="PL"
                    color="bg-yellow-100 text-yellow-600"
                 />
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
            question="Como funciona a garantia de 7 dias?" 
            answer="É simples: se por qualquer motivo você não gostar do material, basta nos enviar um e-mail dentro de 7 dias e devolvemos 100% do seu dinheiro. Sem perguntas." 
          />
          <FAQItem 
            question="Eu recebo o produto impresso em casa?" 
            answer="Não. O produto é 100% digital. Você recebe os arquivos em PDF de alta qualidade por e-mail para baixar e imprimir quantas vezes quiser." 
          />
          <FAQItem 
            question="Qual papel devo usar para imprimir?" 
            answer="Para as lembrancinhas (caixinhas e cartões), recomendamos papel fotográfico ou papel offset com gramatura de 180g (mais durinho). Para os jogos e atividades, papel sulfite comum (75g) funciona perfeitamente." 
          />
        </Accordion>
      </section>

      {/* Guarantee Section (Highlighted) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
           {/* Enhanced Card Background */}
           <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-yellow-200 shadow-xl flex flex-col md:flex-row items-center gap-10">
              <div className="relative shrink-0">
                 <div className="w-32 h-32 md:w-40 md:h-40 bg-green-800 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-lg relative z-10">
                    <div className="text-center text-white">
                        <span className="block text-5xl md:text-6xl font-black">7</span>
                        <span className="block text-xs md:text-sm font-bold tracking-widest uppercase">Dias</span>
                    </div>
                 </div>
                 <div className="absolute top-0 left-0 w-full h-full bg-green-200 rounded-full transform scale-110 -z-0 blur-sm"></div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                 <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Garantia Incondicional de 7 Dias</h2>
                 <h3 className="text-lg md:text-xl font-bold text-green-600 mb-6">Seu Investimento Está 100% Protegido!</h3>
                 
                 <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-yellow-100">
                       <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                       <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Teste sem risco:</span> Baixe, olhe e use o material por 7 dias completos.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-yellow-100">
                       <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                       <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Reembolso Total:</span> Se não gostar, devolvemos 100% do seu dinheiro.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-yellow-100">
                       <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                       <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Zero Burocracia:</span> Sem perguntas chatas, apenas um email.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-8 text-center">
             <Button 
                onClick={scrollToPricing}
                className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-8 py-6 rounded-full text-lg shadow-md"
             >
                O RISCO É TODO NOSSO - GARANTIR AGORA
             </Button>
           </div>
        </div>
      </section>

      {/* Final CTA Red Section with Particles */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-800 text-white text-center relative overflow-hidden">
          {/* Particles Effect */}
          <div className="absolute inset-0 pointer-events-none">
             {[...Array(20)].map((_, i) => (
                <Snowflake 
                    key={i}
                    className="absolute text-white/20 animate-pulse" 
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        opacity: Math.random() * 0.5
                    }}
                />
             ))}
             {[...Array(15)].map((_, i) => (
                <Star 
                    key={i + 20}
                    className="absolute text-yellow-300/40 animate-spin" 
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                        width: `${Math.random() * 15 + 5}px`,
                        height: `${Math.random() * 15 + 5}px`,
                    }}
                />
             ))}
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
              <Clock className="w-16 h-16 mx-auto mb-6 text-yellow-300 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-tight drop-shadow-md">
                Não Deixe Este Natal <br/>Passar em Branco!
              </h2>
              <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto drop-shadow-sm">
                Imagine a alegria da sua família ao receber lembrancinhas feitas por você. Crie memórias que vão durar para sempre... <br/>
                <span className="font-bold text-white bg-red-900/50 px-2 rounded">Isso pode ser HOJE.</span>
              </p>

              <div className="bg-red-900/50 backdrop-blur-md p-6 rounded-2xl border border-red-400 inline-block mb-8 shadow-xl">
                  <div className="text-sm font-bold uppercase tracking-widest text-red-200 mb-2">Oferta expira em:</div>
                  <div className="text-4xl md:text-6xl font-mono font-black text-white">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>

              <div>
                  <Button 
                    onClick={scrollToPricing}
                    className="bg-green-600 hover:bg-green-500 text-white font-black text-lg md:text-2xl py-8 px-8 md:px-16 rounded-full shadow-[0_0_40px_rgba(22,163,74,0.6)] transform transition animate-scale-pulse hover:scale-110 active:scale-95 border-4 border-green-500/50"
                  >
                    QUERO VIVER UM NATAL ESPECIAL 🎄
                  </Button>
                  
                  <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm font-medium text-red-200 opacity-90">
                      <span className="flex items-center gap-1"><Lock size={12}/> Pagamento 100% Seguro</span>
                      <span className="hidden md:block">•</span>
                      <span className="flex items-center gap-1"><Zap size={12}/> Acesso Imediato</span>
                      <span className="hidden md:block">•</span>
                      <span className="flex items-center gap-1"><ShieldCheck size={12}/> Garantia de 7 Dias</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-6 text-slate-300">
            <ShieldCheck /> Site Seguro
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Natal Criativo. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.</p>
        </div>
      </footer>

      <UpsellModal 
        isOpen={isUpsellModalOpen}
        onClose={() => setIsUpsellModalOpen(false)}
        onConfirm={() => {
            console.log("Upsell accepted! Redirect to 14.90 checkout.");
            setIsUpsellModalOpen(false);
            // Aqui você colocaria o link de checkout para a oferta de R$14,90
            // window.location.href = 'URL_CHECKOUT_14_90';
        }}
        onReject={() => {
            console.log("Upsell rejected. Redirect to 10.00 checkout.");
            setIsUpsellModalOpen(false);
            // Aqui você colocaria o link de checkout para a oferta de R$10,00
            // window.location.href = 'URL_CHECKOUT_10_00';
        }}
      />
    </div>
  );
};

// --- Subcomponents ---

const ChecklistItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-2 text-slate-700">
        <div className="mt-1 min-w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600">
            <Check size={12} strokeWidth={3} />
        </div>
        <span>{text}</span>
    </li>
);

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

const EnhancedTestimonial = ({ name, role, text, initials, color, observation }: any) => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-shadow">
        <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center font-bold text-lg shrink-0`}>
            {initials}
        </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-slate-900">{name}</h4>
                <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">{role}</span>
            </div>
            <div className="flex text-yellow-400 gap-0.5 mb-3">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed">"{text}"</p>
            {observation && (
                <div className="mt-3 bg-green-50 border-l-4 border-green-400 text-green-800 p-3 rounded-r-lg text-xs">
                    <p className="font-bold">Observação da cliente:</p>
                    <p className="italic">"{observation}"</p>
                </div>
            )}
        </div>
    </div>
);

const BonusCard = ({ imageSrc, title, subtitle, desc, price }: any) => (
    <div className="bg-red-900/80 backdrop-blur-sm border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-xl p-4 text-center hover:bg-red-900 transition-colors transform hover:-translate-y-1 flex flex-col">
        <img src={imageSrc} alt={title} className="rounded-lg mb-4 w-full aspect-square object-cover border-2 border-yellow-400/50" />
        <div className="flex-grow">
            <h3 className="font-bold text-lg leading-tight text-white">{title}</h3>
            <h4 className="font-bold text-lg leading-tight text-yellow-300 mb-3">{subtitle}</h4>
            <p className="text-sm text-red-100 mb-4 h-16 leading-snug">{desc}</p>
        </div>
        <div className="border-t border-red-500/50 pt-4 mt-auto">
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

export default ChristmasLanding;