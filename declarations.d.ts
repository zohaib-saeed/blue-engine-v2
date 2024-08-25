declare module '../../tailwind.config.js' {
  const config: {
    theme: {
      colors: Record<string, any>; // Adjust the type according to your Tailwind config
    };
  };
  export default config;
}
