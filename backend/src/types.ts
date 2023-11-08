type UserT = {
    user_id: string,
    email: string | undefined,
    password: string,
    provider_id: string,
    username: string,
    photos: string,
    provider: string,
    email_verified:string
}

type SessionPassportUserT = {
  message: string,
  IsUserInSession:boolean,
  user: [{
      user_id: string,
      email: string,
      password: string,
      provider_id: string,
      username:string
  }]
}

export { UserT, SessionPassportUserT}