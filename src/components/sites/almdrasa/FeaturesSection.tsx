import { BookOpen, Code, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "محتوى عربي متكامل",
      description: "نقدم لك أفضل محتوى لتعلم البرمجة باللغة العربية، مصمم خصيصاً ليناسب السوق العربي والعالمي.",
      icon: <BookOpen className="w-10 h-10 text-[#5700ff]" />,
    },
    {
      title: "تطبيق عملي مستمر",
      description: "لا نكتفي بالشرح النظري، بل نركز على التطبيق العملي من خلال مشاريع حقيقية تبني بها معرض أعمالك.",
      icon: <Code className="w-10 h-10 text-[#5700ff]" />,
    },
    {
      title: "مجتمع ومتابعة",
      description: "انضم لمجتمع المدرسة البرمجي، وتواصل مع الموجهين والطلاب للإجابة على استفساراتك بشكل يومي.",
      icon: <Users className="w-10 h-10 text-[#5700ff]" />,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تتعلم في <span className="text-[#5700ff]">المدرسة</span>؟</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نوفر لك بيئة تعليمية متكاملة تساعدك على تحقيق هدفك والوصول إلى الاحترافية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 bg-[#5700ff]/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
