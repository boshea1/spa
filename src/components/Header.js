import React from 'react'

const Header = () => {
    const handleScroll = (props) => {
        const element = document.getElementById(props);
    // if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({behavior:'smooth'});
    // }
}
  return (
    <div>
    <div className='title'><h1>SPA</h1></div>
        <div>
        <ul style={{listStyle:'none'}}>
            <li><button className='btn' onClick={e => handleScroll('first')}>First</button></li>
            <li><button className='btn' onClick={e => handleScroll('second')}>Second</button></li>
            <li><button className='btn' onClick={e => handleScroll('third')}>Third</button></li>
            <li><button className='btn' onClick={e => handleScroll('forth')}>Fourth</button></li>
            <li><button className='btn' onClick={e => handleScroll('fifth')}>Fifth</button></li>
        </ul>
        </div>
    </div>
  )
}

export default Header