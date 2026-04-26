export default function Avatar({ name, image, size = 'md' }) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-20 h-20 text-2xl',
  }

  const initials = name
    ? name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?'

  return image ? (
    <img
      src={image}
      alt={name}
      className={`${sizes[size]} rounded-full object-cover border border-gray-200`}
    />
  ) : (
    <div className={`${sizes[size]} rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center border border-indigo-200`}>
      {initials}
    </div>
  )
}