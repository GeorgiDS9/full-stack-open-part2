# Helsinki Open Full Stack Course (2024-2025)

## Part 2 b-e (Forms, getting data from Server and Styling the App)

### Intro

This repository contains the exercises 2.6-2.20 for **Part 2 b-e** of the Helsinki University Full Stack Open course (2024-2025). This course is designed to teach modern full-stack web development techniques and technologies. The course can be found at this [link](https://fullstackopen.com/en/about/).

This part is described [here](https://fullstackopen.com/en/part2).

### Created the React app with vite

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest name-of-your-app -- --template react
npm install
npm run dev
```

### Clone app and run it:

```bash
git clone https://github.com/GeorgiDS9/full-stack-open-part2
cd phonebook
npm install
npm run dev
```

### Production Build:

```bash
npm run build
```

This will create a production build in the `dist` directory. You can serve the production build using a static server:

```bash
npm install -g serve  # Install serve globally (one-time)
serve -s dist        # Serve the production build
```
