function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#fff0f5',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: 'center',
            padding: '20px'
        }}>
            <img
                src="/images/feliz_dia_das_maes.jpg"
                alt="Mamãe"
                style={{
                    maxWidth: '300px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    marginBottom: '30px'
                }}
            />
            <h1 style={{
                fontSize: '1.8em',
                color: '#d6336c',
                maxWidth: '600px',
                lineHeight: '1.5'
            }}>
                Mãe, você não me ensinou só a dar os primeiros passos, você me ensinou a amar sem esperar nada em troca.
            </h1>
        </div>
    );
}

export default Home;

