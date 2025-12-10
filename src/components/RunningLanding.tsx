import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Check, Star, Activity, ShieldCheck, 
  Heart, Zap, ChevronRight, Users, PlayCircle,
  Timer, Trophy, Footprints, AlertCircle, TrendingUp, Dumbbell,
  Medal, Flame
} from "lucide-react";
import RunningUpsellModal from './RunningUpsellModal';

const RunningLanding = () => {
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
      
      {/* Top Notification Bar - ORANGE as requested */}
      <div className="bg-orange-500 text-white text-center py-3 px-4 font-bold text-sm md:text-base animate-pulse sticky top-0 z-50 shadow-md flex items-center justify-center gap-2">
        🏃‍♂️👟 OFERTA VÁLIDA APENAS HOJE: {todayDate.toUpperCase()} 🏁🔥
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white py-8 md:py-24 px-4 overflow-hidden">
        {/* Background Decorations - OPTIMIZED PARTICLES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           {/* Original Big Icons */}
           <Activity className="absolute top-10 left-[10%] animate-pulse text-white opacity-30" size={40} />
           <Timer className="absolute top-40 right-[15%] animate-pulse text-yellow-300 opacity-30" size={30} />
           <Zap className="absolute top-20 left-[20%] text-orange-300 animate-pulse opacity-30" size={25} /> 
           <Footprints className="absolute bottom-40 left-[5%] text-white rotate-12 opacity-20" size={60} />
           <Trophy className="absolute top-32 right-[5%] text-yellow-300 -rotate-12 opacity-30" size={40} />
           
           {/* Generated Particle Field - Reduced Count */}
           {[...Array(25)].map((_, i) => (
              <Activity 
                  key={`p-${i}`}
                  className="absolute text-white/10 animate-pulse" 
                  size={Math.random() * 20 + 10}
                  style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                      opacity: Math.random() * 0.2 + 0.1,
                  }}
              />
           ))}
           {[...Array(15)].map((_, i) => (
              <Zap 
                  key={`z-${i}`}
                  className="absolute text-yellow-300/20 animate-bounce" 
                  size={Math.random() * 15 + 10}
                  style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 5 + 3}s`,
                      opacity: Math.random() * 0.2 + 0.1,
                  }}
              />
           ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-center md:text-left">
              <Badge className="bg-orange-500 text-white hover:bg-orange-600 mb-4 px-6 py-2 text-base md:text-lg font-bold shadow-lg transform -rotate-2 border-2 border-white">
                🚀 Método SDC: Sem Dores Corredor
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-6 leading-tight drop-shadow-lg">
                Fortaleça, Previna e <br/>
                <span className="text-yellow-300">Trate Lesões da Corrida</span> <br className="md:hidden" />
                <span className="inline-block bg-white text-blue-700 px-3 py-1 rounded-lg transform -rotate-1 text-lg md:text-3xl ml-0 md:ml-2 shadow-xl mt-2 md:mt-0 font-black italic">
                  DE FORMA SIMPLES
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-4 md:mb-8 text-blue-100 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed">
                Suas corridas ficam mais difíceis a cada dia? As dores só aumentam? <br className="hidden md:block"/>
                Descubra o ajuste biomecânico que já salvou o joelho e a performance de mais de 9.000 corredores.
              </p>
            </div>

            {/* Right Column: Video + CTA */}
            <div className="flex flex-col items-center">
              {/* Video Placeholder */}
              <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto aspect-[9/16] bg-slate-900/50 rounded-2xl border-4 border-white/50 shadow-2xl flex items-center justify-center mb-4 cursor-pointer group hover:border-yellow-400 transition-colors">
                  <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                  <PlayCircle size={64} className="text-white/80 group-hover:text-white transition-colors" />
                  <p className="absolute bottom-4 text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded">Ver transformação de alunos</p>
                  
                  {/* Mock Player UI */}
                  <div className="absolute bottom-12 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-orange-500"></div>
                  </div>
              </div>

              <div className="flex flex-col w-full md:w-auto px-4">
                <Button 
                  onClick={scrollToPricing}
                  className="bg-orange-500 hover:bg-orange-400 text-white border-b-4 border-orange-700 font-black text-lg md:text-xl py-8 w-full md:w-auto md:px-12 rounded-full shadow-2xl transform transition flex items-center justify-center gap-2 animate-scale-pulse hover:scale-110 active:scale-95 italic uppercase whitespace-normal h-auto leading-tight"
                >
                  QUERO CORRER SEM DOR <ChevronRight size={24} className="shrink-0" />
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs md:text-base text-blue-100 opacity-90 font-medium">
                <ShieldCheck size={16} /> Método Comprovado • <Zap size={16} /> Acesso Imediato
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Alert/Attention Section (Substituted text) */}
      <section className="py-12 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded font-bold text-sm uppercase mb-6 shadow-sm">
                ⚠️ A Verdade Que Ninguém Te Conta
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
                Entenda de uma vez por todas... <br/>
                <span className="text-red-600">A culpa não é sua!</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 font-medium">
                Você só está passando por esse ciclo de dor e lesão porque 
                <span className="bg-yellow-200 px-1 mx-1 rounded">não possui o ajuste biomecânico correto</span> 
                para a sua estrutura corporal.
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                É exatamente por isso que você precisa do <strong>MÉTODO SDC</strong>. Não é sobre correr menos, é sobre correr com a técnica que o seu corpo precisa para não quebrar.
            </p>
        </div>
      </section>

      {/* NEW: Who is this for Section (Detailed List) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-10 uppercase tracking-tight">
                O Método SDC foi desenhado exclusivamente para:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
                <TargetAudienceItem 
                    icon={<AlertCircle className="text-red-500" />}
                    text="Quem está tratando lesões e busca alívio imediato das dores."
                />
                <TargetAudienceItem 
                    icon={<ShieldCheck className="text-green-500" />}
                    text="Corredores que querem perder o medo de se machucar novamente."
                />
                <TargetAudienceItem 
                    icon={<Activity className="text-orange-500" />}
                    text="Quem já corre, mas sente incômodos frequentes e quer uma solução definitiva."
                />
                <TargetAudienceItem 
                    icon={<TrendingUp className="text-blue-500" />}
                    text="Quem busca evoluir na distância e velocidade sem 'quebrar' o corpo."
                />
                <TargetAudienceItem 
                    icon={<Users className="text-purple-500" />}
                    text="Treinadores e Profissionais que desejam se especializar em prevenção."
                />
                <TargetAudienceItem 
                    icon={<Medal className="text-yellow-500" />}
                    text="Corredores de todos os níveis (iniciantes a veteranos) que querem performance."
                />
                <TargetAudienceItem 
                    icon={<Flame className="text-red-400" />}
                    text="Quem já pensou em 'pendurar os tênis' por frustração ou dor."
                />
                <TargetAudienceItem 
                    icon={<Dumbbell className="text-slate-500" />}
                    text="Quem está cansado de treinos genéricos que não funcionam."
                />
            </div>

            <div className="mt-10 bg-blue-50 border border-blue-200 p-6 rounded-xl text-center">
                <p className="text-lg md:text-xl font-bold text-blue-800">
                    Se você se identificou com pelo menos <span className="text-red-600 underline decoration-4 decoration-yellow-400">2 pontos acima</span>, o Método SDC é obrigatório para você.
                </p>
            </div>
        </div>
      </section>

      {/* Why Choose Section (Dark Blue) */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <Badge className="bg-blue-600 text-white mb-4">MECÂNICA DA CORRIDA</Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                   Por que você continua se machucando?
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Não é "azar" e nem "idade". O problema é que você provavelmente está correndo sem o ajuste biomecânico correto para o seu corpo.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-400/50 transition-colors text-center group">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                        <Dumbbell size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 uppercase">Fortalecimento Específico</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Esqueça fichas genéricas de academia. Aprenda os exercícios exatos que blindam a musculatura usada na corrida (quadril, glúteos e panturrilhas).
                    </p>
                </div>
                {/* Card 2 */}
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-400/50 transition-colors text-center group">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400 group-hover:scale-110 transition-transform">
                        <Activity size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 uppercase">Biomecânica Correta</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Aulas exclusivas sobre técnica. Como pisar, postura do tronco, cadência. Pequenos ajustes que tiram a sobrecarga das articulações instantaneamente.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-400/50 transition-colors text-center group">
                    <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                        <Heart size={32} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 uppercase">Tratamento de Dores</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Protocolos práticos para quem JÁ está com dor. Saiba como acelerar a recuperação e voltar aos treinos com segurança.
                    </p>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <Button 
                onClick={scrollToPricing} 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg animate-scale-pulse hover:scale-110 whitespace-normal h-auto uppercase leading-tight"
                >
                    QUERO DESCOBRIR A VERSÃO SEM DOR 🏃‍♂️
                </Button>
            </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-2">O que você vai receber?</h2>
          <p className="text-center text-slate-600 mb-8">Treinador Marcos Silva preparou o cronograma completo:</p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Activity className="text-blue-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Avaliação de Pisada</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Entenda seu tipo de pisada e como escolher o tênis que não vai destruir seu joelho.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Dumbbell className="text-orange-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Treinos de Força em Casa</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Exercícios que usam o peso do corpo. Não precisa pagar academia para se fortalecer.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <Timer className="text-green-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">Planilhas Progressivas</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">Do sedentarismo aos 5k, 10k, 21k e Maratona. Saiba exatamente quanto correr por dia.</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500 flex items-start gap-4 hover:shadow-md transition-shadow">
                <AlertCircle className="text-red-500 min-w-8 min-h-8 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg text-slate-800">SOS Lesão</h3>
                    <p className="text-slate-600 text-sm leading-snug mt-1">O que fazer nas primeiras 24h de uma dor aguda? Gelo? Calor? Descanso? Nós te guiamos.</p>
                </div>
            </div>
          </div>

          {/* Big Checklist */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Check className="text-green-600" /> Resumo do Método SDC:
            </h3>
            <div className="grid md:grid-cols-2 gap-y-3 gap-x-8">
                <ChecklistItem text="Videoaulas de técnica de corrida" />
                <ChecklistItem text="Biblioteca de exercícios de fortalecimento" />
                <ChecklistItem text="Cronograma para iniciantes e avançados" />
                <ChecklistItem text="Técnicas de respiração para não cansar rápido" />
                <ChecklistItem text="Acesso pelo celular, tablet ou computador" />
                <ChecklistItem text="Suporte para dúvidas na plataforma" />
                <ChecklistItem text="Conteúdo prático: assista e aplique no treino" />
                <ChecklistItem text="Acesso vitalício ao conteúdo" />
                <ChecklistItem text="Garantia incondicional de 7 dias" />
                <li className="flex items-start gap-2 text-slate-700 bg-blue-50 p-2 rounded-lg -ml-2">
                    <div className="mt-1 min-w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm">
                        <Trophy size={12} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-blue-800">+3 BÔNUS DE ALTA PERFORMANCE</span>
                </li>
            </div>
          </div>

        </div>
      </section>

      {/* BONUS SECTION - MODIFIED */}
      <section className="py-16 px-4 bg-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
                <span className="bg-orange-500 text-white font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg">Oferta Exclusiva</span>
                <h2 className="text-2xl md:text-5xl font-extrabold mt-6 mb-4 leading-tight">LEVE 3 BÔNUS PARA<br/>ACELERAR SEUS RESULTADOS</h2>
                <p className="text-blue-200 text-base md:text-lg">Ferramentas que todo corredor profissional usa, agora nas suas mãos.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Bonus 1 Modified */}
                <BonusCardPlaceholder 
                    icon={<AlertCircle size={48} className="text-red-400" />}
                    title="SOS LESÕES"
                    subtitle="+ GUIA DE TÊNIS"
                    desc="Protocolo completo para tratar dores (canelite, joelho, fascite) com guia extra para escolher o tênis ideal."
                    price="67,00"
                />
                {/* Bonus 2 Modified */}
                <BonusCardPlaceholder 
                    icon={<Dumbbell size={48} className="text-orange-400" />}
                    title="FORTALECIMENTO"
                    subtitle="ESPECÍFICO"
                    desc="Cronograma prático para fazer em casa. Treinos para 5k, 10k, 21k, 42k e Ultra. Blinde suas articulações."
                    price="59,00"
                />
                {/* Bonus 3 Same */}
                <BonusCardPlaceholder 
                    icon={<Timer size={48} className="text-yellow-400" />}
                    title="PACK DE"
                    subtitle="PLANILHAS"
                    desc="PDFs prontos para imprimir: treinos de todas as distâncias organizados por semanas."
                    price="57,00"
                />
            </div>
            
            <div className="mt-12 text-center flex flex-col items-center w-full">
                <p className="text-lg md:text-2xl font-bold text-yellow-300 animate-pulse mb-6 px-4">
                    TOTAL EM BÔNUS: R$ 183,00 — HOJE É GRÁTIS! 🎁
                </p>
                <div className="w-full px-4 md:w-auto">
                    <Button 
                    onClick={scrollToPricing} 
                    className="bg-orange-500 hover:bg-orange-400 text-white font-black text-lg md:text-xl py-6 md:py-8 w-full md:px-12 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] transform transition animate-scale-pulse hover:scale-110 whitespace-normal h-auto leading-tight uppercase italic"
                    >
                        QUERO GARANTIR MEUS BÔNUS 🏃‍♂️
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
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 text-red-100">⏰ PREÇO SOBE EM:</div>
                <div className="text-3xl md:text-5xl font-mono font-black tracking-widest text-white drop-shadow-md">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                Invista na sua Saúde <br/><span className="text-blue-600">Menos que uma inscrição de prova</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            
            {/* Basic Plan (R$ 10) */}
            <Card className="order-1 border border-slate-200 shadow-sm bg-white hover:border-slate-300 transition-all flex flex-col relative overflow-hidden group">
              <CardHeader className="text-center pb-4 border-b border-slate-100 bg-slate-50">
                <CardTitle className="text-lg md:text-xl font-bold text-slate-600">Guia Anti-Lesão</CardTitle>
                <CardDescription className="text-xs md:text-sm">Conceitos fundamentais</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-2">R$ 10<span className="text-lg">,00</span></div>
                
                <ul className="text-left space-y-3 mb-6 mt-4">
                  <Feature text="Ebook Teórico sobre Lesões" />
                  <Feature text="Lista de Fortalecimentos Básicos" />
                  <Feature text="Acesso imediato ao PDF" />
                </ul>
                
                <Button 
                  onClick={() => setIsUpsellModalOpen(true)}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold text-base md:text-lg py-6 px-4 shadow-sm animate-scale-pulse hover:scale-110 whitespace-normal h-auto leading-tight" size="lg">
                  QUERO O BÁSICO
                </Button>
                <div className="mt-4 flex justify-center opacity-70"><PagamentoSeguro /></div>
              </CardContent>
            </Card>

            {/* Premium Plan (R$ 19,90) */}
            <Card className="order-2 border-4 border-blue-500 shadow-2xl relative bg-white flex flex-col z-10 overflow-visible">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-t-lg"></div>
              
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-full text-center z-20">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-8 py-2 text-xs md:text-sm font-bold uppercase tracking-wide shadow-lg border-2 border-white whitespace-nowrap">
                  🏆 O Mais Escolhido
                </Badge>
              </div>

              <CardHeader className="text-center pb-4 pt-12 border-b border-blue-50 bg-blue-50/50 rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-black text-blue-800 uppercase tracking-tight">Método SDC Completo</CardTitle>
                <CardDescription className="text-blue-600 font-medium text-sm">Aulas + Exercícios + Planilhas</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-6 flex flex-col">
                <div className="text-xs md:text-sm text-slate-500 font-medium mb-1">De <span className="line-through text-red-400">R$ 297,00</span> por apenas:</div>
                <div className="text-5xl md:text-6xl font-black text-blue-600 mb-2 tracking-tight drop-shadow-sm">R$ 19<span className="text-2xl font-bold text-blue-700">,90</span></div>
                <div className="text-xs text-blue-700 font-medium bg-blue-100 inline-block px-3 py-1 rounded-full mb-6 mx-auto">Pagamento único • Acesso Vitalício</div>
                
                <ul className="text-left space-y-3 mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <Feature text="Método Completo (Aulas Práticas)" highlighted />
                  <Feature text="Protocolos de Tratamento de Dor" highlighted />
                  <Feature text="Acesso Vitalício à Área de Membros" highlighted />
                  <Feature text="Garantia Blindada de 7 dias" highlighted />
                  
                  <div className="my-3 border-t border-slate-200"></div>
                  
                  <Feature text="BÔNUS 1: SOS Lesões + Guia Tênis" yellow />
                  <Feature text="BÔNUS 2: Fortalecimento Específico" yellow />
                  <Feature text="BÔNUS 3: Pack de Planilhas" yellow />
                </ul>
                
                <Button className="w-full bg-green-600 hover:bg-green-500 text-white border-b-4 border-green-800 font-black text-lg md:text-xl py-8 shadow-xl rounded-lg animate-scale-pulse hover:scale-110 transform transition active:border-b-0 active:translate-y-1 uppercase italic whitespace-normal h-auto leading-tight">
                  QUERO CORRER MELHOR AGORA
                </Button>
                <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck size={14} className="text-green-600" /> Compra Segura • Garantia de 7 Dias
                </p>
                <div className="mt-4 flex justify-center"><PagamentoSeguro /></div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Prova Social - Adapted from user Images */}
      <section className="py-16 px-4 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-lg md:text-xl shadow-lg mb-10 transform -rotate-1">
                Eles saíram da lesão para o pódio! 🏆
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
                 {/* Image 1: Priscilla (Fratura -> 22k Trail) */}
                 <EnhancedTestimonial 
                    name="Priscila M."
                    role="Trail Runner"
                    text="O excesso de treinos me levou a uma fratura por estresse na fíbula. Tive que parar totalmente. Mas ao retornar com o programa de fortalecimento certo do Método SDC, não só voltei como fiz meus primeiros 22k Trail em 2h26m!"
                    result="22KM TRAIL CONCLUÍDO"
                    initials="PM"
                    color="bg-orange-100 text-orange-600"
                 />
                 
                 {/* Image 2: Stefano (10k -19min) */}
                 <EnhancedTestimonial 
                    name="Estevão R."
                    role="Corredor Amador"
                    text="As dores no quadril e joelho eram constantes. Através do fortalecimento voltado para a corrida e treino certo, baixei 19 minutos nos meus 10kms! Saí de 1h05 para 45min."
                    result="-19 MINUTOS NOS 10K"
                    initials="ER"
                    color="bg-green-100 text-green-600"
                 />

                 {/* Image 3: Cris (Sedentary -> Ultra) */}
                 <EnhancedTestimonial 
                    name="Cristiano L."
                    role="Ultramaratonista"
                    text="O sobrepeso e as dores limitavam minha vida. Ao ajustar os treinos, as dores sumiram. Saí do sedentarismo total para me tornar Ultramaratonista de 55K!"
                    result="DE SEDENTÁRIO A ULTRA 55K"
                    initials="CL"
                    color="bg-blue-100 text-blue-600"
                 />

                 {/* Image 4: Juscelia (5k sub 20) */}
                 <EnhancedTestimonial 
                    name="Júlia C."
                    role="Atleta Master"
                    text="Os médicos mandaram eu parar de correr e comprar uma bicicleta por causa da fascite plantar. Após o programa, consegui correr os 5kms abaixo de 20 minutos (19:23) aos 45 anos!"
                    result="5KM EM 19:23"
                    initials="JC"
                    color="bg-purple-100 text-purple-600"
                 />
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800 flex items-center justify-center gap-2">
            <span className="text-blue-600">?</span> Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          <FAQItem 
            question="Como acesso o programa?" 
            answer="Imediatamente após a confirmação do pagamento, você recebe um e-mail com login e senha para nossa área de membros exclusiva, onde todas as aulas e materiais estão organizados." 
          />
          <FAQItem 
            question="Serve para quem nunca correu?" 
            answer="Sim! Temos um módulo 'Do Zero aos 5k' focado justamente em criar a base muscular e cardiorrespiratória para você começar do jeito certo, sem se machucar." 
          />
          <FAQItem 
            question="Preciso de equipamentos de academia?" 
            answer="Não. 90% dos exercícios do método utilizam o peso do próprio corpo e podem ser feitos na sala da sua casa. Focamos na funcionalidade, não em máquinas." 
          />
          <FAQItem 
            question="Tenho uma lesão grave, posso fazer?" 
            answer="O método é preventivo e educativo. Se você está em fase aguda de dor (impossibilitado de andar), recomendamos consultar um médico presencialmente. O método é ideal para a fase de reabilitação e retorno aos treinos." 
          />
          <FAQItem 
            question="E se eu não gostar?" 
            answer="Você tem 7 dias de garantia incondicional. Se achar que o conteúdo não é para você, basta enviar um e-mail e devolvemos 100% do seu dinheiro. O risco é todo nosso." 
          />
        </Accordion>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
           {/* Enhanced Card Background */}
           <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200 shadow-xl flex flex-col md:flex-row items-center gap-10">
              <div className="relative shrink-0">
                 <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg relative z-10">
                    <div className="text-center text-white">
                        <span className="block text-5xl md:text-6xl font-black">7</span>
                        <span className="block text-xs md:text-sm font-bold tracking-widest uppercase">Dias</span>
                    </div>
                 </div>
                 <div className="absolute top-0 left-0 w-full h-full bg-blue-200 rounded-full transform scale-110 -z-0 blur-sm"></div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                 <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Garantia "Corredor Satisfeito"</h2>
                 <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-6">Resultados ou seu dinheiro de volta!</h3>
                 
                 <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-blue-100">
                       <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                       <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Acesse tudo:</span> Veja as aulas, baixe as planilhas e teste.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-blue-100">
                       <div className="mt-1 w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4}/></div>
                       <p className="text-sm text-slate-600 text-left"><span className="font-bold text-slate-800">Sem burocracia:</span> Um único e-mail e fazemos o estorno.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-8 text-center">
             <Button 
                onClick={scrollToPricing}
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-6 rounded-full text-lg shadow-md uppercase whitespace-normal h-auto leading-tight"
             >
                Testar Método Sem Risco
             </Button>
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
          {/* Particles Effect - REDUCED */}
          <div className="absolute inset-0 pointer-events-none">
             {[...Array(20)].map((_, i) => (
                <Activity 
                    key={i}
                    className="absolute text-white/10 animate-pulse" 
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        width: `${Math.random() * 30 + 20}px`,
                        height: `${Math.random() * 30 + 20}px`,
                        opacity: Math.random() * 0.5,
                    }}
                />
             ))}
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-bounce fill-current" />
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-tight drop-shadow-md">
                Chegou a hora de bater <br/>o seu Recorde Pessoal.
              </h2>
              <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto drop-shadow-sm">
                Existe uma versão sua que corre mais rápido, vai mais longe e não sente dor ao acordar no dia seguinte. <br/>
                <span className="font-bold text-white bg-blue-700/50 px-2 rounded">Essa versão começa hoje.</span>
              </p>

              <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-blue-500 inline-block mb-8 shadow-xl">
                  <div className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-2">Oferta expira em:</div>
                  <div className="text-4xl md:text-6xl font-mono font-black text-white">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
              </div>

              <div>
                  <Button 
                    onClick={scrollToPricing}
                    className="bg-green-600 hover:bg-green-500 text-white font-black text-lg md:text-2xl py-8 px-8 md:px-16 rounded-full shadow-[0_0_40px_rgba(22,163,74,0.6)] transform transition animate-scale-pulse hover:scale-110 active:scale-95 border-4 border-green-500/50 uppercase italic whitespace-normal h-auto leading-tight"
                  >
                    QUERO SUPERAR MEUS LIMITES 🚀
                  </Button>
                  
                  <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm font-medium text-blue-300 opacity-90">
                      <span className="flex items-center gap-1"><ShieldCheck size={12}/> Site Seguro</span>
                      <span className="hidden md:block">•</span>
                      <span className="flex items-center gap-1"><Zap size={12}/> Acesso Imediato</span>
                      <span className="hidden md:block">•</span>
                      <span className="flex items-center gap-1"><Heart size={12}/> +9.000 Alunos</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm border-t-4 border-blue-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-6 text-slate-400">
            <ShieldCheck /> Site Seguro
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Método SDC - Sem Dores Corredor. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-700 max-w-2xl mx-auto">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. As informações contidas neste site têm caráter informativo e educacional. A prática de atividade física deve ser sempre acompanhada por profissionais de saúde.</p>
        </div>
      </footer>

      <RunningUpsellModal 
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
        <div className="mt-1 min-w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-blue-600">
            <Check size={12} strokeWidth={3} />
        </div>
        <span>{text}</span>
    </li>
);

const TargetAudienceItem = ({ icon, text }: { icon: any, text: string }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
        <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
            {icon}
        </div>
        <p className="text-slate-700 font-medium leading-snug self-center">{text}</p>
    </div>
);

const Feature = ({ text, highlighted = false, yellow = false }: { text: string, highlighted?: boolean, yellow?: boolean }) => {
  let bgClass = 'bg-slate-200 text-slate-500';
  let textClass = 'text-slate-600';

  if (highlighted) {
    bgClass = 'bg-blue-100 text-blue-600';
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
        <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600 hover:no-underline py-4 leading-snug">
            {question}
        </AccordionTrigger>
        <AccordionContent className="text-slate-600 pb-4">
            {answer}
        </AccordionContent>
    </AccordionItem>
);

const EnhancedTestimonial = ({ name, role, text, initials, color, result }: any) => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-shadow">
        <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center font-bold text-lg shrink-0`}>
            {initials}
        </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-slate-900">{name}</h4>
                <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">{role}</span>
            </div>
            <div className="flex text-yellow-400 gap-0.5 mb-2">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
            </div>
            <p className="text-slate-600 text-sm italic leading-relaxed mb-3">"{text}"</p>
            {result && (
                <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded border border-green-200">
                    ✅ {result}
                </div>
            )}
        </div>
    </div>
);

const BonusCardPlaceholder = ({ icon, title, subtitle, desc, price }: any) => (
    <div className="bg-blue-900/50 backdrop-blur-sm border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] rounded-xl p-6 text-center hover:bg-blue-900 transition-colors transform hover:-translate-y-1 flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-inner">
            {icon}
        </div>
        <div className="flex-grow w-full">
            <h3 className="font-bold text-lg leading-tight text-white">{title}</h3>
            <h4 className="font-bold text-lg leading-tight text-blue-300 mb-3">{subtitle}</h4>
            <p className="text-sm text-blue-100 mb-4 h-16 leading-snug">{desc}</p>
        </div>
        <div className="border-t border-blue-600/50 pt-4 mt-auto w-full">
            <span className="text-blue-300 line-through text-sm block">R$ {price}</span>
            <span className="text-white font-bold text-lg bg-orange-500 px-3 py-1 rounded-lg inline-block mt-1 shadow-sm">HOJE É GRÁTIS!</span>
        </div>
    </div>
);

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

export default RunningLanding;