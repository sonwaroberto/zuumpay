export default function ({app, route, store, redirect, $fire}) {
  return $fire.auth.onAuthStateChanged(async (user) => {
    console.log('route', route.path)
    if (user) {
      const { claims } = await user.getIdTokenResult()
      if (claims.role == "admin") {
        redirect('/admin')
      } else if (claims.role == "merchant") {
        redirect('/merchant')
      } else if (claims.role == "agent") {
        redirect('/agent/agentOverview/agentDashboard')
      } else if (claims.role == "client") {
        redirect('/client/dashboard')
      } else {
        redirect("/")
      }
    }
  })
}