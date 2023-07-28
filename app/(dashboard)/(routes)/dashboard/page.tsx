'use client'

import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation',
    content:
      '💬 Conversation sayfası, yapay zeka destekli sohbetler ve metin tabanlı iletişimler oluşturmak için kullanılabilir.',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music',
    content:
      '🎵 Music Generation sayfası, kullanıcının melodi, ritim veya tür bazlı girdilere göre müzik veya ses parçaları oluşturabileceği bir arayüzdür.',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-800/10',
    href: '/image',
    content:
      '🖼️ Image Generation sayfası, kullanıcının metin veya konsept bazlı girdilere dayalı olarak sanatsal veya gerçekçi görseller üretebileceği bir arayüzdür.',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    href: '/video',
    content:
      '🎥 Video Generation sayfası, kullanıcının metin veya senaryo bazlı girdilere göre video içerikleri oluşturabileceği bir arayüzdür.',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
    content:
      '💻 Code Generation sayfası, kullanıcının metin tabanlı girdilere dayalı olarak yazılım kodları veya algoritmalar üretebileceği bir arayüzdür.',
  },
]

const DashboardPage = () => {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of Turkish AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of Turkish AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer "
          >
            <div className="items-center mt-2">
              <div className="flex items-center gap-x-4">
                <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                  <tool.icon className={cn('w-8 h-8', tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <div className="items-center gap-y-3 space-y-2 mt-3">
                <div className="hidden font-medium w-70 md:flex">
                  {tool.content}
                </div>
              </div>
            </div>
            <ArrowRight className="w-6 h-6" />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
