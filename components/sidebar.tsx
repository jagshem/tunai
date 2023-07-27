'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import {
  ImageIcon,
  VideoIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Code,
  Settings,
} from 'lucide-react'
import { CalendarDays } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { useState, useEffect } from 'react'

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
    content:
      'Dashboard sayfası, kullanıcının uygulamanın genel performansını ve istatistiklerini görüntüleyebileceği bir kontrol panelidir.',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    content:
      'Conversation sayfası, yapay zeka destekli sohbetler ve metin tabanlı iletişimler oluşturmak için kullanılabilir.',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
    content:
      'Image Generation sayfası, kullanıcının metin veya konsept bazlı girdilere dayalı olarak sanatsal veya gerçekçi görseller üretebileceği bir arayüzdür.',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
    content:
      'Video Generation sayfası, kullanıcının metin veya senaryo bazlı girdilere göre video içerikleri oluşturabileceği bir arayüzdür.',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-700',
    content:
      'Music Generation sayfası, kullanıcının melodi, ritim veya tür bazlı girdilere göre müzik veya ses parçaları oluşturabileceği bir arayüzdür.',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
    content:
      'Code Generation sayfası, kullanıcının metin tabanlı girdilere dayalı olarak yazılım kodları veya algoritmalar üretebileceği bir arayüzdür.',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]

const Sidebar = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-9 h-9 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Tunai
          </h1>
        </Link>
        <>
          {routes.map((route) => (
            <HoverCard key={route.href}>
              <HoverCardTrigger>
                <div className="mb-2.5">
                  <Link
                    href={route.href}
                    key={route.href}
                    className={cn(
                      'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                      pathname === route.href
                        ? 'text-white bg-white/10'
                        : 'text-zinc-400'
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                      {route.label}
                    </div>
                  </Link>
                </div>
              </HoverCardTrigger>
              {route.content && (
                <HoverCardContent className="w-80 ml-3">
                  <div className="flex justify-end space-x-4">
                    <Avatar>
                      <div className="flex items-center justify-center">
                        <AvatarImage
                          src="/logo.png"
                          alt="@tunai"
                          className="h-8 w-8 ml-[6px]"
                        />
                      </div>
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold">@tunai</h4>
                      <p className="text-sm font-semibold">{route.content}</p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                        <span className="text-xs text-muted-foreground">
                          @Tunai Joined 07/27/2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              )}
            </HoverCard>
          ))}
        </>
      </div>
    </div>
  )
}

export default Sidebar
