## UI Components folder

In this folder, route and feature-specific components are organized to maintain a clear structure and enhance code organization. For instance, an authentication route typically includes components like `LoginForm` and `VerificationForm`, designed specifically for handling user authentication.
Which means an `auth` folder will be created to contain all components relating to authentication:

```
 ui  
  └── auth  
        └── LoginForm.tsx
        └── VerificationForm.tsx
```
**NB: the folder should always be named after the feature. Since the components were related to authentication, the folder was rightly named `auth`**