import React, {useState, useCallback} from 'react';

const useAuth = () => {
  const [userId, setUserId] = useState("")

  const login = useCallback((uid) => {
    setUserId(uid)
  }, [])

  const logout = useCallback(() => {}, [])

  return {userId, login, logout};
}

export default useAuth;