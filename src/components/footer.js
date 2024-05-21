export default function Footer(){
    return (
        <section
        id='footer'
            style={{
                backgroundColor: 'var(--lines-color)',
                padding: '20px'
            }}
        >
            <h1
                style={{
                    color: 'var(--text-color)',
                    textAlign: 'center'
                }}
            >
                Copyright © {new Date().getFullYear()} Salah almaghrby
            </h1>
        </section>
    )
}