import React, { useState } from 'react'
import zxcvbn from 'zxcvbn'

const initialState = ''

const strength = {
  0: "Worst ☹",
  1: "Bad ☹",
  2: "Weak ☹",
  3: "Good ☺",
  4: "Strong ☻"
}

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState(initialState)

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  let result = zxcvbn(password)

  return (
    <div>
      <input type="password" value={password} onChange={changePassword} placeholder="Enter your password" />
      <div>
        <p />
        Strength:
        {
          password.length > 0 ? 
          <strong>
            {strength[result.score]}
          </strong>
          : ''
        } {result.feedback.warning} {password.length > 0 ? result.feedback.suggestions[0] : ''}
      </div>
    </div>
  )
}

export default PasswordStrengthMeter
