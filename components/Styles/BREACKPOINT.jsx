const BREACKPOINT = [576, 768, 992, 1200]
const mq = () => BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)
export default mq
