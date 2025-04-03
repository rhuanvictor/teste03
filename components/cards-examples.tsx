import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@heroui/react"
import { Bot, Cpu, Zap, BarChart, Lightbulb, Database } from "lucide-react"
import { BorderBeam } from "@/components/border-beam";
import { fontLexend } from "@/config/fonts";

export default function CardExamples() {
  return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card Example 1 - Simple with Icon Header */}
        <Card className="max-w-[400px] rounded-xl overflow-hidden shadow-sm  border-none hover:shadow-xl relative group  hover:bg-blue-100 transition-colors border
        dark:border-gray-700 dark:shadow-[0_10px_20px_rgba(255,255,255,0.10),_0_6px_6px_rgba(255,255,255,0.05)] 
          dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15),_0_10px_10px_rgba(255,255,255,0.10)] animate-border">
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-blue-50 group-hover:bg-white rounded-full">
              <Bot className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex flex-col">
              <p className={`text-lg font-semibold dark:group-hover:text-neutral-800 ${fontLexend.className}`}>Chatbots Inteligentes</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-neutral-700 font-medium dark:text-neutral-500  leading-relaxed" >
              Oferecemos soluções inteligentes para simplificar processos, reduzindo tempo e custos operacionais.
            </p>
          </CardBody>          
          <CardFooter>
            <Link href="#" className="text-blue-500 flex items-center gap-1">
              Saiba mais
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 2 - Gradient Background */}
        <Card className="max-w-[400px] rounded-xl overflow-hidden border-none shadow-sm hover:shadow-xl  relative group hover:bg-purple-50 transition-colors dark:border-gray-700 dark:shadow-[0_10px_20px_rgba(255,255,255,0.10),_0_6px_6px_rgba(255,255,255,0.05)] 
          dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15),_0_10px_10px_rgba(255,255,255,0.10)] animate-border">
          {/* Decorative elements */}
          <BorderBeam size={100} duration={10} delay={3} clockwise={false} />      
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-purple-50 group-hover:bg-white rounded-full">
              {/* Heroicons Sparkles icon */}
              <Cpu className="h-6 w-6 text-purple-500" />
            </div>
            <div className="flex flex-col">
              <p className={`text-lg font-semibold dark:group-hover:text-neutral-800 ${fontLexend.className}`}>Automação de Sistemas</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-neutral-700 font-medium dark:text-neutral-500  leading-relaxed"> Transformamos desafios em oportunidades, impulsionando o crescimento e a performance do seu negócio.</p>
          </CardBody>          
          <CardFooter>
            <Link href="#" className="text-purple-500 flex items-center gap-1">
              Explorar soluções
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>    
        </Card>

        {/* Card Example 3 - Border Accent */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl  group hover:bg-green-50 transition-colors dark:border-gray-700 dark:shadow-[0_10px_20px_rgba(255,255,255,0.10),_0_6px_6px_rgba(255,255,255,0.05)] 
          dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15),_0_10px_10px_rgba(255,255,255,0.10)] animate-border">
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-green-50 group-hover:bg-white rounded-full">
              <Zap className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex flex-col">
              <p className={`text-lg font-semibold dark:group-hover:text-neutral-700 ${fontLexend.className}`}>Tecnologia Avançada</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-neutral-700 font-medium dark:text-neutral-500  leading-relaxed">
              Utilizamos tecnologia de ponta para otimizar processos de forma estratégica e eficaz.
            </p>
          </CardBody>          
          <CardFooter>
            <Link href="#" className="text-green-500 flex items-center gap-1">
              Ver tecnologias
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 4 - Subtle Hover Effect */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl  group hover:bg-amber-50  transition-colors dark:border-gray-700 dark:shadow-[0_10px_20px_rgba(255,255,255,0.10),_0_6px_6px_rgba(255,255,255,0.05)] 
          dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15),_0_10px_10px_rgba(255,255,255,0.10)] animate-border">
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-amber-50 rounded-full group-hover:bg-white transition-colors">
              <BarChart className="h-6 w-6 text-amber-500" />
            </div>
            <div className="flex flex-col">
              <p className={`text-lg font-semibold dark:group-hover:text-neutral-700 ${fontLexend.className}`}>Otimização de Processos</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-neutral-700 font-medium dark:text-neutral-500  leading-relaxed">
              Reduzimos custos operacionais através de soluções inovadoras que simplificam fluxos de trabalho.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="#" className="text-amber-500 flex items-center gap-1">
              Otimizar agora
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 5 - Different Layout Structure */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl group hover:bg-gray-100 transition-colors dark:border-gray-700 dark:shadow-[0_10px_20px_rgba(255,255,255,0.10),_0_6px_6px_rgba(255,255,255,0.05)] 
          dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15),_0_10px_10px_rgba(255,255,255,0.10)] animate-border">
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-yellow-50 rounded-full group-hover:bg-white dark:group-hover:bg-blue-50 transition-colors">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
            </div>
            <div className="flex flex-col">
              <p className={`text-lg font-semibold dark:group-hover:text-neutral-700 ${fontLexend.className}`}>Soluções Inteligentes</p>
            </div>
          </CardHeader>
          <Divider />
            <CardBody>
              <p className="text-neutral-700 font-medium dark:text-neutral-500  leading-relaxed">
                Nosso foco é transformar desafios em oportunidades, impulsionando o crescimento do seu negócio de forma estratégica.
              </p>
            </CardBody>
          <Divider />
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Tecnologia avançada</p>
            <Link href="#" className="text-yellow-500 flex items-center gap-1">
              Descobrir
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>

        {/* Card Example 6 - Data Focus */}
        <Card className="max-w-[400px] rounded-xl shadow-sm hover:shadow-xl group hover:bg-blue-50 dark:hover:bg-blue-200 transition-colors dark:border-gray-700 dark:shadow-[0_10px_20px_rgba(255,255,255,0.10),_0_6px_6px_rgba(255,255,255,0.05)] 
          dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15),_0_10px_10px_rgba(255,255,255,0.10)] animate-border">
          <CardHeader className="flex gap-3 items-center">
            <div className="p-2 bg-blue-50 rounded-full group-hover:bg-white dark:group-hover:bg-blue-50 transition-colors">
              <Database className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex flex-col">
              <p className={`text-lg font-semibold dark:group-hover:text-neutral-700 ${fontLexend.className}`}>Gestão de Dados</p>
            </div>
          </CardHeader>
          <Divider />
            <CardBody>
              <p className="text-neutral-700 font-medium dark:text-neutral-500  leading-relaxed">
                Transformamos dados em insights acionáveis com nossas soluções de análise e visualização de dados inteligentes.
              </p>
            </CardBody>
          <Divider />
          <CardFooter>
            <Link href="#" className="text-blue-500 flex items-center gap-1">
              Explorar dados
              <span className="ml-1">→</span>
            </Link>
          </CardFooter>
        </Card>
      </div>
    
  )
}

