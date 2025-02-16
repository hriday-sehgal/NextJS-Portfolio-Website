module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
	  },
	  extend: {
		backgroundImage: {
		'timeline-line': 'linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)',
	  },spacing: {
		'128': '32rem',
	  },
	  zIndex: {
		'10': '10',
		'20': '20',
	  },
		borderColor: {
		  DEFAULT: "hsl(var(--border))",
		},
		colors: {
		  border: "hsl(var(--border))", // Add this explicit color definition
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  // Add all other color variables from your CSS here
		},
		animation: {
		  'infinite-scroll': 'infinite-scroll 25s linear infinite',
		},
		keyframes: {
		  'infinite-scroll': {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(-100%)' },
		  },
		},
	  },
	},
	plugins: [
	  require('tailwindcss-animate') // Add this plugin
	],
  }