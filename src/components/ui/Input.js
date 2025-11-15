/**
 * 재사용 가능한 Input 컴포넌트
 */
export default function Input({
  label,
  error,
  icon: Icon,
  className = '',
  containerClassName = '',
  ...props
}) {
  return (
    <div className={containerClassName}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Icon className="w-5 h-5 text-gray-400" />
          </div>
        )}
        <input
          className={`w-full ${Icon ? 'pl-10' : 'px-4'} py-3 border ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'
          } rounded-lg focus:ring-2 focus:border-transparent transition-colors ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
