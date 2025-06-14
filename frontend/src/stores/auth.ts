import { defineStore } from 'pinia'
import type { Router } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => {
    const storedState = localStorage.getItem('authState')
    return storedState
      ? JSON.parse(storedState)
      : {
          user: null,
          isAuthenticated: false,
        }
  },
  actions: {
    async setCsrfToken() {
      const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      await fetch(`${backendUrl}/auth/set-csrf-token`, {
        method: 'GET',
        credentials: 'include',
      })
    },

    async login(email: string, password: string, router: Router | null = null) {
      const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(),
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: 'include',
      })
      const data = await response.json()
      if (data.success) {
        this.isAuthenticated = true
        this.saveState()
        if (router) {
          await router.push({
            name: 'home',
          })
        }
      } else {
        this.user = null
        this.isAuthenticated = false
        this.saveState()
      }
    },

    async logout(router: Router | null = null) {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;
        const response = await fetch(`${backendUrl}/auth/logout`, {
          method: 'POST',
          headers: {
            'X-CSRFToken': getCSRFToken(),
          },
          credentials: 'include',
        })
        if (response.ok) {
          this.user = null
          this.isAuthenticated = false
          this.saveState()
          if (router) {
            await router.push({
              name: 'loginandregister',
            })
          }
        }
      } catch (error) {
        console.error('Logout failed', error)
        throw error
      }
    },

    async fetchUser() {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;
        const response = await fetch(`${backendUrl}/auth/user`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken(),
          },
        })
        if (response.ok) {
          const data = await response.json()
          this.user = data
          this.isAuthenticated = true
        } else {
          this.user = null
          this.isAuthenticated = false
        }
      } catch (error) {
        console.error('Failed to fetch user', error)
        this.user = null
        this.isAuthenticated = false
      }
      this.saveState()
    },

    saveState() {
      /*
            We save state to local storage to keep the
            state when the user reloads the page.

            This is a simple way to persist state. For a more robust solution,
            use pinia-persistent-state.
             */
      localStorage.setItem(
        'authState',
        JSON.stringify({
          user: this.user,
          isAuthenticated: this.isAuthenticated,
        }),
      )
    },
  },
})

export function getCSRFToken() {
  /*
    We get the CSRF token from the cookie to include in our requests.
    This is necessary for CSRF protection in Django.
     */
  const name = 'csrftoken'
  let cookieValue = null
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  if (cookieValue === null) {
    throw 'Missing CSRF cookie.'
  }
  return cookieValue
}
