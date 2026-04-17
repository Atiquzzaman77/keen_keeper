# Keen Keeper

A modern web application to help you maintain and track relationships with your friends and contacts. Never miss staying in touch with the people who matter to you.

## 📋 Features

- **Friend Management**: Keep track of all your friends and contacts in one place
- **Contact Timeline**: View a timeline of your interactions and communications
- **Contact Goals**: Set goals for how frequently you want to stay in touch with each friend
- **Contact Status**: Track which friends are overdue for a catch-up
- **Statistics Dashboard**: View statistics and insights about your contact patterns
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Toast Notifications**: Get instant feedback with beautiful notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd keen_keeper
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Technology Stack

### Frontend Framework
- **Next.js** (v16.2.3) - React-based framework for production
- **React** (v19.2.4) - JavaScript library for building user interfaces
- **React DOM** (v19.2.4) - React package for working with the DOM

### Styling & UI Components
- **TailwindCSS** (v4) - Utility-first CSS framework
- **DaisyUI** (v5.5.19) - Component library built on TailwindCSS
- **PostCSS** (v4) - Tool for transforming CSS

### Data Visualization
- **Recharts** (v3.8.1) - Composable charting library built on React components

### Icons & Notifications
- **Lucide React** (v1.8.0) - Beautiful consistent icon library
- **React Hot Toast** (v2.6.0) - Headless toast notification library

### Development Tools
- **ESLint** (v9) - JavaScript linter
- **Babel Plugin React Compiler** (v1.0.0) - React compiler for optimization

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.jsx            # Home page with friends list
│   ├── friends/            # Friends management pages
│   │   └── [friendId]/     # Individual friend details
│   ├── stats/              # Statistics dashboard
│   ├── timeline/           # Timeline view
│   └── globals.css         # Global styles
├── components/
│   ├── Header.jsx          # Header component
│   ├── Navbar.jsx          # Navigation bar
│   ├── Friends.jsx         # Friends list component
│   └── Footer.jsx          # Footer component
├── context/
│   └── TimelineContext.jsx # React Context for timeline state
└── assets/                 # Static assets

public/
└── friendsData.json        # Sample friends data
```

## 🏃 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 📖 Usage

### Viewing Friends
The home page displays a list of all your friends with their contact status and days since last contact.

### Managing Contact Goals
Set how frequently you want to contact each friend (in days). The app will track when you're due for a catch-up.

### Tracking Timeline
View your contact history and interactions with friends over time in the Timeline section.

### Viewing Statistics
Check insights and patterns about your contact habits in the Stats section.

## 🎨 Design Features

- **Modern UI**: Clean and intuitive interface built with DaisyUI
- **Icon Integration**: Beautiful icons from Lucide React throughout the app
- **Data Visualization**: Charts and graphs powered by Recharts
- **User Feedback**: Instant notifications with React Hot Toast
- **Responsive Layout**: Mobile-friendly design that works on all devices

## 📝 Notes

- Friend data is stored in `public/friendsData.json`
- The app uses React Context for state management
- Uses Next.js App Router for routing

## 🔄 Future Enhancements

- Implement persistent database storage
- Add user authentication
- Create data export/import features
- Add reminder notifications
- Implement recurring contact scheduling

## 👨‍💻 Author

Created for managing and maintaining meaningful relationships.

## 📄 License

This project is private and confidential.
