import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import { Context } from '@/presentation/contexts'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { state.isLoading && <Spinner className={Styles.spinner}/>}
      { errorState.messageMain && <span className={Styles.error}>errorMessage</span>}
    </div>
  )
}

export default FormStatus
