import './bgTextureDiv.css';


export default function BgTextureDiv({width, height}){
    return(
        <div style={{height:`${height}`, width:`${width}`}} 
            className='bgTextureDiv fixed rounded-3xl backdrop-blur-[20px] bg-gradient-to-br 
                        from-[#ffffff3a] to-[#ffffff00]'>

            <div className='absolute w-full h-3 bottom-10 bg-gradient-to-r from-[#ffffff42] to-[#ffffff0d]'></div>
        </div>
    )
}