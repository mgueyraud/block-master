
const mediaQuery = (breakpoint, content) => {
    return `@media (max-width: ${breakpoint}){
        ${content}
    }`;
}

export default mediaQuery;

