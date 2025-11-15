import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

// Firebase Admin SDK 초기화
function createFirebaseAdminApp() {
  if (getApps().length > 0) {
    return getApps()[0]
  }

  try {
    // 환경 변수에서 서비스 계정 정보 가져오기
    const projectId = process.env.FIREBASE_PROJECT_ID
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
    const privateKey = process.env.FIREBASE_PRIVATE_KEY

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Firebase Admin SDK credentials are missing in environment variables')
    }

    // Private key의 이스케이프 문자 처리 (\n을 실제 줄바꿈으로)
    const formattedPrivateKey = privateKey.replace(/\\n/g, '\n')

    return initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: formattedPrivateKey,
      }),
      databaseURL: `https://${projectId}-default-rtdb.firebaseio.com`
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