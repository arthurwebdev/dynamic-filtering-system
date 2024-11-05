
const colors = {
   'hover': {
      DEFAULT: '#F6F6FF',
      12: '#F6F6FF1F',
   },
   
   'placeholder': {
      DEFAULT: '#9BA1A9',
      12: '#9BA1A91F',
   },

   'divider': {
      DEFAULT: '#F2F4F7',
   },

   'transparent': 'transparent',
};

module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
     screens: {
        sm: '640px',
        ms: '701px',
        md: '768px',
        tablet: '900px',
        lg: '1024px',
        xl: '1280px',
        xlg: '1440px',
        xxl: '1920px',
     },
     filter: { // defaults to {}
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)',
     },
     backdropFilter: { // defaults to {}
        'none': 'none',
        'stitch': 'blur(8px)',
        'blur': 'blur(20px)',
        'strong': 'blur(80px)',
     },
     extend: {
      colors,
        /*
        |-----------------------------------------------------------------------------
        | Padding                                https://tailwindcss.com/docs/padding
        |-----------------------------------------------------------------------------
        |
        | Here is where you define your padding utility sizes. These can be
        | percentage based, pixels, rems, or any other units. By default we
        | provide a sensible rem based numeric scale plus a couple other
        | common use-cases like "1px". You can, of course, modify these
        | values as needed.
        |
        | Class name: .p{side?}-{size}
        |
        */
        padding: {
           'px': '1px',
           '0': '0',
           '1': '0.25rem',
           '2': '0.5rem',
           '3': '0.75rem',
           '3.5': '0.875rem',
           '4': '1rem',
           '5': '1.25rem',
           '6': '1.5rem',
           '7': '1.75rem',
           '8': '2rem',
           '9': '2.25rem',
           '10': '2.5rem',
           '12': '2.75em',
           '13': '3.25em',
           '14': '3.5rem',
           '15': '3.75rem',
           '16': '4rem',
           '17': '4.25em',
           '19': '4.5rem',
           '24': '5.5rem',
           '25': '6rem',
           '26': '6.25rem',
           '27': '6.75rem',
           '28': '7rem',
        },
        /*
        |-----------------------------------------------------------------------------
        | Margin                                  https://tailwindcss.com/docs/margin
        |-----------------------------------------------------------------------------
        |
        | Here is where you define your margin utility sizes. These can be
        | percentage based, pixels, rems, or any other units. By default we
        | provide a sensible rem based numeric scale plus a couple other
        | common use-cases like "1px". You can, of course, modify these
        | values as needed.
        |
        | Class name: .m{side?}-{size}
        |
        */
        margin: {
           'auto': 'auto',
           'px': '1px',
           '0': '0',
           'px2': '2px',
           '1': '0.25rem',
           '2': '0.5rem',
           '3': '0.75rem',
           '4': '1rem',
           '5': '1.25rem',
           '6': '1.5rem',
           '7': '1.75rem',
           '8': '2rem',
           '9': '2.25rem',
           '10': '2.5rem',
           '11': '2.75rem',
           '14': '3.5rem',
           '16': '4rem',
           '19': '4.5rem',
           'table': '12rem',
        },
     },
     /*
     |-----------------------------------------------------------------------------
     | Text sizes                         https://tailwindcss.com/docs/text-sizing
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your text sizes. Name these in whatever way
     | makes the most sense to you. We use size names by default, but
     | you're welcome to use a numeric scale or even something else
     | entirely.
     |
     | By default Tailwind uses the "rem" unit type for most measurements.
     | This allows you to set a root font size which all other sizes are
     | then based on. That said, you are free to use whatever units you
     | prefer, be it rems, ems, pixels or other.
     |
     | Class name: .text-{size}
     |
     */
     textSizes: {
        'xxs': '0.625rem', // 10px
        'xs': '.75rem', // 12px
        'xsm': '0.8125rem', // 13px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '4.5xl': '2.8125rem', // 45px
        '5xl': '3rem', // 48px,
        '5.3xl': '3.3rem', // 53px,
     },
     /*
     |-----------------------------------------------------------------------------
     | Font weights                       https://tailwindcss.com/docs/font-weight
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your font weights. We've provided a list of
     | common font weight names with their respective numeric scale values
     | to get you started. It's unlikely that your project will require
     | all of these, so we recommend removing those you don't need.
     |
     | Class name: .font-{weight}
     |
     */
     fontWeights: {
        'hairline': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
     },
     /*
     |-----------------------------------------------------------------------------
     | Background sizes               https://tailwindcss.com/docs/background-size
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your background sizes. We provide some common
     | values that are useful in most projects, but feel free to add other sizes
     | that are specific to your project here as well.
     |
     | Class name: .bg-{size}
     |
     */
     backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
     },
     /*
     |-----------------------------------------------------------------------------
     | Border widths                     https://tailwindcss.com/docs/border-width
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your border widths. Take note that border
     | widths require a special "default" value set as well. This is the
     | width that will be used when you do not specify a border width.
     |
     | Class name: .border{-side?}{-width?}
     |
     */
     borderWidths: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
     },
     /*
     |-----------------------------------------------------------------------------
     | Border radius                    https://tailwindcss.com/docs/border-radius
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your border radius values. If a default radius
     | is provided, it will be made available as the non-suffixed .rounded
     | utility.
     |
     | If your scale includes a 0 value to reset already rounded corners, it's
     | a good idea to put it first so other values are able to override it.
     |
     | Class name: .rounded{-side?}{-size?}
     |
     */
     borderRadius: {
        'none': '0',
        'sm': '.125rem',
        'xsm': '0.1875rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'label': '0.75rem',
        'xlg': '1rem',
        'btn': '0.375rem',
        'full': '9999px',
     },
     /*
     |-----------------------------------------------------------------------------
     | Z-index                                https://tailwindcss.com/docs/z-index
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your z-index utility values. By default we
     | provide a sensible numeric scale. You can, of course, modify these
     | values as needed.
     |
     | Class name: .z-{index}
     |
     */
     zIndex: {
        'auto': 'auto',
        '0': 0,
        '2': 2,
        '10': 10,
        '15': 15,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
     },
     /*
     |-----------------------------------------------------------------------------
     | Opacity                                https://tailwindcss.com/docs/opacity
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your opacity utility values. By default we
     | provide a sensible numeric scale. You can, of course, modify these
     | values as needed.
     |
     | Class name: .opacity-{name}
     |
     */
     opacity: {
        '0': '0',
        '12': '.12',
        '32': '.32',
        '50': '.5',
        '75': '.75',
        '85': '0.85',
        '100': '1',
     },
     boxShadow: {
        DEFAULT: '0px 10px 20px 0px rgba(155, 161, 169, 0.20)',
        dark: '0px 5px 20px 0px rgba(255, 255, 255, 0.05)',
        inner: '0px 0px 6px 0px rgba(155, 161, 169, 0.20) inset',
        dropdown: '0px 4px 6px -2px rgba(4, 21, 39, 0.03)',
        'dropdown-dark': '0px 5px 20px 0px rgba(255, 255, 255, 0.15)',
        'none': 'none',
     },
     fill: theme => ({
        'red': theme('colors.red.500'),
        'white': theme('colors.snow'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
        'grey-yoda': theme('colors.grey-yoda'),
        'blue-chew': theme('colors.blue-chew'),
        'blue-luke': theme('colors.blue-luke'),
        'grey-cersei': theme('colors.grey-cersei'),
        'grey-chew': theme('colors.grey-chew'),
     }),

     /*
     |-----------------------------------------------------------------------------
     |                                   https://tailwindcss.com/docs/height
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your height utility sizes. These can be
     | percentage based, pixels, rems, or any other units. By default
     | we provide a sensible rem based numeric scale plus some other
     | common use-cases. You can, of course, modify these values as
     | needed.
     |
     | Class name: .h-{size}
     |
     */

     height: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        full: '100%',
        screen: '100vh',
        content: 'calc(100vh - 58px)',
        scontent: 'calc(100vh - 105px)',
        '0': '0px',
        'px': '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '6.5': '1.625rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.625rem',
        '15.5': '3.75rem', // wtf
        '16': '4rem',
        '18': '4.5rem',
        '19': '4.25rem',
        '20': '5rem',
        '22': '5.625rem',
        '24': '6rem',
        '27': '6.75rem',
        '26': '8rem',
        '28': '7rem',
        '29': '7.25rem',
        '32': '8rem',
        '34': '8.5rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '76': '19rem',
        '84': '21rem',
        '90': '22.5rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
        '132': '33rem',
        '148': '37rem',
        '4/5': '80%',
        fit: 'fit-content',
     }),

     /*
     |-----------------------------------------------------------------------------
     | Width                                    https://tailwindcss.com/docs/width
     |-----------------------------------------------------------------------------
     |
     | Here is where you define your width utility sizes. These can be
     | percentage based, pixels, rems, or any other units. By default
     | we provide a sensible rem based numeric scale, a percentage
     | based fraction scale, plus some other common use-cases. You
     | can, of course, modify these values as needed.
     |
     |
     | It's also worth mentioning that Tailwind automatically escapes
     | invalid CSS class name characters, which allows you to have
     | awesome classes like .w-2/3.
     |
     | Class name: .w-{size}
     |
     */

     width: theme => ({
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        'px': '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '15': '3.625rem',
        '15.5': '3.75rem', // wtf
        '16': '4rem',
        '18': '4.5rem',
        '19': '4.25rem',
        '20': '5rem',
        '21': '5.25rem',
        '22': '5.625rem',
        '24': '6rem',
        '27': '6.75em',
        '28': '7rem',
        '32': '8rem',
        '34': '8.5rem',
        '36': '9rem',
        '40': '10rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '48': '12rem',
        '49': '12.25rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '69': '17.5rem',
        '71': '18rem',
        '77': '19.25rem',
        '80': '20rem',
        '84': '21rem',
        '90': '23rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '116': '29rem',
        '128': '32rem',
        '160': '40rem',
        '180': '45rem',
        '196': '49rem',
        '216': '54rem',
        '228': '66rem',
        '290': '72.5rem',
        '320': '80rem',
        '1/10': '10%',
        '1/6': '16.66667%',
        '1/7': '14.28571%',
        '1/8': '12.5%',
        '5/6': '83.33333%',
        'full': '100%',
        'screen': '100vw',
        'fit': 'fit-content',
     }),

     /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    |
    */

     minWidth: {
        '0': '0',
        'full': '100%',
        '34': '8.5rem',
        '36': '9rem',
        '39': '9.75rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '49': '12.25rem',
        '51': '13.75rem',
        '56': '14rem',
        '64': '16rem',
        '75': '18.75rem',
        '84': '21rem',
        '98': '24.5rem',
        'fit': 'fit-content',
     },


     /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    |
    */

     minHeight: {
        '0': '0',
        '4/5': '80%',
        'full': '100%',
        'screen': '100vh',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '26': '6.5rem',
        '27': '7rem',
        '48': '12rem',
        '76': '19rem',
        '70': '18rem',
        '100': '25rem',
        '140': '35rem',
        '178': '45rem',
        'sscreen': '80vh',
        'content': 'calc(100vh - 58px)',
        'scontent': 'calc(100vh - 105px)',
        fit: 'fit-content',
     },

     /*
      |-----------------------------------------------------------------------------
      | Maximum width                        https://tailwindcss.com/docs/max-width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your maximum width utility sizes. These can
      | be percentage based, pixels, rems, or any other units. By default
      | we provide a sensible rem based scale and a "full width" size,
      | which is basically a reset utility. You can, of course,
      | modify these values as needed.
      |
      | Class name: .max-w-{size}
      |
     */
     maxWidth: {
        'xs': '20rem',
        'sm': '30rem',
        'md': '40rem',
        'lg': '50rem',
        'xl': '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        'full': '100%',
        'sfull': '80%',
     },

     /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    |
    */
     maxHeight: {
        '0': '0px',
        'full': '100%',
        'screen': '100vh',
        'sscreen': '80vh',
        'sfull': '80%',
        '14': '3.5rem',
        '48': '12rem',
        'mscreen': '60vh',
     },
  },

  /*
 |-----------------------------------------------------------------------------
 | Margin                                  https://tailwindcss.com/docs/margin
 |-----------------------------------------------------------------------------
 |
 | Here is where you define your margin utility sizes. These can be
 | percentage based, pixels, rems, or any other units. By default we
 | provide a sensible rem based numeric scale plus a couple other
 | common use-cases like "1px". You can, of course, modify these
 | values as needed.
 |
 | Class name: .m{side?}-{size}
 |
 */
  margin: (theme, { negative }) => ({
     auto: 'auto',
     ...theme('spacing'),
     ...negative(theme('spacing')),
     'px': '1px',
     '0': '0',
     'px2': '2px',
     '1': '0.25rem',
     '2': '0.5rem',
     '3': '0.75rem',
     '4': '1rem',
     '5': '1.25rem',
     '6': '1.5rem',
     '7': '1.75rem',
     '8': '2rem',
     '9': '2.25rem',
     '10': '2.5rem',
     '11': '2.75rem',
     '12': '3rem',
     '14': '3.5rem',
     '16': '4rem',
     '19': '4.5rem',
     'table': '12rem',
  }),

  /*
|-----------------------------------------------------------------------------
| Padding                                https://tailwindcss.com/docs/padding
|-----------------------------------------------------------------------------
|
| Here is where you define your padding utility sizes. These can be
| percentage based, pixels, rems, or any other units. By default we
| provide a sensible rem based numeric scale plus a couple other
| common use-cases like "1px". You can, of course, modify these
| values as needed.
|
| Class name: .p{side?}-{size}
|
*/
  padding: () => ({
     'px': '1px',
     '0': '0',
     '1': '0.25rem',
     '2': '0.5rem',
     '3': '0.75rem',
     '4': '1rem',
     '5': '1.25rem',
     '6': '1.5rem',
     '7': '1.75rem',
     '8': '2rem',
     '9': '2.25rem',
     '10': '2.5rem',
     '12': '2.75em',
     '13': '3.25em',
     '14': '3.5rem',
     '15': '3.75rem',
     '16': '4rem',
     '17': '4.25em',
     '19': '4.5rem',
     '24': '5.5rem',
     '26': '6.25rem',
     '27': '6.75rem',
     '28': '7rem',
  }),
};
