import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost', 
    user: 'root',
    password: 'gabosky2412',
    database: 'usuarios_bc',
    port: 3306
})