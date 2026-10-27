export default { content: ['./index.html','./src/**/*.{ts,tsx}'], theme: { extend: {
  keyframes: { pop: {'0%':{opacity:0,transform:'translateY(8px) scale(.98)'},'100%':{opacity:1,transform:'none'}} },
  animation: { pop: 'pop .35s ease-out both' } } }, plugins: [] }
