export default function BottomNav({ setCurrentPage, currentPage }) {
  const menu = ['Inicio', 'Categorias', 'Carrinho', 'Videos', 'Mais'];

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', borderTop: '1px solid #ccc' }}>
      {menu.map((item) => (
        <button 
          key={item} 
          onClick={() => setCurrentPage(item)}
          style={{ 
            color: currentPage === item ? 'blue' : 'black',
            fontWeight: currentPage === item ? 'bold' : 'normal'
          }}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
