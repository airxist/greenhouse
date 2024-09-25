import React from 'react'
import OtpDigit from './OtpDigit'
import Btn from '../../../shared/components/Btn'

const CustomerVerification = () => {
  return (
    <div className="mt-7">
        <div className="flex items-center justify-between">
          <OtpDigit />
          <OtpDigit />
          <OtpDigit />
          <OtpDigit />
        </div>

        <div className="mt-9">
          <Btn
            href="/authentication/create-account"
            text="Submit"
            className="auth-btn auth-primary-btn"
          />

          <div className="mt-2 text-center max-w-[452px] mx-auto">
            <p>
              Didn't receive the verification code? It might take a moment. You
              can request a new code in 60 seconds
            </p>
          </div>
        </div>
      </div>
  )
}

export default CustomerVerification
