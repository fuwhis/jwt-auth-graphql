import { Suspense } from 'react'
import Loading from '~/elements/loading'

const Fallback = ({ children }: any) => {
  return <Suspense>{children}</Suspense>
}

export default Fallback
