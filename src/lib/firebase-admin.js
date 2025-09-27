import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { readFileSync } from 'fs'
import { join } from 'path'

// Firebase Admin SDK 초기화
function createFirebaseAdminApp() {
  if (getApps().length > 0) {
    return getApps()[0]
  }

  try {
    // 서비스 계정 키 파일 읽기
    const serviceAccountPath = join(process.cwd(), 'second-brush-firebase-adminsdk-fbsvc-9bd6912bf6.json')
    const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'))

    return initializeApp({
      credential: cert(serviceAccount),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID || 'second-brush'}-default-rtdb.firebaseio.com`
    })
  } catch (error) {
    console.error('Firebase Admin SDK initialization error:', error)
    throw new Error('Failed to initialize Firebase Admin SDK')
  }
}

// Admin SDK 인스턴스
const adminApp = createFirebaseAdminApp()
export const adminAuth = getAuth(adminApp)
export const adminDb = getFirestore(adminApp)

export default adminApp