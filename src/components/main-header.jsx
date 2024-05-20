export default function MainHeader({title}){
    return <h1 
    className="main-header"
    style={{
        fontWeight: 'bold',
        marginBottom: "100px",
        color: 'var(--text-color)',
        textAlign: 'center'
    }}
    >
        {title}
    </h1>
}