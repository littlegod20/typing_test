# OG Typer Backend🚀⌨️

A comprehensive typing practice platform with gamification, real-time multiplayer races, personalized drills, and detailed performance analytics.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- 🎯 **Typing Tests** - Various test modes (drills, games, quotes, lessons)
- 📊 **Performance Analytics** - Track WPM, accuracy, and progress over time
- 🎮 **Gamification** - XP, levels, badges, and achievements
- 🏆 **Leaderboards** - Compete with others globally
- 🎪 **Multiplayer Races** - Real-time typing competitions
- 📚 **Structured Courses** - Progressive learning path with lessons
- 🎯 **Personalized Drills** - AI-powered drills based on your mistakes
- ⚙️ **Customizable Settings** - Themes, difficulty levels, and preferences

### User Features
- 🔐 **Authentication** - Local, JWT, and Google OAuth
- 👤 **User Profiles** - Comprehensive user statistics and history
- 🏅 **Badge System** - Unlock achievements and badges
- 📈 **Progress Tracking** - Visualize improvement over time
- 🔥 **Streak System** - Daily practice streaks
- 💡 **Error Analysis** - Detailed insights into typing mistakes

### Admin Features
- 📝 **Content Management** - Manage text samples, courses, and lessons
- 👥 **User Management** - View and manage users
- 📊 **System Analytics** - Platform-wide statistics
- 🛡️ **Access Control** - Role-based permissions (RBAC)

## 🛠 Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** TypeORM
- **Database:** PostgreSQL
- **Authentication:** Passport.js (Local, JWT, Google OAuth)
- **Real-time:** Socket.io
- **Validation:** class-validator, class-transformer
- **Logging:** Winston
- **Security:** Helmet, CORS, Rate Limiting

