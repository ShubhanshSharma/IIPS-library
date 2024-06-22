import './circle.css';


export default function CircleElement({diameter, onlyOrange, shadow} ){
    if(!onlyOrange){
        return(
            <div style={{width:`${diameter}px`, height:`${diameter}px`, boxShadow:`0px 0px ${shadow}px 0px rgba(236,112,21,1)`}}
                 className='absolute rounded-full bg-[#ef7115]'>
                <div style={{width:`${diameter-12}px`, height:`${diameter-12}px`}} className='relative m-auto top-[6px] rounded-full bg-[#081327]'></div>
            </div>
        )
    }else{
        return(
            <div style={{width:`${diameter}px`, height:`${diameter}px`, boxShadow:`0px 0px ${shadow}px 0px rgba(236,112,21,1)`}} 
                  className='absolute rounded-full bg-[#EF7115]'>
            </div>
        )
    }
}