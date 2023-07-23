export default function ({app, route, store, redirect, $fire, $axios}) {
  console.log('route', route.path)
  return $fire.auth.onAuthStateChanged(async (user) => {
    if (!user) {
      redirect("/") 
    }
    if (user) {
        const { claims } = await user.getIdTokenResult()
        if (claims.role == "admin") {
          if (!route.path.startsWith('/admin'))
            redirect('/admin')
        } else if (claims.role == "mechant") {
          if (!route.path.startsWith('/merchant'))
            redirect('/merchant')
        }else if (claims.role == "agent") {
          if (!route.path.startsWith('/agent'))
            redirect('/agent/agentOverview/agentDashboard')
        } else if (claims.role == "client") {
          if (!route.path.startsWith('/client'))
            redirect('/client/dashboard')
        } else {transfer
          redirect("/login")
        }
        const idToken = await $fire.auth.currentUser.getIdToken(true)
        store.commit('SET_TOKEN', idToken)
        $axios.setToken(idToken, 'Bearer')
    }
  })
}