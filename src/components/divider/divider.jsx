import './divider.css'


export default function MyDividder({color = 'var(--third-color)'}){
    return(
        // <div id={id} class="custom-shape-divider-bottom-1717505062">
        //     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        //         <path style={{fill: color}} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        //     </svg>
        // </div>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill={color} fill-rule="evenodd" viewBox="0 0 1000 320"><path d="M1000 0a482.84 482.84 0 00-341.421 141.42l-87.868 87.87c-39.053 39.052-102.369 39.052-141.422 0l-87.868-87.87A482.84 482.84 0 000 0v320h1000V0z"/></svg>
    )
}


