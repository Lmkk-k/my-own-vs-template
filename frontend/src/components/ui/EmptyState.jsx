import Button from './Button'

export default function EmptyState({
  icon = '📭',
  title = 'Nothing here yet',
  message = 'No data found.',
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
      <span className="text-5xl">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-400 max-w-sm">{message}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="mt-2">{actionLabel}</Button>
      )}
    </div>
  )
}