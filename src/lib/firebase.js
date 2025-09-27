import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase 설정 (실제 프로젝트에서는 환경변수를 사용하세요)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "second-brush-xxxx.firebaseapp.com",
  projectId: "second-brush",
  storageBucket: "second-brush.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
}

// Firebase 초기화
const app = initializeApp(firebaseConfig)

// Firebase 서비스들
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app