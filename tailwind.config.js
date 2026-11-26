/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === PRIMARY GREEN (HBN Brand) ===
        primary: {
          50:  '#F0F7F0',
          100: '#D6EDD8',
          200: '#ACD9B0',
          300: '#7EC387',
          400: '#54AE5E',
          500: '#2E8B34', // Brand chính
          600: '#257A2C', // Hover button
          700: '#1C6522', // Active state
          800: '#154E1A', // Footer background
          900: '#0E3611',
        },
        // === NEUTRAL (Gray scale) ===
        neutral: {
          white: '#FFFFFF',
          50:    '#F9FAFB',
          100:   '#F3F4F6',
          200:   '#E5E7EB',
          300:   '#D1D5DB',
          400:   '#9CA3AF',
          500:   '#6B7280',
          600:   '#4B5563',
          700:   '#374151',
          800:   '#1F2937',
          900:   '#111827',
        },
        // === SEMANTIC ===
        success: '#16A34A',
        warning: '#D97706',
        error:   '#DC2626',
        info:    '#2563EB',
      },
      fontFamily: {
        heading: ['"Be Vietnam Pro"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1.125rem' }],
        sm:   ['0.875rem', { lineHeight: '1.375rem' }],
        base: ['1rem',     { lineHeight: '1.625rem' }],
        lg:   ['1.125rem', { lineHeight: '1.75rem'  }],
        xl:   ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl':['1.5rem',   { lineHeight: '2rem'     }],
        '3xl':['1.875rem', { lineHeight: '2.375rem' }],
        '4xl':['2.25rem',  { lineHeight: '2.75rem'  }],
        '5xl':['3rem',     { lineHeight: '3.5rem'   }],
        '6xl':['3.75rem',  { lineHeight: '4.25rem'  }],
      },
      spacing: {
        'section-desktop': '80px',
        'section-mobile':  '48px',
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
      },
      boxShadow: {
        'card':    '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(46,139,52,0.15)',
        'btn':     '0 2px 8px rgba(46,139,52,0.30)',
      },
    },
  },
  plugins: [],
}