### Development Tools
- **Testing:** Jest, Supertest
- **Linting:** ESLint
- **Formatting:** Prettier
- **API Documentation:** Swagger/OpenAPI

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)
- **Git**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/og-typer.git
   cd og-typer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your configuration (see [Environment Variables](#environment-variables))

4. **Set up the database**
   ```bash
   # Create database
   createdb og_typer_db

   # Run migrations
   npm run migration:run

   # Seed database (optional)
   npm run seed:dev
   ```

5. **Build the project**
   ```bash
   npm run build
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
NODE_ENV=development
PORT=3000
API_VERSION=v1

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=og_typer_db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your-refresh-token-secret
JWT_REFRESH_EXPIRES_IN=30d

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/v1/auth/google/callback

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
CORS_ORIGIN=http://localhost:3000,http://localhost:3001
CORS_CREDENTIALS=true

# Logging
LOG_LEVEL=info
LOG_DIR=logs

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-email-password
EMAIL_FROM=noreply@ogtyper.com

# Redis Configuration (Optional - for caching)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Frontend URL (for CORS and redirects)
FRONTEND_URL=http://localhost:3001
```

## 💾 Database Setup

### Using TypeORM Migrations

```bash
# Generate a new migration
npm run migration:generate -- -n MigrationName

# Run all pending migrations
npm run migration:run

# Revert the last migration
npm run migration:revert

# Drop all tables and recreate
npm run schema:drop
npm run schema:sync
```

### Seeding Data

```bash
# Seed development data
npm run seed:dev

# Seed production data (minimal)
npm run seed:prod
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
Server will start at `http://localhost:3000`

### Production Mode
```bash
npm run build
npm start
```

### Using Docker
```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

## 📚 API Documentation

Once the server is running, access the interactive API documentation at:
- **Swagger UI:** `http://localhost:3000/api-docs`

### Main API Endpoints

#### Authentication
```
POST   /api/v1/auth/register       - Register new user
POST   /api/v1/auth/login          - Login user
POST   /api/v1/auth/refresh        - Refresh access token
POST   /api/v1/auth/logout         - Logout user
GET    /api/v1/auth/google         - Google OAuth login
```

#### Users
```
GET    /api/v1/users/me            - Get current user profile
PATCH  /api/v1/users/me            - Update profile
DELETE /api/v1/users/me            - Delete account
GET    /api/v1/users/:id           - Get user by ID
```

#### Typing Tests
```
POST   /api/v1/typing-tests/start  - Start a typing test
POST   /api/v1/typing-tests/submit - Submit test results
GET    /api/v1/typing-tests/history - Get user's test history
```

#### Text Samples
```
GET    /api/v1/text-samples        - Get text samples (with filters)
GET    /api/v1/text-samples/random - Get random sample
GET    /api/v1/text-samples/:id    - Get specific sample
POST   /api/v1/text-samples        - Create sample (admin)
```

#### Drills
```
GET    /api/v1/drills              - Get typing drills
GET    /api/v1/drills/speed        - Get speed drills
GET    /api/v1/drills/personalized - Get personalized drill
```

#### Courses & Lessons
```
GET    /api/v1/courses             - Get all courses
GET    /api/v1/courses/:id         - Get course details
GET    /api/v1/lessons/:id         - Get lesson details
POST   /api/v1/lessons/:id/complete - Complete a lesson
```

#### Leaderboard
```
GET    /api/v1/leaderboard         - Get global leaderboard
GET    /api/v1/leaderboard/weekly  - Get weekly leaderboard
GET    /api/v1/leaderboard/friends - Get friends leaderboard
```

#### Multiplayer
```
POST   /api/v1/multiplayer/rooms         - Create game room
POST   /api/v1/multiplayer/rooms/:id/join - Join room
GET    /api/v1/multiplayer/active-rooms  - Get active rooms
```

#### Statistics
```
GET    /api/v1/statistics/overview       - Get user statistics
GET    /api/v1/statistics/progress-chart - Get progress data
GET    /api/v1/statistics/weak-areas     - Get problem areas
```

#### Admin Routes
```
GET    /api/v1/admin/users         - Get all users
PATCH  /api/v1/admin/users/:id/ban - Ban user
GET    /api/v1/admin/dashboard     - Admin analytics
```

## 📁 Project Structure

```
├── 📁 logs/
├── 📁 src/
│   ├── 📁 config/
│   │   ├── 📄 app.config.ts
│   │   ├── 📄 cache.config.ts
│   │   ├── 📄 database.config.ts
│   │   ├── 📄 logger.ts
│   │   └── 📄 passport.config.ts
│   ├── 📁 controllers/
│   │   ├── 📄 auth.controller.ts
│   │   ├── 📄 badge.controller.ts
│   │   ├── 📄 course.controller.ts
│   │   ├── 📄 error_logs.controller.ts
│   │   ├── 📄 lesson.controller.ts
│   │   ├── 📄 text_sample.controller.ts
│   │   └── 📄 user_settings.controller.ts
│   ├── 📁 dto/
│   │   ├── 📄 badge.dto.ts
│   │   ├── 📄 course.dto.ts
│   │   ├── 📄 error_log.dto.ts
│   │   ├── 📄 lesson.dto.ts
│   │   ├── 📄 text_sample.dto.ts
│   │   ├── 📄 user.dto.ts
│   │   └── 📄 user_settings.dto.ts
│   ├── 📁 entities/
│   │   ├── 📄 badge.entity.ts
│   │   ├── 📄 common.entity.ts
│   │   ├── 📄 course.entity.ts
│   │   ├── 📄 error_log.entity.ts
│   │   ├── 📄 lesson.entity.ts
│   │   ├── 📄 text_sample.entity.ts
│   │   ├── 📄 typing_test.entity.ts
│   │   ├── 📄 user.entity.ts
│   │   ├── 📄 user_badge.entity.ts
│   │   ├── 📄 user_progress.entity.ts
│   │   └── 📄 user_settings.entity.ts
│   ├── 📁 middleware/
│   │   ├── 📄 logging.ts
│   │   └── 📄 validationDto.middleware.ts
│   ├── 📁 repositories/
│   ├── 📁 routes/
│   │   ├── 📄 auth.routes.ts
│   │   ├── 📄 badge.routes.ts
│   │   ├── 📄 course.routes.ts
│   │   ├── 📄 error_logs.routes.ts
│   │   ├── 📄 index.route.ts
│   │   ├── 📄 lesson.routes.ts
│   │   ├── 📄 text_sample.routes.ts
│   │   └── 📄 user_settings.routes.ts
│   ├── 📁 services/
│   │   ├── 📄 auth.service.ts
│   │   ├── 📄 badge.service.ts
│   │   ├── 📄 course.service.ts
│   │   ├── 📄 error_logs.service.ts
│   │   ├── 📄 lesson.service.ts
│   │   ├── 📄 text_sample.service.ts
│   │   └── 📄 user_settings.service.ts
│   ├── 📁 utils/
│   │   ├── 📄 constants.ts
│   │   ├── 📄 emailValidation.util.ts
│   │   ├── 📄 jwt.util.ts
│   │   └── 📄 seed.ts
│   ├── 📄 app.ts
│   ├── 📄 enums.ts
│   └── 📄 index.ts
├── 🔒 .env 🚫 (auto-hidden)
├── 📖 README.md
├── 📄 package-lock.json
├── 📄 package.json
└── 📄 tsconfig.json
```

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Run Unit Tests
```bash
npm run test:unit
```

### Run Integration Tests
```bash
npm run test:integration
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Generate Coverage Report
```bash
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Coding Standards
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style (ESLint + Prettier)

## 📝 Scripts

```json
{
  "dev": "Start development server with hot reload",
  "build": "Build for production",
  "start": "Start production server",
  "test": "Run all tests",
  "test:watch": "Run tests in watch mode",
  "test:coverage": "Generate test coverage report",
  "lint": "Lint code with ESLint",
  "lint:fix": "Fix linting errors automatically",
  "format": "Format code with Prettier",
  "migration:generate": "Generate new migration",
  "migration:run": "Run pending migrations",
  "migration:revert": "Revert last migration",
  "seed:dev": "Seed development data",
  "seed:prod": "Seed production data"
}
```

## 🐛 Known Issues

- WebSocket connections may require additional configuration for production deployments
- Google OAuth callback URL must be whitelisted in Google Cloud Console
- Large text samples may impact performance on slower connections

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Progressive Web App (PWA) support
- [ ] AI-powered typing coach
- [ ] Custom text upload
- [ ] Team competitions
- [ ] Advanced analytics dashboard
- [ ] Integration with popular learning platforms
- [ ] Voice-to-text challenges
- [ ] Code typing challenges for developers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Theophilous Asante Frimpong** - *Initial work* - [@littlegod20](https://github.com/littlegod20)

## 🙏 Acknowledgments

- Inspired by typing platforms like 10fastfingers, TypeRacer, and Keybr
- Built with ❤️ for the typing community
- Special thanks to all contributors

## 📞 Support

For support, email theophilusfrimpong17@gmail.com or contact [+233 24 359 6533](https://wa.me/233243596533?text=Hello%Theophilus%I%will%love%to%help%support%og%typer!).

## 🔗 Links

- **Website:** https://ogtyper.com
- **Documentation:** [https://docs.ogtyper.com](https://docs.google.com/document/d/1L-BMuZsAkZMoObdMzm_xz2R6xJpqxIz8A5LTvuHXra8/edit?usp=sharing)
- **API Docs:** https://api.ogtyper.com/docs
- **Discord:** https://discord.gg/ogtyper
- **Twitter:** [@ogtyper](https://twitter.com/ogtyper)

---

Made with ⌨️ and ☕ by Theophilous Asante Frimpong