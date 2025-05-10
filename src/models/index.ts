import mongoose from 'mongoose'
import { connectDB } from '@/lib/mongodb'

// Import all models
import User from './User'

// Initialize connection
connectDB()

// Export all models
export {
  User
}

// Export connection helpers
export const isConnected = () => mongoose.connection.readyState === 1
