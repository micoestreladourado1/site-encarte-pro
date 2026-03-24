import React from 'react';
import { CheckCircle2, Clock, DollarSign, MonitorX, Palette, Search, Share2, Zap, ChevronRight, Smartphone, Camera } from 'lucide-react';

const AppScreenMockup2 = () => (
  <div className="relative mx-auto w-[320px] sm:w-[360px] h-[700px] bg-[#f4f5f7] rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden flex flex-col transform -rotate-2 hover:rotate-0 transition-transform duration-500">
    {/* Status Bar */}
    <div className="h-6 w-full bg-white flex justify-between items-center px-4 text-[10px] text-slate-500 font-medium z-20">
      <span>15:49</span>
      <div className="flex items-center gap-1">
        <Clock className="w-3 h-3" />
        <span>97%</span>
      </div>
    </div>

    {/* Header */}
    <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#dc2626] rounded-lg flex items-center justify-center text-white font-bold text-lg italic">
          E
        </div>
        <span className="font-bold text-lg text-slate-800 tracking-tight">Encartes<span className="text-[#dc2626]">Pro</span></span>
      </div>
      <div className="w-8 h-8 rounded-lg border border-emerald-200 bg-emerald-50 flex items-center justify-center text-emerald-500">
        <Share2 className="w-4 h-4" />
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800">Adicionar Produto</h3>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">BUSCA INTELIGENTE</span>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-[11px] text-slate-500 mb-1">Nome do Produto *</label>
            <div className="flex gap-2">
              <input type="text" placeholder="Ex: Arroz Sepé 5kg" className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-400 bg-white" disabled />
              <button className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center text-white shrink-0">
                <Search className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center text-white shrink-0">
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-[11px] text-slate-500 mb-1">Preço Atual (R$) *</label>
              <input type="text" placeholder="0,00" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-400 bg-white" disabled />
            </div>
            <div className="flex-1">
              <label className="block text-[11px] text-slate-500 mb-1">Preço Oferta (R$)</label>
              <input type="text" placeholder="0,00" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-400 bg-white" disabled />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-slate-500 mb-1">URL da Imagem</label>
            <input type="text" placeholder="Pesquise ou cole a URL" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-400 bg-white" disabled />
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-slate-700">Produto p/ +18 anos</span>
            <div className="w-10 h-5 bg-slate-200 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
            </div>
          </div>

          <button className="w-full bg-[#dc2626] text-white font-bold py-3 rounded-xl mt-2 shadow-md shadow-red-500/20">
            SALVAR NO ENCARTE
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-3">Tema do Encarte</h3>
        <div className="flex gap-3">
          <div className="flex-1 h-10 rounded-lg border-2 border-slate-100 flex items-center justify-center">
            <div className="w-3/4 h-3 bg-[#dc2626] rounded-full"></div>
          </div>
          <div className="flex-1 h-10 rounded-lg border-2 border-slate-100 flex items-center justify-center">
            <div className="w-3/4 h-3 bg-[#16a34a] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AppMockup = () => (
  <div className="relative mx-auto w-[320px] sm:w-[360px] h-[700px] bg-[#f4f5f7] rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-500">
    {/* Status Bar */}
    <div className="h-6 w-full bg-white flex justify-between items-center px-4 text-[10px] text-slate-500 font-medium z-20">
      <span>15:49</span>
      <div className="flex items-center gap-1">
        <Clock className="w-3 h-3" />
        <span>97%</span>
      </div>
    </div>

    {/* Header */}
    <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#dc2626] rounded-lg flex items-center justify-center text-white font-bold text-lg italic">
          E
        </div>
        <span className="font-bold text-lg text-slate-800 tracking-tight">Encartes<span className="text-[#dc2626]">Pro</span></span>
      </div>
      <div className="w-8 h-8 rounded-lg border border-emerald-200 bg-emerald-50 flex items-center justify-center text-emerald-500">
        <Share2 className="w-4 h-4" />
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 overflow-y-auto bg-white">
      <img src="/encarte.jpeg" alt="Encarte Completo" className="w-full h-auto" />
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop" 
            alt="Supermarket aisle" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Crie Encartes Profissionais para seu Comércio em apenas <span className="text-emerald-400">2 Minutos</span> - Diretamente do seu Celular!
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Economize com designers e tenha seus encartes prontos na hora. Fácil, rápido e com visual profissional que aumenta suas vendas.
            </p>
            <a href="https://pay.kiwify.com.br/yqA1f4t" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 inline-flex items-center gap-2 w-fit">
              QUERO MEUS ENCARTES AGORA
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <AppScreenMockup2 />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12">O Problema Que Você Enfrenta</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Espera Infinita por Designers</h3>
                      <p className="text-slate-400">Cansado de atrasos e prazos perdidos, impactando suas promoções e vendas.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Custos Elevados</h3>
                      <p className="text-slate-400">Pagar caro por cada arte avulsa consome seu orçamento, que poderia ser investido em outras áreas.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
                      <MonitorX className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Programas Complexos</h3>
                      <p className="text-slate-400">Dificuldade em usar softwares de edição no PC, que exigem conhecimento técnico e tempo valioso.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                A Solução Chegou: <span className="text-emerald-400">EncartesPro</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                O EncartesPro é a ferramenta definitiva para pequenos e médios comércios que desejam agilidade e profissionalismo na criação de suas campanhas. Simplifique sua rotina e foque no que realmente importa: <strong className="text-white">vender mais!</strong>
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span>Crie encartes de alta qualidade em minutos.</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span>Total controle sobre suas promoções.</span>
                </li>
                <li className="flex items-center gap-3 text-lg text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span>Mobilidade: faça tudo do seu celular.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <AppMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Funcionalidades Que Impulsionam Suas Vendas</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Palette className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Temas Profissionais</h3>
                <p className="text-slate-400 leading-relaxed">Escolha entre diversos modelos prontos, criados por designers, garantindo um visual moderno e atrativo para seus produtos.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Search className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Busca de Imagens Integrada</h3>
                <p className="text-slate-400 leading-relaxed">Encontre fotos de produtos de alta qualidade sem sair do aplicativo, economizando tempo e garantindo o apelo visual.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Share2 className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Compartilhamento Instantâneo</h3>
                <p className="text-slate-400 leading-relaxed">Envie seus encartes diretamente para o WhatsApp de seus clientes ou compartilhe nas Redes Sociais com apenas um clique.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Edição Super Rápida</h3>
                <p className="text-slate-400 leading-relaxed">Adicione produtos e preços em segundos. Mantenha suas ofertas sempre atualizadas sem complicação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold px-5 py-2 rounded-full uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Veja na Prática
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 leading-tight">
            Assista e Veja Como é{' '}
            <span className="text-emerald-400">Simples e Rápido!</span>
          </h2>
          <p className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Em menos de 1 minuto você entende tudo. Veja o passo a passo completo de como criar seu encarte profissional diretamente do celular.
          </p>

          {/* Video embed — YouTube Shorts */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden border-4 border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.3)]">
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/crvz0RdUSfw?rel=0&modestbranding=1&playsinline=1"
                  title="Passo a Passo EncartesPro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Call-to-action cards below video */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-colors duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">2 Minutos</h3>
              <p className="text-slate-400 text-sm">Do zero ao encarte pronto, em tempo recorde.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-colors duration-300">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">100% no Celular</h3>
              <p className="text-slate-400 text-sm">Sem computador, sem complicação, sem sair do lugar.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-colors duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Qualquer Comércio</h3>
              <p className="text-slate-400 text-sm">Mercado, farmácia, açougue, pet shop e muito mais.</p>
            </div>
          </div>

          {/* CTA button */}
          <div className="text-center">
            <a
              href="https://pay.kiwify.com.br/yqA1f4t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-emerald-500/30"
            >
              QUERO COMEÇAR AGORA
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="text-slate-500 text-sm mt-4">Pagamento único • Sem mensalidade • Acesso vitalício</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Sua Oportunidade Única: <span className="text-emerald-400">Acesso Vitalício!</span></h2>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 items-center bg-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl">
              <div className="md:col-span-3">
                <div className="text-6xl lg:text-8xl font-bold mb-6">
                  <span className="text-3xl lg:text-5xl align-top text-slate-400">R$</span> 59,99
                </div>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Por um pagamento único, você garante acesso ilimitado a todas as funcionalidades do EncartesPro. Sem mensalidades, sem surpresas. É o investimento mais inteligente para o seu negócio!
                </p>
                <a href="https://pay.kiwify.com.br/yqA1f4t" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  COMPRAR AGORA - PIX OU CARTÃO
                </a>
              </div>
              <div className="md:col-span-2 bg-emerald-500 rounded-2xl p-8 text-slate-950 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Preço Imbatível</h3>
                <p className="text-emerald-950 font-medium leading-relaxed">
                  Chega de gastar fortunas com design. Com o EncartesPro, o controle é seu, e a economia também.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-900 p-8 rounded-2xl border-t-4 border-emerald-500">
              <h3 className="text-xl font-bold mb-4">Preciso pagar mensalidade?</h3>
              <p className="text-slate-400">Não! O EncartesPro é seu por um <strong className="text-white">pagamento único</strong> de R$ 59,99. Sem custos adicionais ou surpresas.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border-t-4 border-emerald-500">
              <h3 className="text-xl font-bold mb-4">Funciona em qualquer celular?</h3>
              <p className="text-slate-400">Sim, o aplicativo é leve e foi desenvolvido para funcionar perfeitamente em dispositivos <strong className="text-white">Android</strong>, garantindo uma experiência fluida para a maioria dos usuários.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border-t-4 border-emerald-500">
              <h3 className="text-xl font-bold mb-4">Como recebo o app?</h3>
              <p className="text-slate-400">Após a confirmação do pagamento, você receberá o <strong className="text-white">arquivo APK imediatamente</strong> por e-mail, pronto para ser instalado e usado no seu celular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-500 text-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Pronto para Transformar Seu Negócio?</h2>
              <p className="text-xl text-emerald-950 mb-10 leading-relaxed font-medium">
                O sucesso do seu comércio começa com uma comunicação visual eficaz e profissional. Com o EncartesPro, você tem o poder de criar, compartilhar e vender mais, tudo na palma da sua mão.
              </p>
              <a href="https://pay.kiwify.com.br/yqA1f4t" target="_blank" rel="noopener noreferrer" className="bg-slate-950 hover:bg-slate-900 text-white font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-xl w-fit">
                QUERO MEUS ENCARTES AGORA!
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy supermarket owner" 
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-500">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} EncartesPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
