import { ArrowLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import { EmptyMemories } from '../../../components/EmptyMemories'
import { api } from '@/lib/api'
import Link from 'next/link'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Share from '@/components/Share'

interface MemoryData {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

interface MemoryProps {
  params: {
    memory: string
  }
}

dayjs.locale(ptBr)

export default async function Memory({ params }: MemoryProps) {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get(`/memories/${params.memory}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: MemoryData = response.data

  return (
    <div className="flex flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        voltar
        <ArrowLeft className="h-4 w-4" />
      </Link>
      <div className="space-y-4">
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>
        <Image
          src={memory.coverUrl}
          alt=""
          width={592}
          height={280}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <Share id={memory.id} />
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
      </div>
    </div>
  )
}
