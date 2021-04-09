# Design Document
---
## Components

### Login

- Login
    - Username / Password Fields
    - State:
        - username
        - password
    - Props:
        - username
- Create Account
    - Username / Password Fields
    - State:
        - username
        - password
- Questionaire
    - Question / Answer Fields
    - State:
        - Each question
    - Props:
        - Logged in User
- Main Page
    - Toggle button to search for matches
    - State:
        - looking_toggled
    - Props:
        - Logged in User
- Settings
    - Text / Input for each setting.
    - State:
        - Each setting
    - Props:
        - Configured settings
        - Logged in User
- Video Chat
    - Video Element
    - State:
        - status (ended, starting, in_progress)
    - Props:
        - Logged in User
        - User in contact with
- Matches
    - User Element
    - State:
        - Users (matches)