# Pokemon Team Tracker
This is a pokemon team tracker lets you select a pokemon and store it on the web for safe keepings. Let this serve as your own memento of pokemon that you've caught.

# Development
This is a full-stack web application that has a [Vue.js](https://vuejs.org) frontend with a [Django](https://www.djangoproject.com) backend which uses [PostgreSQL](https://www.postgresql.org) as its database that is hosted on a [Digital Ocean droplet](https://www.digitalocean.com) using [Duck DNS](https://www.duckdns.org) for its domain.

## Managing Environment Variables
The backend and frontend have `.env.example` files to ensure that secret variables are maintained.

### Backend `.env` configuration
| **Name**                | **Description**                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| `DB_NAME`               | The name of the database that will be used |
| `DB_USER`               | The user who has access to the database |
| `DB_PASSWORD`           | The password to the `DB_USER` |
| `SECRET_KEY`            | The secret key of the Django app |

### Frontend `.env` configuration
| **Name**                | **Description**                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| `VITE_BACKEND_BASE_URL` | The URL of the Django app (in this case, the `/api` **MUST** be included) |

# Project Setup
This part of the README.md assumes a local setup.

## Prerequisites
1. [Node.js](https://nodejs.org/en)
2. [Python](https://www.python.org)
3. [PostgreSQL](https://www.postgresql.org) Database

## Backend Setup
1. Create a PostgeSQL database local in your machine
2. Ensure that you are in the `backend` folder
3. Create `.env` file and fill up with necessary details (see above for details)
4. `python3 -m venv env` in order to create the virtual environment for Django
5. `pip install -r requirements.txt` in order to install the libraries used for the Django app
6. `python manage.py migrate` to get the migrations of the database
7. `python manage.py runserver` to run the Django app

## Frontend Setup
1. Ensure that you are in the `frontend` folder
2. Create `.env` folder and fill up with necessary details (see above for details)
3. `npm install` to install dependecies
4. `npm run dev` to run server
5. `npm run build` to type-check, compile, and minify for production
