export default function Alert({ message, variant = 'info', onClose }) {
  const variants = {
    info:    'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error:   'bg-red-50 text-red-800 border-red-200',
  }

  const icons = {
    info:    'ℹ️',
    success: '✅',
    warning: '⚠️',
    error:   '❌',
  }

  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-lg border text-sm ${variants[variant]}`}>
      <span>{icons[variant]}</span>
      <p className="flex-1">{message}</p>
      {onClose && (
        <button onClick={onClose} className="text-current opacity-50 hover:opacity-100 text-lg leading-none">
          ×
        </button>
      )}
    </div>
  )
}