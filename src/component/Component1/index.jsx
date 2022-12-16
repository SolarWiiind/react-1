import './index.css'

export let Comp1 = () => {
    return (
        <div className='div div1'>
            <div className='div1_1'>
                <h2>component 1</h2>
            </div>
            <div className='div1_2_all'>
                <div className='div1_2'>
                    <div className='left'>
                        <h4>1. JavaScript</h4>
                        <p className='p'>JavaScript - programming language</p>
                    </div>
                    <div className='right'>
                        <button className='button_c1'>Click me</button>
                    </div>
                </div>
                <div className='div1_2'>
                    <div className='left'>
                        <h4>2. React JS</h4>
                        <p className='p'>React JS - JavaScript library</p>
                    </div>
                    <div className='right'>
                        <button className='button_c1'>Click me</button>
                    </div>
                </div>
                <div className='div1_2'>
                    <div className='left'>
                        <h4>3. Vue JS</h4>
                        <p className='p'>Vue JS - JavaScript library</p>
                    </div>
                    <div className='right'>
                        <button className='button_c1'>Click me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}