// Define the store for the user in this file. This store will be used to manage the user's state throughout the application. 
// Preferred state management library is Pinia. 

// You can create other stores in this directory as well.

// This is an example of how to define a store using Pinia and vueUse LocalStorage.

// export const useAuthStore = defineStore("user", {
//     state: () => ({
//       user: useLocalStorage('user', {} as User)
//     }),
//     actions: {
//       setUser(user: User) {
//         this.user = user
//       },
  
//     patchUser(user: Partial<User>) {
//         this.user = { ...this.user, ...user }
//     },
  
//       logout() {
//         this.user = {} as User
//       }
//     },
//     getters: {
//       getUser(state) {
//         return state.user
//       },
  
//     }, 
    
  
  
//   });
