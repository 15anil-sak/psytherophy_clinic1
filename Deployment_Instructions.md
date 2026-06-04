# Teja's Clinic: Deployment Instructions

This document provides all the necessary steps to modify your project, set up Git, and deploy to Railway.app.

---

## Part 1: Manual Code Modification

You must manually update the frontend's API URL to make it flexible for deployment.

1.  **Navigate** to the file: `frontend/src/services/api.js`.
2.  **Locate** this line of code:
    ```javascript
    baseURL: 'http://127.0.0.1:5000/api', // Adjust this if your backend runs on a different port
    ```
3.  **Replace** it with the following line:
    ```javascript
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000/api', // Adjust this if your backend runs on a different port
    ```

---

## Part 2: Git and GitHub Setup

Follow these steps in your terminal, inside the `teja's_clinic` directory.

1.  **Initialize a new Git repository:**
    ```bash
    git init
    ```

2.  **Add all project files to the staging area:**
    ```bash
    git add .
    ```

3.  **Make the first commit:**
    ```bash
    git commit -m "Initial commit for Teja's Clinic project"
    ```

4.  **Link to your GitHub repository and push your code.** After creating a new repository on GitHub named `tejas_clinic`, copy the commands GitHub provides. They will look like this (use the exact commands from your GitHub page):
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/tejas_clinic.git
    git branch -M main
    git push -u origin main
    ```

---

## Part 3: Railway.app Deployment

This project requires three separate services on Railway: a **Database**, a **Backend**, and a **Frontend**.

### Step 3.1: Set up the MongoDB Database

1.  Log in to [Railway.app](https://railway.app/). In your project dashboard, click **New -> Database -> Add MongoDB**.
2.  Railway will provision the database and provide its connection string (`MONGO_URL` or `MONGO_URI`) in the "Variables" tab of the database service.
3.  **Note:** Unlike SQL, you don't need to manually create tables; Mongoose will create collections automatically when you start the backend.

### Step 3.2: Configure the Backend Service

1.  In your Railway project, click **New -> Empty Service**.
2.  Go to the new service's **Settings** tab.
3.  Set the **Root Directory** to `backend/`.
4.  The **Build Command** should be `npm install`.
5.  The **Start Command** should be `node server.js` or `npm start`.
6.  Go to the **Variables** tab and add the following:
    *   `MONGO_URI`: Set this to the connection string provided by your Railway MongoDB database.
    *   `PORT`: You can set this to `5000` or leave it blank, as Railway will inject its own.
    *   `JWT_SECRET`: Add a strong random string for JWT authentication.
7.  Trigger a deploy and check the logs. Once successful, note the public URL of this backend service.

### Step 3.3: Configure the Frontend Service

1.  In your Railway project, click **New -> Empty Service**.
2.  Go to the new service's **Settings** tab.
3.  Set the **Root Directory** to `frontend/`.
4.  The **Build Command** should be `npm install && npm run build`.
5.  The **Start Command** is usually not needed for a static build on Railway.
6.  Go to the **Variables** tab and add the following:
    *   `VITE_API_BASE_URL`: Set this to the public URL of your **deployed backend service** (from Step 3.2), followed by `/api`.
        *   *Example:* `https://your-backend-service-name.up.railway.app/api`
7.  Trigger a deploy. Once successful, this service will be your live website.
