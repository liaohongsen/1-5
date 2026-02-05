
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  CheckCircle, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Sparkles, 
  Target, 
  Globe, 
  Award, 
  Users, 
  GraduationCap, 
  PenTool, 
  Trophy, 
  Stethoscope,
  ArrowLeft,
  Mail,
  Layers,
  FileText,
  TrendingUp,
  Shapes,
  Gift,
  FileBadge,
  Clock,
  Layout,
  MessageSquare,
  ShieldCheck,
  Zap
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'essay' | 'research' | 'interview' | 'concierge';

// --- Reusable UI Elements ---

const Badge: React.FC<{ text: string; variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'gray' }> = ({ text, variant = 'primary' }) => {
  const styles = {
    primary: 'bg-yushi-orange text-white',
    secondary: 'bg-yushi-orange/10 text-yushi-orange',
    outline: 'border border-yushi-orange/30 text-yushi-orange',
    white: 'bg-white/20 text-white backdrop-blur-md border border-white/20',
    gray: 'bg-gray-100 text-gray-400 border border-gray-200'
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${styles[variant]}`}>
      {text}
    </span>
  );
};

const CollapsibleItem: React.FC<{ 
  title: string; 
  subtitle?: string; 
  price?: string; 
  content: string;
  badge?: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ title, subtitle, price, content, badge, isOpen, onToggle }) => {
  return (
    <div className="bg-white border-b border-gray-50 last:border-0 overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left active:bg-gray-50 transition-colors"
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-[14px] font-black text-gray-800 leading-tight">{title}</h4>
            {badge && <Badge text={badge} variant="gray" />}
          </div>
          {subtitle && <div className="text-[10px] text-gray-400 font-medium">{subtitle}</div>}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {price && <span className="text-[13px] font-black text-yushi-orange">{price}</span>}
          <div className={`p-1 rounded-full ${isOpen ? 'bg-yushi-orange text-white' : 'bg-gray-100 text-gray-400'}`}>
            {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-5 pb-5 pt-1 animate-in slide-in-from-top-2 duration-200">
          <div className="bg-orange-50/50 rounded-2xl p-4 border border-orange-100/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-lg bg-white shadow-sm border border-orange-100 flex items-center justify-center">
                <Target size={12} className="text-yushi-orange" />
              </div>
              <span className="text-[10px] font-black text-yushi-orange uppercase tracking-widest">详情</span>
            </div>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductNavCard: React.FC<{
  label: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg?: string;
  onClick: () => void;
}> = ({ label, title, subtitle, icon, iconBg = "bg-orange-50", onClick }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between bg-white p-6 rounded-[2.5rem] shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-50 text-left active:scale-[0.97] transition-all"
  >
    <div className="flex-1 pr-4">
      <div className="text-[10px] font-black text-yushi-orange uppercase tracking-widest mb-1">{label}</div>
      <h3 className="text-[18px] font-black text-gray-800 leading-tight mb-1">{title}</h3>
      <p className="text-[12px] text-gray-400 font-medium leading-tight">{subtitle}</p>
    </div>
    <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center text-yushi-orange shadow-inner`}>
      {icon}
    </div>
  </button>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenSection(null);
  }, [currentPage]);

  const toggle = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const renderHeader = () => (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2" onClick={() => setCurrentPage('home')}>
        <div className="w-8 h-8 bg-yushi-orange rounded-lg flex items-center justify-center text-white font-black text-sm italic">YS</div>
        <div className="flex flex-col">
          <span className="text-[11px] font-black text-gray-900 leading-none">YUSHI</span>
          <span className="text-[9px] font-bold text-gray-400 tracking-tighter">MEDICAL</span>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <button onClick={() => setCurrentPage('home')} className={`text-[15px] font-bold transition-colors ${currentPage === 'home' ? 'text-yushi-orange' : 'text-gray-400'}`}>首页</button>
        <button onClick={() => setCurrentPage('essay')} className={`text-[15px] font-bold transition-colors ${currentPage === 'essay' ? 'text-yushi-orange' : 'text-gray-400'}`}>博士班</button>
        <button onClick={() => setCurrentPage('research')} className={`text-[15px] font-bold transition-colors ${currentPage === 'research' ? 'text-yushi-orange' : 'text-gray-400'}`}>科研班</button>
        <button onClick={() => setCurrentPage('concierge')} className={`text-[15px] font-bold transition-colors ${currentPage === 'concierge' ? 'text-yushi-orange' : 'text-gray-400'}`}>全程</button>
      </nav>
    </header>
  );

  const renderFooter = () => (
    <footer className="py-4 px-6 bg-[#FFF4E8] text-center border-t border-orange-100/30">
      <div className="max-w-[400px] mx-auto">
        <h2 className="text-[20px] font-black text-yushi-orange tracking-tight leading-tight mb-1">YUSHI (博睿医智)</h2>
        <div className="mb-3">
          <p className="text-[11px] text-[#7A4B2A] font-bold">以医学与心理学为核心</p>
          <p className="text-[11px] text-[#7A4B2A] font-bold">提供覆盖学术成长与职业发展的全程支持</p>
        </div>

        <div className="w-full h-px bg-orange-200/50 mb-3"></div>

        <div className="flex items-center justify-between text-left">
          <div className="flex-1 pr-3">
            <h3 className="text-[12px] font-black text-yushi-orange mb-1">联系我们</h3>
            <div className="space-y-0.5">
              <p className="text-[11px] font-bold text-[#5D3A21] tracking-tight">+86 13162611127 (中国)</p>
              <p className="text-[11px] font-bold text-[#5D3A21] tracking-tight">+44 07419735373 (英国)</p>
            </div>
          </div>

          <div className="w-px h-10 bg-orange-200/50"></div>

          <div className="flex-1 pl-4 flex items-center justify-between">
            <h3 className="text-[12px] font-black text-yushi-orange">官方微信</h3>
            <div className="w-[48px] h-[48px] bg-white rounded-lg p-1 shadow-sm border border-orange-100/50 ml-2">
              <img src="./images/wechat.jpg" alt="QR" className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[9px] font-bold text-[#A68F7E] tracking-widest uppercase">© 2026 YUSHI MEDICAL EDUCATION</p>
        </div>
      </div>
    </footer>
  );

  const HomeView = () => (
    <div className="animate-in fade-in duration-500">
      <section className="mb-6">
        <div className="bg-yushi-orange rounded-b-[3rem] pt-12 pb-14 text-center text-white shadow-xl shadow-orange-500/10">
          <h1 className="text-[32px] font-black tracking-tighter leading-tight">医学留学申请</h1>
          <p className="text-[16px] font-bold opacity-90 mt-1">(博士)</p>
        </div>
        <div className="px-10 -mt-8 text-center">
          <div className="bg-white p-4 rounded-[2rem] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] border border-gray-50">
            <p className="text-[12px] font-black text-gray-700 leading-relaxed italic">
              “博士申请是学术交流的过程，<br/>这条道路需要正确的去被规划。”
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-2 space-y-4">
        <ProductNavCard 
          label="DOCTORAL PROGRAM" 
          title="博士申请小班课" 
          subtitle="申博逻辑、套磁、RP全流程规划" 
          icon={<PenTool size={24} />} 
          iconBg="bg-orange-500 text-white"
          onClick={() => setCurrentPage('essay')}
        />
        <ProductNavCard 
          label="RESEARCH PREP" 
          title="科研能力提升课" 
          subtitle="结构化科研训练，夯实学术基础" 
          icon={<Stethoscope size={24} />} 
          onClick={() => setCurrentPage('research')}
        />
        <ProductNavCard 
          label="CONCIERGE" 
          title="全程申请服务" 
          subtitle="一站式博士申请全案深度定制" 
          icon={<Trophy size={24} />} 
          onClick={() => setCurrentPage('concierge')}
        />
      </section>
      {renderFooter()}
    </div>
  );

  const ProductDetail = ({ id, title, label, items, price, format, description, badgeVariant, bonus }: any) => (
    <div className="animate-in slide-in-from-right-10 duration-500">
      <div className="px-6 pt-6 pb-2">
        <button onClick={() => setCurrentPage('home')} className="flex items-center gap-1 text-yushi-orange text-[12px] font-black mb-4">
          <ArrowLeft size={14} /> 返回首页
        </button>
        <Badge text={label} variant={badgeVariant || "secondary"} />
        <h2 className="text-[28px] font-black text-gray-800 mt-2 tracking-tighter">{title}</h2>
        <div className="flex justify-between items-center mt-2 border-b border-gray-100 pb-4">
          <div className="text-xl font-black text-yushi-orange">{price}</div>
          <div className="text-[10px] text-gray-400 font-bold uppercase">{format}</div>
        </div>
      </div>

      <div className="px-6 py-2">
        <p className="text-[13px] text-gray-600 font-medium leading-relaxed mb-4 italic">{description}</p>
        
        {bonus && (
          <div className="mb-6 bg-yushi-light border border-orange-100 rounded-2xl p-4 flex gap-3">
            <Gift className="text-yushi-orange shrink-0 mt-0.5" size={18} />
            <p className="text-[12px] font-bold text-gray-800 leading-relaxed">
              <span className="text-yushi-orange font-black">附赠：</span>{bonus}
            </p>
          </div>
        )}
        
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
          <div className="px-6 py-3 bg-gray-50/50 border-b border-gray-100">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">核心课程/内容</span>
          </div>
          <div className="divide-y divide-gray-50">
            {items.map((item: any) => (
              <CollapsibleItem 
                key={item.id}
                title={item.t}
                content={item.d}
                isOpen={openSection === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const ConciergeView = () => (
    <div className="animate-in slide-in-from-right-10 duration-500">
      <div className="px-6 pt-6 pb-2">
        <button onClick={() => setCurrentPage('home')} className="flex items-center gap-1 text-yushi-orange text-[12px] font-black mb-4">
          <ArrowLeft size={14} /> 返回首页
        </button>
        <Badge text="PREMIUM SERVICE" variant="primary" />
        <h2 className="text-[28px] font-black text-gray-800 mt-2 tracking-tighter">全程申请服务</h2>
        <p className="text-[12px] text-gray-400 font-bold mt-1">一站式全案深度定制</p>
      </div>

      <div className="px-6 py-2">
        <div className="bg-yushi-orange p-8 rounded-[3rem] text-white shadow-xl shadow-orange-500/20 mb-10">
          <p className="text-[14px] leading-relaxed font-medium">YUSHI 博士全程申请，由医学与心理学方向导师团队全程主导，将申请过程拆解为清晰、可执行的四个阶段高效推进。</p>
        </div>

        <div className="space-y-6 mb-12">
          {[
            { p: "第一阶段", t: "研究方向定位 & 套磁启动", d: "由背景对口导师对学生学术与科研背景沟通评估，协助明确可行的博士研究方向与导师画像，制定套磁策略。围绕真实研究兴趣与学术匹配展开。", img: "/images/1.jpg", imgAlt: "研究兴趣与学术匹配" },
            { p: "第二阶段", t: "博导沟通深化 & 博士面试准备", d: "持续跟进辅导学术沟通，针对面试进行定向准备。训练研究逻辑表达、学术问题应答与研究潜力呈现，确保沟通符合学术语境。", img: "/images/2.jpg", imgAlt: "学术语境沟通" },
            { p: "第三阶段", t: "研究计划 (RP) 撰写与打磨", d: "导师直接对接，参与方法论教学，多轮讨论与修改，围绕研究问题设计、方法可行性与研究深度系统打磨，确保 RP 符合真实评估标准。", img: "/images/3.jpg", imgAlt: "RP 评估标准" },
            { p: "第四阶段", t: "网申材料准备 & 奖学金申请", d: "协助完成博士网申与奖学金申请。确保材料高度一致，最大化提升录取与资助成功率。完成博士正式申请，冲刺 Offer 与奖学金。", img: "/images/4.jpg", imgAlt: "冲刺 Offer 与奖学金" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="text-[10px] font-black text-yushi-orange uppercase tracking-widest mb-1">{item.p}</div>
              <h4 className="text-[16px] font-black text-gray-800 mb-2 leading-tight">{item.t}</h4>
              <p className="text-[12px] text-gray-500 leading-relaxed font-medium">{item.d}</p>
              {item.img && (
                <button
                  type="button"
                  onClick={() => {
                    setLightboxSrc(item.img);
                    setLightboxAlt(item.imgAlt || "查看原图");
                  }}
                  className="block mt-4 w-full text-left"
                  aria-label="查看原图"
                >
                  <img
                    src={item.img}
                    alt={item.imgAlt || "展示图片"}
                    className="w-full h-auto object-contain rounded-2xl border border-gray-100"
                    loading="lazy"
                  />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 px-2">
            <div className="w-1 h-5 bg-yushi-orange rounded-full"></div>
            <h3 className="text-[20px] font-black text-gray-800 tracking-tight">服务细项价格</h3>
          </div>
          
          <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-50">
              {[
                { 
                  id: 'cpr-1', 
                  n: "套磁全程", 
                  q: "20-25位导师", 
                  p: "18000 RMB", 
                  c: "依据学员提供的学校，为学员合适导师，由专业背景对口的资深文书导师挖掘学员背景，结合学员研究方向及意向导师清单撰写套磁信+简历，并全程跟进套磁的反馈及结果。" 
                },
                { 
                  id: 'cpr-2', 
                  n: "套磁方法论", 
                  q: "5位导师", 
                  p: "8000 RMB", 
                  c: "依据学员提供的学校，为学员选择5位导师，由专业背景对口的资深文书导师挖掘学员背景，结合学员研究方向及意向导师清单撰写套磁信，并全程跟进套磁的反馈及结果。" 
                },
                { 
                  id: 'cpr-3', 
                  n: "研究项目书 Research Proposal", 
                  q: "每篇", 
                  p: "18000 RMB", 
                  c: "制定全面的研究计划，带你从选题、文献综述、研究方法 and 数据分析等方面完成，由老师一步步带领完成，掌握底层逻辑，直至完成最终研究项目书。" 
                },
                { 
                  id: 'cpr-4', 
                  n: "研究项目书 Research Proposal 培训课", 
                  q: "每小时", 
                  p: "1500 RMB", 
                  c: "对口专业老师点对点解决研究计划中的选题、文献综述、研究方法 and 数据分析等问题。" 
                },
                { 
                  id: 'cpr-5', 
                  n: "个人陈述 Personal Statement", 
                  q: "500-800词/篇", 
                  p: "3000 RMB", 
                  c: "根据各院校及项目文书要求及学员个人背景信息，由专业背景对口文书导师与学生进行会议，对背景优势挖掘，展现学员与项目的匹配度，完成文书撰写。" 
                },
                { 
                  id: 'cpr-6', 
                  n: "学术简历 Curriculum Vitae", 
                  q: "1-2页/份", 
                  p: "2000 RMB", 
                  c: "根据各院校及项目文书要求及学员个人背景信息，由专业背景对口文书导师与学生进行会议，对背景优势挖掘，展现学员与项目的匹配度，完成文书撰写。" 
                },
                { 
                  id: 'cpr-7', 
                  n: "推荐信 Reference Letter", 
                  q: "300-400词/封", 
                  p: "1500 RMB", 
                  c: "根据各院校及项目文书要求及学员个人背景信息，由专业背景对口文书导师与学生进行会议，对背景优势挖掘，展现学员与项目的匹配度，完成文书撰写。" 
                },
                { 
                  id: 'cpr-8', 
                  n: "文书润色及修改", 
                  q: "专业优化", 
                  p: "文书撰写*7折", 
                  c: "对文书语言、逻辑结构与学术表达进行专业优化。需先进行文书评估。" 
                },
                { 
                  id: 'cpr-9', 
                  n: "面试辅导 (博士)", 
                  q: "项目制 (2小时)", 
                  p: "3699 RMB", 
                  c: "博士科研导师与资深面试官两位专业导师定制面试基础训练及模拟演练课程，从专业知识阐述、语言表达及临场反应能力等方面协助学员备考面试。" 
                },
                { 
                  id: 'cpr-10', 
                  n: "面试辅导 (博士)", 
                  q: "每小时", 
                  p: "2000 RMB", 
                  c: "资深面试官辅导参考常见面试题库，帮助学员熟悉面试流程，梳理回答内容，提升语言表达能力。" 
                },
                { 
                  id: 'cpr-11', 
                  n: "网申 (博士)", 
                  q: "每所院校", 
                  p: "500 RMB", 
                  c: "由学员提供拟申请的院校 and 项目链接，申请所需的全部材料，由导师完成网申资料填写及提交。" 
                },
                { 
                  id: 'cpr-12', 
                  n: "博士申请答疑", 
                  q: "每小时", 
                  p: "1000 RMB", 
                  c: "由专业背景高度对口的资深文书导师提供除RP之外的套磁文书与策略答疑，并全程解答申博过程中的申请流程与关键问题，针对学员在导师联系、沟通反馈中的各类疑难点提供具体指导，提升录取率。" 
                }
              ].map((row) => (
                <CollapsibleItem 
                  key={row.id}
                  title={row.n}
                  subtitle={row.q}
                  price={row.p}
                  content={row.c}
                  isOpen={openSection === row.id}
                  onToggle={() => toggle(row.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 px-2">
            <div className="w-1 h-5 bg-yushi-orange rounded-full"></div>
            <h3 className="text-[20px] font-black text-gray-800 tracking-tight">部分博士 Offer 展示</h3>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden p-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/off1.png", alt: "博士 Offer 展示 1" },
                { src: "/images/off2.png", alt: "博士 Offer 展示 2" },
                { src: "/images/off3.png", alt: "博士 Offer 展示 3" },
                { src: "/images/off4.png", alt: "博士 Offer 展示 4" },
                { src: "/images/off5.png", alt: "博士 Offer 展示 5" },
                { src: "/images/off6.png", alt: "博士 Offer 展示 6" }
              ].map((img) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => {
                    setLightboxSrc(img.src);
                    setLightboxAlt(img.alt);
                  }}
                  className="w-full text-left"
                  aria-label="查看原图"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-contain rounded-2xl border border-gray-100 bg-white"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  return (
    <div className="max-w-[480px] mx-auto bg-[#FBFBFB] min-h-screen relative text-gray-800 selection:bg-yushi-orange selection:text-white font-sans">
      {renderHeader()}

      <main>
        {currentPage === 'home' && <HomeView />}
        
        {currentPage === 'essay' && (
          <ProductDetail 
            id="essay"
            title="博士申请小班课"
            label="DOCTORAL PROGRAM"
            price="3980 RMB"
            format="10节系统课程"
            description="本方案适合希望主导进度，但需在文书、匹配或面试等“硬核环节”获取专业背书。具备较强自主执行力的学生。"
            bonus="博士申请资料包（申请全程跟进表，面试PPT模板等）"
            items={[
              { id: 'p1-1', t: "1. 博士申请全局认知", d: "系统讲清博士申请整体逻辑、材料结构与不同国家博士体系差异。" },
              { id: 'p1-2', t: "2. 研究方向与导师筛选", d: "学会判断研究方向是否成立，找到真正“可套磁、可入学”的导师。" },
              { id: 'p1-3', t: "3. 学术型 CV 构建", d: "按博士标准重构简历，突出研究潜力而非经历堆砌。" },
              { id: 'p1-4', t: "4. 套磁信核心逻辑", d: "掌握导师愿意回复的套磁信结构与表达方式。" },
              { id: 'p1-5', t: "5. 研究计划 (RP) 框架搭建", d: "从零搭建符合博士要求的研究问题与研究路径。" },
              { id: 'p1-6', t: "6. RP 深度打磨与提升", d: "强化研究逻辑、方法可行性与学术深度，提升面试与录取概率。" },
              { id: 'p1-7', t: "7. 高效套磁与跟进策略", d: "制定套磁节奏与跟进方案，提高有效回复与面试转化率。" },
              { id: 'p1-8', t: "8. 网申资料准备", d: "把握申请材料准备的时间线，材料的中英文版本如何正规化等。" },
              { id: 'p1-9', t: "9. 推荐信策略与避坑", d: "教你正确获取强推荐信，避免黑推、弱推影响申请结果。" },
              { id: 'p1-10', t: "10. 奖学金与 CSC 申请准备", d: "系统梳理博士奖学金与 CSC 申请逻辑与材料重点。" }
            ]}
          />
        )}

        {currentPage === 'research' && (
          <ProductDetail 
            id="research"
            title="科研能力提升课"
            label="RESEARCH PREP"
            price="3980 RMB"
            format="10节系统课程"
            description="已具备基础学术背景，但科研经验不系统，希望通过结构化训练提升研究能力、为博士申请夯实基础的学生。"
            items={[
              { id: 'p2-1', t: "1. 前期准备与选题", d: "明确研究从哪里开始，搭建清晰可行的研究起点。" },
              { id: 'p2-2', t: "2. 文献高效阅读", d: "建立系统阅读方法，快速抓住文献核心价值。" },
              { id: 'p2-3', t: "3. 研究问题发现", d: "从文献中识别研究空白，形成可研究的问题。" },
              { id: 'p2-4', t: "4. Methods 写作", d: "将方法学写成可复现的研究说明书。" },
              { id: 'p2-5', t: "5. 定量研究方法", d: "掌握常见定量研究设计与分析逻辑。" },
              { id: 'p2-6', t: "6. 定性研究方法", d: "理解定性方法适用场景与研究路径。" },
              { id: 'p2-7', t: "7. 数据分析 I", d: "完成描述性统计与核心结果分析。" },
              { id: 'p2-8', t: "8. 数据分析 II", d: "进阶分析与稳健性检验，提升可信度。" },
              { id: 'p2-9', t: "9. 论文结构逻辑", d: "以 IMRAD 构建清晰学术论证结构。" },
              { id: 'p2-10', t: "10. 写作到发表", d: "梳理论文投稿、审稿与修改流程。" }
            ]}
          />
        )}

        {currentPage === 'interview' && (
          <ProductDetail 
            id="interview"
            title="博士面试辅导"
            label="INTERVIEW COACHING"
            price="3699 RMB"
            format="项目制 / 按小时"
            description="针对医学博士申请面试的高端辅导，由资深面试官与科研导师联合授课，全方位提升学术表达与临场应对能力。"
            items={[
              { id: 'p3-1', t: "1. 面试基础训练", d: "涵盖自我介绍、研究兴趣陈述及动机说明的基础打磨。" },
              { id: 'p3-2', t: "2. 模拟演练 (Mock Interview)", d: "还原真实申请场景，由资深面试官进行压力测试与反馈。" },
              { id: 'p3-3', t: "3. 专业知识阐述技巧", d: "教你如何用学术语言准确表达自己的科研成果与未来计划。" },
              { id: 'p3-4', t: "4. 临场反应能力提升", d: "针对导师可能提出的尖锐或意外问题，提供策略性的回答逻辑。" },
              { id: 'p3-5', t: "5. 常见题库解析", d: "梳理全球顶尖医学院博士申请的高频面试题与解题思路。" },
              { id: 'p3-6', t: "6. 面试流程与细节避坑", d: "从邮件预约到设备检查、着态礼仪的全流程指导。" }
            ]}
          />
        )}

        {currentPage === 'concierge' && <ConciergeView />}
      </main>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-[900px] w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-2">
              <button
                className="text-white/90 text-[12px] font-black bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
                onClick={() => setLightboxSrc(null)}
                aria-label="关闭查看"
              >
                关闭
              </button>
            </div>
            <div className="bg-white rounded-3xl p-3 shadow-2xl">
              <img
                src={lightboxSrc}
                alt={lightboxAlt || "查看原图"}
                className={`w-full h-auto object-contain rounded-2xl ${lightboxSrc === "/images/2.jpg" ? "scale-90" : ""}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
