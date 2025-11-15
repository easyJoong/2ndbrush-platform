/**
 * 유틸리티 함수 모음
 */

/**
 * 클래스명을 조건부로 결합
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * 숫자를 한국 통화 형식으로 포맷
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(amount)
}

/**
 * 날짜를 한국 형식으로 포맷
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }

  return new Intl.DateTimeFormat('ko-KR', defaultOptions).format(
    date instanceof Date ? date : new Date(date)
  )
}

/**
 * Firebase Timestamp를 Date 객체로 변환
 */
export function timestampToDate(timestamp) {
  if (!timestamp) return null
  if (timestamp.seconds) {
    return new Date(timestamp.seconds * 1000)
  }
  return new Date(timestamp)
}

/**
 * 이메일 유효성 검사
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * 휴대폰 번호 포맷 (010-1234-5678)
 */
export function formatPhoneNumber(phone) {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * 문자열 자르기 (말줄임표)
 */
export function truncate(str, length = 50) {
  if (!str) return ''
  if (str.length <= length) return str
  return str.substring(0, length) + '...'
}

/**
 * Debounce 함수
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * 파일 크기를 읽기 쉬운 형식으로 변환
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

/**
 * 배열을 그룹화
 */
export function groupBy(array, key) {
  return array.reduce((result, item) => {
    const group = item[key]
    if (!result[group]) {
      result[group] = []
    }
    result[group].push(item)
    return result
  }, {})
}

/**
 * Sleep 함수 (async/await)
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
