export default function Input({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  disabled = false,
  required = false,
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`px-3 py-2 rounded-lg border text-sm outline-none transition-all duration-200
          ${error
            ? 'border-red-400 focus:ring-2 focus:ring-red-200'
            : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
          }
          ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-400' : 'bg-white text-gray-900'}
        `}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}