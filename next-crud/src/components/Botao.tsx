interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'gray'
  
  // Definir cores completas como classes Tailwind
  const cores = {
    green: 'bg-gradient-to-r from-green-400 to-green-700',
    blue: 'bg-gradient-to-r from-blue-400 to-blue-700',
    gray: 'bg-gradient-to-r from-gray-400 to-gray-700'
  }

  return (
    <button
      onClick={props.onClick}
      className={`
        ${cores[cor]}
        text-white px-4 py-2 rounded-md
        hover:opacity-90 transition-opacity
        ${props.className || ''}
      `}
    >
      {props.children}
    </button>
  )
}