# Local Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd CRUD_API
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure environment variables**
    - Create an env file,  ".env", and set it up like:
    ```
    DB_USER=your_username
    DB_HOST=localhost
    DB_NAME=your_database
    DB_PASSWORD=your_password
    DB_PORT=port_number
    ```
    - Update configuration as needed

## Running the API

```bash
npm start
```

The API will be available at `http://localhost:3000`

## Testing

```bash
npm test
```

## API Endpoints

- `GET /api/items` - Retrieve all items
- `POST /api/items` - Create a new item
- `GET /api/items/:id` - Get item by ID
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## Troubleshooting

If you encounter issues, ensure all dependencies are installed and environment variables are properly configured.
