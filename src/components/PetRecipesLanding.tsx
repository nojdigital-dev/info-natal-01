import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, Clock, ShieldCheck, 
  Heart, Zap, ChevronRight, Users, PlayCircle,
  PawPrint, Bone, Utensils, Apple, Info, AlertTriangle, Syringe
} from "lucide-react";
import PetUpsellModal from './PetUpsellModal';

const PetRecipesLanding = () => {
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
      <div className="bg-orange-400 text-white text-center py-2 px-4 font-bold text-xs md:text-sm animate-pulse sticky top-0 z-50 shadow-md">
        🐾 OFERTA VÁLIDA APENAS HOJE: {todayDate.toUpperCase()}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-8 md:py-24 px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
           <PawPrint className="absolute top-10 left-[10%] animate-bounce text-white" size={30} />
           <PawPrint className="absolute top-40 right-[15%] animate-pulse text-green-100" size={20} />
           <Bone className="absolute top-20 left-[20%] text-orange-200 animate-pulse" size={15} /> 
           <Bone className="absolute top-60 right-[10%] text-orange-200 animate-pulse" size={25} /> 
           <Heart className="absolute bottom-40 left-[5%] text-white rotate-12 opacity-60" size={40} />
           <Heart className="absolute top-32 right-[5%] text-orange-200 -rotate-12 opacity-40" size={30} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-center md:text-left">
              <Badge className="bg-white text-green-700 hover:bg-slate-100 mb-4 px-6 py-2 text-base md:text-lg font-bold shadow-lg transform -rotate-2">
                🐶 Saúde e Longevidade
              </Badge>
              <h1 className="text-3xl md:text-6xl font-extrabold mb-2 md:mb-6 leading-tight drop-shadow-lg">
                Seu Pet Não Fala... <br/>
                <span className="text-orange-300">Mas o corpo avisa!</span> <br className="md:hidden" />
                <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-lg transform -rotate-3 border-2 border-white text-lg md:text-4xl ml-2 shadow-xl mt-2 md:mt-0 align-middle">
                  (+ DE 4.500 PETS SALVOS)
                </span>
              </h1>
              <p className="text-lg md:text-2xl mb-4 md:mb-8 text-green-100 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                Cansaço, quedas de pelo e falta de ânimo não são normais. <br className="hidden md:block"/>
                Devolva a energia do seu melhor amigo com receitas naturais, simples e baratas.
              </p>
            </div>

            {/* Right Column: Video + CTA */}
            <div className="flex flex-col items-center">
              {/* Video Placeholder */}
              <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto aspect-[9/16] bg-slate-900/50 rounded-2xl border-4 border-white/50 shadow-2xl flex items-center justify-center mb-4 cursor-pointer group hover:border-orange-400 transition-colors">
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                  <PlayCircle size={64} className="text-white/70 group-hover:text-white/90 transition-colors" />
                  <p className="absolute bottom-4 text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded">Assista: O perigo da ração</p>
              </div>

              <div className="flex flex-col w-full md:w-auto px-4">
                <Button 
                  onClick={scrollToPricing}
                  className="bg-orange-500 hover:bg-orange-400 text-white border-b-4 border-orange-700 font-black text-lg md:text-xl py-8 w-full md:w-auto md:px-12 rounded-full shadow-2xl transform transition flex items-center justify-center gap-2 animate-scale-pulse hover:scale-110 active:scale-95"
                >
                  SALVAR A SAÚDE DELE AGORA <ChevronRight size={24} />
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs md:text-base text-green-200 opacity-90 font-medium">
                <ShieldCheck size={16} /> Aprovado por Veterinários • <Zap size={16} /> Resultados em 30 Dias
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
                    <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0"><AlertTriangle size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Livre de Venenos</p>
                        <p className="text-sm">Sem conservantes cancerígenos</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><Utensils size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Comida de Verdade</p>
                        <p className="text-sm">Ingredientes que você tem em casa</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0"><Syringe size={24} /></div>
                    <div>
                        <p className="font-bold text-slate-900 leading-tight">Menos Veterinário</p>
                        <p className="text-sm">Previne doenças e alergias</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEW: Why Choose Section (Dark Theme) */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-orange-400">
                O Segredo que a Indústria Esconde
            </h2>
            <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
                A Dra. Clara Moretti descobriu que 87% das rações "premium" contêm substâncias proibidas na Europa. Seu pet pode estar ingerindo toxinas todos os dias.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-400/50 transition-colors text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-300">
                        <Zap size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-orange-400 mb-4 uppercase">Mais Energia</h3>
                    <p className="text-slate-300 leading-relaxed">
                        Em poucos dias, tutores relatam que seus pets voltam a brincar como filhotes. O corpo desinflama e a disposição volta.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-400/50 transition-colors text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                        <Heart size={32} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-400 mb-4 uppercase">Fim das Alergias</h3>
                    <p className="text-slate-300 leading-relaxed">
                        Coceiras, quedas de pelo e problemas de pele muitas vezes somem apenas trocando a ração processada por comida natural.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-400/50 transition-colors text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-300">
                        <Users size={32} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-400 mb-4 uppercase">Economia Real</h3>
                    <p className="text-slate-300 leading-relaxed">
                        Além de economizar com veterinário e remédios, as receitas naturais muitas vezes saem mais baratas que rações super premium.
                    </p>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <Button 
                onClick={scrollToPricing} 
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg animate-scale-pulse hover:scale-110 whitespace-normal h-auto"
                >
                    QUERO APRENDER AS RECEITAS NATURAIS 🐾
                </Button>
            </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-2">O que você vai aprender?</h2>
          <p className="text-center text-slate-600 mb-8">Um guia completo e prático para nutrir seu pet com amor</p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Utensils className="text-green-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Cardápios Balanceados</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Receitas calculadas para suprir todas as necessidades nutricionais, sem exageros.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Bone className="text-orange-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Petiscos Saudáveis</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Aprenda a fazer agrados deliciosos que não prejudicam a saúde do seu cão ou gato.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Apple className="text-blue-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Suplementação Natural</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Ingredientes poderosos (e baratos) que turbinam a imunidade e previnem o câncer.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <AlertTriangle className="text-red-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Alimentos Proibidos</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">A lista definitiva do que NUNCA dar para seu pet (alguns itens comuns são fatais).</p>
                </div>
            </div>
          </div>

          {/* Big Checklist */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Check className="text-green-600" /> Resumo do Guia Completo:
            </h3>
            <div className="grid md:grid-cols-2 gap-y-3 gap-x-8">
                <ChecklistItem text="Mais de 47 Receitas Naturais Testadas" />
                <ChecklistItem text="Opções para Cães e Gatos" />
                <ChecklistItem text="Substituições simples com o que tem na geladeira" />
                <ChecklistItem text="Guia de transição alimentar (passo a passo)" />
                <ChecklistItem text="Como congelar e organizar as marmitas da semana" />
                <ChecklistItem text="Receitas específicas para pets idosos" />
                <ChecklistItem text="Formatos digitais (leia no celular ou imprima)" />
                <ChecklistItem text="Acesso imediato e vitalício" />
                <ChecklistItem text="Garantia incondicional de 7 dias" />
                <li className="flex items-start gap-2 text-slate-700 bg-green-50 p-2 rounded-lg -ml-2">
                    <div className="mt-1 min-w-5 h-5 bg-green-400 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm">
                        <Gift size={12} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-green-800">+3 BÔNUS EXCLUSIVOS (Picolés, Biscoitos e Checklist)</span>
                </li>
            </div>
          </div>

        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-16 px-4 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
                <span className="bg-orange-400 text-white font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg">Apenas no Plano Completo</span>
                <h2 className="text-2xl md:text-5xl font-extrabold mt-6 mb-4 leading-tight">ALÉM DO GUIA, <br/>RECEBA 3 BÔNUS DE SAÚDE</h2>
                <p className="text-green-200 text-base md:text-lg">Para refrescar, agradar e proteger seu pet</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <BonusCardPlaceholder 
                    icon={<Bone size={48} className="text-orange-400" />}
                    title="BISCOITOS NATURAIS"
                    subtitle="CROCANTES"
                    desc="Receitas de petiscos funcionais para treinar e agradar sem culpa. Nada de farinha branca!"
                    price="27,00"
                />
                <BonusCardPlaceholder 
                    icon={<Info size={48} className="text-blue-400" />}
                    title="PICOLÉS NATURAIS"
                    subtitle="PARA O VERÃO"
                    desc="Refresque seu pet nos dias quentes com sorvetes de frutas e caldos nutritivos."
                    price="19,00"
                />
                <BonusCardPlaceholder 
                    icon={<AlertTriangle size={48} className="text-red-400" />}
                    title="CHECKLIST DE"
                    subtitle="PROIBIDOS"
                    desc="Tabela rápida para colar na geladeira: saiba na hora o que é tóxico e o que é seguro."
                    price="15,00"
                />
            </div>
            
            <div className="mt-12 text-center flex flex-col items-center w-full">
                <p className="text-lg md:text-2xl font-bold text-orange-300 animate-pulse mb-6 px-4">
                    TOTAL EM BÔNUS: R$ 61,00 — HOJE É GRÁTIS! 🎁
                </p>
                <div className="w-full px-4 md:w-auto">
                    <Button 
                    onClick={scrollToPricing} 
                    className="bg-orange-500 hover:bg-orange-400 text-white font-black text-lg md:text-xl py-6 md:py-8 w-full md:px-12 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] transform transition animate-scale-pulse hover:scale-110 whitespace-normal h-auto leading-tight"
                    >
                        QUERO OS BÔNUS TAMBÉM! 🐾
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
                Sua Contribuição é Simbólica <br/><span className="text-green-600">Pague o que o coração mandar</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            
            {/* Basic Plan (R$ 10) */}
            <Card className="order-1 border border-slate-200 shadow-sm bg-white hover:border-slate-300 transition-all flex flex-col relative overflow-hidden group">
              <CardHeader className="text-center pb-4 border-b border-slate-100 bg-slate-50">
                <CardTitle className="text-lg md:text-xl font-bold text-slate-600">Guia Introdutório</CardTitle>
                <CardDescription className="text-xs md:text-sm">Para quem está começando</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-2">R$ 10<span className="text-lg">,00</span></div>
                
                <ul className="text-left space-y-3 mb-6 mt-4">
                  <Feature text="10 Receitas Básicas" />
                  <Feature text="Lista de ingredientes permitidos" />
                  <Feature text="Acesso ao eBook em PDF" />
                </ul>
                
                <Button 
                  onClick={() => setIsUpsellModalOpen(true)}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold text-base md:text-lg py-6 shadow-sm animate-scale-pulse hover:scale-110" size="lg">
                  COMEÇAR COM O BÁSICO
                </Button>
                <div className="mt-4 flex justify-center opacity-70"><PagamentoSeguro /></div>
              </CardContent>
            </Card>

            {/* Premium Plan (R$ 19,90) */}
            <Card className="order-2 border-4 border-green-500 shadow-2xl relative bg-white flex flex-col z-10 overflow-visible">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-t-lg"></div>
              
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full text-center z-20">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-8 py-2 text-xs md:text-sm font-bold uppercase tracking-wide shadow-lg border-2 border-white whitespace-nowrap">
                  🐾 Recomendado • Completo
                </Badge>
              </div>

              <CardHeader className="text-center pb-4 pt-12 border-b border-green-50 bg-green-50/50 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-black text-green-700 uppercase tracking-tight">Pacote Saúde Total</CardTitle>
                <CardDescription className="text-green-800 font-medium text-sm">Guia Mestre + 47 Receitas + Bônus</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">De <span className="line-through text-red-400">R$ 97,00</span> por apenas:</div>
                <div className="text-5xl md:text-6xl font-black text-green-600 mb-2 tracking-tight drop-shadow-sm">R$ 19<span className="text-2xl font-bold text-green-700">,90</span></div>
                <div className="text-xs text-green-700 font-medium bg-green-100 inline-block px-3 py-1 rounded-full mb-6 mx-auto">Pagamento único • Acesso Vitalício</div>
                
                <ul className="text-left space-y-3 mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <Feature text="TODAS as 47 Receitas Naturais" highlighted />
                  <Feature text="Guia de Transição Passo a Passo" highlighted />
                  <Feature text="Tabela Nutricional Completa" highlighted />
                  <Feature text="Garantia de 7 dias" highlighted />
                  
                  <div className="my-3 border-t border-slate-200"></div>
                  
                  <Feature text="BÔNUS 1: Biscoitos Crocantes" yellow />
                  <Feature text="BÔNUS 2: Picolés de Verão" yellow />
                  <Feature text="BÔNUS 3: Tabela de Alimentos Proibidos" yellow />
                </ul>
                
                <Button className="w-full bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800 font-black text-lg md:text-xl py-8 shadow-xl rounded-lg animate-scale-pulse hover:scale-110 transform transition active:border-b-0 active:translate-y-1">
                  QUERO SAÚDE TOTAL PRO MEU PET
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
                Tutores Felizes e Pets Saudáveis! ⭐⭐⭐⭐⭐
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
                 <EnhancedTestimonial 
                    name="Juliana S."
                    role="Mãe da Mel"
                    text="Eu quase perdi a Mel por causa da ração 'premium' que prometia saúde. Mas tudo mudou quando conheci as receitas naturais. Em 30 dias, a Mel voltou a brincar como filhote — sem remédios, sem crises, só com alimentação de verdade."
                    observation="Eu achava que dar comida natural dava trabalho, mas com o guia de congelamento eu faço tudo no domingo e fico tranquila a semana toda!"
                    initials="JS"
                    color="bg-orange-100 text-orange-600"
                 />
                 <EnhancedTestimonial 
                    name="Carlos Eduardo"
                    role="Pai do Thor"
                    text="O Thor tinha uma alergia que não sarava nunca. Gastei fortunas com vet. 15 dias comendo comida de verdade e a pele dele está perfeita. Obrigado por esse guia!"
                    initials="CE"
                    color="bg-blue-100 text-blue-600"
                 />
                 <EnhancedTestimonial 
                    name="Dra. Ana Paula"
                    role="Veterinária"
                    text="Sempre indico alimentação natural, mas os tutores tinham dificuldade em balancear. Esse material da Dra. Clara é perfeito, seguro e muito didático."
                    initials="AP"
                    color="bg-green-100 text-green-600"
                 />
                 <EnhancedTestimonial 
                    name="Lúcia Ferreira"
                    role="Dona de 3 gatos"
                    text="Achava que era só pra cachorro, mas as receitas pra gatos são ótimas! Meus gatinhos estão com o pelo super brilhante e muito mais ativos."
                    initials="LF"
                    color="bg-purple-100 text-purple-600"
                 />
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800 flex items-center justify-center gap-2">
            <span className="text-orange-500">?</span> Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          <FAQItem 
            question="Como vou acessar o material após a compra?" 
            answer="Assim que seu pagamento for confirmado, você receberá um e-mail automático com o link para baixar todos os livros digitais (PDFs). O acesso é imediato!" 
          />
          <FAQItem 
            question="Quais formas de pagamento são aceitas?" 
            answer="Aceitamos PIX (liberação imediata), cartão de crédito e boleto bancário. No cartão, a liberação também é na hora." 
          />
          <FAQItem 
            question="Como funciona a garantia de 7 dias?" 
            answer="É simples: se por qualquer motivo você não gostar do material, basta nos enviar um e-mail dentro de 7 dias e devolvemos 100% do seu dinheiro, sem perguntas." 
          />
          <FAQItem 
            question="Serve para cães e gatos?" 
            answer="Sim! O guia possui seções específicas tanto para cães quanto para gatos, respeitando a necessidade nutricional de cada espécie (gatos precisam de mais taurina, por exemplo)." 
          />
          <FAQItem 
            question="Dá muito trabalho fazer a comida?" 
            answer="Não. Ensinamos o método de 'Cozinhar em Lote'. Você tira 1 hora do seu final de semana, cozinha tudo, porciona e congela. Durante a semana é só descongelar e servir." 
          />
          <FAQItem 
            question="Os ingredientes são caros?" 
            answer="Pelo contrário. Você vai usar ingredientes comuns como frango, carne moída, cenoura, abóbora, ovos... Coisas que você já compra no mercado ou feira. Sai mais barato que ração Super Premium." 
          />
          <FAQItem 
            question="Meu cachorro é idoso, ele pode comer?" 
            answer="Com certeza! Inclusive é altamente recomendado. Alimentos naturais são mais fáceis de digerir e têm mais água, o que protege os rins dos pets idosos." 
          />
        </Accordion>
      </section>

      {/* Guarantee Section (Highlighted) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
           {/* Enhanced Card Background */}
           <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-xl flex flex-col md:flex-row items-center gap-10">
              <div className="relative shrink-0">
                 <div className="w-32 h-32 md:w-40 md:h-40 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg relative z-10">
                    <div className="text-center text-white">
                        <span className="block text-5xl md:text-6xl font-black">7</span>
                        <span className="block text-xs md:text-sm font-bold tracking-widest uppercase">Dias</span>
                    </div>
                 </div>
                 <div className="absolute top-0 left-0 w-full h-full bg-orange-200 rounded-full transform scale-110 -z-0 blur-sm"></div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                 <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Garantia de Satisfação Total</h2>
                 <h3 className="text-lg md:text-xl font-bold text-green-600 mb-6">Seu Pet Ama ou Seu Dinheiro de Volta!</h3>
                 
                 <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-green-100">
                       <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                       <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Teste as receitas:</span> Faça para seu pet e veja a reação dele.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-green-100">
                       <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                       <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Reembolso Total:</span> Se ele não se adaptar, devolvemos 100%.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-8 text-center">
             <Button 
                onClick={scrollToPricing}
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-6 rounded-full text-lg shadow-md"
             >
                PROTEGER MEU PET SEM RISCOS
             </Button>
           </div>
        </div>
      </section>

      {/* Final CTA Green Section with Particles */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-800 to-green-950 text-white text-center relative overflow-hidden">
          {/* Particles Effect */}
          <div className="absolute inset-0 pointer-events-none">
             {[...Array(20)].map((_, i) => (
                <PawPrint 
                    key={i}
                    className="absolute text-white/10 animate-pulse" 
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        opacity: Math.random() * 0.5,
                        transform: `rotate(${Math.random() * 360}deg)`
                    }}
                />
             ))}
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
              <Heart className="w-16 h-16 mx-auto mb-6 text-red-500 animate-pulse fill-current" />
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-tight drop-shadow-md">
                Não Espere Uma Doença <br/>Aparecer Para Mudar.
              </h2>
              <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto drop-shadow-sm">
                A saúde do seu pet depende 100% das suas escolhas. Dê a ele o presente de uma vida longa, saudável e feliz ao seu lado. <br/>
                <span className="font-bold text-white bg-green-700/50 px-2 rounded">Comece hoje mesmo.</span>
              </p>

              <div className="bg-green-900/50 backdrop-blur-md p-6 rounded-2xl border border-green-500 inline-block mb-8 shadow-xl">
                  <div className="text-sm font-bold uppercase tracking-widest text-green-200 mb-2">Oferta expira em:</div>
                  <div className="text-4xl md:text-6xl font-mono font-black text-white">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>

              <div>
                  <Button 
                    onClick={scrollToPricing}
                    className="bg-orange-500 hover:bg-orange-400 text-white font-black text-lg md:text-2xl py-8 px-8 md:px-16 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.6)] transform transition animate-scale-pulse hover:scale-110 active:scale-95 border-4 border-orange-400/50"
                  >
                    QUERO DAR VIDA LONGA AO MEU PET 🐾
                  </Button>
                  
                  <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm font-medium text-green-200 opacity-90">
                      <span className="flex items-center gap-1"><ShieldCheck size={12}/> Site Seguro</span>
                      <span className="hidden md:block">•</span>
                      <span className="flex items-center gap-1"><Zap size={12}/> Acesso Imediato</span>
                      <span className="hidden md:block">•</span>
                      <span className="flex items-center gap-1"><Heart size={12}/> Satisfação Garantida</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t-4 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-6 text-slate-300">
            <ShieldCheck /> Site Seguro
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Nutrição Pet Natural. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. As informações contidas neste site não substituem o aconselhamento veterinário profissional. Sempre consulte seu veterinário antes de fazer mudanças drásticas na dieta do seu animal, especialmente se ele já tiver condições de saúde preexistentes.</p>
        </div>
      </footer>

      <PetUpsellModal 
        isOpen={isUpsellModalOpen}
        onClose={() => setIsUpsellModalOpen(false)}
        onConfirm={() => {
            console.log("Upsell accepted! Redirect to 14.90 checkout.");
            setIsUpsellModalOpen(false);
            // Link de checkout R$14,90
        }}
        onReject={() => {
            console.log("Upsell rejected. Redirect to 10.00 checkout.");
            setIsUpsellModalOpen(false);
            // Link de checkout R$10,00
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
    bgClass = 'bg-orange-100 text-orange-800 shadow-sm';
    textClass = 'font-bold text-orange-900 bg-orange-50 px-2 py-0.5 rounded w-full';
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
        <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-orange-500 hover:no-underline py-4 leading-snug">
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
                    <p className="font-bold">Observação:</p>
                    <p className="italic">"{observation}"</p>
                </div>
            )}
        </div>
    </div>
);

