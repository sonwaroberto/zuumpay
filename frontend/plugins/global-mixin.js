import Vue from 'vue'

Vue.mixin({
  data() {
    return{
      load:true,
      userOnline :[]
    }
  },
  computed: {
    authLoading() { return this.$store.state.isAuthLoading },
    preview() {
      return this.file ? URL.createObjectURL(this.file) : ""
    }
  },
	methods: {
    async saveIdToken() {
      const idToken = await this.$fire.auth.currentUser.getIdToken(true)
      .catch( (e) => {
        console.log("The error is ",e)
      })
      localStorage.setItem('idToken', idToken)
      localStorage.setItem('tokenExpires', new Date().getTime() + 3600000)
      this.$store.commit('SET_TOKEN', idToken)
    },
    async logOut() { 
      await this.$fire.auth.signOut().then(() => {
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_ACCOUNT', null)
        this.$store.commit('SET_TOKEN', null)
      })
    }, 
    async signUpStep1() {
      const validInput = await this.$refs.observer.validate()
      if(!validInput) return
      this.loading = true
      this.credential.phone = this.credential.country_calling_code + this.credential.phone
      const signUpForm = document.querySelector("#signUpForm")
      const signUp = document.querySelector("#signUp")
      this.recaptchaVerifier = new this.$fireModule.auth.RecaptchaVerifier('signUp', {
        'size': 'invisible',
        'callback': (response) => {
        }
      },)
      this.$fire.auth.signInWithPhoneNumber(this.credential.phone , this.recaptchaVerifier)
      .then((confirmationResult) => {
        this.confirmationResult = confirmationResult
        this.loading = false
        this.dialogPhoneVerification = true
      }).catch((e) => {
        this.loading = false
        console.log(e)
        console.log("verification code not send")
        this.text = "Network error!!! Please try again later"
        this.message = true
        this.$refs.observer.reset()
        this.dialog = false
      })
    },
    async signUpStep2() {
      this.loading = true
      await this.confirmationResult.confirm(this.codeVerificationPhone)
      .then(async (result) => {
        const credentials = this.$fireModule.auth.EmailAuthProvider.credential(
          this.credential.email,
          this.credential.password
        )
        const currentUser = this.$fire.auth.currentUser
        await currentUser.linkWithCredential(credentials).then( async (usercred) => {
          const user = usercred.user
          this.credential.userId = user.uid
          await this.saveIdToken()
          // this.sendMailVerification()
          await this.upload()
          await this.$axios.$post(`/account/api/v1/${this.credential.role}s`,{
            userId:this.credential.userId,
            email:this.credential.email ,
            zuumpayId:this.credential.zuumpayId,
            pin: this.credential.pin,
            fullName:this.credential.fullName,
            phone:this.credential.phone,
            country:this.credential.country,
            countryCode:this.credential.countryCode,
            currency:this.credential.currency,
            currencyName:this.credential.currencyName,
            address: this.credential.address,
            zipCode: this.credential.zipCode,
            dateOfBirth: this.credential.dateOfBirth,
            gender:this.credential.gender,
            kiosksLocation:this.credential.kiosksLocation,
            role: this.credential.role,
            password:this.credential.password,
            date: new Date(),
            amountRange: this.credential.amountRange,
            numberOfKiosk : this.credential.numberOfKiosk,
            idType: this.credential.idType,
            idNumber: this.credential.idNumber,
            expiryDateId: this.credential.expiryDateId,
            imageId: this.credential.imageId,
            accountBalance: this.credential.accountBalance,
            accountNumber: this.credential.accountNumber,
            bitCoinBalance:0,
            saving:0,
            status:false
          })
          .then((res) => {
          })
          .catch( (e) => {
            console.log(e)
          })
          .finally(() => {
            this.$emit('input',false)
            console.log("success")
            this.text = "Account created successfully, login now..."
            this.message = true
            this.logOut()
            this.dialogPhoneVerification = false
            this.loading = false
            return
          })
        }).catch((e) => {
          if ( e.code == "auth/email-already-in-use" || e.code == "auth/network-request-failed" ) {
            this.$refs.observer.errors.email.push('The new user email is already in use.')
            this.$refs.observer.errors.email.push('A network error (such as timeout, interrupted connection or unreachable host) has occurred')
          }
          console.log("Account linking error", e)
          this.text = "Network error!!! Please try again later"
          this.message = true
          this.$refs.observer.reset()
          this.dialogPhoneVerification = false

        })
      }).catch((e) => {
        console.log('verification code incorrect')
        this.text = "verification code incorrect, please try again..."
        this.message = true
        console.log(e)
        this.loading = false
      })
    },
    async upload() {
      if (this.file) {
        const ref = await this.$fire.storage.ref().child(`images/Id snapshot/${this.file.name}`)
        return ref.put(this.file).then(async (snapshot) => {
          const url = await ref.getDownloadURL()
          this.credential.imageId = url
        })
      } else {
        return false
      }
    },
    getUserLocation() {
      this.$axios.$get('https://ipapi.co/json/')
      .then((res) => {
        this.credential.countryCode = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${res.country_code}.svg`
        this.credential.country_calling_code = res.country_calling_code
        this.credential.currency =  res.currency
        this.credential.country = res.country_name
        this.credential.currencyName = res.currency_name
        console.log(this.credential.country_calling_code)
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
})
