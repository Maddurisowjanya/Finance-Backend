***Finance Backend API***

A RESTful backend application to manage income and expense records. Built using Node.js, Express, and MongoDB, and deployed on Render.

---

**Live API**

https://finance-backend-p2um.onrender.com

---

**Features**

* Add income and expense records
* Fetch all financial records
* Categorize transactions
* REST API architecture
* Deployed and publicly accessible

---

**Tech Stack**

* Node.js
* Express.js
* MongoDB
* Mongoose
* Render (Deployment)

---

**API Endpoints**

Base URL

```
https://finance-backend-p2um.onrender.com
```

---

Test API

```
GET /
```

Response:

```
Finance Backend API is running 
```

---

Add Record

```
POST /records
```

**Example Request Body:**

```json
{
  "amount": 500,
  "type": "expense",
  "category": "food"
}
```

---

Get All Records

```
GET /records
```

---

How to Run Locally

1. Clone the repository:

```
git clone https://github.com/your-username/Finance-Backend.git
```

2. Navigate to project folder:

```
cd Finance-Backend
```

3. Install dependencies:

```
npm install
```

4. Create `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
```

5. Start the server:

```
node server.js
```

This project demonstrates backend development skills including API creation, database integration, and deployment.