const BonusCardPlaceholder = ({ icon, title, subtitle, desc, price }: any) => (
    <div className="bg-green-800/80 backdrop-blur-sm border-2 border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.2)] rounded-xl p-6 text-center hover:bg-green-800 transition-colors transform hover:-translate-y-1 flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-inner">
            {icon}
        </div>
        <div className="flex-grow w-full">
            <h3 className="font-bold text-lg leading-tight text-white">{title}</h3>
            <h4 className="font-bold text-lg leading-tight text-green-300 mb-3">{subtitle}</h4>
            <p className="text-sm text-green-100 mb-4 h-16 leading-snug">{desc}</p>
        </div>
        <div className="border-t border-green-600/50 pt-4 mt-auto w-full">
            <span className="text-green-300 line-through text-sm block">R$ {price}</span>
            <span className="text-white font-bold text-lg bg-orange-500 px-3 py-1 rounded-lg inline-block mt-1 shadow-sm">HOJE É GRÁTIS!</span>
        </div>
    </div>
);

const Gift = ({ size, strokeWidth }: any) => <Heart size={size} strokeWidth={strokeWidth} />; // Fallback icon usage

const PagamentoSeguro = () => (
    <div className="flex items-center gap-2 opacity-80 scale-90">
        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
        <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6" />
        <div className="flex flex-col text-[10px] leading-tight text-slate-500 text-left ml-1">
            <span className="font-bold flex items-center gap-1"><ShieldCheck size={8} /> Pagamento</span>
            <span>100% Seguro</span>
        </div>
    </div>
);

export default PetRecipesLanding;